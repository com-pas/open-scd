// Foundation exports
export type { LitElementConstructor } from './foundation.js';
export { newOpenEvent } from './foundation.js';
export type { OpenEvent, OpenDetail } from './foundation.js';
export {
  newEditEvent,
  isComplex,
  isInsert,
  isNamespaced,
  isUpdate,
  isRemove,
} from './foundation.js';
export type {
  EditEvent,
  Edit,
  Insert,
  AttributeValue,
  NamespacedAttributeValue,
  Update,
  Remove,
} from './foundation.js';
export type {
  EditV2,
  InsertV2,
  RemoveV2,
  SetTextContentV2,
  SetAttributesV2,
} from './foundation.js';
export {
  isEditV2,
  isRemoveV2,
  isInsertV2,
  isComplexV2,
  isSetAttributesV2,
  isSetTextContentV2
} from './foundation.js';
export type {
  EditEventV2,
  EditEventOptionsV2,
  EditDetailV2
} from './foundation.js';
export { newEditEventV2 } from './foundation.js';
export { handleEditV2 } from './foundation.js';
export { cyrb64 } from './foundation.js';
export type { Plugin, PluginSet } from './foundation.js';
export { newEditCompletedEvent } from './foundation.js';
export type {
  EditCompletedEvent,
  EditCompletedDetail,
} from './foundation.js';
export { crossProduct } from './foundation.js';
export { XMLEditor } from './foundation.js';

// Deprecated open-event
export { newOpenDocEvent, OpenDocEvent } from './foundation/deprecated/open-event.js';

// Deprecated waiter
export {
  newPendingStateEvent,
  PendingStateDetail,
} from './foundation/deprecated/waiter.js';

// Deprecated history
export {
  newLogEvent,
  newIssueEvent,
  InfoDetail,
  InfoEntry,
  IssueDetail,
  IssueEvent,
  LogEntry,
  LogEntryType,
  LogEvent,
} from './foundation/deprecated/history.js';

// Deprecated validation
export { newValidateEvent } from './foundation/deprecated/validation.js';

// Deprecated editor (aliased to avoid conflicts)
export {
  newActionEvent as newDeprecatedActionEvent,
  ComplexAction as DeprecatedComplexAction,
  SimpleAction as DeprecatedSimpleAction,
  EditorAction as DeprecatedEditorAction,
  Replace as DeprecatedReplace,
  Create as DeprecatedCreate,
  Move as DeprecatedMove,
  Update as DeprecatedUpdate,
  Delete as DeprecatedDelete,
  isCreate as isDeprecatedCreate,
  isDelete as isDeprecatedDelete,
  isReplace as isDeprecatedReplace,
  isSimple as isDeprecatedSimple,
  isMove as isDeprecatedMove,
  isUpdate as isDeprecatedUpdate,
  createUpdateAction as createDeprecatedUpdateAction,
} from './foundation/deprecated/editor.js';

// Settings
export {
  Settings,
  newSettingsUIEvent,
  SettingsUIEvent,
  Language,
  NsdVersions,
  NsdVersion,
  LoadNsdocEvent,
  newLoadNsdocEvent,
} from './foundation/deprecated/settings.js';

// API
export { OscdApi } from './api/api.js';
