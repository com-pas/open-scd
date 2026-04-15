var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {LitElement, html, customElement, query} from "../../../../../_snowpack/pkg/lit-element.js";
import "./select-do-dialog.js";
import "./create-addresses-dialog.js";
export let DialogManager = class extends LitElement {
  showSelectDODialog(params) {
    return this.selectDODialog.show(params);
  }
  showCreateAddressesDialog(params) {
    return this.createAddressesDialog.show(params);
  }
  render() {
    return html`
      <plugin-104-select-do-dialog></plugin-104-select-do-dialog>
      <plugin-104-create-addresses-dialog></plugin-104-create-addresses-dialog>
    `;
  }
};
__decorate([
  query("plugin-104-select-do-dialog")
], DialogManager.prototype, "selectDODialog", 2);
__decorate([
  query("plugin-104-create-addresses-dialog")
], DialogManager.prototype, "createAddressesDialog", 2);
DialogManager = __decorate([
  customElement("plugin-104-dialog-manager")
], DialogManager);
