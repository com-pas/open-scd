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
import {customElement, html, property} from "../../../../_snowpack/pkg/lit-element.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/fab/oscd-fab.js";
import "../../../../_snowpack/link/packages/openscd/dist/action-icon.js";
import {newWizardEvent} from "../../../../_snowpack/link/packages/openscd/dist/foundation.js";
import {newActionEvent} from "../../../../_snowpack/link/packages/core/dist/foundation/deprecated/editor.js";
import {editConnectedApWizard} from "./wizards/connectedap.js";
import {Base104Container} from "./base-container.js";
export let ConnectedAP104Editor = class extends Base104Container {
  openEditWizard() {
    this.dispatchEvent(newWizardEvent(() => editConnectedApWizard(this.element, this.element.querySelectorAll('Address > P[type^="RG"]').length > 0)));
  }
  remove() {
    if (this.element)
      this.dispatchEvent(newActionEvent({
        old: {
          parent: this.element.parentElement,
          element: this.element,
          reference: this.element.nextSibling
        }
      }));
  }
  render() {
    return html`
      <action-icon
        label="${this.element.getAttribute("apName") ?? "UNDEFINED"}"
        icon="settings_input_hdmi"
        ><oscd-fab
          slot="action"
          mini
          @click="${() => this.openEditWizard()}"
        >
          <oscd-icon slot="icon">edit</oscd-icon>
        </oscd-fab>
        <oscd-fab
          slot="action"
          mini
          @click="${() => this.remove()}}"
        >
          <oscd-icon slot="icon">delete</oscd-icon>
        </oscd-fab
      ></action-icon>
    `;
  }
};
__decorate([
  property({attribute: false})
], ConnectedAP104Editor.prototype, "element", 2);
ConnectedAP104Editor = __decorate([
  customElement("connectedap-104-editor")
], ConnectedAP104Editor);
