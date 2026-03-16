import { __decorate } from "../../../../../../../_snowpack/pkg/tslib.js";
import { LitElement, html, customElement, query } from '../../../../../../../_snowpack/pkg/lit-element.js';
import './select-do-dialog.js';
import './create-addresses-dialog.js';
let DialogManager = class DialogManager extends LitElement {
    showSelectDODialog(params) {
        return this.selectDODialog.show(params);
    }
    showCreateAddressesDialog(params) {
        return this.createAddressesDialog.show(params);
    }
    render() {
        return html `
      <plugin-104-select-do-dialog></plugin-104-select-do-dialog>
      <plugin-104-create-addresses-dialog></plugin-104-create-addresses-dialog>
    `;
    }
};
__decorate([
    query('plugin-104-select-do-dialog')
], DialogManager.prototype, "selectDODialog", void 0);
__decorate([
    query('plugin-104-create-addresses-dialog')
], DialogManager.prototype, "createAddressesDialog", void 0);
DialogManager = __decorate([
    customElement('plugin-104-dialog-manager')
], DialogManager);
export { DialogManager };
//# sourceMappingURL=dialog-manager.js.map