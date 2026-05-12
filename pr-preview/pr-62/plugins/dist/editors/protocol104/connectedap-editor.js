import { __decorate } from "../../../../_snowpack/pkg/tslib.js";
import { customElement, html, property } from '../../../../_snowpack/pkg/lit-element.js';
import '../../../../_snowpack/pkg/@omicronenergy/oscd-ui/fab/oscd-fab.js';
import '../../../../_snowpack/link/packages/openscd/dist/action-icon.js';
import { newWizardEvent } from '../../../../_snowpack/link/packages/openscd/dist/foundation.js';
import { newActionEvent } from '../../../../_snowpack/link/packages/core/dist/index.js';
import { editConnectedApWizard } from './wizards/connectedap.js';
import { Base104Container } from './base-container.js';
/** [[`104`]] subeditor for a `ConnectedAP` element. */
let ConnectedAP104Editor = class ConnectedAP104Editor extends Base104Container {
    openEditWizard() {
        this.dispatchEvent(newWizardEvent(() => editConnectedApWizard(this.element, this.element.querySelectorAll('Address > P[type^="RG"]').length > 0)));
    }
    remove() {
        if (this.element)
            this.dispatchEvent(newActionEvent({
                old: {
                    parent: this.element.parentElement,
                    element: this.element,
                    reference: this.element.nextSibling,
                },
            }));
    }
    render() {
        return html `
      <action-icon
        label="${this.element.getAttribute('apName') ?? 'UNDEFINED'}"
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
    property({ attribute: false })
], ConnectedAP104Editor.prototype, "element", void 0);
ConnectedAP104Editor = __decorate([
    customElement('connectedap-104-editor')
], ConnectedAP104Editor);
export { ConnectedAP104Editor };
//# sourceMappingURL=connectedap-editor.js.map