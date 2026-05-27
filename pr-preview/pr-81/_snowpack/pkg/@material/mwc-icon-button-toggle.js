import { _ as __decorate } from '../common/tslib.es6-98fe39c2.js';
import { s as styles } from '../common/mwc-icon-button.css-49c6f539.js';
import { L as LitElement } from '../common/lit-element-5461ae81.js';
import { R as RippleHandlers } from '../common/ripple-handlers-82f0f67e.js';
import { a as ariaProperty } from '../common/aria-property-2938771c.js';
import { c as classMap } from '../common/class-map-6eff9d1d.js';
import { i as ifDefined } from '../common/if-defined-13a17272.js';
import { q as query, p as property, a as queryAsync, s as state, e as eventOptions, c as customElement } from '../common/decorators-4dc00f26.js';
import { h as html } from '../common/lit-html-4eb216a4.js';
import '../common/render-4cc4e0f1.js';
import '../common/ponyfill-44e20603.js';
import '../common/base-element-3e9360c3.js';
import '../common/foundation-48b716b8.js';
import '../common/foundation-7cea7f4a.js';
import '../common/style-map-51635f8f.js';

/** @soyCompatible */
class IconButtonToggleBase extends LitElement {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.onIcon = '';
        this.offIcon = '';
        this.on = false;
        this.shouldRenderRipple = false;
        this.rippleHandlers = new RippleHandlers(() => {
            this.shouldRenderRipple = true;
            return this.ripple;
        });
    }
    handleClick() {
        this.on = !this.on;
        this.dispatchEvent(new CustomEvent('icon-button-toggle-change', { detail: { isOn: this.on }, bubbles: true }));
    }
    click() {
        this.mdcRoot.focus();
        this.mdcRoot.click();
    }
    focus() {
        this.rippleHandlers.startFocus();
        this.mdcRoot.focus();
    }
    blur() {
        this.rippleHandlers.endFocus();
        this.mdcRoot.blur();
    }
    /** @soyTemplate */
    renderRipple() {
        return this.shouldRenderRipple ? html `
            <mwc-ripple
                .disabled="${this.disabled}"
                unbounded>
            </mwc-ripple>` :
            '';
    }
    /** @soyTemplate */
    render() {
        /** @classMap */
        const classes = {
            'mdc-icon-button--on': this.on,
        };
        const hasToggledAriaLabel = this.ariaLabelOn !== undefined && this.ariaLabelOff !== undefined;
        const ariaPressedValue = hasToggledAriaLabel ? undefined : this.on;
        const ariaLabelValue = hasToggledAriaLabel ?
            (this.on ? this.ariaLabelOn : this.ariaLabelOff) :
            this.ariaLabel;
        return html `<button
          class="mdc-icon-button ${classMap(classes)}"
          aria-pressed="${ifDefined(ariaPressedValue)}"
          aria-label="${ifDefined(ariaLabelValue)}"
          @click="${this.handleClick}"
          ?disabled="${this.disabled}"
          @focus="${this.handleRippleFocus}"
          @blur="${this.handleRippleBlur}"
          @mousedown="${this.handleRippleMouseDown}"
          @mouseenter="${this.handleRippleMouseEnter}"
          @mouseleave="${this.handleRippleMouseLeave}"
          @touchstart="${this.handleRippleTouchStart}"
          @touchend="${this.handleRippleDeactivate}"
          @touchcancel="${this.handleRippleDeactivate}"
        >${this.renderRipple()}
        <span class="mdc-icon-button__icon"
          ><slot name="offIcon"
            ><i class="material-icons">${this.offIcon}</i
          ></slot
        ></span>
        <span class="mdc-icon-button__icon mdc-icon-button__icon--on"
          ><slot name="onIcon"
            ><i class="material-icons">${this.onIcon}</i
          ></slot
        ></span>
      </button>`;
    }
    handleRippleMouseDown(event) {
        const onUp = () => {
            window.removeEventListener('mouseup', onUp);
            this.handleRippleDeactivate();
        };
        window.addEventListener('mouseup', onUp);
        this.rippleHandlers.startPress(event);
    }
    handleRippleTouchStart(event) {
        this.rippleHandlers.startPress(event);
    }
    handleRippleDeactivate() {
        this.rippleHandlers.endPress();
    }
    handleRippleMouseEnter() {
        this.rippleHandlers.startHover();
    }
    handleRippleMouseLeave() {
        this.rippleHandlers.endHover();
    }
    handleRippleFocus() {
        this.rippleHandlers.startFocus();
    }
    handleRippleBlur() {
        this.rippleHandlers.endFocus();
    }
}
__decorate([
    query('.mdc-icon-button')
], IconButtonToggleBase.prototype, "mdcRoot", void 0);
__decorate([
    ariaProperty,
    property({ type: String, attribute: 'aria-label' })
], IconButtonToggleBase.prototype, "ariaLabel", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "disabled", void 0);
__decorate([
    property({ type: String })
], IconButtonToggleBase.prototype, "onIcon", void 0);
__decorate([
    property({ type: String })
], IconButtonToggleBase.prototype, "offIcon", void 0);
__decorate([
    property({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOn", void 0);
__decorate([
    property({ type: String })
], IconButtonToggleBase.prototype, "ariaLabelOff", void 0);
__decorate([
    property({ type: Boolean, reflect: true })
], IconButtonToggleBase.prototype, "on", void 0);
__decorate([
    queryAsync('mwc-ripple')
], IconButtonToggleBase.prototype, "ripple", void 0);
__decorate([
    state()
], IconButtonToggleBase.prototype, "shouldRenderRipple", void 0);
__decorate([
    eventOptions({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleMouseDown", null);
__decorate([
    eventOptions({ passive: true })
], IconButtonToggleBase.prototype, "handleRippleTouchStart", null);

/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
let IconButtonToggle = class IconButtonToggle extends IconButtonToggleBase {
};
IconButtonToggle.styles = [styles];
IconButtonToggle = __decorate([
    customElement('mwc-icon-button-toggle')
], IconButtonToggle);

export { IconButtonToggle };
