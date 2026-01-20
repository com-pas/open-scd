import {
  customElement,
  html,
  state,
  property,
  query,
  TemplateResult,
  LitElement,
} from 'lit-element';
import { ifDefined } from 'lit-html/directives/if-defined.js';

import '@material/mwc-switch';
import { Switch } from '@material/mwc-switch';
import '@material/mwc-select';
import { Select } from '@material/mwc-select';

/** A potentially `nullable` `Select`.
 *
 * NB: Use `maybeValue: string | null` instead of `value` if `nullable`!*/
@customElement('wizard-select')
export class WizardSelect extends LitElement {
  @property({ type: String })
  value = '';
  @property({ type: String })
  label = '';
  @property({ type: String })
  helper: string | undefined;
  @property({ type: String })
  validationMessage: string | undefined;
  @property({ type: Boolean })
  dialogInitialFocus = false;
  @property({ type: Boolean })
  disabled = false;

  /** Whether [[`maybeValue`]] may be `null` */
  @property({ type: Boolean })
  nullable = false;
  private isNull = false;
  @state()
  private get null(): boolean {
    return this.nullable && this.isNull;
  }
  private set null(value: boolean) {
    if (!this.nullable || value === this.isNull) return;
    this.isNull = value;
    if (this.null) this.disable();
    else this.enable();
  }
  /** Replacement for `value`, can only be `null` if [[`nullable`]]. */
  @property({ type: String })
  get maybeValue(): string | null {
    return this.null ? null : this.value;
  }
  set maybeValue(value: string | null) {
    if (value === null) this.null = true;
    else {
      this.null = false;
      this.value = value;
    }
  }
  /** The default `value` displayed if [[`maybeValue`]] is `null`. */
  @property({ type: String })
  defaultValue = '';
  /** Additional values that cause validation to fail. */
  @property({ type: Array })
  reservedValues: string[] = [];

  // FIXME: workaround to allow disable of the whole component - need basic refactor
  private disabledSwitch = false;

  @query('mwc-select') select!: Select;
  @query('mwc-switch') nullSwitch?: Switch;

  private nulled: string | null = null;

  private enable(): void {
    if (this.nulled === null) return;
    this.value = this.nulled;
    this.nulled = null;
    this.disabled = false;
  }

  private disable(): void {
    if (this.nulled !== null) return;
    this.nulled = this.value;
    this.value = this.defaultValue;
    this.disabled = true;
  }

  async firstUpdated(): Promise<void> {
    // await super.firstUpdated();
  }

  checkValidity(): boolean {
    if (this.nullable && !this.nullSwitch?.checked) return true;
    return this.select.checkValidity();
  }

  constructor() {
    super();

    this.disabledSwitch = this.hasAttribute('disabled');
  }

  renderSwitch(): TemplateResult {
    if (this.nullable) {
      return html`<mwc-switch
        style="margin-left: 12px;"
        ?checked=${!this.null}
        ?disabled=${this.disabledSwitch}
        @change=${() => {
          this.null = !this.nullSwitch!.checked;
        }}
      ></mwc-switch>`;
    }
    return html``;
  }

  render(): TemplateResult {
    return html`
      <div style="display: flex; flex-direction: row;">
        <div style="flex: auto;">
          <mwc-select
            .value=${this.value}
            .disabled=${this.disabled}
            label=${this.label}
            helper="${ifDefined(this.helper)}"
            validationMessage="${ifDefined(this.validationMessage)}"
            @change="${(e: Event) => this.value = (e.target as HTMLInputElement).value}"
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
}
