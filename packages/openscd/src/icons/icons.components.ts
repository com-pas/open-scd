import {
  customElement,
  html,
  LitElement,
} from 'lit-element';

import { bayIcon, substationIcon, voltageLevelIcon } from './icons.js';

@customElement('custom-icon-bay')
export class CustomIconBay extends LitElement {
  render() {
    return html`${bayIcon}`;
  }
}

@customElement('custom-icon-substation')
export class CustomIconSubstation extends LitElement {
  render() {
    return html`${substationIcon}`;
  }
}

@customElement('custom-icon-voltagelevel')
export class CustomIconVoltageLevel extends LitElement {
  render() {
    return html`${voltageLevelIcon}`;
  }
}
