import { __decorate } from "../../../_snowpack/pkg/tslib.js";
import { newEditEvent, newEditEventV2, } from '../../../_snowpack/link/packages/core/dist/index.js';
import { property, LitElement, customElement, html, } from '../../../_snowpack/pkg/lit-element.js';
import { get } from '../../../_snowpack/pkg/lit-translate.js';
import { isSimple, } from '../../../_snowpack/link/packages/core/dist/index.js';
import { newLogEvent } from '../../../_snowpack/link/packages/core/dist/index.js';
import { newValidateEvent } from '../../../_snowpack/link/packages/core/dist/index.js';
import { isComplex, isInsert, isRemove, isUpdate, } from '../../../_snowpack/link/packages/core/dist/index.js';
import { convertEditActiontoV1 } from './editor/edit-action-to-v1-converter.js';
import { convertEditV1toV2 } from './editor/edit-v1-to-v2-converter.js';
let OscdEditor = class OscdEditor extends LitElement {
    constructor() {
        super(...arguments);
        /** The `XMLDocument` to be edited */
        this.doc = null;
        /** The name of the current [[`doc`]] */
        this.docName = '';
        /** The UUID of the current [[`doc`]] */
        this.docId = '';
        this.unsubscribers = [];
    }
    onAction(event) {
        const action = event.detail.action;
        if (!isSimple(action)) {
            // For complex editor actions, apply each sub-action individually with squash
            // so they appear as a single history entry but DOM references are resolved
            // correctly after each prior edit is already applied.
            action.actions.forEach((simpleAction, index) => {
                const edit = convertEditActiontoV1(simpleAction);
                const editV2 = convertEditV1toV2(edit);
                this.host.dispatchEvent(newEditEventV2(editV2, {
                    squash: index > 0,
                    title: index === 0 ? action.title : undefined,
                }));
            });
        }
        else {
            const edit = convertEditActiontoV1(action);
            const editV2 = convertEditV1toV2(edit);
            this.host.dispatchEvent(newEditEventV2(editV2));
        }
    }
    handleEditEvent(event) {
        /**
         * This is a compatibility fix for plugins based on open energy tools edit events
         * because their edit event look slightly different
         * see https://github.com/OpenEnergyTools/open-scd-core/blob/main/foundation/edit-event-v1.ts for details
         */
        if (isOpenEnergyEditEvent(event)) {
            event = convertOpenEnergyEditEventToEditEvent(event);
        }
        const edit = event.detail.edit;
        const editV2 = convertEditV1toV2(edit);
        this.host.dispatchEvent(newEditEventV2(editV2));
    }
    /**
     *
     * @deprecated [Move to handleOpenDoc instead]
     */
    async onOpenDoc(event) {
        this.doc = event.detail.doc;
        this.docName = event.detail.docName;
        this.docId = event.detail.docId ?? '';
        await this.updateComplete;
        this.dispatchEvent(newValidateEvent());
        this.dispatchEvent(newLogEvent({
            kind: 'info',
            title: get('openSCD.loaded', { name: this.docName }),
        }));
    }
    handleOpenDoc({ detail: { docName, doc } }) {
        this.doc = doc;
        this.docName = docName;
    }
    connectedCallback() {
        super.connectedCallback();
        this.unsubscribers.push(this.editor.subscribe(async () => {
            await this.updateComplete;
            this.dispatchEvent(newValidateEvent());
        }));
        // Deprecated editor action API, use 'oscd-edit' instead.
        this.host.addEventListener('editor-action', this.onAction.bind(this));
        // Deprecated edit event API, use 'oscd-edit-v2' instead.
        this.host.addEventListener('oscd-edit', event => this.handleEditEvent(event));
        this.host.addEventListener('oscd-edit-v2', event => this.handleEditEventV2(event));
        this.host.addEventListener('open-doc', this.onOpenDoc);
        this.host.addEventListener('oscd-open', this.handleOpenDoc);
    }
    disconnectedCallback() {
        this.unsubscribers.forEach(u => u());
    }
    render() {
        return html `<slot></slot>`;
    }
    handleEditEventV2(event) {
        const { edit, title, squash } = event.detail;
        this.editor.commit(edit, { title, squash });
    }
};
__decorate([
    property({ attribute: false })
], OscdEditor.prototype, "doc", void 0);
__decorate([
    property({ type: String })
], OscdEditor.prototype, "docName", void 0);
__decorate([
    property({ type: String })
], OscdEditor.prototype, "docId", void 0);
__decorate([
    property({ type: Object })
], OscdEditor.prototype, "editor", void 0);
__decorate([
    property({
        type: Object,
    })
], OscdEditor.prototype, "host", void 0);
OscdEditor = __decorate([
    customElement('oscd-editor')
], OscdEditor);
export { OscdEditor };
function isOpenEnergyEditEvent(event) {
    const eventDetail = event.detail;
    return isComplex(eventDetail) || isInsert(eventDetail) || isUpdate(eventDetail) || isRemove(eventDetail);
}
function convertOpenEnergyEditEventToEditEvent(event) {
    const eventDetail = event.detail;
    return newEditEvent(eventDetail);
}
//# sourceMappingURL=Editor.js.map