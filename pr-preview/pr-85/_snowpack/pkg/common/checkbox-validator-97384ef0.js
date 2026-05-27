import { V as Validator } from './validator-a440a0ea.js';

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A validator that provides constraint validation that emulates
 * `<input type="checkbox">` validation.
 */
class CheckboxValidator extends Validator {
    computeValidity(state) {
        if (!this.checkboxControl) {
            // Lazily create the platform input
            this.checkboxControl = document.createElement('input');
            this.checkboxControl.type = 'checkbox';
        }
        this.checkboxControl.checked = state.checked;
        this.checkboxControl.required = state.required;
        return {
            validity: this.checkboxControl.validity,
            validationMessage: this.checkboxControl.validationMessage,
        };
    }
    equals(prev, next) {
        return prev.checked === next.checked && prev.required === next.required;
    }
    copy({ checked, required }) {
        return { checked, required };
    }
}

export { CheckboxValidator as C };
