import { fixture, html, expect } from '@open-wc/testing';

import '../../../../src/editors/substation/l-node-editor.js';
import { LNodeEditor } from '../../../../src/editors/substation/l-node-editor.js';

describe('web component rendering LNode element', () => {
  let element: LNodeEditor;
  let doc: XMLDocument;

  beforeEach(async () => {
    doc = await fetch('/test/testfiles/zeroline/functions.scd')
      .then(response => response.text())
      .then(str => new DOMParser().parseFromString(str, 'application/xml'));
  });

  describe('is an action-icon type component', () => {
    let lNode: Element;
    beforeEach(async () => {
      lNode = new DOMParser().parseFromString(
        '<LNode lnClass="USER" lnInst></LNode>',
        'application/xml'
      ).documentElement;

      element = <LNodeEditor>(
        await fixture(html`<l-node-editor .element=${lNode}></l-node-editor>`)
      );
    });

    it('having a default icon for invalid lnClass groups', () => {
      expect(element.shadowRoot?.querySelector('custom-icon-lnode-system')).to.exist;
    });

    it('with specific icon for Lxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Lxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-system')).to.exist;
    });

    it('with specific icon for Axxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Axxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-automation')).to.exist;
    });

    it('with specific icon for Cxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Cxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-control')).to.exist;
    });

    it('with specific icon for Fxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Fxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-functional')).to.exist;
    });

    it('with specific icon for Gxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Gxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-general')).to.exist;
    });

    it('with specific icon for Ixxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Ixxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-interfacing')).to.exist;
    });

    it('with specific icon for Kxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Kxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-nonelectrical')).to.exist;
    });

    it('with specific icon for Mxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Mxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-measurement')).to.exist;
    });

    it('with specific icon for Pxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Pxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-protection')).to.exist;
    });

    it('with specific icon for Qxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Qxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-quality')).to.exist;
    });

    it('with specific icon for Rxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Rxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-protectionrelated')).to.exist;
    });

    it('with specific icon for Sxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Sxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-supervision')).to.exist;
    });

    it('with specific icon for Txxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Txxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-transformer')).to.exist;
    });

    it('with specific icon for Xxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Xxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-switchgear')).to.exist;
    });

    it('with specific icon for Yxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Yxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-powertransformer')).to.exist;
    });

    it('with specific icon for Zxxx lnClass attribute', async () => {
      lNode.setAttribute('lnClass', 'Zxxx');
      element.element = lNode;
      await element.requestUpdate();

      expect(element.shadowRoot?.querySelector('custom-icon-lnode-furtherpowersystemequipment')).to.exist;
    });
  });

  describe('as reference to a LN/LN0 within IED ', () => {
    beforeEach(async () => {
      element = <LNodeEditor>(
        await fixture(
          html`<l-node-editor
            .element=${doc.querySelector('LNode[ldInst="CircuitBreaker_CB1"]')}
          ></l-node-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });

  describe('as instance of a LNodeType only', () => {
    beforeEach(async () => {
      element = <LNodeEditor>(
        await fixture(
          html`<l-node-editor
            .element=${doc.querySelector('LNode[iedName="None"]')}
          ></l-node-editor>`
        )
      );
    });

    it('looks like the latest snapshot', async () => {
      await expect(element).shadowDom.to.equalSnapshot();
    });
  });
});
