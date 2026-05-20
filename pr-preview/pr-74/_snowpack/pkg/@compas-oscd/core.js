/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isComplex(edit) {
    return edit instanceof Array;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isInsert(edit) {
    return edit.parent !== undefined;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isNamespaced(value) {
    return value !== null && typeof value !== 'string';
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isUpdate(edit) {
    return edit.element !== undefined;
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function isRemove(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
/**
 * @deprecated Use the new edit event V2 API instead.
 */
function newEditEvent(edit, initiator = 'user') {
    return new CustomEvent('oscd-edit', {
        composed: true,
        bubbles: true,
        detail: {
            edit: edit,
            initiator: initiator,
        },
    });
}

function isComplexV2(edit) {
    return edit instanceof Array;
}
function isSetTextContentV2(edit) {
    return (edit.element !== undefined &&
        edit.textContent !== undefined);
}
function isRemoveV2(edit) {
    return (edit.parent === undefined && edit.node !== undefined);
}
function isSetAttributesV2(edit) {
    return (edit.element !== undefined &&
        edit.attributes !== undefined &&
        edit.attributesNS !== undefined);
}
function isInsertV2(edit) {
    return (edit.parent !== undefined &&
        edit.node !== undefined &&
        edit.reference !== undefined);
}

function newEditEventV2(edit, options) {
    return new CustomEvent('oscd-edit-v2', {
        composed: true,
        bubbles: true,
        detail: { ...options, edit },
    });
}

class PluginStateApi {
    constructor(tag) {
        this.pluginTag = tag;
    }
    setState(state) {
        this.setPluginState(state);
    }
    getState() {
        return this.getPluginState();
    }
    updateState(partialState) {
        const pluginState = this.getPluginState();
        const patchedState = {
            ...pluginState,
            ...partialState
        };
        this.setPluginState(patchedState);
    }
    setPluginState(state) {
        PluginStateApi.state[this.pluginTag] = state;
    }
    getPluginState() {
        var _a;
        return (_a = PluginStateApi.state[this.pluginTag]) !== null && _a !== void 0 ? _a : null;
    }
}
PluginStateApi.state = {};

class OscdApi {
    constructor(pluginTag) {
        this.pluginState = new PluginStateApi(pluginTag);
    }
}

function newOpenDocEvent(doc, docName, eventInitDict) {
    return new CustomEvent('open-doc', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { doc, docName, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

/**
 * @deprecated
 */
function newPendingStateEvent(promise, eventInitDict) {
    return new CustomEvent('pending-state', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { promise, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

function newLogEvent(detail, eventInitDict) {
    return new CustomEvent('log', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}
function newIssueEvent(detail, eventInitDict) {
    return new CustomEvent('issue', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { ...detail, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

function newValidateEvent(eventInitDict) {
    return new CustomEvent('validate', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
    });
}

function isCreate(action) {
    var _a, _b;
    return (action.old === undefined &&
        ((_a = action.new) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.new) === null || _b === void 0 ? void 0 : _b.element) !== undefined);
}
function isDelete(action) {
    var _a, _b;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        action.new === undefined);
}
function isMove(action) {
    var _a, _b, _c, _d;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) !== undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        ((_c = action.new) === null || _c === void 0 ? void 0 : _c.parent) !== undefined &&
        ((_d = action.new) === null || _d === void 0 ? void 0 : _d.element) == undefined);
}
function isReplace(action) {
    var _a, _b, _c, _d;
    return (((_a = action.old) === null || _a === void 0 ? void 0 : _a.parent) === undefined &&
        ((_b = action.old) === null || _b === void 0 ? void 0 : _b.element) !== undefined &&
        ((_c = action.new) === null || _c === void 0 ? void 0 : _c.parent) === undefined &&
        ((_d = action.new) === null || _d === void 0 ? void 0 : _d.element) !== undefined);
}
function isUpdate$1(action) {
    return (action.old === undefined &&
        action.new === undefined &&
        action.element !== undefined &&
        action.newAttributes !== undefined &&
        action.oldAttributes !== undefined);
}
function isSimple(action) {
    return !(action.actions instanceof Array);
}
//** return `Update` action for `element` adding `oldAttributes` */
function createUpdateAction(element, newAttributes) {
    const oldAttributes = {};
    Array.from(element.attributes).forEach(attr => {
        oldAttributes[attr.name] = attr.value;
    });
    return { element, oldAttributes, newAttributes };
}
function newActionEvent(action, initiator = 'user', eventInitDict) {
    return new CustomEvent('editor-action', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { action, initiator, ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail },
    });
}

function newLoadNsdocEvent(nsdoc, filename) {
    return new CustomEvent('load-nsdoc', {
        bubbles: true,
        composed: true,
        detail: { nsdoc, filename },
    });
}
function newSettingsUIEvent(show, eventInitDict) {
    return new CustomEvent('oscd-settings', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: {
            show,
            ...eventInitDict === null || eventInitDict === void 0 ? void 0 : eventInitDict.detail,
        },
    });
}

export { OscdApi, createUpdateAction, isComplex, isComplexV2, isCreate, isDelete, isUpdate$1 as isEditorUpdate, isInsert, isInsertV2, isMove, isNamespaced, isRemove, isRemoveV2, isReplace, isSetAttributesV2, isSetTextContentV2, isSimple, isUpdate, newActionEvent, newEditEvent, newEditEventV2, newIssueEvent, newLoadNsdocEvent, newLogEvent, newOpenDocEvent, newPendingStateEvent, newSettingsUIEvent, newValidateEvent };
