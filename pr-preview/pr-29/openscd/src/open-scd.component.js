var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorate = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};
import {customElement} from "../../_snowpack/pkg/lit-element.js";
import {OpenSCD} from "./open-scd.js";
export let OpenSCDComponent = class extends OpenSCD {
};
OpenSCDComponent = __decorate([
  customElement("open-scd")
], OpenSCDComponent);
