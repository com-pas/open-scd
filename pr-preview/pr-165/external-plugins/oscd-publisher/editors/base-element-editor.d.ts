import { LitElement, TemplateResult } from 'lit';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import type { MdIconButton } from '@scopedelement/material-web/iconbutton/MdIconButton.js';
import '@openenergytools/filterable-lists/dist/action-list.js';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
export declare enum ControlBlockCopyStatus {
    CanCopy = "CanCopy",
    IEDStructureIncompatible = "IEDStructureIncompatible",
    ControlBlockOrDataSetAlreadyExists = "ControlBlockOrDataSetAlreadyExists"
}
export interface ControlBlockCopyOption {
    ied: Element;
    control: Element;
    status: ControlBlockCopyStatus;
    selected: boolean;
}
declare const BaseElementEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class BaseElementEditor extends BaseElementEditor_base {
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    /** Search/filter value for action-lists */
    searchValue: string;
    selectCtrlBlock?: Element;
    selectedDataSet?: Element | null;
    controlBlockCopyOptions: ControlBlockCopyOption[];
    selectDataSetDialog: MdDialog;
    copyControlBlockDialog: MdDialog;
    newDataSet: MdIconButton;
    changeDataSet: MdIconButton;
    selectionList?: ActionList | null;
    updated(changedProps: Map<string | number | symbol, unknown>): void;
    get hasCopyControlSelected(): boolean;
    protected selectDataSet(dataSet: Element): void;
    protected queryIEDs(): Element[];
    protected queryLnForControl(ied: Element, control: Element): Element | null;
    protected getDataSet(control: Element): Element | null;
    protected getCopyControlBlockCopyStatus(controlBlock: Element, otherIED: Element): ControlBlockCopyStatus;
    protected copyControlBlock(): void;
    private addNewDataSet;
    private showSelectDataSetDialog;
    private getCopyStatusText;
    protected renderSelectDataSetDialog(): TemplateResult;
    protected renderCopyControlBlockDialog(): TemplateResult;
    protected renderDataSetElementContainer(): TemplateResult;
}
export {};
