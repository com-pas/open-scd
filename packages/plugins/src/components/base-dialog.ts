import { CSSResultGroup, LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, query, state, css } from 'lit-element';
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
    this.dialogPromise?.resolve(value);
    this.dialogPromise = null;

    this.dialog.close();
  }

  protected close(): void {
    this.dialog.close();
  }

  protected renderActions(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected renderContent(): TemplateResult | typeof nothing {
    return nothing;
  }

  protected render(): TemplateResult {
    return html`<oscd-dialog @closed="${(e: Event) => {
        if (e.target === this.dialog) this.dialogPromise?.resolve(null)
      }}">
      <div slot="headline">
        ${this.headline}
      </div>
      <div slot="content" class="content">
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

  static styles = css`
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
}
