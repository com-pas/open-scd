import {
  nsd72 as nsd72Str,
  nsd73 as nsd73Str,
  nsd74 as nsd74Str,
  nsd7420 as nsd7420Str,
  nsd81 as nsd81Str,
} from '@openscd/scl-lib/dist/foundation/codecomponents/nsds.js';

//TODO [stee-re]: Move this to @openscd/scl-lib

const [nsd72, nsd73, nsd74, nsd7420, nsd81] = [
  nsd72Str,
  nsd73Str,
  nsd74Str,
  nsd7420Str,
  nsd81Str,
].map(
  nsdStr =>
    new DOMParser().parseFromString(nsdStr, 'application/xml') as XMLDocument
);

export { nsd72, nsd73, nsd74, nsd7420, nsd81 };
