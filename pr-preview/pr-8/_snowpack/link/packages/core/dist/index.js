export { newOpenEvent } from './foundation.js';
export { newEditEvent, isComplex, isInsert, isNamespaced, isUpdate, isRemove, } from './foundation.js';
export { isEditV2, isRemoveV2, isInsertV2, isComplexV2, isSetAttributesV2, isSetTextContentV2 } from './foundation.js';
export { newEditEventV2 } from './foundation.js';
export { handleEditV2 } from './foundation.js';
export { cyrb64 } from './foundation.js';
export { newEditCompletedEvent } from './foundation.js';
export { crossProduct } from './foundation.js';
export { XMLEditor } from './foundation.js';
// Deprecated open-event
export { newOpenDocEvent } from './foundation/deprecated/open-event.js';
// Deprecated waiter
export { newPendingStateEvent, } from './foundation/deprecated/waiter.js';
// Deprecated history
export { newLogEvent, newIssueEvent, } from './foundation/deprecated/history.js';
// Deprecated validation
export { newValidateEvent } from './foundation/deprecated/validation.js';
// Deprecated editor (aliased to avoid conflicts)
export { newActionEvent, isCreate, isDelete, isReplace, isSimple, isMove, isUpdate as isDeprecatedUpdate, createUpdateAction, } from './foundation/deprecated/editor.js';
// Settings
export { newSettingsUIEvent, newLoadNsdocEvent, } from './foundation/deprecated/settings.js';
// API
export { OscdApi } from './api/api.js';
//# sourceMappingURL=index.js.map