import {
  EditEventV2,
  OpenEvent,
  newEditEvent,
  newEditEventV2,
} from '@compas-oscd/core';
import {
  property,
  LitElement,
  customElement,
  TemplateResult,
  html,
} from 'lit-element';
import { get } from 'lit-translate';

import {
  EditorAction,
  EditorActionEvent,
  isSimple,
} from '@compas-oscd/core';

import { newLogEvent } from '@compas-oscd/core';
import { newValidateEvent } from '@compas-oscd/core';
import { OpenDocEvent } from '@compas-oscd/core';

import {
  Edit,
  EditEvent,
  isComplex,
  isInsert,
  isRemove,
  isUpdate,
} from '@compas-oscd/core';

import { convertEditActiontoV1 } from './editor/edit-action-to-v1-converter.js';
import { convertEditV1toV2 } from './editor/edit-v1-to-v2-converter.js';

import type { XMLEditor } from '@openscd/oscd-editor';

@customElement('oscd-editor')
export class OscdEditor extends LitElement {
  /** The `XMLDocument` to be edited */
  @property({ attribute: false })
  doc: XMLDocument | null = null;
  /** The name of the current [[`doc`]] */
  @property({ type: String }) docName = '';
  /** The UUID of the current [[`doc`]] */
  @property({ type: String }) docId = '';
  /** XML Editor to apply changes to the scd */
  @property({ type: Object }) editor!: XMLEditor;

  @property({
    type: Object,
  })
  host!: HTMLElement;

  private unsubscribers: (() => any)[] = [];

  private onAction(event: EditorActionEvent<EditorAction>) {
    const action = event.detail.action;

    if (!isSimple(action)) {
      // For complex editor actions, apply each sub-action individually with squash
      // so they appear as a single history entry but DOM references are resolved
      // correctly after each prior edit is already applied.
      action.actions.forEach((simpleAction, index) => {
        const edit = convertEditActiontoV1(simpleAction);
        const editV2 = convertEditV1toV2(edit);
        this.host.dispatchEvent(newEditEventV2(editV2, {
          squash: index > 0,
          title: index === 0 ? action.title : undefined,
        }));
      });
    } else {
      const edit = convertEditActiontoV1(action);
      const editV2 = convertEditV1toV2(edit);
      this.host.dispatchEvent(newEditEventV2(editV2));
    }
  }

  handleEditEvent(event: EditEvent) {
    /**
     * This is a compatibility fix for plugins based on open energy tools edit events
     * because their edit event look slightly different
     * see https://github.com/OpenEnergyTools/open-scd-core/blob/main/foundation/edit-event-v1.ts for details
     */
    if (isOpenEnergyEditEvent(event)) {
      event = convertOpenEnergyEditEventToEditEvent(event);
    }

    const edit = event.detail.edit;
    const editV2 = convertEditV1toV2(edit);

    this.host.dispatchEvent(newEditEventV2(editV2));
  }

  /**
   *
   * @deprecated [Move to handleOpenDoc instead]
   */
  private async onOpenDoc(event: OpenDocEvent) {
    this.doc = event.detail.doc;
    this.docName = event.detail.docName;
    this.docId = event.detail.docId ?? '';

    await this.updateComplete;

    this.dispatchEvent(newValidateEvent());

    this.dispatchEvent(
      newLogEvent({
        kind: 'info',
        title: get('openSCD.loaded', { name: this.docName }),
      })
    );
  }

  handleOpenDoc({ detail: { docName, doc } }: OpenEvent) {
    this.doc = doc;
    this.docName = docName;
  }

  connectedCallback(): void {
    super.connectedCallback();

    this.unsubscribers.push(
      this.editor.subscribe(async () => {
        await this.updateComplete;
        this.dispatchEvent(newValidateEvent());
      })
    );

    // Deprecated editor action API, use 'oscd-edit' instead.
    this.host.addEventListener('editor-action', this.onAction.bind(this));
    // Deprecated edit event API, use 'oscd-edit-v2' instead.
    this.host.addEventListener('oscd-edit', event => this.handleEditEvent(event));

    this.host.addEventListener('oscd-edit-v2', event => this.handleEditEventV2(event));
    this.host.addEventListener('open-doc', this.onOpenDoc);
    this.host.addEventListener('oscd-open', this.handleOpenDoc);
  }

  disconnectedCallback(): void {
    this.unsubscribers.forEach(u => u());
  }

  render(): TemplateResult {
    return html`<slot></slot>`;
  }

  handleEditEventV2(event: EditEventV2) {
    const { edit, title, squash } = event.detail;
    this.editor.commit(edit, { title, squash });
  }
}

function isOpenEnergyEditEvent(event: CustomEvent<unknown>): boolean {
  const eventDetail = event.detail as Edit;
  return isComplex(eventDetail) || isInsert(eventDetail) || isUpdate(eventDetail) || isRemove(eventDetail);
}

function convertOpenEnergyEditEventToEditEvent(event: CustomEvent<unknown>): EditEvent {
  const eventDetail = event.detail as Edit;
  return newEditEvent(eventDetail);
}
