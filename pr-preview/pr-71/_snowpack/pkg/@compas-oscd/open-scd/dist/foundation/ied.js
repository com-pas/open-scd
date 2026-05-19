import { e as identity, f as find } from '../../../../common/foundation-4f9c199d.js';
import '../../../../common/lit-element-5461ae81.js';
import '../../../../common/lit-html-4eb216a4.js';
import '../../../../common/render-4cc4e0f1.js';
import '../../../../common/unsafe-html-23121493.js';
import '../../../../@material/mwc-select.js';
import '../../../../common/tslib.es6-98fe39c2.js';
import '../../../../common/mwc-line-ripple-directive-1af05b5b.js';
import '../../../../common/base-element-2b8c8577.js';
import '../../../../common/foundation-7cea7f4a.js';
import '../../../../common/class-map-6eff9d1d.js';
import '../../../../common/decorators-4dc00f26.js';
import '../../../../common/directive-9b648152.js';
import '../../../../common/mwc-menu-096dddc7.js';
import '../../../../@material/mwc-list.js';
import '../../../../common/mwc-list-base-42ccf834.js';
import '../../../../@material/mwc-list/mwc-list-item.js';
import '../../../../common/mwc-list-item.css-d1bcf766.js';
import '../../../../common/ripple-handlers-2afcbc81.js';
import '../../../../common/ponyfill-44e20603.js';
import '../../../../common/foundation-48b716b8.js';
import '../../../../common/style-map-51635f8f.js';
import '../../../../common/observer-6d1a3681.js';
import '../../../../common/if-defined-13a17272.js';
import '../../../../@material/mwc-icon.js';
import '../../../../common/form-element-9a3959ff.js';
import '../../../../common/foundation-426f2cd4.js';
import '../wizard-textfield.js';
import '../../../../common/directive-a7a30c9a.js';
import '../../../../@material/mwc-icon-button.js';
import '../../../../common/aria-property-2938771c.js';
import '../../../../common/mwc-icon-button.css-49c6f539.js';
import '../../../../@material/mwc-switch.js';
import '../../../../@material/mwc-textfield.js';
import '../../../../common/mwc-textfield.css-f2c91549.js';
import '../../../../common/live-10079619.js';
import '../wizard-select.js';
import '../wizard-checkbox.js';
import '../../../../@material/mwc-formfield.js';
import '../../../../@material/mwc-checkbox.js';

/**
 * All available FCDA references that are used to link ExtRefs.
 */
const fcdaReferences = [
    'ldInst',
    'lnClass',
    'lnInst',
    'prefix',
    'doName',
    'daName',
];
/**
 * Get all the FCDA attributes containing values from a specific element.
 *
 * @param elementContainingFcdaReferences - The element to use
 * @returns FCDA references
 */
function getFcdaReferences(elementContainingFcdaReferences) {
    return fcdaReferences
        .map(fcdaRef => elementContainingFcdaReferences.getAttribute(fcdaRef)
        ? `[${fcdaRef}="${elementContainingFcdaReferences.getAttribute(fcdaRef)}"]`
        : '')
        .join('');
}
/**
 * All available Control references that are used to link ExtRefs.
 */
const controlReferences = ['srcLDInst', 'srcLNClass', 'srcLNInst', 'srcCBName'];
/**
 * Get all the Control attributes containing values from a specific element.
 *
 * @param extRef - The element to use
 * @returns Control references
 */
function getControlReferences(extRef) {
    return controlReferences
        .map(controlRef => extRef.getAttribute(controlRef)
        ? `[${controlRef}="${extRef.getAttribute(controlRef)}"]`
        : '')
        .join('');
}
/**
 * Creating Delete actions in case Inputs elements are empty.
 *
 * @param extRefDeleteActions - All Delete actions for ExtRefs.
 * @returns Possible delete actions for empty Inputs elements.
 */
function emptyInputsDeleteActions(extRefDeleteActions) {
    if (!extRefDeleteActions.length)
        return [];
    const inputDeleteActions = [];
    const inputsMap = {};
    for (const extRefDeleteAction of extRefDeleteActions) {
        const extRef = extRefDeleteAction.old.element;
        const inputsElement = extRefDeleteAction.old.parent;
        const id = identity(inputsElement);
        if (!inputsMap[id])
            inputsMap[id] = inputsElement.cloneNode(true);
        // Search the ExtRef in the Cloned Inputs Element
        const linkedExtRef = inputsMap[id].querySelector(`ExtRef${extRef.getAttribute('iedName')
            ? `[iedName="${extRef.getAttribute('iedName')}"]`
            : ''}${getFcdaReferences(extRef)}${extRef.getAttribute('serviceType')
            ? `[serviceType="${extRef.getAttribute('serviceType')}"]`
            : ''}${getControlReferences(extRef)}`);
        // And if found remove it as child from the Cloned Inputs Element
        if (linkedExtRef)
            inputsMap[id].removeChild(linkedExtRef);
    }
    // Create delete action for each empty inputs
    Object.entries(inputsMap).forEach(([key, value]) => {
        if (value.children.length == 0) {
            const doc = extRefDeleteActions[0].old.parent.ownerDocument;
            const inputs = find(doc, 'Inputs', key);
            if (inputs && inputs.parentElement) {
                inputDeleteActions.push({
                    old: { parent: inputs.parentElement, element: inputs },
                });
            }
        }
    });
    return inputDeleteActions;
}

export { emptyInputsDeleteActions, getFcdaReferences };
