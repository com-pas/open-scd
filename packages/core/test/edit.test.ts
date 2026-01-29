import { expect } from '@open-wc/testing';

import { isSetAttributesV2 } from '../foundation/edit.js';


describe('edit', () => {
  let doc: XMLDocument;
  beforeEach(() => {
    doc = new DOMParser().parseFromString(`
        <SCL xmlns="http://www.iec.ch/61850/2003/SCL" version="2007" revision="B" release="4">
          <IED name="IED1">
          </IED>
        </SCL>
      `,
      'application/xml'
    )
  });

  it('should consider an edit without attributesNS as SetAttributesV2', () => {
    const iedElement = doc.querySelector('IED');

    const setAttributesWithoutNS = {
      element: iedElement,
      attributes: { name: 'newName' }
    };

    const isSetAttributes = isSetAttributesV2(setAttributesWithoutNS as any);

    expect(isSetAttributes).to.be.true;
  });
});
