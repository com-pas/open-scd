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
import {get} from "../../_snowpack/pkg/lit-translate.js";
import {ifDefined} from "../../_snowpack/pkg/lit-html/directives/if-defined.js";
import "../../_snowpack/pkg/@material/mwc-icon-button.js";
import "../../_snowpack/pkg/@material/mwc-list/mwc-list-item.js";
import "../../_snowpack/pkg/@material/mwc-menu.js";
import "../../_snowpack/pkg/@material/mwc-switch.js";
import "../../_snowpack/pkg/@material/mwc-textfield.js";
export let WizardTextField = class extends LitElement {
  constructor() {
    super();
    this.nullable = false;
    this.multipliers = [null, ""];
    this.multiplierIndex = 0;
    this.value = "";
    this.suffix = "";
    this.helperPersistent = false;
    this.disabled = false;
    this.required = false;
    this.label = "";
    this.dialogInitialFocus = false;
    this.unit = "";
    this.isNull = false;
    this.defaultValue = "";
    this.reservedValues = [];
    this.disabledSwitch = false;
    this.nulled = null;
    this.disabledSwitch = this.hasAttribute("disabled");
  }
  get multiplier() {
    if (this.unit == "")
      return null;
    return this.multipliers[this.multiplierIndex] ?? this.multipliers[0] ?? null;
  }
  set multiplier(value) {
    const index = this.multipliers.indexOf(value);
    if (index >= 0)
      this.multiplierIndex = index;
    this.suffix = (this.multiplier ?? "") + this.unit;
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
  selectMultiplier(se) {
    this.multiplier = this.multipliers[se.detail.index];
  }
  enable() {
    if (this.nulled === null)
      return;
    this.value = this.nulled;
    this.nulled = null;
    this.helperPersistent = false;
    this.disabled = false;
  }
  disable() {
    if (this.nulled !== null)
      return;
    this.nulled = this.value;
    this.value = this.defaultValue;
    this.helperPersistent = true;
    this.disabled = true;
  }
  firstUpdated() {
    if (this.multiplierMenu)
      this.multiplierMenu.anchor = this.multiplierButton ?? null;
  }
  checkValidity() {
    if (this.reservedValues && this.reservedValues.some((array) => array === this.value)) {
      this.textfield.setCustomValidity(get("textfield.unique"));
      return false;
    }
    this.textfield.setCustomValidity("");
    return this.textfield.checkValidity();
  }
  reportValidity() {
    return this.textfield.reportValidity();
  }
  renderUnitSelector() {
    if (this.multipliers.length && this.unit)
      return html`<div style="position:relative;">
        <mwc-icon-button
          style="margin:5px;"
          icon="more"
          ?disabled=${this.null || this.disabledSwitch}
          @click=${() => this.multiplierMenu?.show()}
        ></mwc-icon-button>
        <mwc-menu
          @selected=${this.selectMultiplier}
          fixed
          .anchor=${this.multiplierButton ?? null}
          >${this.renderMulplierList()}</mwc-menu
        >
      </div>`;
    else
      return html``;
  }
  renderMulplierList() {
    return html`${this.multipliers.map((multiplier) => html`<mwc-list-item ?selected=${multiplier === this.multiplier}
          >${multiplier === null ? get("textfield.noMultiplier") : multiplier}</mwc-list-item
        >`)}`;
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
        <mwc-textfield style="flex: auto;"
          .value=${this.value}
          .suffix=${this.suffix}
          .helperPersistent=${this.helperPersistent}
          .disabled=${this.disabled}
          .required=${this.required}
          label=${this.label}
          helper="${ifDefined(this.helper)}"
          validationMessage="${ifDefined(this.helper)}"
          pattern="${ifDefined(this.pattern)}"
          minLength="${ifDefined(this.minLength)}"
          maxLength="${ifDefined(this.maxLength)}"
          type="${ifDefined(this.type)}"
          min="${ifDefined(this.min)}"
          max="${ifDefined(this.max)}">
        </mwc-textfield>
        ${this.renderUnitSelector()}
        <div style="display: flex; align-items: center; height: 56px;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
  }
};
__decorate([
  property({type: Boolean})
], WizardTextField.prototype, "nullable", 2);
__decorate([
  property({type: Array})
], WizardTextField.prototype, "multipliers", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "value", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "suffix", 2);
__decorate([
  property({type: Boolean})
], WizardTextField.prototype, "helperPersistent", 2);
__decorate([
  property({type: Boolean})
], WizardTextField.prototype, "disabled", 2);
__decorate([
  property({type: Boolean})
], WizardTextField.prototype, "required", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "label", 2);
__decorate([
  property({type: Boolean})
], WizardTextField.prototype, "dialogInitialFocus", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "helper", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "validationMessage", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "pattern", 2);
__decorate([
  property({type: Number})
], WizardTextField.prototype, "minLength", 2);
__decorate([
  property({type: Number})
], WizardTextField.prototype, "maxLength", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "type", 2);
__decorate([
  property({type: Number})
], WizardTextField.prototype, "min", 2);
__decorate([
  property({type: Number})
], WizardTextField.prototype, "max", 2);
__decorate([
  property({type: String})
], WizardTextField.prototype, "multiplier", 1);
__decorate([
  property({type: String})
], WizardTextField.prototype, "unit", 2);
__decorate([
  state()
], WizardTextField.prototype, "null", 1);
__decorate([
  property({type: String})
], WizardTextField.prototype, "maybeValue", 1);
__decorate([
  property({type: String})
], WizardTextField.prototype, "defaultValue", 2);
__decorate([
  property({type: Array})
], WizardTextField.prototype, "reservedValues", 2);
__decorate([
  query("mwc-textfield")
], WizardTextField.prototype, "textfield", 2);
__decorate([
  query("mwc-switch")
], WizardTextField.prototype, "nullSwitch", 2);
__decorate([
  query("mwc-menu")
], WizardTextField.prototype, "multiplierMenu", 2);
__decorate([
  query("mwc-icon-button")
], WizardTextField.prototype, "multiplierButton", 2);
WizardTextField = __decorate([
  customElement("wizard-textfield")
], WizardTextField);
