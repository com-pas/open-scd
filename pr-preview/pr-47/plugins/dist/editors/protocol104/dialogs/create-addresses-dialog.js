import { __decorate } from "../../../../../_snowpack/pkg/tslib.js";
import { html } from '../../../../../_snowpack/pkg/lit.js';
import { customElement, state } from '../../../../../_snowpack/pkg/lit-element.js';
import { get } from '../../../../../_snowpack/pkg/lit-translate.js';
import '../../../../../_snowpack/pkg/@omicronenergy/oscd-ui/button/oscd-text-button.js';
import '../../../../../_snowpack/pkg/@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '../../../../../_snowpack/link/packages/openscd/dist/wizard-textfield.js';
import '../../../../../_snowpack/link/packages/openscd/dist/WizardDivider.js';
import { getNameAttribute, } from '../../../../../_snowpack/link/packages/openscd/dist/foundation.js';
import { BaseDialog } from '../../../components/base-dialog.js';
import { getFullPath, getCdcValueFromDOElement, getCtlModel, } from '../foundation/foundation.js';
import { cdcProcessings, } from '../foundation/cdc.js';
import { getSignalName } from '../foundation/signalNames.js';
import { newEditEventV2 } from '../../../../../_snowpack/link/packages/core/dist/index.js';
import { cdcProcessingsV2 } from '../foundation/cdc-editv2.js';
function disableCheckSwitch(tiInfo) {
    let disableSwitch = true;
    Object.values(tiInfo).forEach(tiInformation => {
        if (tiInformation.checkDaPaths && tiInformation.checkCreate) {
            disableSwitch = false;
        }
    });
    return disableSwitch;
}
function disableInvertedSwitch(tiInfo) {
    let disableSwitch = true;
    Object.values(tiInfo).forEach(tiInformation => {
        if (tiInformation.inverted === true) {
            disableSwitch = false;
        }
    });
    return disableSwitch;
}
function disableMonitorInvertedSwitch(tiInfo, tiNumber) {
    let disableSwitch = true;
    if (!isNaN(+tiNumber))
        disableSwitch = !tiInfo[tiNumber].inverted;
    return disableSwitch;
}
let CreateAddressesDialog = class CreateAddressesDialog extends BaseDialog {
    constructor() {
        super(...arguments);
        this.doElement = null;
        this.lnElement = null;
        this.headline = get('wizard.title.add', { tagName: 'Address' });
    }
    show(params) {
        const promise = super.show(params);
        this.doElement = params.doElement;
        this.lnElement = params.lnElement;
        return promise;
    }
    onConfirm() {
        const formValue = this.getFormValue();
        const edits = this.createAddressEdits(formValue);
        if (edits.length === 0) {
            this.close();
        }
        else {
            const title = get('protocol104.values.addedAddress', {
                name: getNameAttribute(this.doElement) ?? 'Unknown',
                lnName: getFullPath(this.lnElement, 'IED'),
            });
            this.confirm(newEditEventV2(edits, { title }));
        }
    }
    renderActions() {
        return html `
      <oscd-text-button @click="${() => this.onConfirm()}">
        <oscd-icon slot="icon">add</oscd-icon>
        ${get('add')}
      </oscd-text-button>
    `;
    }
    setMonitorControlValue(selected, isMonitor) {
        const counterType = isMonitor ? 'controlTi' : 'monitorTi';
        const availableTis = this.shadowRoot?.querySelector(`wizard-select[label="${counterType}"]`);
        availableTis.maybeValue = isMonitor
            ? selected === '30'
                ? '58'
                : '62'
            : selected === '58'
                ? '30'
                : '35';
    }
    setMonitorInvertedSwitch(selected, cdcProcessing) {
        const selectElement = this.shadowRoot.querySelector('oscd-switch[id="monitorInverted"]');
        if (!selectElement)
            return;
        selectElement.disabled = disableMonitorInvertedSwitch(cdcProcessing.monitor, selected);
    }
    getFormValue() {
        const monitorTiSelect = this.shadowRoot?.querySelector(`wizard-select[label="monitorTi"]`);
        const selectedMonitorTi = monitorTiSelect?.value ?? '';
        const monitorInvertedSwitch = this.shadowRoot?.querySelector('#monitorInverted');
        const monitorInverted = Boolean(monitorInvertedSwitch?.selected);
        const monitorCheckSwitch = this.shadowRoot?.querySelector('#monitorCheck');
        const monitorCheck = Boolean(monitorCheckSwitch?.selected);
        const controlTiSelect = this.shadowRoot?.querySelector(`wizard-select[label="controlTi"]`);
        const selectedControlTi = controlTiSelect?.value ?? '';
        const controlInvertedSwitch = this.shadowRoot?.querySelector('#controlInverted');
        const controlInverted = Boolean(controlInvertedSwitch?.selected);
        const controlCheckSwitch = this.shadowRoot?.querySelector('#controlCheck');
        const controlCheck = Boolean(controlCheckSwitch?.selected);
        return {
            selectedMonitorTi,
            monitorInverted,
            monitorCheck,
            selectedControlTi,
            controlInverted,
            controlCheck
        };
    }
    createAddressEdits(formValue) {
        if (!this.doElement || !this.lnElement) {
            return [];
        }
        const cdc = getCdcValueFromDOElement(this.doElement) ?? '';
        const cdcProcessing = cdcProcessingsV2[cdc];
        const tiInformation = cdcProcessing.monitor[formValue.selectedMonitorTi];
        // Create a Deep Clone of the LN Element, to keep track on which structure is initialized.
        const lnClonedElement = this.lnElement.cloneNode(true);
        const inverted = Boolean(formValue.monitorInverted && tiInformation.inverted);
        const inserts = tiInformation.create(this.lnElement, lnClonedElement, this.doElement, formValue.selectedMonitorTi, tiInformation.daPaths, inverted);
        return inserts;
    }
    renderMonitorTis(monitorTis, cdcProcessing, cdc) {
        if (monitorTis.length === 0) {
            return html ``;
        }
        const firstMonitorTi = monitorTis[0];
        const hasMultipleMonitorTis = monitorTis.length > 1;
        const disabledSwitchByDefault = disableMonitorInvertedSwitch(cdcProcessing.monitor, firstMonitorTi);
        return html `
      <wizard-divider></wizard-divider>
      <wizard-select
        label="monitorTi"
        helper="${get('protocol104.wizard.monitorTiHelper')}"
        fixedMenuPosition
        value=${hasMultipleMonitorTis ? '' : firstMonitorTi}
        required
        @selected=${(e) => {
            const selectedTi = monitorTis[e.detail.index];
            this.setMonitorInvertedSwitch(selectedTi, cdcProcessing);
            if (cdc === 'ENC')
                this.setMonitorControlValue(selectedTi, true);
        }}
      >
        ${monitorTis.map(monitorTi => html ` <mwc-list-item value="${monitorTi}">
              <span
                >${monitorTi + ' (' + getSignalName(monitorTi) + ')'}</span
              >
            </mwc-list-item>`)}
      </wizard-select>
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
    renderControlTis(controlTis, cdcProcessing, cdc) {
        if (controlTis.length === 0) {
            return html ``;
        }
        const ctlModel = getCtlModel(this.lnElement, this.doElement);
        const hasCtlModel = Boolean(ctlModel);
        const isNotStatusOnly = hasCtlModel && ctlModel !== 'status-only';
        const hasMultipleControlTis = controlTis.length > 1;
        return html `
      <wizard-divider></wizard-divider>
      ${hasCtlModel ?
            html `
          <wizard-textfield
            label="ctlModel"
            .maybeValue=${ctlModel}
            disabled
            readonly
          >
          </wizard-textfield>
        ` : html ``}
      ${isNotStatusOnly ?
            html `
          <wizard-select
            label="controlTi"
            helper="${get('protocol104.wizard.controlTiHelper')}"
            fixedMenuPosition
            required
            value="${hasMultipleControlTis ? '' : controlTis[0]}"
            @selected=${(e) => {
                const selectedTi = controlTis[e.detail.index];
                if (cdc === 'ENC')
                    this.setMonitorControlValue(selectedTi, false);
            }}
          >
            ${controlTis.map(controlTi => html ` <mwc-list-item value="${controlTi}">
                  <span
                    >${controlTi +
                ' (' +
                getSignalName(controlTi) +
                ')'}</span
                  >
                </mwc-list-item>`)}
          </wizard-select>
        `
            : html ``}
      ${isNotStatusOnly ?
            html `
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
        ` : html ``}
    `;
    }
    renderContent() {
        if (!this.doElement || !this.lnElement) {
            return html ``;
        }
        const foundCdc = getCdcValueFromDOElement(this.doElement) ?? '';
        const reqCmvMapping = foundCdc === 'WYE' || foundCdc === 'DEL';
        const cdc = reqCmvMapping ? 'CMV' : foundCdc;
        const cdcProcessing = cdcProcessings[foundCdc];
        const doName = getNameAttribute(this.doElement) ?? '';
        const iedElement = this.lnElement.closest('IED');
        const fullPath = getFullPath(this.lnElement, 'IED');
        const monitorTis = Object.keys(cdcProcessing.monitor);
        const controlTis = Object.keys(cdcProcessing.control);
        return html `
      <wizard-textfield
        label="IED"
        .maybeValue="${getNameAttribute(iedElement)}"
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
};
__decorate([
    state()
], CreateAddressesDialog.prototype, "doElement", void 0);
__decorate([
    state()
], CreateAddressesDialog.prototype, "lnElement", void 0);
CreateAddressesDialog = __decorate([
    customElement('plugin-104-create-addresses-dialog')
], CreateAddressesDialog);
export { CreateAddressesDialog };
//# sourceMappingURL=create-addresses-dialog.js.map