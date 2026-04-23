import {
  html,
  LitElement,
  TemplateResult,
  property,
  customElement,
  state,
} from 'lit-element';

import '@compas-oscd/open-scd/dist/action-icon.js';
import {
  identity,
  newLnInstGenerator,
  newWizardEvent,
} from '@compas-oscd/open-scd/dist/foundation.js';

import {
  cloneElement,
} from '@compas-oscd/xml';

import { newActionEvent } from '@compas-oscd/core';
import '@compas-oscd/open-scd/dist/icons/icons.components.js';
import { wizards } from '../../wizards/wizard-library.js';

export function getLNodeIcon(lNode: Element): TemplateResult {
  const lnClassGroup = lNode.getAttribute('lnClass')?.charAt(0) ?? '';
  return lnClassIcons[lnClassGroup] ?? html`<custom-icon-lnode-system></custom-icon-lnode-system>`;
}

const lnClassIcons: Partial<Record<string, TemplateResult>> = {
  L: html`<custom-icon-lnode-system></custom-icon-lnode-system>`,
  A: html`<custom-icon-lnode-automation></custom-icon-lnode-automation>`,
  C: html`<custom-icon-lnode-control></custom-icon-lnode-control>`,
  F: html`<custom-icon-lnode-functional></custom-icon-lnode-functional>`,
  G: html`<custom-icon-lnode-general></custom-icon-lnode-general>`,
  I: html`<custom-icon-lnode-interfacing></custom-icon-lnode-interfacing>`,
  K: html`<custom-icon-lnode-nonelectrical></custom-icon-lnode-nonelectrical>`,
  M: html`<custom-icon-lnode-measurement></custom-icon-lnode-measurement>`,
  P: html`<custom-icon-lnode-protection></custom-icon-lnode-protection>`,
  Q: html`<custom-icon-lnode-quality></custom-icon-lnode-quality>`,
  R: html`<custom-icon-lnode-protectionrelated></custom-icon-lnode-protectionrelated>`,
  S: html`<custom-icon-lnode-supervision></custom-icon-lnode-supervision>`,
  T: html`<custom-icon-lnode-transformer></custom-icon-lnode-transformer>`,
  X: html`<custom-icon-lnode-switchgear></custom-icon-lnode-switchgear>`,
  Y: html`<custom-icon-lnode-powertransformer></custom-icon-lnode-powertransformer>`,
  Z: html`<custom-icon-lnode-furtherpowersystemequipment></custom-icon-lnode-furtherpowersystemequipment>`,
};

/** Pane rendering `LNode` element with its children */
@customElement('l-node-editor')
export class LNodeEditor extends LitElement {
  /** The document being edited as provided to editor by [[`Zeroline`]]. */
  @property({ attribute: false })
  doc!: XMLDocument;
  /** The edited `LNode` element */
  @property({ attribute: false })
  element!: Element;
  @state()
  private get header(): string {
    const prefix = this.element.getAttribute('prefix') ?? '';
    const lnClass = this.element.getAttribute('lnClass');
    const lnInst = this.element.getAttribute('lnInst');

    const header = this.missingIedReference
      ? `${prefix} ${lnClass} ${lnInst}`
      : identity(this.element);

    return typeof header === 'string' ? header : '';
  }
  @state()
  private get missingIedReference(): boolean {
    return this.element.getAttribute('iedName') === 'None';
  }
  @state()
  private get isIEDReference(): boolean {
    return this.element.getAttribute('iedName') !== 'None';
  }

  private cloneLNodeElement(): void {
    const lnClass = this.element.getAttribute('lnClass');
    if (!lnClass) return;

    const uniqueLnInst = newLnInstGenerator(this.element.parentElement!)(
      lnClass
    );
    if (!uniqueLnInst) return;

    const newElement = cloneElement(this.element, { lnInst: uniqueLnInst });
    this.dispatchEvent(
      newActionEvent({
        new: { parent: this.element.parentElement!, element: newElement },
      })
    );
  }

  private openEditWizard(): void {
    const wizard = wizards['LNode'].edit(this.element);
    if (wizard) this.dispatchEvent(newWizardEvent(wizard));
  }

  remove(): void {
    if (this.element)
      this.dispatchEvent(
        newActionEvent({
          old: {
            parent: this.element.parentElement!,
            element: this.element,
          },
        })
      );
  }

  render(): TemplateResult {
    return html`<action-icon
      label="${this.header}"
      ?secondary=${this.missingIedReference}
      ?highlighted=${this.missingIedReference}
      ><mwc-icon slot="icon">${getLNodeIcon(this.element)}</mwc-icon
      ><mwc-fab
        slot="action"
        mini
        icon="edit"
        @click="${() => this.openEditWizard()}}"
      ></mwc-fab
      ><mwc-fab
        slot="action"
        mini
        icon="delete"
        @click="${() => this.remove()}}"
      ></mwc-fab
      >${this.isIEDReference
        ? html``
        : html`<mwc-fab
            slot="action"
            mini
            icon="content_copy"
            @click=${() => this.cloneLNodeElement()}
          ></mwc-fab>`}
    </action-icon>`;
  }
}
