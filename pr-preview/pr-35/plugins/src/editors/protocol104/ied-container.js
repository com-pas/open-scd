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
import {
  getDescriptionAttribute,
  getNameAttribute
} from "../../../../_snowpack/link/packages/openscd/dist/foundation.js";
import "../../../../_snowpack/pkg/@omicronenergy/oscd-ui/action-pane/oscd-action-pane.js";
import {getFullPath} from "./foundation/foundation.js";
import "./doi-container.js";
import {PROTOCOL_104_PRIVATE} from "./foundation/private.js";
import {Base104Container} from "./base-container.js";
export let Ied104Container = class extends Base104Container {
  constructor() {
    super(...arguments);
    this.isExpanded = true;
  }
  get doiElements() {
    return Array.from(this.element.querySelectorAll(`DOI`)).filter((doiElement) => doiElement.querySelector(`DAI > Private[type="${PROTOCOL_104_PRIVATE}"] > Address`) !== null).sort((doi1, doi2) => getFullPath(doi1, "IED").localeCompare(getFullPath(doi2, "IED")));
  }
  firstUpdated() {
    this.requestUpdate();
  }
  get header() {
    const name = getNameAttribute(this.element);
    const desc = getDescriptionAttribute(this.element);
    return `${name}${desc ? ` — ${desc}` : ""}`;
  }
  renderDoiList() {
    const dois = this.doiElements;
    return html`${dois.map((doiElement) => {
      return html`
        <doi-104-container
          .editCount=${this.editCount}
          .doc="${this.doc}"
          .element="${doiElement}"
        >
        </doi-104-container>
      `;
    })}`;
  }
  render() {
    return html`
      <oscd-action-pane .label="${this.header}">
        <oscd-icon slot="icon">developer_board</oscd-icon>
        <abbr slot="action" title="${get("protocol104.toggleChildElements")}">
          <oscd-icon-button toggle selected @click=${() => this.isExpanded = !this.isExpanded}>
            <oscd-icon>keyboard_arrow_up</oscd-icon>
            <oscd-icon slot="selected">keyboard_arrow_down</oscd-icon>
          </oscd-icon-button>
        </abbr>
        ${this.isExpanded ? html`${this.renderDoiList()}` : nothing}
      </oscd-action-pane>
    `;
  }
};
Ied104Container.styles = css`
    abbr {
      text-decoration: none;
      border-bottom: none;
    }
  `;
__decorate([
  property()
], Ied104Container.prototype, "element", 2);
__decorate([
  state()
], Ied104Container.prototype, "isExpanded", 2);
__decorate([
  property()
], Ied104Container.prototype, "doiElements", 1);
__decorate([
  property()
], Ied104Container.prototype, "header", 1);
Ied104Container = __decorate([
  customElement("ied-104-container")
], Ied104Container);
