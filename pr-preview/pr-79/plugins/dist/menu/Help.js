import { LitElement } from '../../../_snowpack/pkg/lit-element.js';
import * as marked from '../../../_snowpack/pkg/marked.js';
import '../../../_snowpack/pkg/@material/mwc-icon.js';
import { oscdHtml, oscdUnsafeHTML } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/finder-list.js';
import { newWizardEvent } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/foundation.js';
import { openSCDIcon } from '../../../_snowpack/pkg/@compas-oscd/open-scd/dist/icons/icons.js';
const GITHUB_WIKI_LINK_PATTERN = /https:\/\/github\.com\/openscd\/open-scd\/wiki\/([^)]*)/g;
const MD_LINK_TITLE_PATTERN = '([^\\]]*)';
const HYPHEN_PATTERN = /-/g;
function aboutBox(version) {
    return oscdHtml `<div>
      <div style="display:flex">
        <mwc-icon slot="graphic" style="--mdc-icon-size:25px"
          >${openSCDIcon}</mwc-icon
        >
        <div style="padding:10px">
          <h2 style="margin-bottom:2px">OpenSCD</h2>
          V${version}
        </div>
      </div>
    </div>
    <div>
      <h3>Licences</h3>
      <p style="padding-bottom:5px">
        The IEC&thinsp;61850 XSD and NSD code components used are distributed
        under their
        <a href="/CC-EULA.pdf">end user licence agreement</a>. <br />This
        project's source code is licensed under the
        <a href="/LICENSE.md">Apache&thinsp;2.0 license</a> and available on
        <a href="https://github.com/openscd">GitHub</a>.
      </p>
      <p>&copy; 2020-2021 OMICRON electronics GmbH</p>
      <h3>Help</h3>
    </div>`;
}
async function getLinkedPages(path) {
    const edition = await (await fetch('/manifest.json')).json();
    if (path.length === 0) {
        return { path, header: aboutBox(edition.version), entries: ['Home'] };
    }
    const page = path[path.length - 1].replace(/ /g, '-');
    const res = await fetch(`/openscd/public/md/${page}.md`);
    const md = await res.text();
    const MD_LINK_REPLACEMENT = `<a style="cursor: help; color: var(--mdc-theme-primary)"  href="https://github.com/openscd/open-scd/wiki/$2" target="_blank" >$1</a>`;
    const unlinkedMd = md.replace(new RegExp(`\\[${MD_LINK_TITLE_PATTERN}\\]\\(${GITHUB_WIKI_LINK_PATTERN.source}\\)`, 'g'), MD_LINK_REPLACEMENT);
    const header = oscdHtml `<div style="padding: 8px;">
    ${page === 'Home' ? aboutBox(edition.version) : oscdHtml ``}
    ${oscdUnsafeHTML(marked.parse(unlinkedMd))}
  </div>`;
    const entries = Array.from(md.matchAll(new RegExp(`\\(${GITHUB_WIKI_LINK_PATTERN.source}\\)`, 'g'))).map(([_, child]) => child.replace(HYPHEN_PATTERN, ' '));
    return { path, header, entries };
}
export function aboutBoxWizard() {
    return [
        {
            title: 'Help',
            content: [
                oscdHtml `<finder-list
          .path=${['Home']}
          .read=${getLinkedPages}
        ></finder-list>`,
            ],
        },
    ];
}
export default class HelpPlugin extends LitElement {
    async run() {
        this.dispatchEvent(newWizardEvent(aboutBoxWizard()));
    }
}
//# sourceMappingURL=Help.js.map