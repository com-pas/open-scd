// Addons
import './addons/Waiter.js';
import './addons/Settings.js';
import './addons/History.js';

export { HistoryState, historyStateEvent } from './addons/History.js';

// Foundation
export { initializeNsdoc, Nsdoc } from './foundation/nsdoc.js';

// Plugin system
export {
  InstalledOfficialPlugin,
  Plugin,
  MenuPosition,
  PluginKind
} from './plugin.js';
export { newConfigurePluginEvent, ConfigurePluginEvent } from './plugin.events.js';
export { pluginTag } from './plugin-tag.js';

// Foundation utilities
export {
  compareNames,
  newWizardEvent,
  newSubWizardEvent,
  isPublic,
  Wizard,
  WizardPage,
  WizardActor,
  WizardAction,
  WizardInputElement,
  WizardInput,
  getValue,
  getMultiplier,
  identity,
  find,
  crossProduct,
  patterns,
  SCLTag,
  getVersion
} from './foundation.js';

// Translations
export { de as oscdDe } from './translations/de.js';
export { en as oscdEn } from './translations/en.js';

// Components
import './filtered-list.js';
import './wizard-textfield.js';

// Wizards
export { mergeWizard } from './wizards.js';
export { OscdWizards } from './addons/Wizards.js';


// Test helpers
import '../test/mock-open-scd.ts'