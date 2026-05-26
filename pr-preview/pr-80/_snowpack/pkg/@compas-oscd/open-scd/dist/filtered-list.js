import { _ as __decorate } from '../../../common/tslib.es6-98fe39c2.js';
import { L as LitElement, c as css, u as unsafeCSS } from '../../../common/lit-element-5461ae81.js';
import { g as get } from '../../../common/directive-a7a30c9a.js';
import { h as html } from '../../../common/lit-html-4eb216a4.js';
import '../../../@material/mwc-checkbox.js';
import '../../../@material/mwc-formfield.js';
import '../../../@material/mwc-textfield.js';
import { L as List } from '../../../common/mwc-list-c22bf91e.js';
import { CheckListItem } from '../../../@material/mwc-list/mwc-check-list-item.js';
import { p as property, s as state, q as query, c as customElement } from '../../../common/decorators-4dc00f26.js';
import '../../../common/render-4cc4e0f1.js';
import '../../../common/ripple-handlers-82f0f67e.js';
import '../../../common/ponyfill-44e20603.js';
import '../../../common/base-element-3e9360c3.js';
import '../../../common/foundation-48b716b8.js';
import '../../../common/foundation-7cea7f4a.js';
import '../../../common/class-map-6eff9d1d.js';
import '../../../common/style-map-51635f8f.js';
import '../../../common/aria-property-2938771c.js';
import '../../../common/form-element-0ea6e1a1.js';
import '../../../common/if-defined-13a17272.js';
import '../../../common/observer-6d1a3681.js';
import '../../../common/mwc-textfield.css-ba74a99b.js';
import '../../../common/mwc-line-ripple-directive-730e65d9.js';
import '../../../common/directive-9b648152.js';
import '../../../common/live-10079619.js';
import '../../../@material/mwc-list/mwc-list-item.js';
import '../../../common/mwc-list-item.css-1c43f8ad.js';
import '../../../common/mwc-control-list-item.css-0af97e58.js';

function slotItem(item) {
    if (!item.closest('filtered-list') || !item.parentElement)
        return item;
    if (item.parentElement instanceof FilteredList)
        return item;
    return slotItem(item.parentElement);
}
function hideFiltered(item, searchText) {
    const itemInnerText = item.innerText + '\n';
    const childInnerText = Array.from(item.children)
        .map(child => child.innerText)
        .join('\n');
    const value = item.value;
    const filterTarget = (itemInnerText +
        childInnerText +
        value).toUpperCase();
    const terms = searchText
        .toUpperCase()
        .replace(/[.+^${}()|[\]\\]/g, '\\$&')
        .trim()
        .split(/\s+/g);
    (terms.length === 1 && terms[0] === '') ||
        terms.every(term => {
            // regexp escape
            const reTerm = new RegExp(`*${term}*`.replace(/\*/g, '.*').replace(/\?/g, '.{1}'), 'i');
            return reTerm.test(filterTarget);
        })
        ? slotItem(item).classList.remove('hidden')
        : slotItem(item).classList.add('hidden');
}
/**
 * A mwc-list with mwc-textfield that filters the list items for given or separated terms
 */
let FilteredList = class FilteredList extends LitElement {
    get existCheckListItem() {
        return this.items.some(item => item instanceof CheckListItem);
    }
    get isAllSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .every(checkItem => checkItem.selected);
    }
    get isSomeSelected() {
        return this.items
            .filter(item => !item.disabled)
            .filter(item => item instanceof CheckListItem)
            .some(checkItem => checkItem.selected);
    }
    get items() {
        return this.list?.items ?? [];
    }
    get selected() {
        return this.list.selected;
    }
    get index() {
        return this.list.index;
    }
    onCheckAll() {
        const select = !this.isAllSelected;
        this.items
            .filter(item => !item.disabled && !item.classList.contains('hidden'))
            .forEach(item => (item.selected = select));
    }
    onFilterInput() {
        Array.from(this.querySelectorAll('mwc-list-item, mwc-check-list-item, mwc-radio-list-item')).forEach(item => hideFiltered(item, this.searchField.value));
    }
    layout(updateItems) {
        this.list.layout(updateItems);
    }
    update(changedProperties) {
        super.update(changedProperties);
        // regenerate filtering of text
        this.onFilterInput();
    }
    constructor() {
        super();
        /** Whether the check all option (checkbox next to search text field) is activated */
        this.disableCheckAll = false;
        this.multi = false;
        this.activatable = false;
        this.addEventListener('selected', () => {
            this.requestUpdate();
        });
    }
    firstUpdated(_changedProperties) {
        this.requestUpdate();
    }
    renderCheckAll() {
        return this.existCheckListItem && !this.disableCheckAll
            ? html `<mwc-formfield class="checkall"
          ><mwc-checkbox
            ?indeterminate=${!this.isAllSelected && this.isSomeSelected}
            ?checked=${this.isAllSelected}
            @change=${() => {
                this.onCheckAll();
            }}
          ></mwc-checkbox
        ></mwc-formfield>`
            : html ``;
    }
    render() {
        return html `<div id="tfcontainer">
        <abbr title="${this.searchFieldLabel ?? get('filter')}"
          ><mwc-textfield
            label="${this.searchFieldLabel ?? ''}"
            iconTrailing="search"
            outlined
            @input=${() => this.onFilterInput()}
          ></mwc-textfield
        ></abbr>
        ${this.renderCheckAll()}
      </div>
      <mwc-list
        .multi=${this.multi}
        .activatable=${this.activatable}>
        <slot></slot>
      </mwc-list>`;
    }
};
FilteredList.styles = css `
    ${unsafeCSS(List.styles)}

    #tfcontainer {
      display: flex;
      flex: auto;
    }

    ::slotted(.hidden) {
      display: none;
    }

    abbr {
      display: flex;
      flex: auto;
      margin: 8px;
      text-decoration: none;
      border-bottom: none;
    }

    mwc-textfield {
      width: 100%;
      --mdc-shape-small: 28px;
    }

    mwc-formfield.checkall {
      padding-right: 8px;
    }

    .mdc-list {
      padding-inline-start: 0px;
    }
  `;
__decorate([
    property({ type: String })
], FilteredList.prototype, "searchFieldLabel", void 0);
__decorate([
    property({ type: Boolean })
], FilteredList.prototype, "disableCheckAll", void 0);
__decorate([
    property({ type: Boolean })
], FilteredList.prototype, "multi", void 0);
__decorate([
    property({ type: Boolean })
], FilteredList.prototype, "activatable", void 0);
__decorate([
    state()
], FilteredList.prototype, "existCheckListItem", null);
__decorate([
    state()
], FilteredList.prototype, "isAllSelected", null);
__decorate([
    state()
], FilteredList.prototype, "isSomeSelected", null);
__decorate([
    query('mwc-textfield')
], FilteredList.prototype, "searchField", void 0);
__decorate([
    query('mwc-list')
], FilteredList.prototype, "list", void 0);
FilteredList = __decorate([
    customElement('filtered-list')
], FilteredList);

export { FilteredList };
