import { k as crossProduct } from '../../../../common/foundation-191564f1.js';
import '../../../../common/lit-element-5461ae81.js';
import '../../../../common/lit-html-4eb216a4.js';
import '../../../../common/render-4cc4e0f1.js';
import '../../../../common/unsafe-html-23121493.js';
import '../../../../@material/mwc-select.js';
import '../../../../common/tslib.es6-98fe39c2.js';
import '../../../../common/mwc-line-ripple-directive-730e65d9.js';
import '../../../../common/base-element-3e9360c3.js';
import '../../../../common/foundation-7cea7f4a.js';
import '../../../../common/class-map-6eff9d1d.js';
import '../../../../common/decorators-4dc00f26.js';
import '../../../../common/directive-9b648152.js';
import '../../../../common/mwc-menu-67d7082d.js';
import '../../../../common/mwc-list-c22bf91e.js';
import '../../../../@material/mwc-list/mwc-list-item.js';
import '../../../../common/mwc-list-item.css-1c43f8ad.js';
import '../../../../common/ripple-handlers-82f0f67e.js';
import '../../../../common/ponyfill-44e20603.js';
import '../../../../common/foundation-48b716b8.js';
import '../../../../common/style-map-51635f8f.js';
import '../../../../common/observer-6d1a3681.js';
import '../../../../common/if-defined-13a17272.js';
import '../../../../@material/mwc-icon.js';
import '../../../../common/form-element-0ea6e1a1.js';
import '../../../../common/foundation-426f2cd4.js';
import '../wizard-textfield.js';
import '../../../../common/directive-a7a30c9a.js';
import '../../../../@material/mwc-icon-button.js';
import '../../../../common/aria-property-2938771c.js';
import '../../../../common/mwc-icon-button.css-49c6f539.js';
import '../../../../@material/mwc-switch.js';
import '../../../../@material/mwc-textfield.js';
import '../../../../common/mwc-textfield.css-ba74a99b.js';
import '../../../../common/live-10079619.js';
import '../wizard-select.js';
import '../wizard-checkbox.js';
import '../../../../@material/mwc-formfield.js';
import '../../../../@material/mwc-checkbox.js';

function getDataModelChildren(parent) {
    if (['LDevice', 'Server'].includes(parent.tagName))
        return Array.from(parent.children).filter(child => child.tagName === 'LDevice' ||
            child.tagName === 'LN0' ||
            child.tagName === 'LN');
    const id = parent.tagName === 'LN' || parent.tagName === 'LN0'
        ? parent.getAttribute('lnType')
        : parent.getAttribute('type');
    return Array.from(parent.ownerDocument.querySelectorAll(`LNodeType[id="${id}"] > DO, DOType[id="${id}"] > SDO, DOType[id="${id}"] > DA, DAType[id="${id}"] > BDA`));
}
function existFcdaReference(fcda, ied) {
    const [ldInst, prefix, lnClass, lnInst, doName, daName, fc] = [
        'ldInst',
        'prefix',
        'lnClass',
        'lnInst',
        'doName',
        'daName',
        'fc',
    ].map(attr => fcda.getAttribute(attr));
    const sinkLdInst = ied.querySelector(`LDevice[inst="${ldInst}"]`);
    if (!sinkLdInst)
        return false;
    const prefixSelctors = prefix
        ? [`[prefix="${prefix}"]`]
        : ['[prefix=""]', ':not([prefix])'];
    const lnInstSelectors = lnInst
        ? [`[inst="${lnInst}"]`]
        : ['[inst=""]', ':not([inst])'];
    const anyLnSelector = crossProduct(['LN0', 'LN'], prefixSelctors, [`[lnClass="${lnClass}"]`], lnInstSelectors)
        .map(strings => strings.join(''))
        .join(',');
    const sinkAnyLn = ied.querySelector(anyLnSelector);
    if (!sinkAnyLn)
        return false;
    const doNames = doName?.split('.');
    if (!doNames)
        return false;
    let parent = sinkAnyLn;
    for (const doNameAttr of doNames) {
        parent = getDataModelChildren(parent).find(child => child.getAttribute('name') === doNameAttr);
        if (!parent)
            return false;
    }
    const daNames = daName?.split('.');
    const someFcInSink = getDataModelChildren(parent).some(da => da.getAttribute('fc') === fc);
    if (!daNames && someFcInSink)
        return true;
    if (!daNames)
        return false;
    let sinkFc = '';
    for (const daNameAttr of daNames) {
        parent = getDataModelChildren(parent).find(child => child.getAttribute('name') === daNameAttr);
        if (parent?.getAttribute('fc'))
            sinkFc = parent.getAttribute('fc');
        if (!parent)
            return false;
    }
    if (sinkFc !== fc)
        return false;
    return true;
}

export { existFcdaReference };
