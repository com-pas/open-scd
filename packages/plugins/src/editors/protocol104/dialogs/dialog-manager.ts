import { LitElement, TemplateResult, html, customElement, query } from 'lit-element';

import './select-do-dialog.js';
import { SelectDODialog, SelectDODialogParams } from './select-do-dialog.js';

import { Path } from '@compas-oscd/open-scd/dist/finder-list.js';

@customElement('plugin-104-dialog-manager')
export class DialogManager extends LitElement {
  @query('plugin-104-select-do-dialog') selectDODialog!: SelectDODialog;

  public showSelectDODialog(params: SelectDODialogParams): Promise<Path | null> {
    console.log('showSelectDODialog')
    return this.selectDODialog.show(params);
  }
  
  protected render(): TemplateResult {
    return html`
      <plugin-104-select-do-dialog></plugin-104-select-do-dialog>
    `;
  }
}