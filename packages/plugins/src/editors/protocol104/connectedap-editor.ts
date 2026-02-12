import { customElement, html, property, TemplateResult } from 'lit-element';

import '@omicronenergy/oscd-ui/fab/oscd-fab.js';

import '@compas-oscd/open-scd/dist/action-icon.js';
import { newWizardEvent } from '@compas-oscd/open-scd/dist/foundation.js';
import { newActionEvent } from '@compas-oscd/core/foundation/deprecated/editor.js';
import { editConnectedApWizard } from './wizards/connectedap.js';
import { Base104Container } from './base-container.js';

/** [[`104`]] subeditor for a `ConnectedAP` element. */
@customElement('connectedap-104-editor')
export class ConnectedAP104Editor extends Base104Container {
  /** SCL element ConnectedAP */
  @property({ attribute: false })
  element!: Element;

  private openEditWizard(): void {
    this.dispatchEvent(
      newWizardEvent(() =>
        editConnectedApWizard(
          this.element,
          this.element.querySelectorAll('Address > P[type^="RG"]').length > 0
        )
      )
    );
  }

  remove(): void {
    if (this.element)
      this.dispatchEvent(
        newActionEvent({
          old: {
            parent: this.element.parentElement!,
            element: this.element,
            reference: this.element.nextSibling,
          },
        })
      );
  }

  render(): TemplateResult {
    return html`
      <action-icon
        label="${this.element.getAttribute('apName') ?? 'UNDEFINED'}"
        icon="settings_input_hdmi"
        ><oscd-fab
          slot="action"
          mini
          icon="edit"
          @click="${() => this.openEditWizard()}"
        ></oscd-fab>
        <oscd-fab
          slot="action"
          mini
          icon="delete"
          @click="${() => this.remove()}}"
        ></oscd-fab
      ></action-icon>
    `;
  }
}
