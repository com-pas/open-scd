import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, query, state } from 'lit-element';
import { get } from 'lit-translate';

import { OscdDialog } from '@omicronenergy/oscd-ui/dialog/OscdDialog.js';
import '@omicronenergy/oscd-ui/dialog/oscd-dialog.js';
import '@omicronenergy/oscd-ui/button/oscd-text-button.js';

export interface DialogPromise<TResult> {
  resolve: (value: TResult | null) => void;
  reject: () => unknown;
}

export class BaseDialog<TParams, TResult> extends LitElement {
  @query('oscd-dialog')
  dialog!: OscdDialog;

  protected showCancel = true;
  protected headline = '';

  protected dialogPromise: DialogPromise<TResult> | null = null;

  protected show(params: TParams): Promise<TResult | null> {
    const promise = new Promise<TResult | null>((resolve, reject) => {
      this.dialogPromise = { resolve, reject };
    });

    this.dialog.show();

    return promise;
  }

  protected confirm(value: TResult): void {
    this.dialog.close();
    this.dialogPromise?.resolve(value);
  }

  protected close(): void {
    this.dialog.close();
    this.dialogPromise?.resolve(null);
  }

  protected renderActions(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected renderContent(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected render(): TemplateResult {
    return html`<oscd-dialog>
      <div slot="headline">
        ${this.headline}
      </div>
      <div slot="content">
        ${this.renderContent()}
      </div>
      <div slot="actions">
        ${this.showCancel ? 
            html`<oscd-text-button @click="${() => this.close()}" style="--md-sys-color-primary: var(--md-sys-color-error)">
              ${get('close')}
            </oscd-text-button>` : 
            nothing
        }
        ${this.renderActions()}
      </div>
    </oscd-dialog>`;
  }
}