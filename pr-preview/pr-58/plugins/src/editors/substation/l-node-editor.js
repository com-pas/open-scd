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
import {
  html,
  LitElement,
  property,
  customElement,
  state
} from "../../../../_snowpack/pkg/lit-element.js";
import "../../../../_snowpack/link/packages/openscd/dist/action-icon.js";
import {
  identity,
  newLnInstGenerator,
  newWizardEvent
} from "../../../../_snowpack/link/packages/openscd/dist/foundation.js";
import {
  cloneElement
} from "../../../../_snowpack/link/packages/xml/dist/index.js";
import {newActionEvent} from "../../../../_snowpack/link/packages/core/dist/index.js";
import "../../../../_snowpack/link/packages/openscd/dist/icons/icons.components.js";
import {wizards} from "../../wizards/wizard-library.js";
export function getLNodeIcon(lNode) {
  const lnClassGroup = lNode.getAttribute("lnClass")?.charAt(0) ?? "";
  return lnClassIcons[lnClassGroup] ?? html`<custom-icon-lnode-system></custom-icon-lnode-system>`;
}
const lnClassIcons = {
  L: html`<custom-icon-lnode-system></custom-icon-lnode-system>`,
  A: html`<custom-icon-lnode-automation></custom-icon-lnode-automation>`,
  C: html`<custom-icon-lnode-control></custom-icon-lnode-control>`,
  F: html`<custom-icon-lnode-functional></custom-icon-lnode-functional>`,
  G: html`<custom-icon-lnode-general></custom-icon-lnode-general>`,
  I: html`<custom-icon-lnode-interfacing></custom-icon-lnode-interfacing>`,
  K: html`<custom-icon-lnode-nonelectrical></custom-icon-lnode-nonelectrical>`,
  M: html`<custom-icon-lnode-measurement></custom-icon-lnode-measurement>`,
  P: html`<custom-icon-lnode-protection></custom-icon-lnode-protection>`,
  Q: html`<custom-icon-lnode-quality></custom-icon-lnode-quality>`,
  R: html`<custom-icon-lnode-protectionrelated></custom-icon-lnode-protectionrelated>`,
  S: html`<custom-icon-lnode-supervision></custom-icon-lnode-supervision>`,
  T: html`<custom-icon-lnode-transformer></custom-icon-lnode-transformer>`,
  X: html`<custom-icon-lnode-switchgear></custom-icon-lnode-switchgear>`,
  Y: html`<custom-icon-lnode-powertransformer></custom-icon-lnode-powertransformer>`,
  Z: html`<custom-icon-lnode-furtherpowersystemequipment></custom-icon-lnode-furtherpowersystemequipment>`
};
export let LNodeEditor = class extends LitElement {
  get header() {
    const prefix = this.element.getAttribute("prefix") ?? "";
    const lnClass = this.element.getAttribute("lnClass");
    const lnInst = this.element.getAttribute("lnInst");
    const header = this.missingIedReference ? `${prefix} ${lnClass} ${lnInst}` : identity(this.element);
    return typeof header === "string" ? header : "";
  }
  get missingIedReference() {
    return this.element.getAttribute("iedName") === "None";
  }
  get isIEDReference() {
    return this.element.getAttribute("iedName") !== "None";
  }
  cloneLNodeElement() {
    const lnClass = this.element.getAttribute("lnClass");
    if (!lnClass)
      return;
    const uniqueLnInst = newLnInstGenerator(this.element.parentElement)(lnClass);
    if (!uniqueLnInst)
      return;
    const newElement = cloneElement(this.element, {lnInst: uniqueLnInst});
    this.dispatchEvent(newActionEvent({
      new: {parent: this.element.parentElement, element: newElement}
    }));
  }
  openEditWizard() {
    const wizard = wizards["LNode"].edit(this.element);
    if (wizard)
      this.dispatchEvent(newWizardEvent(wizard));
  }
  remove() {
    if (this.element)
      this.dispatchEvent(newActionEvent({
        old: {
          parent: this.element.parentElement,
          element: this.element
        }
      }));
  }
  render() {
    return html`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${getLNodeIcon(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference ? html`` : html`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
};
__decorate([
  property({attribute: false})
], LNodeEditor.prototype, "doc", 2);
__decorate([
  property({attribute: false})
], LNodeEditor.prototype, "element", 2);
__decorate([
  state()
], LNodeEditor.prototype, "header", 1);
__decorate([
  state()
], LNodeEditor.prototype, "missingIedReference", 1);
__decorate([
  state()
], LNodeEditor.prototype, "isIEDReference", 1);
LNodeEditor = __decorate([
  customElement("l-node-editor")
], LNodeEditor);
