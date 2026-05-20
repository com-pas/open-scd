import { _ as __decorate } from '../../../common/tslib.es6-98fe39c2.js';
import { L as LitElement, c as css } from '../../../common/lit-element-5461ae81.js';
import { h as html } from '../../../common/lit-html-4eb216a4.js';
import { p as property, c as customElement } from '../../../common/decorators-4dc00f26.js';
import '../../../common/render-4cc4e0f1.js';

let WizardDividerElement = class WizardDividerElement extends LitElement {
    render() {
        return html ` ${this.renderHeader()} ${this.renderSeparator()}`;
    }
    renderHeader() {
        if (!this.header) {
            return html ``;
        }
        return html `<h4 class="header">${this.header}</h4>`;
    }
    renderSeparator() {
        return html `<div role="separator"></div>`;
    }
};
WizardDividerElement.styles = css `
    div {
      height: 0px;
      margin: 10px 0px 10px 0px;
      border-top: none;
      border-right: none;
      border-left: none;
      border-image: initial;
      border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    }
  `;
__decorate([
    property({
        type: String,
    })
], WizardDividerElement.prototype, "header", void 0);
WizardDividerElement = __decorate([
    customElement('wizard-divider')
], WizardDividerElement);

export { WizardDividerElement };
