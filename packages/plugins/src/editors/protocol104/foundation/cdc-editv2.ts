import { get } from 'lit-translate';
import { InsertV2 } from '@compas-oscd/core';
import {
  determineUninitializedStructure,
  initializeElements,
} from '@compas-oscd/open-scd/dist/foundation/dai.js';

import {
  findElementInOriginalLNStructure,
  getCdcValueFromDOElement,
  getTypeAttribute,
} from './foundation.js';
import {
  addPrefixAndNamespaceToDocument,
  createPrivateAddress,
  createPrivateElement,
  getPrivateElement,
} from './private.js';
import { DaSelector, createDaiFilter, createTemplateStructure } from './cdc.js';

// TODO: Add all cdc types
type CdcProcessingV2 = Record<
  'ENS',
  {
    monitor: Record<string, TiInformation>;
    control: Record<string, TiInformation>;
  }
>

export type InsertFunction = (
  lnElement: Element,
  lnClonedElement: Element,
  doElement: Element,
  ti: string,
  daPaths: DaSelector[],
  inverted: boolean
) => InsertV2[];

export interface TiInformation {
  daPaths: DaSelector[];
  create: InsertFunction;
  checkDaPaths?: DaSelector[];
  // checkCreate?: CreateCheckFunction;
  inverted?: boolean;
}

export const cdcProcessingsV2: CdcProcessingV2 = {
  ENS: {
    monitor: {
      '30': {
        daPaths: [{ path: ['stVal'] }],
        create: createAddressEdits,
        inverted: true,
      },
      '35': {
        daPaths: [{ path: ['stVal'] }],
        create: createAddressEdits,
        inverted: true,
      },
    },
    control: {},
  },
};

/**
 * Search for existing DAI Elements below the DO Element matching the DA Paths passed or create the DAI Element
 * if the DA Path doesn't exist yet.
 *
 * @param lnElement       - The LN(0) Element.
 * @param lnClonedElement - The Cloned LN Element, used to create new structure and determine which Create actions are needed.
 * @param doElement       - The DO Element.
 * @param daPaths         - The DA Structures for which the DAI Structure needs to be created below the DO Element.
 */
function findOrCreateDaiElements(
  lnElement: Element,
  lnClonedElement: Element,
  doElement: Element,
  daPaths: DaSelector[]
): [InsertV2[], Element[], string[]] {
  const daiElements: Element[] = [];
  const actions: InsertV2[] = [];
  const errors: string[] = [];

  // Start searching and creating for each DA Path passed.
  daPaths.forEach(daPath => {
    const filter = createDaiFilter(doElement, daPath);
    const foundDaiElements = lnClonedElement.querySelectorAll(filter);
    if (foundDaiElements.length > 0) {
      // Existing DAI Element found, so use that Element.
      foundDaiElements.forEach(clonedDaiElement => {
        const daiElement = findElementInOriginalLNStructure(
          lnElement,
          clonedDaiElement
        );
        if (daiElement) {
          daiElements.push(daiElement);
        } else {
          daiElements.push(clonedDaiElement);
        }
      });
    } else {
      // DAI Element doesn't exist yet, so create the structure using the DA Path.
      const templateStructure = createTemplateStructure(doElement, daPath);
      if (templateStructure) {
        const [parentClonedElement, uninitializedTemplateStructure] =
          determineUninitializedStructure(lnClonedElement, templateStructure);
        // Next create all missing elements (DOI/SDI/DOI)
        const newElement = initializeElements(uninitializedTemplateStructure);

        // Always add it to the cloned LN Structure.
        parentClonedElement.append(newElement);

        // Search if the parent already exists in the current LN Element Structure.
        // If so we will add a new Create Action for it.
        // If it is already there because one of the parents of the parent is used in a Create Action.
        const parentElement = findElementInOriginalLNStructure(
          lnElement,
          parentClonedElement
        );
        if (parentElement) {
          actions.push({ parent: parentElement, node: newElement, reference: null });
        }

        // Add new DAI Elements to the list to return.
        if (newElement.tagName === 'DAI') {
          daiElements.push(newElement);
        } else {
          const daiElement = newElement.querySelector('DAI')!;
          daiElements.push(daiElement);
        }
      } else {
        // The DA Path can't be mapped on the Template structure of the current document.
        const cdc = getCdcValueFromDOElement(doElement) ?? '';
        const doType = getTypeAttribute(doElement) ?? '';
        errors.push(
          get('protocol104.wizard.error.addAddressError', {
              structure: daPath.path.join(' > '),
              cdc,
              doType,
            })
        );
      }
    }
  });
  return [actions, daiElements, errors];
}

