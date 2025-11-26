import {
  EditV2,
  isInsertV2,
  isRemoveV2,
  isSetAttributesV2,
  isSetTextContentV2,
  isComplexV2
} from '@compas-oscd/core';
import { get } from 'lit-translate';

export const getLogText = (edit: EditV2): { title: string, message?: string } => {
  if (isInsertV2(edit)) {
    const name = edit.node instanceof Element ?
    edit.node.tagName :
    get('editing.node');
    return { title: get('editing.created', { name }) };
  } else if (isSetAttributesV2(edit) || isSetTextContentV2(edit)) {
    const name = edit.element.tagName;
    return { title: get('editing.updated', { name }) };
  } else if (isRemoveV2(edit)) {
    const name = edit.node instanceof Element ?
    edit.node.tagName :
    get('editing.node');
    return { title: get('editing.deleted', { name }) };
  } else if (isComplexV2(edit)) {
    const message = edit.map((e: EditV2) => getLogText(e)).map(({ title }: { title: string }) => title).join(', ');
    return { title: get('editing.complex'), message };
  }
  
  return { title: '' };
}
