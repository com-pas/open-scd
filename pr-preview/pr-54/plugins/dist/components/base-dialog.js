import { __decorate } from "../../../_snowpack/pkg/tslib.js";
import { html, nothing, LitElement, css } from '../../../_snowpack/pkg/lit.js';
import { query } from '../../../_snowpack/pkg/lit-element.js';
import { get } from '../../../_snowpack/pkg/lit-translate.js';
import '../../../_snowpack/pkg/@omicronenergy/oscd-ui/dialog/oscd-dialog.js';
import '../../../_snowpack/pkg/@omicronenergy/oscd-ui/button/oscd-text-button.js';
export class BaseDialog extends LitElement {
    constructor() {
        super(...arguments);
        this.showCancel = true;
        this.headline = '';
        this.dialogPromise = null;
    }
    show(params) {
        const promise = new Promise((resolve, reject) => {
            this.dialogPromise = { resolve, reject };
        });
        this.dialog.show();
        return promise;
    }
    confirm(value) {
        this.dialogPromise?.resolve(value);
        this.dialogPromise = null;
        this.dialog.close();
    }
    close() {
        this.dialog.close();
    }
    onClose() {
    }
    renderActions() {
        return nothing;
    }
    renderContent() {
        return nothing;
    }
    render() {
        return html `<oscd-dialog @closed="${(e) => {
            if (e.target === this.dialog) {
                this.dialogPromise?.resolve(null);
                this.onClose();
            }
        }}">
      <div slot="headline">
        ${this.headline}
      </div>
      <div slot="content" class="content">
        ${this.renderContent()}
      </div>
      <div slot="actions">
        ${this.showCancel ?
            html `<oscd-text-button @click="${() => this.close()}" style="--md-sys-color-primary: var(--md-sys-color-error)">
              ${get('close')}
            </oscd-text-button>` :
            nothing}
        ${this.renderActions()}
      </div>
    </oscd-dialog>`;
    }
}
BaseDialog.styles = css `
    oscd-dialog {
      max-width: 92vw;
      max-height: 90vh;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    label:has(oscd-switch) {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  `;
__decorate([
    query('oscd-dialog')
], BaseDialog.prototype, "dialog", void 0);
//# sourceMappingURL=base-dialog.js.map