/**
 * Creates one or two Address Elements, depending on the value of inverted.
 *
 * @param document      - The Owner Document used to create the new Address Element with.
 * @param ti            - The value to be set on the attribute 'ti'.
 * @param inverted      - Indicates if extra Address Elements should be created with 'inverted=true'.
 * @param expectedValue - The optional value of the attribute 'expectedValue' if needed.
 * @returns Array of one or two Address Elements created.
 */
export function createAddressElements(
  document: Document,
  ti: string,
  inverted: boolean,
  expectedValue?: string
): Element[] {
  const addressElements: Element[] = [];
  const addressElement = createPrivateAddress(document, ti);
  if (expectedValue) {
    addressElement.setAttribute('expectedValue', expectedValue);
  }
  addressElements.push(addressElement);

  if (inverted) {
    const addressElement = createPrivateAddress(document, ti);
    addressElement.setAttribute('inverted', 'true');
    if (expectedValue) {
      addressElement.setAttribute('expectedValue', expectedValue);
    }
    addressElements.push(addressElement);
  }
  return addressElements;
}

/**
 * Create or update the 104 Private Element, if the Private already exists, the new Address Elements are
 * added, otherwise a new Private Element is created to which the Address Elements are added.
 * The correct Create Action is returned.
 *
 * @param daiElement      - The DAI Element which will hold the new or existing Private Element
 * @param addressElements - The Address Elements to be created with Create Actions.
 */
export function createActionsForPrivate(
  daiElement: Element,
  addressElements: Element[]
): InsertV2[] {
  const edits: InsertV2[] = [];
  let privateElement = getPrivateElement(daiElement);
  if (privateElement) {
    addressElements.forEach(addressElement => {
      edits.push({
        parent: privateElement!, node: addressElement, reference: null,
      });
    });
  } else {
    privateElement = createPrivateElement(daiElement.ownerDocument);
    privateElement.append(...addressElements);

    edits.push({ parent: daiElement, node: privateElement, reference: null });
  }
  return edits;
}

/**
 * Creates a new SCL Private element and add 104 Address element(s) below this.
 * Set the attribute value of 'ti' to the passed ti value.
 *
 * @param lnElement       - The LN(0) Element.
 * @param lnClonedElement - The Cloned LN Element, used to create new structure and determine which Create actions are needed.
 * @param doElement       - The DO Element.
 * @param wizard          - Wizard Element to dispatch events on.
 * @param ti              - The value to be set on the attribute 'ti'.
 * @param daPaths         - The Array of DAI Elements to search or create and add the Private Element on.
 * @param inverted        - Indicates if extra Address Elements should be created with 'inverted=true'.
 * @returns An array of Create Action that the wizard action will return.
 */
export function createAddressEdits(
  lnElement: Element,
  lnClonedElement: Element,
  doElement: Element,
  ti: string,
  daPaths: DaSelector[],
  inverted: boolean
): InsertV2[] {
  const edits: InsertV2[] = [];

  const [initializeEdits, daiElements, errors] = findOrCreateDaiElements(
    lnElement,
    lnClonedElement,
    doElement,
    daPaths
  );
  if (initializeEdits.length > 0) {
    edits.push(...initializeEdits);
  }

  if (daiElements.length > 0) {
    addPrefixAndNamespaceToDocument(lnElement.ownerDocument);

    daiElements.forEach(daiElement => {
      const addressElements = createAddressElements(
        daiElement.ownerDocument,
        ti,
        inverted
      );
      edits.push(...createActionsForPrivate(daiElement, addressElements));
    });
  }

  // TODO: Do we want to open edit dialog?
  // startEditWizards(wizard, lnElement, lnClonedElement, doElement, edits);
  return edits;
}
