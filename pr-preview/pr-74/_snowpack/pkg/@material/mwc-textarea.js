import { _ as __decorate } from '../common/tslib.es6-98fe39c2.js';
import { T as TextFieldBase, s as styles$1 } from '../common/mwc-textfield.css-f2c91549.js';
import { c as css } from '../common/lit-element-5461ae81.js';
import { c as classMap } from '../common/class-map-6eff9d1d.js';
import { i as ifDefined } from '../common/if-defined-13a17272.js';
import { l as live } from '../common/live-10079619.js';
import { q as query, p as property, c as customElement } from '../common/decorators-4dc00f26.js';
import { h as html } from '../common/lit-html-4eb216a4.js';
import '../common/mwc-line-ripple-directive-1af05b5b.js';
import '../common/base-element-2b8c8577.js';
import '../common/foundation-7cea7f4a.js';
import '../common/directive-9b648152.js';
import '../common/form-element-9a3959ff.js';
import '../common/observer-6d1a3681.js';
import '../common/render-4cc4e0f1.js';

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const booleanOrStringConverter = {
    fromAttribute(value) {
        if (value === null) {
            return false;
        }
        else if (value === '') {
            return true;
        }
        return value;
    },
    toAttribute(value) {
        if (typeof value === 'boolean') {
            return value ? '' : null;
        }
        return value;
    }
};
/** @soyCompatible */
class TextAreaBase extends TextFieldBase {
    constructor() {
        super(...arguments);
        this.rows = 2;
        this.cols = 20;
        this.charCounter = false;
    }
    /** @soyTemplate */
    render() {
        const shouldRenderCharCounter = this.charCounter && this.maxLength !== -1;
        const shouldRenderInternalCharCounter = shouldRenderCharCounter && this.charCounter === 'internal';
        const shouldRenderExternalCharCounter = shouldRenderCharCounter && !shouldRenderInternalCharCounter;
        const shouldRenderHelperText = !!this.helper || !!this.validationMessage ||
            shouldRenderExternalCharCounter;
        /** @classMap */
        const classes = {
            'mdc-text-field--disabled': this.disabled,
            'mdc-text-field--no-label': !this.label,
            'mdc-text-field--filled': !this.outlined,
            'mdc-text-field--outlined': this.outlined,
            'mdc-text-field--end-aligned': this.endAligned,
            'mdc-text-field--with-internal-counter': shouldRenderInternalCharCounter,
        };
        return html `
      <label class="mdc-text-field mdc-text-field--textarea ${classMap(classes)}">
        ${this.renderRipple()}
        ${this.outlined ? this.renderOutline() : this.renderLabel()}
        ${this.renderInput()}
        ${this.renderCharCounter(shouldRenderInternalCharCounter)}
        ${this.renderLineRipple()}
      </label>
      ${this.renderHelperText(shouldRenderHelperText, shouldRenderExternalCharCounter)}
    `;
    }
    /** @soyTemplate */
    renderInput() {
        const ariaLabelledbyOrUndef = !!this.label ? 'label' : undefined;
        const minOrUndef = this.minLength === -1 ? undefined : this.minLength;
        const maxOrUndef = this.maxLength === -1 ? undefined : this.maxLength;
        const autocapitalizeOrUndef = this.autocapitalize ?
            this.autocapitalize :
            undefined;
        return html `
      <textarea
          aria-labelledby=${ifDefined(ariaLabelledbyOrUndef)}
          class="mdc-text-field__input"
          .value="${live(this.value)}"
          rows="${this.rows}"
          cols="${this.cols}"
          ?disabled="${this.disabled}"
          placeholder="${this.placeholder}"
          ?required="${this.required}"
          ?readonly="${this.readOnly}"
          minlength="${ifDefined(minOrUndef)}"
          maxlength="${ifDefined(maxOrUndef)}"
          name="${ifDefined(this.name === '' ? undefined : this.name)}"
          inputmode="${ifDefined(this.inputMode)}"
          autocapitalize="${ifDefined(autocapitalizeOrUndef)}"
          @input="${this.handleInputChange}"
          @blur="${this.onInputBlur}">
      </textarea>`;
    }
}
__decorate([
    query('textarea')
], TextAreaBase.prototype, "formElement", void 0);
__decorate([
    property({ type: Number })
], TextAreaBase.prototype, "rows", void 0);
__decorate([
    property({ type: Number })
], TextAreaBase.prototype, "cols", void 0);
__decorate([
    property({ converter: booleanOrStringConverter })
], TextAreaBase.prototype, "charCounter", void 0);

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-LIcense-Identifier: Apache-2.0
 */
const styles = css `.mdc-text-field{height:100%}.mdc-text-field__input{resize:none}`;

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/** @soyCompatible */
let TextArea = class TextArea extends TextAreaBase {
};
TextArea.styles = [styles$1, styles];
TextArea = __decorate([
    customElement('mwc-textarea')
], TextArea);

export { TextArea };
