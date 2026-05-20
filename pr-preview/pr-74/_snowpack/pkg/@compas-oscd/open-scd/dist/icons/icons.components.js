import { _ as __decorate } from '../../../../common/tslib.es6-98fe39c2.js';
import { L as LitElement } from '../../../../common/lit-element-5461ae81.js';
import { b as bayIcon, s as substationIcon, v as voltageLevelIcon, c as circuitBreakerIcon, d as disconnectorIcon, a as currentTransformerIcon, e as voltageTransformerIcon, f as earthSwitchIcon, g as generalConductingEquipmentIcon, h as gooseIcon, i as smvIcon, l as lineIcon, p as processIcon } from '../../../../common/icons-5878fb5c.js';
import { s as svg, h as html } from '../../../../common/lit-html-4eb216a4.js';
import { c as customElement } from '../../../../common/decorators-4dc00f26.js';
import '../../../../common/render-4cc4e0f1.js';

const systemLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11V15H15V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const automationLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V17H13V13H11V17H9V9A2,2 0 0,1 11,7M11,9V11H13V9H11M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z" />
</svg>`;
const controlLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H13A2,2 0 0,1 15,9V10H13V9H11V15H13V14H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const functionalLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H11V11H14V13H11V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const generalLogicalNode = svg `<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V15H13V11H15V15A2,2 0 0,1 13,17H11A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const interfacingLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M14,7V9H13V15H14V17H10V15H11V9H10V7H14M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const nonElectricalLogicalNode = svg `<svg viewBox="0 0 24 24">
<path fill="currentColor" d="M9,7H11V10.33L13,7H15L12,12L15,17H13L11,13.67V17H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const measurementLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15A2,2 0 0,1 17,9V17H15V9H13V16H11V9H9V17H7V9A2,2 0 0,1 9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const protectionLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11A2,2 0 0,1 13,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const qualityLogicalNode = svg `<svg  viewBox="0 0 24 24">
    <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4M11,7H13A2,2 0 0,1 15,9V15A2,2 0 0,1 13,17V19H11V17A2,2 0 0,1 9,15V9A2,2 0 0,1 11,7M11,9V15H13V9H11Z" />
</svg>`;
const protectionRelatedLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H13A2,2 0 0,1 15,9V11C15,11.84 14.5,12.55 13.76,12.85L15,17H13L11.8,13H11V17H9V7M11,9V11H13V9H11M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12C4,16.41 7.58,20 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const supervisionLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M11,7H15V9H11V11H13A2,2 0 0,1 15,13V15A2,2 0 0,1 13,17H9V15H13V13H11A2,2 0 0,1 9,11V9A2,2 0 0,1 11,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const transformerLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9H13V17H11V9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const switchgearLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,9.5L13,7H15L13,12L15,17H13L12,14.5L11,17H9L11,12L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const powerTransformerLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H11L12,10L13,7H15L13,13V17H11V13L9,7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;
const furtherPowerSystemEquipmentLogicalNode = svg `<svg viewBox="0 0 24 24">
    <path fill="currentColor" d="M9,7H15V9L11,15H15V17H9V15L13,9H9V7M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4Z" />
