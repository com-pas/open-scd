import { _ as __decorate } from '../../../common/tslib.es6-98fe39c2.js';
import { L as LitElement } from '../../../common/lit-element-5461ae81.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-switch.js';
import '../../../@material/mwc-checkbox.js';
import { h as html } from '../../../common/lit-html-4eb216a4.js';
import { p as property, s as state, q as query, c as customElement } from '../../../common/decorators-4dc00f26.js';
import '../../../common/render-4cc4e0f1.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/base-element-2b8c8577.js';
import '../../../common/form-element-9a3959ff.js';
import '../../../common/observer-6d1a3681.js';
import '../../../common/class-map-6eff9d1d.js';
import '../../../common/ripple-handlers-2afcbc81.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/foundation-48b716b8.js';
import '../../../common/style-map-51635f8f.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/if-defined-13a17272.js';

/** A potentially `nullable` labelled checkbox. */
let WizardCheckbox = class WizardCheckbox extends LitElement {
    constructor() {
        super(...arguments);
        this.label = '';
        /** Parenthetical information rendered after the label: `label (helper)` */
        this.helper = '';
        /** Whether [[`maybeValue`]] may be `null` */
        this.nullable = false;
        /** The default `checked` state while [[`maybeValue`]] is `null`. */
        this.defaultChecked = false;
        /** Disables component including null switch */
        this.disabled = false;
        this.isNull = false;
        this.initChecked = false;
        this.deactivateCheckbox = false;
        this.nulled = null;
    }
    /** Is `"true"` when checked, `"false"` un-checked, `null` if [[`nullable`]]. */
    get maybeValue() {
        return this.null ? null : this.checked ? 'true' : 'false';
    }
    set maybeValue(check) {
        if (check === null)
            this.null = true;
        else {
            this.null = false;
            this.checked = check === 'true' ? true : false;
        }
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
    get checked() {
        return this.checkbox?.checked ?? this.initChecked;
    }
    set checked(value) {
        if (this.checkbox)
            this.checkbox.checked = value;
        else
            this.initChecked = value;
    }
    get formfieldLabel() {
        return this.helper ? `${this.helper} (${this.label})` : this.label;
    }
    enable() {
        if (this.nulled === null)
            return;
        this.checked = this.nulled;
        this.nulled = null;
        this.deactivateCheckbox = false;
    }
    disable() {
        if (this.nulled !== null)
            return;
        this.nulled = this.checked;
        this.checked = this.defaultChecked;
        this.deactivateCheckbox = true;
    }
    firstUpdated() {
        this.requestUpdate();
    }
    renderSwitch() {
        if (this.nullable) {
            return html `<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabled}
        @change=${() => {
                this.null = !this.nullSwitch.checked;
            }}
      ></mwc-switch>`;
        }
        return html ``;
    }
    render() {
        return html `
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-formfield
            label="${this.formfieldLabel}"
            style="${this.deactivateCheckbox || this.disabled
            ? `--mdc-theme-text-primary-on-background:rgba(0, 0, 0, 0.38)`
            : ``}"
            ><mwc-checkbox
              ?checked=${this.initChecked}
              ?disabled=${this.deactivateCheckbox || this.disabled}
            ></mwc-checkbox
          ></mwc-formfield>
        </div>
        <div style="display: flex; align-items: center;">
          ${this.renderSwitch()}
        </div>
      </div>
    `;
    }
};
__decorate([
    property({ type: String })
], WizardCheckbox.prototype, "label", void 0);
__decorate([
    property({ type: String })
], WizardCheckbox.prototype, "helper", void 0);
__decorate([
    property({ type: Boolean })
], WizardCheckbox.prototype, "nullable", void 0);
__decorate([
    property({ type: Boolean })
], WizardCheckbox.prototype, "defaultChecked", void 0);
__decorate([
    property({ type: String })
], WizardCheckbox.prototype, "maybeValue", null);
__decorate([
    property({ type: Boolean })
], WizardCheckbox.prototype, "disabled", void 0);
__decorate([
    state()
], WizardCheckbox.prototype, "null", null);
__decorate([
    state()
], WizardCheckbox.prototype, "checked", null);
__decorate([
    state()
], WizardCheckbox.prototype, "deactivateCheckbox", void 0);
__decorate([
    state()
], WizardCheckbox.prototype, "formfieldLabel", null);
__decorate([
    query('mwc-switch')
], WizardCheckbox.prototype, "nullSwitch", void 0);
__decorate([
    query('mwc-checkbox')
], WizardCheckbox.prototype, "checkbox", void 0);
WizardCheckbox = __decorate([
    customElement('wizard-checkbox')
], WizardCheckbox);

export { WizardCheckbox };
