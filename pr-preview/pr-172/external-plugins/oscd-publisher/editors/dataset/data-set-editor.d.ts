import { LitElement, TemplateResult } from 'lit';
import { ActionList } from '@openenergytools/filterable-lists/dist/ActionList.js';
import { MdOutlinedButton } from '@scopedelement/material-web/button/MdOutlinedButton.js';
import { MdCheckbox } from '@scopedelement/material-web/checkbox/MdCheckbox.js';
import { MdDialog } from '@scopedelement/material-web/dialog/MdDialog.js';
import { MdIcon } from '@scopedelement/material-web/icon/MdIcon.js';
import { MdTextButton } from '@scopedelement/material-web/button/MdTextButton.js';
import { MdRadio } from '@scopedelement/material-web/radio/radio.js';
import { MdList } from '@scopedelement/material-web/list/MdList.js';
import { MdListItem } from '@scopedelement/material-web/list/MdListItem.js';
import { DataSetElementEditor } from './data-set-element-editor.js';
declare enum DataSetCopyStatus {
    CanCopy = "CanCopy",
    IEDStructureIncompatible = "IEDStructureIncompatible",
    DataSetAlreadyExists = "DataSetAlreadyExists"
}
interface DataSetCopyOption {
    ied: Element;
    dataSet: Element;
    status: DataSetCopyStatus;
    selected: boolean;
}
declare const DataSetEditor_base: typeof LitElement & import("@open-wc/scoped-elements/lit-element.js").ScopedElementsHostConstructor;
export declare class DataSetEditor extends DataSetEditor_base {
    static scopedElements: {
        'action-list': typeof ActionList;
        'md-text-button': typeof MdTextButton;
        'data-set-element-editor': typeof DataSetElementEditor;
        'md-outlined-button': typeof MdOutlinedButton;
        'md-dialog': typeof MdDialog;
        'md-icon': typeof MdIcon;
        'md-radio': typeof MdRadio;
        'md-list': typeof MdList;
        'md-list-item': typeof MdListItem;
        'md-checkbox': typeof MdCheckbox;
    };
    /** The document being edited as provided to plugins by [[`OpenSCD`]]. */
    doc: XMLDocument;
    /** SCL change indicator */
    editCount: number;
    searchValue: string;
    selectedDataSet?: Element;
    lDevices: Element[];
    selectedLDevice: Element | null;
    selectedIed: Element | null;
    selectionList: ActionList;
    selectDataSetButton: MdOutlinedButton;
    dataSetElementEditor: DataSetElementEditor;
    lDeviceSelectDialog: MdDialog;
    copyDataSetDialog: MdDialog;
    dataSetCopyOptions: DataSetCopyOption[];
    get hasCopyDataSetSelected(): boolean;
    /** Resets selected DataSet, if not existing in new doc
    update(props: Map<string | number | symbol, unknown>): void {
      if (props.has('doc') && this.selectedDataSet) {
        const newDataSet = updateElementReference(this.doc, this.selectedDataSet);
  
        this.selectedDataSet = newDataSet ?? undefined;
  
        /* TODO(Jakob Vogelsang): fix when action-list is activable
        if (!newDataSet && this.selectionList && this.selectionList.selected)
          (this.selectionList.selected as ListItem).selected = false;
      }
  
      super.update(props);
    } */
    updated(changedProps: Map<string | number | symbol, unknown>): void;
    /**
     * Finds the equivalent LN (or LN0) in the target IED that mirrors the
     * LDevice+LN hierarchy where the given DataSet resides.
     * Returns null when the target IED lacks the matching structure.
     */
    private queryLnForDataSet;
    /**
     * Determines copy compatibility of a DataSet with a target IED.
     * Checks: matching LDevice+LN path, no name conflict, all FCDAs valid.
     */
    private getDataSetCopyStatus;
    private getCopyStatusText;
    private copyDataSet;
    private renderCopyDataSetDialog;
    private renderElementEditorContainer;
    private renderSelectionList;
    private createDataSet;
    private renderToggleButton;
    private renderLDeviceSelectDialog;
    private selectLDevice;
    private handleLDeviceSelect;
    render(): TemplateResult;
    static styles: import("lit").CSSResult;
}
export {};
