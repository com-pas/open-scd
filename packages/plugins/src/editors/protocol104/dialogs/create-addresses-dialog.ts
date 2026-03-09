import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, query, state } from 'lit-element';
import { get } from 'lit-translate';

import { SelectedEvent } from '@material/mwc-list/mwc-list-foundation';

import '@omicronenergy/oscd-ui/button/oscd-text-button.js';
import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import { Switch } from '@omicronenergy/oscd-ui/switch/OscdSwitch.js';

import '@compas-oscd/open-scd/dist/wizard-textfield.js';
import '@compas-oscd/open-scd/dist/WizardDivider.js';
import { WizardSelect } from '@compas-oscd/open-scd/dist/wizard-select.js';

import {
  getNameAttribute,
} from '@compas-oscd/open-scd/dist/foundation.js';

import { BaseDialog } from '../../../components/base-dialog';

import {
  getFullPath,
  getCdcValueFromDOElement,
  getCtlModel,
} from '../foundation/foundation.js';
import {
  cdcProcessings,
  SupportedCdcType,
  TiInformation,
} from '../foundation/cdc.js';
import { getSignalName } from '../foundation/signalNames.js';

export interface CreateAddressesDialogParams {
  doElement: Element;
  lnElement: Element;
}

function disableCheckSwitch(
  tiInfo: Record<string, TiInformation>
): boolean {
  let disableSwitch = true;
  Object.values(tiInfo).forEach(tiInformation => {
    if (tiInformation.checkDaPaths && tiInformation.checkCreate) {
      disableSwitch = false;
    }
  });
  return disableSwitch;
}

function disableInvertedSwitch(
  tiInfo: Record<string, TiInformation>
): boolean {
  let disableSwitch = true;
  Object.values(tiInfo).forEach(tiInformation => {
    if (tiInformation.inverted === true) {
      disableSwitch = false;
    }
  });
  return disableSwitch;
}

function disableMonitorInvertedSwitch(
  tiInfo: Record<string, TiInformation>,
  tiNumberInfo: string
): boolean {
  let disableSwitch = true;
  const tiNumber = tiNumberInfo.split(' (')[0];

  if (!isNaN(+tiNumber)) disableSwitch = !tiInfo[tiNumber].inverted;

  return disableSwitch;
}

interface CdcProcessing {
  monitor: Record<string, TiInformation>;
  control: Record<string, TiInformation>;
}

@customElement('plugin-104-create-addresses-dialog')
export class CreateAddressesDialog extends BaseDialog<CreateAddressesDialogParams, void> {
  @state()
  private doElement: Element | null = null;
  @state()
  private lnElement: Element | null = null;

  protected headline = get('wizard.title.add', { tagName: 'Address' });

  public show(params: CreateAddressesDialogParams): Promise<void | null> {
    const promise = super.show(params);

    this.doElement = params.doElement;
    this.lnElement = params.lnElement;

    return promise;
  }

  private onConfirm(): void {
    // TODO
  }

  protected renderActions(): TemplateResult | typeof nothing {
    return html`
      <oscd-text-button @click="${() => this.onConfirm()}">
        <oscd-icon slot="icon">add</oscd-icon>
        ${get('add')}
      </oscd-text-button>
    `;
  }

  private setMonitorControlValue(selected: string, isMonitor: boolean): void {
    const counterType = isMonitor ? 'controlTi' : 'monitorTi';
    const availableTis = this.shadowRoot?.querySelector(
      `wizard-select[label="${counterType}"]`
    )as WizardSelect;

    availableTis.maybeValue = isMonitor
      ? selected === '30'
        ? '58'
        : '62'
      : selected === '58'
      ? '30'
      : '35';
  }

  private setMonitorInvertedSwitch(selected: string, cdcProcessing: CdcProcessing): void {
    const selectElement = this.shadowRoot!.querySelector(
      'oscd-switch[id="monitorInverted"]'
    );

    if (!selectElement) return;

    (<Switch>selectElement).disabled = disableMonitorInvertedSwitch(
      cdcProcessing.monitor,
      selected
    );
  }

  private renderMonitorTis(monitorTis: string[], cdcProcessing: CdcProcessing, cdc: string): TemplateResult {
    if (monitorTis.length === 0) {
      return html``;
    }

    const firstMonitorTi = monitorTis[0];
    const hasMultipleMonitorTis = monitorTis.length > 1;
    const disabledSwitchByDefault = disableMonitorInvertedSwitch(cdcProcessing.monitor, firstMonitorTi);

    return html`
      <wizard-divider></wizard-divider>
      ${hasMultipleMonitorTis ?
        html`
          <wizard-select
            label="monitorTi"
            helper="${get('protocol104.wizard.monitorTiHelper')}"
            fixedMenuPosition
            required
            @selected=${(e: SelectedEvent) => {
              const selectedTi = monitorTis[e.detail.index as number];

              this.setMonitorInvertedSwitch(selectedTi, cdcProcessing);
              if (cdc === 'ENC') this.setMonitorControlValue(selectedTi, true);
            }}
          >
            ${monitorTis.map(
              monitorTi =>
                html` <mwc-list-item value="${monitorTi}">
                  <span
                    >${monitorTi + ' (' + getSignalName(monitorTi) + ')'}</span
                  >
                </mwc-list-item>`
            )}
          </wizard-select>
        ` :
        html`
          <wizard-textfield
            label="monitorTi"
            .maybeValue=${firstMonitorTi
              ? firstMonitorTi + ' (' + getSignalName(firstMonitorTi) + ')'
              : ''}
            disabled
          >
          </wizard-textfield>
        `
      }
      <label>
        <oscd-switch
          id="monitorInverted"
          .disabled="${disabledSwitchByDefault}"
        >
        </oscd-switch>
        ${get('protocol104.wizard.monitorInverted')}
      </label>
      <label>
        <oscd-switch
          id="monitorCheck"
          .disabled="${disableCheckSwitch(cdcProcessing.monitor)}"
        >
        </oscd-switch>
        ${get('protocol104.wizard.monitorCheck')}
      </label>
    `;
  }

