import { O as OscdRipple, a as OscdFocusRing } from '../../../common/OscdRipple-aad56d37.js';
import { e as __decorate } from '../../../common/tslib.es6-52cb4f42.js';
import { s, i } from '../../../common/lit-element-7082a332.js';
import { h as html, n as nothing } from '../../../common/lit-html-487c1dfc.js';
import { m as mixinDelegatesAria, n, e, a as e$1 } from '../../../common/delegate-fc821087.js';
import { i as isActivationClick, d as dispatchActivationClick } from '../../../common/form-label-activation-f67019d7.js';
import { r as redispatchEvent } from '../../../common/redispatch-event-275085a6.js';
import { m as mixinConstraintValidation, a as mixinFormAssociated, g as getFormValue, b as getFormState, c as createValidator, d as getValidityAnchor } from '../../../common/validator-8f5e2b97.js';
import { m as mixinElementInternals } from '../../../common/element-internals-ec6d8159.js';
import { C as CheckboxValidator } from '../../../common/checkbox-validator-670db870.js';
import { S as ScopedElementsMixin } from '../../../common/lit-element-ce8266a9.js';
import '../../../common/render-d4c46927.js';
import '../../../common/base-21048669.js';

/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * A symbol used to access dispatch hooks on an event.
 */
const dispatchHooks = Symbol('dispatchHooks');
/**
 * Add a hook for an event that is called after the event is dispatched and
 * propagates to other event listeners.
 *
 * This is useful for behaviors that need to check if an event is canceled.
 *
 * The callback is invoked synchronously, which allows for better integration
 * with synchronous platform APIs (like `<form>` or `<label>` clicking).
 *
 * Note: `setupDispatchHooks()` must be called on the element before adding any
 * other event listeners. Call it in the constructor of an element or
 * controller.
 *
 * @example
 * ```ts
 * class MyControl extends LitElement {
 *   constructor() {
 *     super();
 *     setupDispatchHooks(this, 'click');
 *     this.addEventListener('click', event => {
 *       afterDispatch(event, () => {
 *         if (event.defaultPrevented) {
 *           return
 *         }
 *
 *         // ... perform logic
 *       });
 *     });
 *   }
 * }
 * ```
 *
 * @example
 * ```ts
 * class MyController implements ReactiveController {
 *   constructor(host: ReactiveElement) {
 *     // setupDispatchHooks() may be called multiple times for the same
 *     // element and events, making it safe for multiple controllers to use it.
 *     setupDispatchHooks(host, 'click');
 *     host.addEventListener('click', event => {
 *       afterDispatch(event, () => {
 *         if (event.defaultPrevented) {
 *           return;
 *         }
 *
 *         // ... perform logic
 *       });
 *     });
 *   }
 * }
 * ```
 *
 * @param event The event to add a hook to.
 * @param callback A hook that is called after the event finishes dispatching.
 */
function afterDispatch(event, callback) {
    const hooks = event[dispatchHooks];
    if (!hooks) {
        throw new Error(`'${event.type}' event needs setupDispatchHooks().`);
    }
    hooks.addEventListener('after', callback);
}
/**
 * A lookup map of elements and event types that have a dispatch hook listener
 * set up. Used to ensure we don't set up multiple hook listeners on the same
 * element for the same event.
 */
const ELEMENT_DISPATCH_HOOK_TYPES = new WeakMap();
/**
 * Sets up an element to add dispatch hooks to given event types. This must be
 * called before adding any event listeners that need to use dispatch hooks
 * like `afterDispatch()`.
 *
 * This function is safe to call multiple times with the same element or event
 * types. Call it in the constructor of elements, mixins, and controllers to
 * ensure it is set up before external listeners.
 *
 * @example
 * ```ts
 * class MyControl extends LitElement {
 *   constructor() {
 *     super();
 *     setupDispatchHooks(this, 'click');
 *     this.addEventListener('click', this.listenerUsingAfterDispatch);
 *   }
 * }
 * ```
 *
 * @param element The element to set up event dispatch hooks for.
 * @param eventTypes The event types to add dispatch hooks to.
 */
function setupDispatchHooks(element, ...eventTypes) {
    let typesAlreadySetUp = ELEMENT_DISPATCH_HOOK_TYPES.get(element);
    if (!typesAlreadySetUp) {
        typesAlreadySetUp = new Set();
        ELEMENT_DISPATCH_HOOK_TYPES.set(element, typesAlreadySetUp);
    }
    for (const eventType of eventTypes) {
        // Don't register multiple dispatch hook listeners. A second registration
        // would lead to the second listener re-dispatching a re-dispatched event,
        // which can cause an infinite loop inside the other one.
        if (typesAlreadySetUp.has(eventType)) {
            continue;
        }
        // When we re-dispatch the event, it's going to immediately trigger this
        // listener again. Use a flag to ignore it.
        let isRedispatching = false;
        element.addEventListener(eventType, (event) => {
            if (isRedispatching) {
                return;
            }
            // Do not let the event propagate to any other listener (not just
            // bubbling listeners with `stopPropagation()`).
            event.stopImmediatePropagation();
            // Make a copy.
            const eventCopy = Reflect.construct(event.constructor, [
                event.type,
                event,
            ]);
            // Add hooks onto the event.
            const hooks = new EventTarget();
            eventCopy[dispatchHooks] = hooks;
            // Re-dispatch the event. We can't reuse `redispatchEvent()` since we
            // need to add the hooks to the copy before it's dispatched.
            isRedispatching = true;
            const dispatched = element.dispatchEvent(eventCopy);
            isRedispatching = false;
            if (!dispatched) {
                event.preventDefault();
            }
            // Synchronously call afterDispatch() hooks.
            hooks.dispatchEvent(new Event('after'));
        }, {
            // Ensure this listener runs before other listeners.
            // `setupDispatchHooks()` should be called in constructors to also
            // ensure they run before any other externally-added capture listeners.
            capture: true,
        });
        typesAlreadySetUp.add(eventType);
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
// Separate variable needed for closure.
const switchBaseClass = mixinDelegatesAria(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(s))));
/**
 * @fires input {InputEvent} Fired whenever `selected` changes due to user
 * interaction (bubbles and composed).
 * @fires change {Event} Fired whenever `selected` changes due to user
 * interaction (bubbles).
 */
