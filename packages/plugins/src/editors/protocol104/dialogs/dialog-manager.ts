import { LitElement, TemplateResult, html, customElement, query } from 'lit-element';
import { EditEventV2 } from '@compas-oscd/core';

import './select-do-dialog.js';
import { SelectDODialog, SelectDODialogParams } from './select-do-dialog.js';

import './create-addresses-dialog.js';
import { CreateAddressesDialog, CreateAddressesDialogParams } from './create-addresses-dialog.js';

import { Path } from '@compas-oscd/open-scd/dist/finder-list.js';

@customElement('plugin-104-dialog-manager')
export class DialogManager extends LitElement {
  @query('plugin-104-select-do-dialog') selectDODialog!: SelectDODialog;
  @query('plugin-104-create-addresses-dialog') createAddressesDialog!: CreateAddressesDialog;

  public showSelectDODialog(params: SelectDODialogParams): Promise<Path | null> {
    return this.selectDODialog.show(params);
  }

  public showCreateAddressesDialog(params: CreateAddressesDialogParams): Promise<EditEventV2 | null> {
    return this.createAddressesDialog.show(params);
  }
  
  protected render(): TemplateResult {
    return html`
      <plugin-104-select-do-dialog></plugin-104-select-do-dialog>
      <plugin-104-create-addresses-dialog></plugin-104-create-addresses-dialog>
    `;
  }
}