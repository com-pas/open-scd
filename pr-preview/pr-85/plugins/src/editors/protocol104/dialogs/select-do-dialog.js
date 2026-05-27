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
import {html, nothing} from "../../../../../_snowpack/pkg/lit.js";
import {customElement, state} from "../../../../../_snowpack/pkg/lit-element.js";
import {get} from "../../../../../_snowpack/pkg/lit-translate.js";
import "../../../../../_snowpack/pkg/@omicronenergy/oscd-ui/button/oscd-text-button.js";
import "../../../../../_snowpack/link/packages/openscd/dist/finder-list.js";
import {
  getDisplayString,
  getReader
} from "../../../wizards/foundation/finder.js";
import {getDataChildren} from "../wizards/selectDo.js";
import {BaseDialog} from "../../../components/base-dialog.js";
export let SelectDODialog = class extends BaseDialog {
  constructor() {
    super(...arguments);
    this.doc = null;
    this.headline = get("wizard.title.select", {tagName: "DO(I)"});
  }
  show(params) {
    const promise = super.show(params);
    this.doc = params.doc;
    return promise;
  }
  onConfirm() {
    const finderList = this.shadowRoot?.querySelector("finder-list") ?? null;
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
    return html`
      <finder-list
        path="${JSON.stringify(["SCL: "])}"
        .read=${getReader(this.doc, getDataChildren)}
        .getDisplayString=${getDisplayString}
        .getTitle=${(path) => path[path.length - 1]}
      ></finder-list>
    `;
  }
  renderActions() {
    return html`
      <oscd-text-button @click="${() => this.onConfirm()}">
        ${get("next")}
      </oscd-text-button>
    `;
  }
};
__decorate([
  state()
], SelectDODialog.prototype, "doc", 2);
SelectDODialog = __decorate([
  customElement("plugin-104-select-do-dialog")
], SelectDODialog);
