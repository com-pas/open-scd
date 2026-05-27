import { l as langChanged, g as get } from './common/directive-a7a30c9a.js';
export { g as get, r as registerTranslateConfig, u as use } from './common/directive-a7a30c9a.js';
import './common/lit-html-4eb216a4.js';

/**
 * A lit directive that updates the translation when the language changes.
 * @param key
 * @param values
 * @param config
 */
const translate = (key, values, config) => langChanged(() => get(key, values, config));

export { translate };