class Switch extends switchBaseClass {
    constructor() {
        super();
        /**
         * Puts the switch in the selected state and sets the form submission value to
         * the `value` property.
         */
        this.selected = false;
        /**
         * Shows both the selected and deselected icons.
         */
        this.icons = false;
        /**
         * Shows only the selected icon, and not the deselected icon. If `true`,
         * overrides the behavior of the `icons` property.
         */
        this.showOnlySelectedIcon = false;
        /**
         * When true, require the switch to be selected when participating in
         * form submission.
         *
         * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox#validation
         */
        this.required = false;
        /**
         * The value associated with this switch on form submission. `null` is
         * submitted when `selected` is `false`.
         */
        this.value = 'on';
        // This click listener does not currently need dispatch hooks since it does
        // not check `event.defaultPrevented`.
        this.addEventListener('click', (event) => {
            if (!isActivationClick(event) || !this.input) {
                return;
            }
            this.focus();
            dispatchActivationClick(this.input);
        });
        // Add the aria keyboard interaction pattern for switch and the Enter key.
        // See https://www.w3.org/WAI/ARIA/apg/patterns/switch/.
        setupDispatchHooks(this, 'keydown');
        this.addEventListener('keydown', (event) => {
            afterDispatch(event, () => {
                const ignoreEvent = event.defaultPrevented || event.key !== 'Enter';
                if (ignoreEvent || this.disabled || !this.input) {
                    return;
                }
                this.input.click();
            });
        });
    }
    render() {
        return html `
      <div class="switch ${e$1(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel || nothing}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `;
    }
    getRenderClasses() {
        return {
            'selected': this.selected,
            'unselected': !this.selected,
            'disabled': this.disabled,
        };
    }
    renderHandle() {
        const classes = {
            'with-icon': this.showOnlySelectedIcon ? this.selected : this.icons,
        };
        return html `
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${e$1(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : html ``}
        </span>
      </span>
    `;
    }
    renderIcons() {
        return html `
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? html `` : this.renderOffIcon()}
      </div>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOnIcon() {
        return html `
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `;
    }
    /**
     * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
     */
    renderOffIcon() {
        return html `
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `;
    }
    renderTouchTarget() {
        return html `<span class="touch"></span>`;
    }
    shouldShowIcons() {
        return this.icons || this.showOnlySelectedIcon;
    }
    handleInput(event) {
        const target = event.target;
        this.selected = target.checked;
        // <input> 'input' event bubbles and is composed, don't re-dispatch it.
    }
    handleChange(event) {
        // <input> 'change' event is not composed, re-dispatch it.
        redispatchEvent(this, event);
    }
    [getFormValue]() {
        return this.selected ? this.value : null;
    }
    [getFormState]() {
        return String(this.selected);
    }
    formResetCallback() {
        // The selected property does not reflect, so the original attribute set by
        // the user is used to determine the default value.
        this.selected = this.hasAttribute('selected');
    }
    formStateRestoreCallback(state) {
        this.selected = state === 'true';
    }
    [createValidator]() {
        return new CheckboxValidator(() => ({
            checked: this.selected,
            required: this.required,
        }));
    }
    [getValidityAnchor]() {
        return this.input;
    }
}
/** @nocollapse */
Switch.shadowRootOptions = {
    mode: 'open',
    delegatesFocus: true,
};
__decorate([
    n({ type: Boolean })
], Switch.prototype, "selected", void 0);
__decorate([
    n({ type: Boolean })
], Switch.prototype, "icons", void 0);
__decorate([
    n({ type: Boolean, attribute: 'show-only-selected-icon' })
], Switch.prototype, "showOnlySelectedIcon", void 0);
__decorate([
    n({ type: Boolean })
], Switch.prototype, "required", void 0);
__decorate([
    n()
], Switch.prototype, "value", void 0);
__decorate([
    e('input')
], Switch.prototype, "input", void 0);

/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
const styles = i `@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;

/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
/**
 * @tagname oscd-switch
 * @summary Switches toggle the state of a single item on or off.
 *
 * There's one type of switch in Material. Use this selection control when the
 * user needs to toggle a single item on or off.
 *
 * @final
 * @suppress {visibility}
 */
class OscdSwitch extends ScopedElementsMixin(Switch) {
}
OscdSwitch.scopedElements = {
    'md-ripple': OscdRipple,
    'md-focus-ring': OscdFocusRing,
};
OscdSwitch.styles = [styles];

/*
 * GENERATED SOURCE FILE. DO NOT MODIFY.
 * Modifications will be overwritten.
 * To prevent this file from being overwritten, remove this comment entirely.
 */
customElements.define('oscd-switch', OscdSwitch);

export { OscdSwitch };