</svg>`;

let CustomIconBay = class CustomIconBay extends LitElement {
    render() {
        return html `${bayIcon}`;
    }
};
CustomIconBay = __decorate([
    customElement('custom-icon-bay')
], CustomIconBay);
let CustomIconSubstation = class CustomIconSubstation extends LitElement {
    render() {
        return html `${substationIcon}`;
    }
};
CustomIconSubstation = __decorate([
    customElement('custom-icon-substation')
], CustomIconSubstation);
let CustomIconVoltageLevel = class CustomIconVoltageLevel extends LitElement {
    render() {
        return html `${voltageLevelIcon}`;
    }
};
CustomIconVoltageLevel = __decorate([
    customElement('custom-icon-voltagelevel')
], CustomIconVoltageLevel);
let CustomIconCircuitBreaker = class CustomIconCircuitBreaker extends LitElement {
    render() {
        return html `${circuitBreakerIcon}`;
    }
};
CustomIconCircuitBreaker = __decorate([
    customElement('custom-icon-circuitbreaker')
], CustomIconCircuitBreaker);
let CustomIconDisconnector = class CustomIconDisconnector extends LitElement {
    render() {
        return html `${disconnectorIcon}`;
    }
};
CustomIconDisconnector = __decorate([
    customElement('custom-icon-disconnector')
], CustomIconDisconnector);
let CustomIconCurrentTransformer = class CustomIconCurrentTransformer extends LitElement {
    render() {
        return html `${currentTransformerIcon}`;
    }
};
CustomIconCurrentTransformer = __decorate([
    customElement('custom-icon-currenttransformer')
], CustomIconCurrentTransformer);
let CustomIconVoltageTransformer = class CustomIconVoltageTransformer extends LitElement {
    render() {
        return html `${voltageTransformerIcon}`;
    }
};
CustomIconVoltageTransformer = __decorate([
    customElement('custom-icon-voltagetransformer')
], CustomIconVoltageTransformer);
let CustomIconEarthSwitch = class CustomIconEarthSwitch extends LitElement {
    render() {
        return html `${earthSwitchIcon}`;
    }
};
CustomIconEarthSwitch = __decorate([
    customElement('custom-icon-earthswitch')
], CustomIconEarthSwitch);
let CustomIconGeneralConductingEquipment = class CustomIconGeneralConductingEquipment extends LitElement {
    render() {
        return html `${generalConductingEquipmentIcon}`;
    }
};
CustomIconGeneralConductingEquipment = __decorate([
    customElement('custom-icon-generalconductingequipment')
], CustomIconGeneralConductingEquipment);
let CustomIconGoose = class CustomIconGoose extends LitElement {
    render() {
        return html `${gooseIcon}`;
    }
};
CustomIconGoose = __decorate([
    customElement('custom-icon-goose')
], CustomIconGoose);
let CustomIconSmv = class CustomIconSmv extends LitElement {
    render() {
        return html `${smvIcon}`;
    }
};
CustomIconSmv = __decorate([
    customElement('custom-icon-smv')
], CustomIconSmv);
let CustomIconLine = class CustomIconLine extends LitElement {
    render() {
        return html `${lineIcon}`;
    }
};
CustomIconLine = __decorate([
    customElement('custom-icon-line')
], CustomIconLine);
let CustomIconProcess = class CustomIconProcess extends LitElement {
    render() {
        return html `${processIcon}`;
    }
};
CustomIconProcess = __decorate([
    customElement('custom-icon-process')
], CustomIconProcess);
let CustomIconLNodeAutomation = class CustomIconLNodeAutomation extends LitElement {
    render() {
        return html `${automationLogicalNode}`;
    }
};
CustomIconLNodeAutomation = __decorate([
    customElement('custom-icon-lnode-automation')
], CustomIconLNodeAutomation);
let CustomIconLNodeControl = class CustomIconLNodeControl extends LitElement {
    render() {
        return html `${controlLogicalNode}`;
    }
};
CustomIconLNodeControl = __decorate([
    customElement('custom-icon-lnode-control')
], CustomIconLNodeControl);
let CustomIconLNodeFunctional = class CustomIconLNodeFunctional extends LitElement {
    render() {
        return html `${functionalLogicalNode}`;
    }
};
CustomIconLNodeFunctional = __decorate([
    customElement('custom-icon-lnode-functional')
], CustomIconLNodeFunctional);
let CustomIconLNodeFurtherPowerSystemEquipment = class CustomIconLNodeFurtherPowerSystemEquipment extends LitElement {
    render() {
        return html `${furtherPowerSystemEquipmentLogicalNode}`;
    }
};
CustomIconLNodeFurtherPowerSystemEquipment = __decorate([
    customElement('custom-icon-lnode-furtherpowersystemequipment')
], CustomIconLNodeFurtherPowerSystemEquipment);
let CustomIconLNodeGeneral = class CustomIconLNodeGeneral extends LitElement {
    render() {
        return html `${generalLogicalNode}`;
    }
};
CustomIconLNodeGeneral = __decorate([
    customElement('custom-icon-lnode-general')
], CustomIconLNodeGeneral);
let CustomIconLNodeInterfacing = class CustomIconLNodeInterfacing extends LitElement {
    render() {
        return html `${interfacingLogicalNode}`;
    }
};
CustomIconLNodeInterfacing = __decorate([
    customElement('custom-icon-lnode-interfacing')
], CustomIconLNodeInterfacing);
let CustomIconLNodeMeasurement = class CustomIconLNodeMeasurement extends LitElement {
    render() {
        return html `${measurementLogicalNode}`;
    }
};
CustomIconLNodeMeasurement = __decorate([
    customElement('custom-icon-lnode-measurement')
], CustomIconLNodeMeasurement);
let CustomIconLNodeNonElectrical = class CustomIconLNodeNonElectrical extends LitElement {
    render() {
        return html `${nonElectricalLogicalNode}`;
    }
};
CustomIconLNodeNonElectrical = __decorate([
    customElement('custom-icon-lnode-nonelectrical')
], CustomIconLNodeNonElectrical);
let CustomIconLNodePowerTransformer = class CustomIconLNodePowerTransformer extends LitElement {
    render() {
        return html `${powerTransformerLogicalNode}`;
    }
};
CustomIconLNodePowerTransformer = __decorate([
    customElement('custom-icon-lnode-powertransformer')
], CustomIconLNodePowerTransformer);
let CustomIconLNodeProtection = class CustomIconLNodeProtection extends LitElement {
    render() {
        return html `${protectionLogicalNode}`;
    }
};
CustomIconLNodeProtection = __decorate([
    customElement('custom-icon-lnode-protection')
], CustomIconLNodeProtection);
let CustomIconLNodeProtectionRelated = class CustomIconLNodeProtectionRelated extends LitElement {
    render() {
        return html `${protectionRelatedLogicalNode}`;
    }
};
CustomIconLNodeProtectionRelated = __decorate([
    customElement('custom-icon-lnode-protectionrelated')
], CustomIconLNodeProtectionRelated);
let CustomIconLNodeQuality = class CustomIconLNodeQuality extends LitElement {
    render() {
        return html `${qualityLogicalNode}`;
    }
};
CustomIconLNodeQuality = __decorate([
    customElement('custom-icon-lnode-quality')
], CustomIconLNodeQuality);
let CustomIconLNodeSupervision = class CustomIconLNodeSupervision extends LitElement {
    render() {
        return html `${supervisionLogicalNode}`;
    }
};
CustomIconLNodeSupervision = __decorate([
    customElement('custom-icon-lnode-supervision')
], CustomIconLNodeSupervision);
let CustomIconLNodeSwitchgear = class CustomIconLNodeSwitchgear extends LitElement {
    render() {
        return html `${switchgearLogicalNode}`;
    }
};
CustomIconLNodeSwitchgear = __decorate([
    customElement('custom-icon-lnode-switchgear')
], CustomIconLNodeSwitchgear);
let CustomIconLNodeSystem = class CustomIconLNodeSystem extends LitElement {
    render() {
        return html `${systemLogicalNode}`;
    }
};
CustomIconLNodeSystem = __decorate([
    customElement('custom-icon-lnode-system')
], CustomIconLNodeSystem);
let CustomIconLNodeTransformer = class CustomIconLNodeTransformer extends LitElement {
    render() {
        return html `${transformerLogicalNode}`;
    }
};
CustomIconLNodeTransformer = __decorate([
    customElement('custom-icon-lnode-transformer')
], CustomIconLNodeTransformer);

export { CustomIconBay, CustomIconCircuitBreaker, CustomIconCurrentTransformer, CustomIconDisconnector, CustomIconEarthSwitch, CustomIconGeneralConductingEquipment, CustomIconGoose, CustomIconLNodeAutomation, CustomIconLNodeControl, CustomIconLNodeFunctional, CustomIconLNodeFurtherPowerSystemEquipment, CustomIconLNodeGeneral, CustomIconLNodeInterfacing, CustomIconLNodeMeasurement, CustomIconLNodeNonElectrical, CustomIconLNodePowerTransformer, CustomIconLNodeProtection, CustomIconLNodeProtectionRelated, CustomIconLNodeQuality, CustomIconLNodeSupervision, CustomIconLNodeSwitchgear, CustomIconLNodeSystem, CustomIconLNodeTransformer, CustomIconLine, CustomIconProcess, CustomIconSmv, CustomIconSubstation, CustomIconVoltageLevel, CustomIconVoltageTransformer };
