import { Plugin as CorePlugin } from "@compas-oscd/core"

export interface ContentContext {
  tag: string;
}

export type Plugin = CorePlugin & {
  official?: boolean;
  active: boolean;
  content?: ContentContext;
};

export type PluginConfig = PluginConfigNotMenu | PluginConfigMenu

export type PluginConfigNotMenu = Omit<Plugin, "position" | "active"> & {
  kind: 'editor' | 'validator';
}

export type PluginConfigMenu = Omit<Plugin, "active"> & {
  kind: 'menu';
  position: MenuPosition;
}

export type InstalledOfficialPlugin = Plugin & {
  src: string;
  official: true;
  installed: boolean;
};

export type PluginKind = 'editor' | 'menu' | 'validator';
export const menuPosition = ['top', 'middle', 'bottom'] as const;
export type MenuPosition = (typeof menuPosition)[number];

