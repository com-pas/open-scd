import { f as __classPrivateFieldGet, g as __classPrivateFieldSet } from '../common/tslib.es6-887c7ab2.js';

function isAttributesV2(attributes) {
    if (typeof attributes !== 'object' || attributes === null) {
        return false;
    }
    return Object.entries(attributes).every(([key, value]) => typeof key === 'string' && (value === null || typeof value === 'string'));
}
function isAttributesNS(attributesNS) {
    if (typeof attributesNS !== 'object' || attributesNS === null) {
        return false;
    }
    return Object.entries(attributesNS).every(([namespace, attributes]) => typeof namespace === 'string' &&
        isAttributesV2(attributes));
}
function isComplexEditV2(edit) {
    return edit instanceof Array && edit.every(e => isEditV2(e));
}
function isSetTextContent(edit) {
    return (edit.element instanceof Element &&
        typeof edit.textContent === 'string');
}
function isRemove(edit) {
    return (edit.parent === undefined &&
        edit.node instanceof Node);
}
function isSetAttributes(edit) {
    const setAttrs = edit;
    return (setAttrs.element instanceof Element &&
        (isAttributesV2(setAttrs.attributes) ||
            isAttributesNS(setAttrs.attributesNS)));
}
function isInsert(edit) {
    return ((edit.parent instanceof Element ||
        edit.parent instanceof Document ||
        edit.parent instanceof DocumentFragment) &&
        edit.node instanceof Node &&
        (edit.reference instanceof Node ||
            edit.reference === null));
}
function isEditV2(edit) {
    if (isComplexEditV2(edit)) {
        return true;
    }
    return (isSetAttributes(edit) ||
        isSetTextContent(edit) ||
        isInsert(edit) ||
        isRemove(edit));
}

function handleSetTextContent({ element, textContent, }) {
    const { childNodes } = element;
    const restoreChildNodes = Array.from(childNodes).map(node => ({
        parent: element,
        node,
        reference: null,
    }));
    element.textContent = textContent;
    const undoTextContent = { element, textContent: '' };
    return [undoTextContent, ...restoreChildNodes];
}
function handleSetAttributes({ element, attributes = {}, attributesNS = {}, }) {
    const oldAttributes = { ...attributes };
    const oldAttributesNS = { ...attributesNS };
    // save element's non-prefixed attributes for undo
    if (attributes)
        Object.keys(attributes)
            .reverse()
            .forEach(name => {
            oldAttributes[name] = element.getAttribute(name);
        });
    // change element's non-prefixed attributes
    if (attributes)
        for (const entry of Object.entries(attributes)) {
            try {
                const [name, value] = entry;
                if (value === null)
                    element.removeAttribute(name);
                else
                    element.setAttribute(name, value);
            }
            catch (_e) {
                // undo nothing if update didn't work on this attribute
                delete oldAttributes[entry[0]];
            }
        }
    // save element's namespaced attributes for undo
    if (attributesNS)
        Object.entries(attributesNS).forEach(([ns, attrs]) => {
            Object.keys(attrs)
                .reverse()
                .forEach(name => {
                oldAttributesNS[ns] = {
                    ...oldAttributesNS[ns],
                    [name]: element.getAttributeNS(ns, name.split(':').pop()),
                };
            });
        });
    // change element's namespaced attributes
    if (attributesNS)
        for (const nsEntry of Object.entries(attributesNS)) {
            const [ns, attrs] = nsEntry;
            for (const entry of Object.entries(attrs)) {
                try {
                    const [name, value] = entry;
                    if (value === null) {
                        element.removeAttributeNS(ns, name.split(':').pop());
                    }
                    else {
                        element.setAttributeNS(ns, name, value);
                    }
                }
                catch (_e) {
                    delete oldAttributesNS[ns][entry[0]];
                }
            }
        }
    return {
        element,
        attributes: oldAttributes,
        attributesNS: oldAttributesNS,
    };
}
function handleRemove({ node }) {
    const { parentNode: parent, nextSibling: reference } = node;
    if (!parent)
        return [];
    parent.removeChild(node);
    return {
        node,
        parent,
        reference,
    };
}
function handleInsert({ parent, node, reference, }) {
    try {
        const { parentNode, nextSibling } = node;
        parent.insertBefore(node, reference);
        if (parentNode)
            // undo: move child node back to original place
            return {
                node,
                parent: parentNode,
                reference: nextSibling,
            };
        // undo: remove orphaned node
        return { node };
    }
    catch (_e) {
        // undo nothing if insert doesn't work on these nodes
        return [];
    }
}
/** Applies an EditV2, returning the corresponding "undo" EditV2. */
function handleEdit(edit) {
    if (isInsert(edit))
        return handleInsert(edit);
    if (isRemove(edit))
        return handleRemove(edit);
    if (isSetAttributes(edit))
        return handleSetAttributes(edit);
    if (isSetTextContent(edit))
        return handleSetTextContent(edit);
    if (isComplexEditV2(edit))
        return edit
            .map(edit => handleEdit(edit))
            .reverse()
            .flat(Infinity);
    return [];
}

var _XMLEditor_subscribers;
const EMPTY_COMMIT = { undo: [], redo: [], time: Date.now() };
class XMLEditor {
    constructor() {
        this.past = [];
        this.future = [];
        _XMLEditor_subscribers.set(this, []);
    }
    commit(change, { title, squash } = {}) {
        const commit = squash && this.past.length
            ? this.past[this.past.length - 1]
            : { undo: [], redo: [], time: Date.now() };
        const undo = handleEdit(change);
        // typed as per https://github.com/microsoft/TypeScript/issues/49280#issuecomment-1144181818 recommendation:
        commit.undo.unshift(...[undo].flat(Infinity));
        commit.redo.push(...[change].flat(Infinity));
        if (title)
            commit.title = title;
        if (squash && this.past.length)
            this.past.pop();
        this.past.push(commit);
        this.future = [];
        __classPrivateFieldGet(this, _XMLEditor_subscribers, "f").forEach(subscriber => subscriber(commit));
        return commit;
    }
    undo() {
        const commit = this.past.pop();
        if (!commit)
            return;
        handleEdit(commit.undo);
        this.future.unshift(commit);
        const previousCommit = this.past[this.past.length - 1] || EMPTY_COMMIT;
        __classPrivateFieldGet(this, _XMLEditor_subscribers, "f").forEach(subscriber => subscriber(previousCommit));
        return commit;
    }
    redo() {
        const commit = this.future.shift();
        if (!commit)
            return;
        handleEdit(commit.redo);
        this.past.push(commit);
        __classPrivateFieldGet(this, _XMLEditor_subscribers, "f").forEach(subscriber => subscriber(commit));
        return commit;
    }
    subscribe(txCallback) {
        __classPrivateFieldGet(this, _XMLEditor_subscribers, "f").push(txCallback);
        return () => {
            __classPrivateFieldSet(this, _XMLEditor_subscribers, __classPrivateFieldGet(this, _XMLEditor_subscribers, "f").filter(subscriber => subscriber !== txCallback), "f");
            return txCallback;
        };
    }
}
_XMLEditor_subscribers = new WeakMap();

export { XMLEditor };
