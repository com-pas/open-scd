import {
  customElement,
  html,
  LitElement,
} from 'lit-element';

import {
  bayIcon,
  circuitBreakerIcon,
  currentTransformerIcon,
  disconnectorIcon,
  earthSwitchIcon,
  generalConductingEquipmentIcon,
  gooseIcon,
  lineIcon,
  processIcon,
  smvIcon,
  substationIcon,
  voltageLevelIcon,
  voltageTransformerIcon
} from './icons.js';
import {
  automationLogicalNode,
  controlLogicalNode,
  functionalLogicalNode,
  furtherPowerSystemEquipmentLogicalNode,
  generalLogicalNode,
  interfacingLogicalNode,
  measurementLogicalNode,
  nonElectricalLogicalNode,
  powerTransformerLogicalNode,
  protectionLogicalNode,
  protectionRelatedLogicalNode,
  qualityLogicalNode,
  supervisionLogicalNode,
  switchgearLogicalNode,
  systemLogicalNode,
  transformerLogicalNode,
} from './lnode.js';

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

@customElement('custom-icon-lnode-automation')
export class CustomIconLNodeAutomation extends LitElement {
  render() {
    return html`${automationLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-control')
export class CustomIconLNodeControl extends LitElement {
  render() {
    return html`${controlLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-functional')
export class CustomIconLNodeFunctional extends LitElement {
  render() {
    return html`${functionalLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-furtherpowersystemequipment')
export class CustomIconLNodeFurtherPowerSystemEquipment extends LitElement {
  render() {
    return html`${furtherPowerSystemEquipmentLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-general')
export class CustomIconLNodeGeneral extends LitElement {
  render() {
    return html`${generalLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-interfacing')
export class CustomIconLNodeInterfacing extends LitElement {
  render() {
    return html`${interfacingLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-measurement')
export class CustomIconLNodeMeasurement extends LitElement {
  render() {
    return html`${measurementLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-nonelectrical')
export class CustomIconLNodeNonElectrical extends LitElement {
  render() {
    return html`${nonElectricalLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-powertransformer')
export class CustomIconLNodePowerTransformer extends LitElement {
  render() {
    return html`${powerTransformerLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-protection')
export class CustomIconLNodeProtection extends LitElement {
  render() {
    return html`${protectionLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-protectionrelated')
export class CustomIconLNodeProtectionRelated extends LitElement {
  render() {
    return html`${protectionRelatedLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-quality')
export class CustomIconLNodeQuality extends LitElement {
  render() {
    return html`${qualityLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-supervision')
export class CustomIconLNodeSupervision extends LitElement {
  render() {
    return html`${supervisionLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-switchgear')
export class CustomIconLNodeSwitchgear extends LitElement {
  render() {
    return html`${switchgearLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-system')
export class CustomIconLNodeSystem extends LitElement {
  render() {
    return html`${systemLogicalNode}`;
  }
}

@customElement('custom-icon-lnode-transformer')
export class CustomIconLNodeTransformer extends LitElement {
  render() {
    return html`${transformerLogicalNode}`;
  }
}
