import {
  css,
  customElement,
  html,
  property,
  TemplateResult,
} from 'lit-element';
import { get } from 'lit-translate';

import '@omicronenergy/oscd-ui/icon/oscd-icon.js';
import '@omicronenergy/oscd-ui/fab/oscd-fab.js';

import {
  compareNames,
  newWizardEvent,
} from '@compas-oscd/open-scd/dist/foundation.js';

import './ied-container.js';

import { selectDoWizard } from './wizards/selectDo.js';
import { PROTOCOL_104_PRIVATE } from './foundation/private.js';
import { Base104Container } from './base-container.js';
import { DialogManager } from './dialogs/dialog-manager.js';

/**
 * Container that will render an 'ied-104-container' for every IED which contains DAI Elements related to the
 * 104 Protocol.
 */
@customElement('values-104-container')
export class Values104Container extends Base104Container {
  @property()
  get iedElements(): Element[] {
    return Array.from(this.doc.querySelectorAll('IED'))
      .filter(
        ied =>
          ied.querySelectorAll(
            `DAI > Private[type="${PROTOCOL_104_PRIVATE}"] > Address`
          ).length > 0
      )
      .sort((a, b) => compareNames(a, b));
  }

  @property({ type: Object })
  dialogManager!: DialogManager;

  /** Opens a [[`WizardDialog`]] for creating a new `Substation` element. */
  private openCreateAddressWizard(): void {
    console.log('openCreateAddressWizard')
    this.dialogManager.showSelectDODialog({ doc: this.doc })
      .then(v => {
        console.log('After confirm')
        console.log(v)
      });
    // this.dispatchEvent(newWizardEvent(selectDoWizard(this.doc)));
  }

  private renderAddButton(): TemplateResult {
    return html`<h1>
      <oscd-fab
        extended
        label="${get('protocol104.wizard.title.addAddress')}"
        @click=${() => this.openCreateAddressWizard()}
      >
        <oscd-icon slot="icon">add</oscd-icon>
      </oscd-fab>
    </h1>`;
  }

  render(): TemplateResult {
    const ieds = this.iedElements;
    if (ieds.length > 0) {
      return html`
        ${ieds.map(iedElement => {
          return html`<ied-104-container
            .editCount=${this.editCount}
            .doc="${this.doc}"
            .element="${iedElement}"
          ></ied-104-container>`;
        })}
        ${this.renderAddButton()}
      `;
    }
    return html` <h1>
        <span style="color: var(--base1)"
          >${get('protocol104.values.missing')}</span
        >
      </h1>
      ${this.renderAddButton()}`;
  }

  static styles = css`
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
}
