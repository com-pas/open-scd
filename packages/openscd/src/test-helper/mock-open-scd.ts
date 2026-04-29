import {
  customElement,
  TemplateResult,
  html,
  queryAssignedNodes,
  query,
  property
} from 'lit-element';
import { OscdWizards } from '../addons/Wizards.js';
import { WizardFactory } from '../foundation.js';
import { OpenSCD } from '../open-scd.js';
import { WizardDialog } from '../wizard-dialog.js';
import { OscdHistory } from '../addons/History.js';
import { OscdLayout } from '../addons/Layout.js';
// import type { Plugin } from '@openscd/core';
import { Plugin } from '../plugin.js';

@customElement('mock-open-scd')
export class MockOpenSCD extends OpenSCD {

  @property({ attribute: false })
  mockPlugins: Plugin[] = []

  @queryAssignedNodes()
  _plugins!: Array<HTMLElement>;

  @query('oscd-wizards')
  wizards!: OscdWizards;

  @query('oscd-history')
  historyAddon!: OscdHistory;

  @query('oscd-layout')
  layout!: OscdLayout;

  renderHosting(): TemplateResult {
    return html`<slot></slot>`;
  }

  render(): TemplateResult {
    return html`
      ${this.renderHosting()}
      ${super.render()}
    `;
  }

  protected getBuiltInPlugins(): Plugin[]{
    return this.mockPlugins;
  }



  getPlugin<T extends HTMLElement>(name: string): T | undefined {
    return this._plugins.find(
      p => p.tagName.toLowerCase() === name.toLowerCase()
    ) as T | undefined;
  }

  getActivePlugin<T extends HTMLElement>(): T {
    return this._plugins[0]! as T;
  }

  get wizardUI(): WizardDialog {
    return this.wizards.wizardUI;
  }

  get workflow(): WizardFactory[] {
    return this.wizards.workflow;
  }
}
