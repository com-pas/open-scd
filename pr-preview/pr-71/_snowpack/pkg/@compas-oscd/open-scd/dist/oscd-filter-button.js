import { _ as __decorate } from '../../../common/tslib.es6-98fe39c2.js';
import { c as css, u as unsafeCSS } from '../../../common/lit-element-5461ae81.js';
import { g as get } from '../../../common/directive-a7a30c9a.js';
import { h as html } from '../../../common/lit-html-4eb216a4.js';
import '../../../@material/mwc-icon-button.js';
import '../../../@material/mwc-dialog.js';
import { FilteredList } from './filtered-list.js';
import { p as property, q as query, c as customElement } from '../../../common/decorators-4dc00f26.js';
import '../../../common/render-4cc4e0f1.js';
import '../../../common/ripple-handlers-2afcbc81.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/base-element-2b8c8577.js';
import '../../../common/foundation-48b716b8.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/class-map-6eff9d1d.js';
import '../../../common/style-map-51635f8f.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/mwc-icon-button.css-49c6f539.js';
import '../../../common/inert.esm-5c96ec71.js';
import '../../../common/events-6d89b998.js';
import '../../../common/observer-6d1a3681.js';
import '../../../@material/mwc-checkbox.js';
import '../../../common/form-element-9a3959ff.js';
import '../../../common/if-defined-13a17272.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-textfield.js';
import '../../../common/mwc-textfield.css-f2c91549.js';
import '../../../common/mwc-line-ripple-directive-1af05b5b.js';
import '../../../common/directive-9b648152.js';
import '../../../common/live-10079619.js';
import '../../../@material/mwc-list.js';
import '../../../common/mwc-list-base-42ccf834.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../common/mwc-list-item.css-d1bcf766.js';
import '../../../@material/mwc-list/mwc-check-list-item.js';
import '../../../common/mwc-control-list-item.css-0af97e58.js';

/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
let FilterButton = class FilterButton extends FilteredList {
    constructor() {
        super(...arguments);
        this.disabled = false;
    }
    toggleList() {
        this.filterDialog.show();
    }
    onClosing() {
        const selectedItems = [];
        if (this.selected) {
            if (this.selected instanceof Array) {
                this.selected.forEach(item => selectedItems.push(item.value));
            }
            else {
                selectedItems.push(this.selected.value);
            }
            this.dispatchEvent(newSelectedItemsChangedEvent(selectedItems));
        }
    }
    render() {
        return html `
      <mwc-icon-button
        icon="${this.icon}"
        @click="${this.toggleList}"
        ?disabled="${this.disabled}"
      >
        <slot name="icon"></slot>
      </mwc-icon-button>
      <mwc-dialog
        id="filterDialog"
        heading="${this.header ? this.header : get('filter')}"
        scrimClickAction=""
        @closing="${() => this.onClosing()}"
      >
        ${super.render()}
        <mwc-button slot="primaryAction" dialogAction="close">
          ${get('close')}
        </mwc-button>
      </mwc-dialog>
    `;
    }
};
FilterButton.styles = css `
    ${unsafeCSS(FilteredList.styles)}

    mwc-icon-button {
      color: var(--mdc-theme-on-surface);
    }

    mwc-dialog {
      --mdc-dialog-max-height: calc(100vh - 150px);
    }
  `;
__decorate([
    property()
], FilterButton.prototype, "header", void 0);
__decorate([
    property()
], FilterButton.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean })
], FilterButton.prototype, "disabled", void 0);
__decorate([
    query('#filterDialog')
], FilterButton.prototype, "filterDialog", void 0);
FilterButton = __decorate([
    customElement('oscd-filter-button')
], FilterButton);
function newSelectedItemsChangedEvent(selectedItems, eventInitDict) {
    return new CustomEvent('selected-items-changed', {
        bubbles: true,
        composed: true,
        ...eventInitDict,
        detail: { selectedItems, ...eventInitDict?.detail },
    });
}

export { FilterButton };