  private renderControlTis(controlTis: string[], cdcProcessing: CdcProcessing, cdc: string): TemplateResult {
    if (controlTis.length === 0) {
      return html``;
    }

    const ctlModel = getCtlModel(this.lnElement!, this.doElement!);
    const hasCtlModel = Boolean(ctlModel);
    const isNotStatusOnly = hasCtlModel && ctlModel !== 'status-only';
    const hasMultipleControlTis = controlTis.length > 1;

    return html`
      <wizard-divider></wizard-divider>
      ${hasCtlModel ? 
        html`
          <wizard-textfield
            label="ctlModel"
            .maybeValue=${ctlModel}
            disabled
            readonly
          >
          </wizard-textfield>
        ` : html``
      }
      ${isNotStatusOnly && hasMultipleControlTis ? 
        html`
          <wizard-select
            label="controlTi"
            helper="${get('protocol104.wizard.controlTiHelper')}"
            fixedMenuPosition
            required
            @selected=${(e: SelectedEvent) => {
              const selectedTi = controlTis[e.detail.index as number];
              if (cdc === 'ENC') this.setMonitorControlValue(selectedTi, false);
            }}
          >
            ${controlTis.map(
              controlTi =>
                html` <mwc-list-item value="${controlTi}">
                  <span
                    >${controlTi +
                    ' (' +
                    getSignalName(controlTi) +
                    ')'}</span
                  >
                </mwc-list-item>`
            )}
          </wizard-select>
        `
        : isNotStatusOnly && !hasMultipleControlTis ?
        html`
          <wizard-textfield
            label="controlTi"
            .maybeValue=${controlTis[0]
              ? controlTis[0] + ' (' + getSignalName(controlTis[0]) + ')'
              : ''}
            disabled
          >
          </wizard-textfield>
        `
        : html``
      }
      ${isNotStatusOnly ?
        html`
          <label>
            <oscd-switch
              id="controlInverted"
              .disabled="${disableInvertedSwitch(cdcProcessing.control)}"
            >
            </oscd-switch>
            ${get('protocol104.wizard.controlInverted')}
          </label>
          <label>
            <oscd-switch
              id="controlCheck"
              .disabled="${disableCheckSwitch(cdcProcessing.control)}"
            >
            </oscd-switch>
            ${get('protocol104.wizard.controlCheck')}
          </label>
        ` : html``
      }
    `;
  }

  protected renderContent(): TemplateResult | typeof nothing {
    if (!this.doElement || !this.lnElement) {
      return html``;
    }

    const foundCdc = getCdcValueFromDOElement(this.doElement) ?? '';
    const reqCmvMapping = foundCdc === 'WYE' || foundCdc === 'DEL';
    const cdc = reqCmvMapping ? 'CMV' : foundCdc;
    const cdcProcessing = cdcProcessings[<SupportedCdcType>foundCdc];

    const doName = getNameAttribute(this.doElement) ?? '';
    const iedElement = this.lnElement.closest('IED');
    const fullPath = getFullPath(this.lnElement, 'IED');

    const monitorTis = Object.keys(cdcProcessing.monitor);
    const controlTis = Object.keys(cdcProcessing.control);

    return html`
      <wizard-textfield
        label="IED"
        .maybeValue="${getNameAttribute(iedElement!)}"
        disabled
        readonly
      >
      </wizard-textfield>
      <oscd-filled-text-field
        label="LN(0)"
        type="textarea"
        value="${fullPath}"
        rows="2"
        cols="40"
        readonly
        disabled
      >
      </oscd-filled-text-field>
      <wizard-textfield
        label="DO"
        .maybeValue="${doName}"
        disabled
        readonly
      >
      </wizard-textfield>
      <wizard-textfield
        label="Common Data Class"
        .maybeValue="${cdc}"
        .helper="${reqCmvMapping
          ? get('protocol104.mappedCmv', { cdc: foundCdc })
          : ''}"
        .helperPersistent="${reqCmvMapping}"
        disabled
        readonly
      >
      </wizard-textfield>
      ${this.renderMonitorTis(monitorTis, cdcProcessing, cdc)}
      ${this.renderControlTis(controlTis, cdcProcessing, cdc)}
    `;
  }
  
}
