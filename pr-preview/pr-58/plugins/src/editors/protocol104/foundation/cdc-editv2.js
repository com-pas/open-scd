import {get} from "../../../../../_snowpack/pkg/lit-translate.js";
import {
  determineUninitializedStructure,
  initializeElements
} from "../../../../../_snowpack/link/packages/openscd/dist/foundation/dai.js";
import {
  findElementInOriginalLNStructure,
  getCdcValueFromDOElement,
  getTypeAttribute,
  isEnumDataAttribute,
  getEnumOrds
} from "./foundation.js";
import {
  addPrefixAndNamespaceToDocument,
  createPrivateAddress,
  createPrivateElement,
  getPrivateElement
} from "./private.js";
import {createDaiFilter, createTemplateStructure} from "./cdc.js";
export const supportedCdcTypes = [
  "ACD",
  "ACT",
  "APC",
  "ASG",
  "BAC",
  "BCR",
  "BSC",
  "CMV",
  "DEL",
  "DPC",
  "DPS",
  "ENC",
  "ENG",
  "ENS",
  "INC",
  "ING",
  "INS",
  "ISC",
  "MV",
  "SEC",
  "SPC",
  "SPG",
  "SPS",
  "WYE"
];
export const cdcProcessingsV2 = {
  ACD: {
    monitor: {
      "30": {
        daPaths: [
          {path: ["general"]},
          {path: ["phsA"]},
          {path: ["phsB"]},
          {path: ["phsC"]},
          {path: ["neut"]}
        ],
        create: createAddressEdits,
        inverted: true
      },
      "40": {
        daPaths: [
          {path: ["general"]},
          {path: ["phsA"]},
          {path: ["phsB"]},
          {path: ["phsC"]},
          {path: ["neut"]}
        ],
        create: createAddressEdits
      }
    },
    control: {}
  },
  ACT: {
    monitor: {
      "30": {
        daPaths: [
          {path: ["general"]},
          {path: ["phsA"]},
          {path: ["phsB"]},
          {path: ["phsC"]},
          {path: ["neut"]}
        ],
        create: createAddressEdits,
        inverted: true
      },
      "39": {
        daPaths: [{path: ["general"]}],
        create: createAddressEdits
      }
    },
    control: {}
  },
  APC: {
    monitor: {
      "36": {
        daPaths: [{path: ["mxVal", "f"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "63": {
        daPaths: [{path: ["Oper", "ctlVal", "f"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  ASG: {
    monitor: {
      "63": {
        daPaths: [{path: ["setMag", "f"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  BAC: {
    monitor: {
      "36": {
        daPaths: [{path: ["mxVal", "f"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "60": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  BCR: {
    monitor: {
      "37": {
        daPaths: [{path: ["actVal"]}, {path: ["frVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  BSC: {
    monitor: {
      "32": {
        daPaths: [{path: ["valWTr", "posVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "60": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  CMV: {
    monitor: {
      "35": {
        daPaths: [{path: ["mag", "i"]}, {path: ["ang", "i"]}],
        create: createAddressEdits,
        inverted: true
      },
      "36": {
        daPaths: [{path: ["mag", "f"]}, {path: ["ang", "f"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  DEL: {
    monitor: {
      "35": {
        daPaths: [
          {path: ["phsAB", "cVal", "mag", "f"]},
          {path: ["phsBC", "cVal", "mag", "f"]},
          {path: ["phsCA", "cVal", "mag", "f"]}
        ],
        create: createAddressEdits,
        inverted: false
      },
      "36": {
        daPaths: [
          {path: ["phsAB", "cVal", "mag", "f"]},
          {path: ["phsBC", "cVal", "mag", "f"]},
          {path: ["phsCA", "cVal", "mag", "f"]}
        ],
        create: createAddressEdits,
        inverted: false
      }
    },
    control: {}
  },
  DPC: {
    monitor: {
      "31": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "59": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  DPS: {
    monitor: {
      "31": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  ENC: {
    monitor: {
      "30": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      },
      "35": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: false
      }
    },
    control: {
      "58": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressWithExpectValueAction,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      },
      "62": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressWithExpectValueAction,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  ENG: {
    monitor: {
      "58": {
        daPaths: [{path: ["setVal"]}],
        create: createAddressWithExpectValueAction,
        inverted: true
      },
      "62": {
        daPaths: [{path: ["setVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  ENS: {
    monitor: {
      "30": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      },
      "35": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  INC: {
    monitor: {
      "35": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "62": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  ING: {
    monitor: {
      "62": {
        daPaths: [{path: ["setVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  INS: {
    monitor: {
      "30": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      },
      "33": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      },
      "35": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  ISC: {
    monitor: {
      "32": {
        daPaths: [{path: ["valWTr", "posVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "62": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  MV: {
    monitor: {
      "35": {
        daPaths: [{path: ["mag", "i"]}],
        create: createAddressEdits,
        inverted: true
      },
      "36": {
        daPaths: [{path: ["mag", "f"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  SEC: {
    monitor: {
      "37": {
        daPaths: [{path: ["cnt"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  SPC: {
    monitor: {
      "30": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {
      "58": {
        daPaths: [{path: ["Oper", "ctlVal"]}],
        create: createAddressEdits,
        checkDaPaths: [{path: ["Oper", "Check"]}],
        checkCreate: createCheckAddressEdits
      }
    }
  },
  SPG: {
    monitor: {
      "58": {
        daPaths: [{path: ["setVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  SPS: {
    monitor: {
      "30": {
        daPaths: [{path: ["stVal"]}],
        create: createAddressEdits,
        inverted: true
      }
    },
    control: {}
  },
  WYE: {
    monitor: {
      "35": {
        daPaths: [
          {path: ["phsA", "cVal", "mag", "f"]},
          {path: ["phsB", "cVal", "mag", "f"]},
          {path: ["phsC", "cVal", "mag", "f"]}
        ],
        create: createAddressEdits,
        inverted: false
      },
      "36": {
        daPaths: [
          {path: ["phsA", "cVal", "mag", "f"]},
          {path: ["phsB", "cVal", "mag", "f"]},
          {path: ["phsC", "cVal", "mag", "f"]}
        ],
        create: createAddressEdits,
        inverted: false
      }
    },
    control: {}
  }
};
function findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths) {
  const daiElements = [];
  const actions = [];
  const errors = [];
  daPaths.forEach((daPath) => {
    const filter = createDaiFilter(doElement, daPath);
    const foundDaiElements = lnClonedElement.querySelectorAll(filter);
    if (foundDaiElements.length > 0) {
      foundDaiElements.forEach((clonedDaiElement) => {
        const daiElement = findElementInOriginalLNStructure(lnElement, clonedDaiElement);
        if (daiElement) {
          daiElements.push(daiElement);
        } else {
          daiElements.push(clonedDaiElement);
        }
      });
    } else {
      const templateStructure = createTemplateStructure(doElement, daPath);
      if (templateStructure) {
        const [parentClonedElement, uninitializedTemplateStructure] = determineUninitializedStructure(lnClonedElement, templateStructure);
        const newElement = initializeElements(uninitializedTemplateStructure);
        parentClonedElement.append(newElement);
        const parentElement = findElementInOriginalLNStructure(lnElement, parentClonedElement);
        if (parentElement) {
          actions.push({parent: parentElement, node: newElement, reference: null});
        }
        if (newElement.tagName === "DAI") {
          daiElements.push(newElement);
        } else {
          const daiElement = newElement.querySelector("DAI");
          daiElements.push(daiElement);
        }
      } else {
        const cdc = getCdcValueFromDOElement(doElement) ?? "";
        const doType = getTypeAttribute(doElement) ?? "";
        errors.push(get("protocol104.wizard.error.addAddressError", {
          structure: daPath.path.join(" > "),
          cdc,
          doType
        }));
      }
    }
  });
  return [actions, daiElements, errors];
}
export function createAddressElements(document, ti, inverted, expectedValue) {
  const addressElements = [];
  const addressElement = createPrivateAddress(document, ti);
  if (expectedValue) {
    addressElement.setAttribute("expectedValue", expectedValue);
  }
  addressElements.push(addressElement);
  if (inverted) {
    const addressElement2 = createPrivateAddress(document, ti);
    addressElement2.setAttribute("inverted", "true");
    if (expectedValue) {
      addressElement2.setAttribute("expectedValue", expectedValue);
    }
    addressElements.push(addressElement2);
  }
  return addressElements;
}
export function createActionsForPrivate(daiElement, addressElements) {
  const edits = [];
  let privateElement = getPrivateElement(daiElement);
  if (privateElement) {
    addressElements.forEach((addressElement) => {
      edits.push({
        parent: privateElement,
        node: addressElement,
        reference: null
      });
    });
  } else {
    privateElement = createPrivateElement(daiElement.ownerDocument);
    privateElement.append(...addressElements);
    edits.push({parent: daiElement, node: privateElement, reference: null});
  }
  return edits;
}
export function createAddressEdits(lnElement, lnClonedElement, doElement, ti, daPaths, inverted) {
  const edits = [];
  const [initializeEdits, daiElements, errors] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
  if (initializeEdits.length > 0) {
    edits.push(...initializeEdits);
  }
  if (daiElements.length > 0) {
    addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
    daiElements.forEach((daiElement) => {
      const addressElements = createAddressElements(daiElement.ownerDocument, ti, inverted);
      edits.push(...createActionsForPrivate(daiElement, addressElements));
    });
  }
  return edits;
}
function createAddressWithExpectValueAction(lnElement, lnClonedElement, doElement, ti, daPaths, inverted) {
  const actions = [];
  const [initializeActions, daiElements, errors] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
  if (initializeActions.length > 0) {
    actions.push(...initializeActions);
  }
  if (daiElements.length > 0) {
    addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
    const addressElements = [];
    daiElements.forEach((daiElement) => {
      if (isEnumDataAttribute(daiElement)) {
        getEnumOrds(daiElement).forEach((ord) => addressElements.push(...createAddressElements(daiElement.ownerDocument, ti, inverted, ord)));
      } else {
        addressElements.push(...createAddressElements(daiElement.ownerDocument, ti, inverted));
      }
      actions.push(...createActionsForPrivate(daiElement, addressElements));
    });
  }
  return actions;
}
function createCheckAddressEdits(lnElement, lnClonedElement, doElement, ti, daPaths) {
  const actions = [];
  const [initializeActions, daiElements] = findOrCreateDaiElements(lnElement, lnClonedElement, doElement, daPaths);
  if (initializeActions.length > 0) {
    actions.push(...initializeActions);
  }
  if (daiElements.length > 0) {
    addPrefixAndNamespaceToDocument(lnElement.ownerDocument);
    daiElements.forEach((daiElement) => {
      const address1Element = createPrivateAddress(daiElement.ownerDocument, ti);
      address1Element.setAttribute("check", "interlocking");
      const address2Element = createPrivateAddress(daiElement.ownerDocument, ti);
      address2Element.setAttribute("check", "synchrocheck");
      actions.push(...createActionsForPrivate(daiElement, [
        address1Element,
        address2Element
      ]));
    });
  }
  return actions;
}
