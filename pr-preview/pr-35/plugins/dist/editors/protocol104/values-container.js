import { __decorate } from "../../../../_snowpack/pkg/tslib.js";
import { css, customElement, html, property, } from '../../../../_snowpack/pkg/lit-element.js';
import { get } from '../../../../_snowpack/pkg/lit-translate.js';
import '../../../../_snowpack/pkg/@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '../../../../_snowpack/pkg/@omicronenergy/oscd-ui/fab/oscd-fab.js';
import { compareNames, } from '../../../../_snowpack/link/packages/openscd/dist/foundation.js';
import './ied-container.js';
import { PROTOCOL_104_PRIVATE } from './foundation/private.js';
import { Base104Container } from './base-container.js';
import { checkAndGetLastElementFromPath } from './wizards/selectDo.js';
/**
 * Container that will render an 'ied-104-container' for every IED which contains DAI Elements related to the
 * 104 Protocol.
 */
let Values104Container = class Values104Container extends Base104Container {
    get iedElements() {
        return Array.from(this.doc.querySelectorAll('IED'))
            .filter(ied => ied.querySelectorAll(`DAI > Private[type="${PROTOCOL_104_PRIVATE}"] > Address`).length > 0)
            .sort((a, b) => compareNames(a, b));
    }
    /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
    openCreateAddressWizard() {
        this.dialogManager.showSelectDODialog({ doc: this.doc })
            .then(path => {
            if (!path) {
                return null;
            }
            const doElement = checkAndGetLastElementFromPath(this.doc, path, ['DO']);
            const lnElement = checkAndGetLastElementFromPath(this.doc, path, ['LN0', 'LN']);
            if (!doElement || !lnElement) {
                return null;
            }
            return this.dialogManager.showCreateAddressesDialog({ doElement, lnElement });
        })
            .then((editEvent) => {
            if (editEvent === null) {
                return;
            }
            this.dispatchEvent(editEvent);
        });
    }
    renderAddButton() {
        return html `<h1>
      <oscd-fab
        extended
        label="${get('protocol104.wizard.title.addAddress')}"
        @click=${() => this.openCreateAddressWizard()}
      >
        <oscd-icon slot="icon">add</oscd-icon>
      </oscd-fab>
    </h1>`;
    }
    render() {
        const ieds = this.iedElements;
        if (ieds.length > 0) {
            return html `
        ${ieds.map(iedElement => {
                return html `<ied-104-container
            .editCount=${this.editCount}
            .doc="${this.doc}"
            .element="${iedElement}"
          ></ied-104-container>`;
            })}
        ${this.renderAddButton()}
      `;
        }
        return html ` <h1>
        <span style="color: var(--base1)"
          >${get('protocol104.values.missing')}</span
        >
      </h1>
      ${this.renderAddButton()}`;
    }
};
Values104Container.styles = css `
    oscd-fab {
      position: fixed;
      bottom: 32px;
      right: 32px;
    }

    h1 {
      color: var(--mdc-theme-on-surface);
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin: 0px;
      line-height: 48px;
      padding-left: 0.3em;
    }
  `;
__decorate([
    property()
], Values104Container.prototype, "iedElements", null);
__decorate([
    property({ type: Object })
], Values104Container.prototype, "dialogManager", void 0);
Values104Container = __decorate([
    customElement('values-104-container')
], Values104Container);
export { Values104Container };
//# sourceMappingURL=values-container.js.map