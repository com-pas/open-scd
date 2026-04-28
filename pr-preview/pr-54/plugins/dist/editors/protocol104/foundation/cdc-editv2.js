import { get } from '../../../../../_snowpack/pkg/lit-translate.js';
import { determineUninitializedStructure, initializeElements, } from '../../../../../_snowpack/link/packages/openscd/dist/foundation/dai.js';
import { findElementInOriginalLNStructure, getCdcValueFromDOElement, getTypeAttribute, isEnumDataAttribute, getEnumOrds, } from './foundation.js';
import { addPrefixAndNamespaceToDocument, createPrivateAddress, createPrivateElement, getPrivateElement, } from './private.js';
import { createDaiFilter, createTemplateStructure } from './cdc.js';
export const supportedCdcTypes = [
    'ACD',
    'ACT',
    'APC',
    'ASG',
    'BAC',
    'BCR',
    'BSC',
    'CMV',
    'DEL',
    'DPC',
    'DPS',
    'ENC',
    'ENG',
    'ENS',
    'INC',
    'ING',
    'INS',
    'ISC',
    'MV',
    'SEC',
    'SPC',
    'SPG',
    'SPS',
    'WYE',
];
export const cdcProcessingsV2 = {
    ACD: {
        monitor: {
            '30': {
                daPaths: [
                    { path: ['general'] },
                    { path: ['phsA'] },
                    { path: ['phsB'] },
                    { path: ['phsC'] },
                    { path: ['neut'] },
                ],
                create: createAddressEdits,
                inverted: true,
            },
            '40': {
                daPaths: [
                    { path: ['general'] },
                    { path: ['phsA'] },
                    { path: ['phsB'] },
                    { path: ['phsC'] },
                    { path: ['neut'] },
                ],
                create: createAddressEdits,
            },
        },
        control: {},
    },
    ACT: {
        monitor: {
            '30': {
                daPaths: [
                    { path: ['general'] },
                    { path: ['phsA'] },
                    { path: ['phsB'] },
                    { path: ['phsC'] },
                    { path: ['neut'] },
                ],
                create: createAddressEdits,
                inverted: true,
            },
            '39': {
                daPaths: [{ path: ['general'] }],
                create: createAddressEdits,
            },
        },
        control: {},
    },
    APC: {
        monitor: {
            '36': {
                daPaths: [{ path: ['mxVal', 'f'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '63': {
                daPaths: [{ path: ['Oper', 'ctlVal', 'f'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    ASG: {
        monitor: {
            '63': {
                daPaths: [{ path: ['setMag', 'f'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    BAC: {
        monitor: {
            '36': {
                daPaths: [{ path: ['mxVal', 'f'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '60': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    BCR: {
        monitor: {
            '37': {
                daPaths: [{ path: ['actVal'] }, { path: ['frVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    BSC: {
        monitor: {
            '32': {
                daPaths: [{ path: ['valWTr', 'posVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '60': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    CMV: {
        monitor: {
            '35': {
                daPaths: [{ path: ['mag', 'i'] }, { path: ['ang', 'i'] }],
                create: createAddressEdits,
                inverted: true,
            },
            '36': {
                daPaths: [{ path: ['mag', 'f'] }, { path: ['ang', 'f'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    DEL: {
        monitor: {
            '35': {
                daPaths: [
                    { path: ['phsAB', 'cVal', 'mag', 'f'] },
                    { path: ['phsBC', 'cVal', 'mag', 'f'] },
                    { path: ['phsCA', 'cVal', 'mag', 'f'] },
                ],
                create: createAddressEdits,
                inverted: false,
            },
            '36': {
                daPaths: [
                    { path: ['phsAB', 'cVal', 'mag', 'f'] },
                    { path: ['phsBC', 'cVal', 'mag', 'f'] },
                    { path: ['phsCA', 'cVal', 'mag', 'f'] },
                ],
                create: createAddressEdits,
                inverted: false,
            },
        },
        control: {},
    },
    DPC: {
        monitor: {
            '31': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '59': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    DPS: {
        monitor: {
            '31': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    ENC: {
        monitor: {
            '30': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
            '35': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: false,
            },
        },
        control: {
            '58': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressWithExpectValueAction,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
            '62': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressWithExpectValueAction,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    ENG: {
        monitor: {
            '58': {
                daPaths: [{ path: ['setVal'] }],
                create: createAddressWithExpectValueAction,
                inverted: true,
            },
            '62': {
                daPaths: [{ path: ['setVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
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
    INC: {
        monitor: {
            '35': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '62': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    ING: {
        monitor: {
            '62': {
                daPaths: [{ path: ['setVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    INS: {
        monitor: {
            '30': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
            '33': {
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
    ISC: {
        monitor: {
            '32': {
                daPaths: [{ path: ['valWTr', 'posVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '62': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    MV: {
        monitor: {
            '35': {
                daPaths: [{ path: ['mag', 'i'] }],
                create: createAddressEdits,
                inverted: true,
            },
            '36': {
                daPaths: [{ path: ['mag', 'f'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    SEC: {
        monitor: {
            '37': {
                daPaths: [{ path: ['cnt'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    SPC: {
        monitor: {
            '30': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {
            '58': {
                daPaths: [{ path: ['Oper', 'ctlVal'] }],
                create: createAddressEdits,
                checkDaPaths: [{ path: ['Oper', 'Check'] }],
                checkCreate: createCheckAddressEdits,
            },
        },
    },
    SPG: {
        monitor: {
            '58': {
                daPaths: [{ path: ['setVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    SPS: {
        monitor: {
            '30': {
                daPaths: [{ path: ['stVal'] }],
                create: createAddressEdits,
                inverted: true,
            },
        },
        control: {},
    },
    WYE: {
        monitor: {
            '35': {
                daPaths: [
                    { path: ['phsA', 'cVal', 'mag', 'f'] },
                    { path: ['phsB', 'cVal', 'mag', 'f'] },
                    { path: ['phsC', 'cVal', 'mag', 'f'] },
                ],
                create: createAddressEdits,
                inverted: false,
            },
            '36': {
                daPaths: [
                    { path: ['phsA', 'cVal', 'mag', 'f'] },
                    { path: ['phsB', 'cVal', 'mag', 'f'] },
                    { path: ['phsC', 'cVal', 'mag', 'f'] },
                ],
                create: createAddressEdits,
                inverted: false,
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
function findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths) {
    const daiElements = [];
    const actions = [];
    const errors = [];
    // Start searching and creating for each DA Path passed.
    daPaths.forEach(daPath => {
        const filter = createDaiFilter(doElement, daPath);
        const foundDaiElements = lnClonedElement.querySelectorAll(filter);
        if (foundDaiElements.length > 0) {
            // Existing DAI Element found, so use that Element.
            foundDaiElements.forEach(clonedDaiElement => {
                const daiElement = findElementInOriginalLNStructure(lnElement, clonedDaiElement);
                if (daiElement) {
                    daiElements.push(daiElement);
                }
                else {
                    daiElements.push(clonedDaiElement);
                }
            });
        }
        else {
            // DAI Element doesn't exist yet, so create the structure using the DA Path.
            const templateStructure = createTemplateStructure(doElement, daPath);
            if (templateStructure) {
                const [parentClonedElement, uninitializedTemplateStructure] = determineUninitializedStructure(lnClonedElement, templateStructure);
                // Next create all missing elements (DOI/SDI/DOI)
                const newElement = initializeElements(uninitializedTemplateStructure);
                // Always add it to the cloned LN Structure.
                parentClonedElement.append(newElement);
                // Search if the parent already exists in the current LN Element Structure.
                // If so we will add a new Create Action for it.
                // If it is already there because one of the parents of the parent is used in a Create Action.
                const parentElement = findElementInOriginalLNStructure(lnElement, parentClonedElement);
                if (parentElement) {
                    actions.push({ parent: parentElement, node: newElement, reference: null });
                }
                // Add new DAI Elements to the list to return.
                if (newElement.tagName === 'DAI') {
                    daiElements.push(newElement);
                }
                else {
                    const daiElement = newElement.querySelector('DAI');
                    daiElements.push(daiElement);
                }
            }
            else {
                // The DA Path can't be mapped on the Template structure of the current document.
                const cdc = getCdcValueFromDOElement(doElement) ?? '';
                const doType = getTypeAttribute(doElement) ?? '';
                errors.push(get('protocol104.wizard.error.addAddressError', {
                    structure: daPath.path.join(' > '),
                    cdc,
                    doType,
                }));
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
export function createAddressElements(document, ti, inverted, expectedValue) {
    const addressElements = [];
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
export function createActionsForPrivate(daiElement, addressElements) {
    const edits = [];
    let privateElement = getPrivateElement(daiElement);
    if (privateElement) {
        addressElements.forEach(addressElement => {
            edits.push({
                parent: privateElement, node: addressElement, reference: null,
            });
        });
    }
    else {
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
export function createAddressEdits(lnElement, lnClonedElement, doElement, ti, daPaths, inverted) {
    const edits = [];
    // TODO: Show errors?
    const [initializeEdits, daiElements, errors] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
    if (initializeEdits.length > 0) {
        edits.push(...initializeEdits);
    }
    if (daiElements.length > 0) {
        addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
        daiElements.forEach(daiElement => {
            const addressElements = createAddressElements(daiElement.ownerDocument, ti, inverted);
            edits.push(...createActionsForPrivate(daiElement, addressElements));
        });
    }
    // TODO: Do we want to open edit dialog?
    // startEditWizards(wizard, lnElement, lnClonedElement, doElement, edits);
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
function createAddressWithExpectValueAction(lnElement, lnClonedElement, doElement, ti, daPaths, inverted) {
    const actions = [];
    const [initializeActions, daiElements, errors] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
    if (initializeActions.length > 0) {
        actions.push(...initializeActions);
    }
    if (daiElements.length > 0) {
        addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
        const addressElements = [];
        daiElements.forEach(daiElement => {
            if (isEnumDataAttribute(daiElement)) {
                getEnumOrds(daiElement).forEach(ord => addressElements.push(...createAddressElements(daiElement.ownerDocument, ti, inverted, ord)));
            }
            else {
                addressElements.push(...createAddressElements(daiElement.ownerDocument, ti, inverted));
            }
            actions.push(...createActionsForPrivate(daiElement, addressElements));
        });
    }
    // TODO: Do we want to open edit dialog?
    // startEditWizards(wizard, lnElement, lnClonedElement, doElement, actions);
    return actions;
}
/**
 * Create a new SCL Private element and add 104 Address element(s) below this.
 * Set the attribute value of 'ti' to the passed ti value.
 *
 * @param lnElement       - The LN(0) Element.
 * @param lnClonedElement - The Cloned LN Element, used to create new structure and determine which Create actions are needed.
 * @param doElement       - The DO Element.
 * @param wizard          - Wizard Element to dispatch events on.
 * @param ti              - The value to be set on the attribute 'ti'.
 * @param daPaths         - The Array of DAI Elements to search or create and add the Private Element on.
 * @returns An array of Create Action that the wizard action will return.
 */
function createCheckAddressEdits(lnElement, lnClonedElement, doElement, ti, daPaths) {
    const actions = [];
    const [initializeActions, daiElements] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
    if (initializeActions.length > 0) {
        actions.push(...initializeActions);
    }
    if (daiElements.length > 0) {
        addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
        daiElements.forEach(daiElement => {
            const address1Element = createPrivateAddress(daiElement.ownerDocument, ti);
            address1Element.setAttribute('check', 'interlocking');
            const address2Element = createPrivateAddress(daiElement.ownerDocument, ti);
            address2Element.setAttribute('check', 'synchrocheck');
            actions.push(...createActionsForPrivate(daiElement, [
                address1Element,
                address2Element,
            ]));
        });
    }
    // TODO: Do we want to open edit dialog?
    // startEditWizards(wizard, lnElement, lnClonedElement, doElement, actions);
    return actions;
}
//# sourceMappingURL=cdc-editv2.js.map