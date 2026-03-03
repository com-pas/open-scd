import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, query, state } from 'lit-element';
import { get } from 'lit-translate';

import '@omicronenergy/oscd-ui/button/oscd-text-button.js';

import '@compas-oscd/open-scd/dist/finder-list.js';
import { FinderList, Path } from '@compas-oscd/open-scd/dist/finder-list.js';

import {
  getDisplayString,
  getReader,
} from '../../../wizards/foundation/finder.js';

import { getDataChildren } from '../wizards/selectDo.js';
import { BaseDialog } from '../../../components/base-dialog.js';

export interface SelectDODialogParams {
  doc: XMLDocument | null;
}

@customElement('plugin-104-select-do-dialog')
export class SelectDODialog extends BaseDialog<SelectDODialogParams, Path> {
  @state()
  private doc: XMLDocument | null = null;

  protected headline = get('wizard.title.select', { tagName: 'DO(I)' });

  show(params: SelectDODialogParams): Promise<Path | null> {
    const promise = super.show(params);
    this.doc = params.doc;

    return promise;
  }

  onConfirm(): void {
    const finderList: FinderList | null = this.shadowRoot?.querySelector('finder-list') ?? null;
    console.log(finderList)
    const path = finderList?.path ?? [];

    console.log(path)

    this.confirm(path);
  }

  protected renderContent(): TemplateResult | typeof nothing {
    if (!this.doc) {
      return nothing;
    }

    return html`
      <finder-list
        path="${JSON.stringify(['SCL: '])}"
        .read=${getReader(this.doc, getDataChildren)}
        .getDisplayString=${getDisplayString}
        .getTitle=${(path: string[]) => path[path.length - 1]}
      ></finder-list>
    `;
  }

  protected renderActions(): TemplateResult | typeof nothing {
    return html`
      <oscd-text-button @click="${() => this.onConfirm()}">
        ${get('next')}
      </oscd-text-button>
    `;
  }
}
