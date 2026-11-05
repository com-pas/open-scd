export declare function queryDataTypeLeaf(dataTypeTemplates: Element, lnType: string, doSegments: string[], daSegments: string[]): Element | null;
export declare function hasDataType(dataTypeTemplates: Element, lnType: string, doSegments: string[], daSegments: string[]): boolean;
export declare function queryLN(lDevice: Element, lnClass: string, inst: string, prefix: string | null): Element | null;
export declare function queryLDevice(ied: Element, inst: string): Element | null;
export declare function isFCDACompatibleWithIED(fcda: Element, ied: Element): boolean;
