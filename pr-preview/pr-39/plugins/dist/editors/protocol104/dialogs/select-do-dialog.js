import { __decorate } from "../../../../../_snowpack/pkg/tslib.js";
import { html, nothing } from '../../../../../_snowpack/pkg/lit.js';
import { customElement, state } from '../../../../../_snowpack/pkg/lit-element.js';
import { get } from '../../../../../_snowpack/pkg/lit-translate.js';
import '../../../../../_snowpack/pkg/@omicronenergy/oscd-ui/button/oscd-text-button.js';
import '../../../../../_snowpack/link/packages/openscd/dist/finder-list.js';
import { getDisplayString, getReader, } from '../../../wizards/foundation/finder.js';
import { getDataChildren } from '../wizards/selectDo.js';
import { BaseDialog } from '../../../components/base-dialog.js';
let SelectDODialog = class SelectDODialog extends BaseDialog {
    constructor() {
        super(...arguments);
        this.doc = null;
        this.headline = get('wizard.title.select', { tagName: 'DO(I)' });
    }
    show(params) {
        const promise = super.show(params);
        this.doc = params.doc;
        return promise;
    }
    onConfirm() {
        const finderList = this.shadowRoot?.querySelector('finder-list') ?? null;
        const path = finderList?.path ?? [];
        this.confirm(path);
    }
    onClose() {
        this.doc = null;
    }
    renderContent() {
        if (!this.doc) {
            return nothing;
        }
        return html `
      <finder-list
        path="${JSON.stringify(['SCL: '])}"
        .read=${getReader(this.doc, getDataChildren)}
        .getDisplayString=${getDisplayString}
        .getTitle=${(path) => path[path.length - 1]}
      ></finder-list>
    `;
    }
    renderActions() {
        return html `
      <oscd-text-button @click="${() => this.onConfirm()}">
        ${get('next')}
      </oscd-text-button>
    `;
    }
};
__decorate([
    state()
], SelectDODialog.prototype, "doc", void 0);
SelectDODialog = __decorate([
    customElement('plugin-104-select-do-dialog')
], SelectDODialog);
export { SelectDODialog };
//# sourceMappingURL=select-do-dialog.js.map