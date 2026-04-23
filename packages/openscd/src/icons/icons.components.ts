import {
  customElement,
  html,
  LitElement,
} from 'lit-element';

import { bayIcon, circuitBreakerIcon, currentTransformerIcon, disconnectorIcon, earthSwitchIcon, generalConductingEquipmentIcon, gooseIcon, lineIcon, processIcon, smvIcon, substationIcon, voltageLevelIcon, voltageTransformerIcon } from './icons.js';

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

@customElement('custom-icon-circuitbreaker')
export class CustomIconCircuitBreaker extends LitElement {
  render() {
    return html`${circuitBreakerIcon}`;
  }
}

@customElement('custom-icon-disconnector')
export class CustomIconDisconnector extends LitElement {
  render() {
    return html`${disconnectorIcon}`;
  }
}

@customElement('custom-icon-currenttransformer')
export class CustomIconCurrentTransformer extends LitElement {
  render() {
    return html`${currentTransformerIcon}`;
  }
}

@customElement('custom-icon-voltagetransformer')
export class CustomIconVoltageTransformer extends LitElement {
  render() {
    return html`${voltageTransformerIcon}`;
  }
}

@customElement('custom-icon-earthswitch')
export class CustomIconEarthSwitch extends LitElement {
  render() {
    return html`${earthSwitchIcon}`;
  }
}

@customElement('custom-icon-generalconductingequipment')
export class CustomIconGeneralConductingEquipment extends LitElement {
  render() {
    return html`${generalConductingEquipmentIcon}`;
  }
}

@customElement('custom-icon-goose')
export class CustomIconGoose extends LitElement {
  render() {
    return html`${gooseIcon}`;
  }
}

@customElement('custom-icon-smv')
export class CustomIconSmv extends LitElement {
  render() {
    return html`${smvIcon}`;
  }
}

@customElement('custom-icon-line')
export class CustomIconLine extends LitElement {
  render() {
    return html`${lineIcon}`;
  }
}

@customElement('custom-icon-process')
export class CustomIconProcess extends LitElement {
  render() {
    return html`${processIcon}`;
  }
}
