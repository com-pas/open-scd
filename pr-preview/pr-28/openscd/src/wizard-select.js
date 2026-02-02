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
  customElement,
  html,
  state,
  property,
  query,
  LitElement
} from "../../_snowpack/pkg/lit-element.js";
import {ifDefined} from "../../_snowpack/pkg/lit-html/directives/if-defined.js";
import "../../_snowpack/pkg/@material/mwc-switch.js";
import "../../_snowpack/pkg/@material/mwc-select.js";
export let WizardSelect = class extends LitElement {
  constructor() {
    super();
    this.value = "";
    this.label = "";
    this.dialogInitialFocus = false;
    this.disabled = false;
    this.nullable = false;
    this.isNull = false;
    this.defaultValue = "";
    this.reservedValues = [];
    this.disabledSwitch = false;
    this.nulled = null;
    this.disabledSwitch = this.hasAttribute("disabled");
  }
  get null() {
    return this.nullable && this.isNull;
  }
  set null(value) {
    if (!this.nullable || value === this.isNull)
      return;
    this.isNull = value;
    if (this.null)
      this.disable();
    else
      this.enable();
  }
  get maybeValue() {
    return this.null ? null : this.value;
  }
  set maybeValue(value) {
    if (value === null)
      this.null = true;
    else {
      this.null = false;
      this.value = value;
    }
  }
  enable() {
    if (this.nulled === null)
      return;
    this.value = this.nulled;
    this.nulled = null;
    this.disabled = false;
  }
  disable() {
    if (this.nulled !== null)
      return;
    this.nulled = this.value;
    this.value = this.defaultValue;
    this.disabled = true;
  }
  async firstUpdated() {
  }
  checkValidity() {
    if (this.nullable && !this.nullSwitch?.checked)
      return true;
    return this.select.checkValidity();
  }
  renderSwitch() {
    if (this.nullable) {
      return html`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
        this.null = !this.nullSwitch.checked;
      }}
      ></mwc-switch>`;
    }
    return html``;
  }
  render() {
    return html`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-select
            .value=${this.value}
            .disabled=${this.disabled}
            label=${this.label}
            helper="${ifDefined(this.helper)}"
            validationMessage="${ifDefined(this.validationMessage)}"
            @change="${(e) => this.value = e.target.value}"
            >
              <slot></slot>
          </mwc-select>
        </div>
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
__decorate([
  property({type: String})
], WizardSelect.prototype, "value", 2);
__decorate([
  property({type: String})
], WizardSelect.prototype, "label", 2);
__decorate([
  property({type: String})
], WizardSelect.prototype, "helper", 2);
__decorate([
  property({type: String})
], WizardSelect.prototype, "validationMessage", 2);
__decorate([
  property({type: Boolean})
], WizardSelect.prototype, "dialogInitialFocus", 2);
__decorate([
  property({type: Boolean})
], WizardSelect.prototype, "disabled", 2);
__decorate([
  property({type: Boolean})
], WizardSelect.prototype, "nullable", 2);
__decorate([
  state()
], WizardSelect.prototype, "null", 1);
__decorate([
  property({type: String})
], WizardSelect.prototype, "maybeValue", 1);
__decorate([
  property({type: String})
], WizardSelect.prototype, "defaultValue", 2);
__decorate([
  property({type: Array})
], WizardSelect.prototype, "reservedValues", 2);
__decorate([
  query("mwc-select")
], WizardSelect.prototype, "select", 2);
__decorate([
  query("mwc-switch")
], WizardSelect.prototype, "nullSwitch", 2);
WizardSelect = __decorate([
  customElement("wizard-select")
], WizardSelect);
