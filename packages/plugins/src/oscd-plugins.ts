import { pluginTag } from '@compas-oscd/open-scd/dist/plugin-tag.js';

// editor plugins
import { default as IED } from './editors/IED.js';
import { default as Substation } from './editors/Substation.js';
import { default as SingleLineDiagram } from './editors/SingleLineDiagram.js';
import { default as GooseSubscriberMessageBinding } from './editors/GooseSubscriberMessageBinding.js';
import { default as GooseSubscriberDataBinding } from './editors/GooseSubscriberDataBinding.js';
import { default as SMVSubscriberMessageBinding } from './editors/SMVSubscriberMessageBinding.js';
import { default as SMVSubscriberDataBinding } from './editors/SMVSubscriberDataBinding.js';
import { default as Communication } from './editors/Communication.js';
import { default as Protocol104 } from './editors/Protocol104.js';
import { default as Templates } from './editors/Templates.js';
import { default as Cleanup } from './editors/Cleanup.js';
// validator plugins
import { default as ValidateSchema } from './validators/ValidateSchema.js';
import { default as ValidateTemplates } from './validators/ValidateTemplates.js';
// menu plugins
import { default as OpenProject } from './menu/OpenProject.js';
import { default as SaveProject } from './menu/SaveProject.js';
import { default as NewProject } from './menu/NewProject.js';
import { default as VirtualTemplateIED } from './menu/VirtualTemplateIED.js';
import { default as SubscriberInfo } from './menu/SubscriberInfo.js';
import { default as UpdateDescriptionABB } from './menu/UpdateDescriptionABB.js';
import { default as UpdateDescriptionSEL } from './menu/UpdateDescriptionSEL.js';
import { default as SclHistory } from './menu/SclHistory.js';
import { default as Help } from './menu/Help.js';
import { default as ExportCommunication } from './menu/ExportCommunication.js';
import { default as ImportIEDs } from './menu/ImportIEDs.js';
import { default as Merge } from './menu/Merge.js';
import { default as UpdateSubstation } from './menu/UpdateSubstation.js';
import { default as CompareIED } from './menu/CompareIED.js';

export enum OscdPluginSrc {
  IED = '/oscd-plugins/editors/IED.js',
  Substation = '/oscd-plugins/editors/Substation.js',
  SingleLineDiagram = '/oscd-plugins/editors/SingleLineDiagram.js',
  GooseSubscriberMessageBinding = '/oscd-plugins/editors/GooseSubscriberMessageBinding.js',
  GooseSubscriberDataBinding = '/oscd-plugins/editors/GooseSubscriberDataBinding.js',
  SMVSubscriberMessageBinding = '/oscd-plugins/editors/SMVSubscriberMessageBinding.js',
  SMVSubscriberDataBinding = '/oscd-plugins/editors/SMVSubscriberDataBinding.js',
  Communication = '/oscd-plugins/editors/Communication.js',
  Protocol104 = '/oscd-plugins/editors/Protocol104.js',
  Templates = '/oscd-plugins/editors/Templates.js',
  Cleanup = '/oscd-plugins/editors/Cleanup.js',
  ValidateSchema = '/oscd-plugins/validators/ValidateSchema.js',
  ValidateTemplates = '/oscd-plugins/validators/ValidateTemplates.js',
  OpenProject = '/oscd-plugins/menu/OpenProject.js',
  SaveProject = '/oscd-plugins/menu/SaveProject.js',
  NewProject = '/oscd-plugins/menu/NewProject.js',
  VirtualTemplateIED = '/oscd-plugins/menu/VirtualTemplateIED.js',
  SubscriberInfo = '/oscd-plugins/menu/SubscriberInfo.js',
  UpdateDescriptionABB = '/oscd-plugins/menu/UpdateDescriptionABB.js',
  UpdateDescriptionSEL = '/oscd-plugins/menu/UpdateDescriptionSEL.js',
  SclHistory = '/oscd-plugins/menu/SclHistory.js',
  Help = '/oscd-plugins/menu/Help.js',
  ExportCommunication = '/oscd-plugins/menu/ExportCommunication.js',
  ImportIEDs = '/oscd-plugins/menu/ImportIEDs.js',
  Merge = '/oscd-plugins/menu/Merge.js',
  UpdateSubstation = '/oscd-plugins/menu/UpdateSubstation.js',
  CompareIED = '/oscd-plugins/menu/CompareIED.js'
}

const plugins: { [key in OscdPluginSrc]: CustomElementConstructor } = {
  [OscdPluginSrc.IED]: IED,
  [OscdPluginSrc.Substation]: Substation,
  [OscdPluginSrc.SingleLineDiagram]: SingleLineDiagram,
  [OscdPluginSrc.GooseSubscriberMessageBinding]: GooseSubscriberMessageBinding,
  [OscdPluginSrc.GooseSubscriberDataBinding]: GooseSubscriberDataBinding,
  [OscdPluginSrc.SMVSubscriberMessageBinding]: SMVSubscriberMessageBinding,
  [OscdPluginSrc.SMVSubscriberDataBinding]: SMVSubscriberDataBinding,
  [OscdPluginSrc.Communication]: Communication,
  [OscdPluginSrc.Protocol104]: Protocol104,
  [OscdPluginSrc.Templates]: Templates,
  [OscdPluginSrc.Cleanup]: Cleanup,
  [OscdPluginSrc.ValidateSchema]: ValidateSchema,
  [OscdPluginSrc.ValidateTemplates]: ValidateTemplates,
  [OscdPluginSrc.OpenProject]: OpenProject,
  [OscdPluginSrc.SaveProject]: SaveProject,
  [OscdPluginSrc.NewProject]: NewProject,
  [OscdPluginSrc.VirtualTemplateIED]: VirtualTemplateIED,
  [OscdPluginSrc.SubscriberInfo]: SubscriberInfo,
  [OscdPluginSrc.UpdateDescriptionABB]: UpdateDescriptionABB,
  [OscdPluginSrc.UpdateDescriptionSEL]: UpdateDescriptionSEL,
  [OscdPluginSrc.SclHistory]: SclHistory,
  [OscdPluginSrc.Help]: Help,
  [OscdPluginSrc.ExportCommunication]: ExportCommunication,
  [OscdPluginSrc.ImportIEDs]: ImportIEDs,
  [OscdPluginSrc.Merge]: Merge,
  [OscdPluginSrc.UpdateSubstation]: UpdateSubstation,
  [OscdPluginSrc.CompareIED]: CompareIED
};

export function registerOscdPlugins() {
  for (const [src, pluginConstructor] of Object.entries(plugins)) {
    const tag = pluginTag(src);

    customElements.define(tag, pluginConstructor);
  }
}
