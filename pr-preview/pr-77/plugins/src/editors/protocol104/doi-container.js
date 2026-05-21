var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {
  css,
  customElement,
  html,
  property,
  state
} from "../../../../_snowpack/pkg/lit-element.js";
import {get} from "../../../../_snowpack/pkg/lit-translate.js";
import {nothing} from "../../../../_snowpack/pkg/lit-html.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/icon/oscd-icon.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/iconbutton/oscd-icon-button.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/list/oscd-list-item.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/list/oscd-list.js";
import {newWizardEvent} from "../../../../_snowpack/link/packages/openscd/dist/foundation.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/action-pane/oscd-action-pane.js";
import {
  get104DetailsLine,
  getCdcValueFromDOIElement,
  getFullPath
} from "./foundation/foundation.js";
import {editAddressWizard} from "./wizards/address.js";
import {showDOIInfoWizard} from "./wizards/doi.js";
import {PROTOCOL_104_PRIVATE} from "./foundation/private.js";
import {Base104Container} from "./base-container.js";
export let Doi104Container = class extends Base104Container {
  constructor() {
    super(...arguments);
    this.isExpanded = true;
  }
  get daiElements() {
    return Array.from(this.element.querySelectorAll(`DAI`)).filter((daiElement) => daiElement.querySelector(`Private[type="${PROTOCOL_104_PRIVATE}"] > Address`) !== null).sort((dai1, dai2) => getFullPath(dai1, "DOI").localeCompare(getFullPath(dai2, "DOI")));
  }
  getAddressElements(daiElement) {
    return Array.from(daiElement.querySelectorAll(`Private[type="${PROTOCOL_104_PRIVATE}"] > Address`)).sort((addr1, addr2) => (addr1.getAttribute("casdu") ?? "").localeCompare(addr2.getAttribute("casdu") ?? "") && (addr1.getAttribute("ioa") ?? "").localeCompare(addr2.getAttribute("ioa") ?? ""));
  }
  firstUpdated() {
    this.requestUpdate();
  }
  openEditAddressWizard(daiElement, addressElement) {
    const doiElement = daiElement.closest("DOI");
    const iedElement = doiElement.closest("IED");
    this.dispatchEvent(newWizardEvent(editAddressWizard(iedElement, doiElement, daiElement, addressElement)));
  }
  openEditTiWizard() {
    this.dispatchEvent(newWizardEvent(showDOIInfoWizard(this.element)));
  }
  get header() {
    const fullPath = getFullPath(this.element, "IED");
    const cdc = getCdcValueFromDOIElement(this.element);
    return `${fullPath}${cdc ? ` (${cdc})` : ""}`;
  }
  renderAddressList(daiElement) {
    const addresses = this.getAddressElements(daiElement);
    return html`${addresses.map((addressElement) => {
      return html`
        <oscd-list-item graphic="icon" hasMeta>
          <span slot="graphic">&nbsp;</span>
          <span>${get104DetailsLine(daiElement, addressElement)}</span>
          <span slot="end">
            <oscd-icon-button
              @click=${() => this.openEditAddressWizard(daiElement, addressElement)}
            >
              <oscd-icon>edit</oscd-icon>
            </oscd-icon-button>
          </span>
        </oscd-list-item>
      `;
    })}`;
  }
  renderDaiList() {
    const daiElements = this.daiElements;
    return html`${daiElements.map((daiElement) => {
      return html`
        <oscd-list-item noninteractive>
          <span>${getFullPath(daiElement, "DOI")}</span>
        </oscd-list-item>
        ${this.renderAddressList(daiElement)}
      `;
    })}`;
  }
  render() {
    return html`
      <oscd-action-pane .label="${this.header}">
        <abbr slot="action" title="${get("edit")}">
          <oscd-icon-button @click=${() => this.openEditTiWizard()}>
            <oscd-icon>info</oscd-icon>
          </oscd-icon-button>
        </abbr>
        <abbr slot="action" title="${get("protocol104.toggleChildElements")}">
          <oscd-icon-button toggle selected @click=${() => this.isExpanded = !this.isExpanded}>
            <oscd-icon>keyboard_arrow_up</oscd-icon>
            <oscd-icon slot="selected">keyboard_arrow_down</oscd-icon>
          </oscd-icon-button>
        </abbr>
        ${this.isExpanded ? html` <oscd-list id="dailist"> ${this.renderDaiList()} </oscd-list>` : nothing}
      </oscd-action-pane>
    `;
  }
};
Doi104Container.styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }

    oscd-list-item {
      --mdc-list-item-meta-size: 48px;
    }
  `;
__decorate([
  property()
], Doi104Container.prototype, "element", 2);
__decorate([
  state()
], Doi104Container.prototype, "isExpanded", 2);
__decorate([
  property()
], Doi104Container.prototype, "daiElements", 1);
__decorate([
  property()
], Doi104Container.prototype, "header", 1);
Doi104Container = __decorate([
  customElement("doi-104-container")
], Doi104Container);
