/* @web/test-runner snapshot v1 */
export const snapshots = {};

snapshots["open-scd looks like its snapshot"] =
`<oscd-waiter>
  <oscd-settings>
    <oscd-wizards>
      <oscd-history>
        <oscd-editor>
          <oscd-layout>
          </oscd-layout>
        </oscd-editor>
      </oscd-history>
    </oscd-wizards>
  </oscd-settings>
</oscd-waiter>
`;
/* end snapshot open-scd looks like its snapshot */

snapshots["open-scd renders menu plugins passed down as props and it looks like its snapshot"] = 
`<div>
  <slot>
  </slot>
  <mwc-top-app-bar-fixed>
    <mwc-icon-button
      icon="menu"
      label="Menu"
      slot="navigationIcon"
    >
    </mwc-icon-button>
    <div
      id="title"
      slot="title"
    >
    </div>
    <mwc-icon-button
      disabled=""
      icon="undo"
      label="undo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      disabled=""
      icon="redo"
      label="redo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="list"
      label="menu.viewLog"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="history"
      label="menu.viewHistory"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="rule"
      label="menu.viewDiag"
      slot="actionItems"
    >
    </mwc-icon-button>
  </mwc-top-app-bar-fixed>
  <mwc-drawer
    class="mdc-theme--surface"
    hasheader=""
    id="menu"
    type="modal"
  >
    <span slot="title">
      Menu
    </span>
    <mwc-list wrapfocus="">
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="Open project"
        data-src="/oscd-plugins/menu/OpenProject.js"
        graphic="icon"
        iconid="folder_open"
        mwc-list-item=""
        tabindex="0"
      >
        <mwc-icon slot="graphic">
          folder_open
        </mwc-icon>
        <span>
          Open project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="New project"
        data-src="/oscd-plugins/menu/NewProject.js"
        graphic="icon"
        iconid="create_new_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          create_new_folder
        </mwc-icon>
        <span>
          New project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="top"
        data-name="Save project"
        data-src="/oscd-plugins/menu/SaveProject.js"
        disabled=""
        graphic="icon"
        iconid="save"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          save
        </mwc-icon>
        <span>
          Save project
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Schema"
        data-src="/oscd-plugins/validators/ValidateSchema.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Schema
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Templates"
        data-src="/oscd-plugins/validators/ValidateTemplates.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Templates
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Import IEDs"
        data-src="/oscd-plugins/menu/ImportIEDs.js"
        disabled=""
        graphic="icon"
        iconid="snippet_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          snippet_folder
        </mwc-icon>
        <span>
          Import IEDs
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Subscriber Update"
        data-src="/oscd-plugins/menu/SubscriberInfo.js"
        disabled=""
        graphic="icon"
        iconid="play_circle"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          play_circle
        </mwc-icon>
        <span>
          Subscriber Update
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Merge Project"
        data-src="/oscd-plugins/menu/Merge.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Merge Project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Update Substation"
        data-src="/oscd-plugins/menu/UpdateSubstation.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Update Substation
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Compare IED"
        data-src="/oscd-plugins/menu/CompareIED.js"
        disabled=""
        graphic="icon"
        iconid="compare_arrows"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          compare_arrows
        </mwc-icon>
        <span>
          Compare IED
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="settings.title"
        data-src=""
        graphic="icon"
        iconid="settings"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          settings
        </mwc-icon>
        <span>
          Settings
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="bottom"
        data-name="Show SCL History"
        data-src="/oscd-plugins/menu/SclHistory.js"
        disabled=""
        graphic="icon"
        iconid="history_toggle_off"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          history_toggle_off
        </mwc-icon>
        <span>
          Show SCL History
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="bottom"
        data-name="Help"
        data-src="/oscd-plugins/menu/Help.js"
        graphic="icon"
        iconid="help"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          help
        </mwc-icon>
        <span>
          Help
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="plugins.heading"
        data-src=""
        graphic="icon"
        iconid="extension"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          extension
        </mwc-icon>
        <span>
          Plug-ins
        </span>
      </mwc-list-item>
    </mwc-list>
  </mwc-drawer>
  <div id="menuContent">
    <oscd-plugin10568d096ec8f277 class="plugin">
    </oscd-plugin10568d096ec8f277>
    <oscd-plugin46165f64695ee3df class="plugin">
    </oscd-plugin46165f64695ee3df>
    <oscd-pluginf55d4fe6193df7fc class="plugin">
    </oscd-pluginf55d4fe6193df7fc>
    <oscd-plugin6e8549659e6140e4 class="plugin validator">
    </oscd-plugin6e8549659e6140e4>
    <oscd-plugin367677805e681bde class="plugin validator">
    </oscd-plugin367677805e681bde>
    <oscd-plugin97eeed6baf6ee18f class="plugin">
    </oscd-plugin97eeed6baf6ee18f>
    <oscd-plugin4ffd98c62d9638ee class="plugin">
    </oscd-plugin4ffd98c62d9638ee>
    <oscd-plugin712d917a7d839ac0 class="plugin">
    </oscd-plugin712d917a7d839ac0>
    <oscd-pluginbc2372057e6dcff5 class="plugin">
    </oscd-pluginbc2372057e6dcff5>
    <oscd-plugin949ded31b3aa7251 class="plugin">
    </oscd-plugin949ded31b3aa7251>
    <oscd-plugin5a7d3bc66a309a58 class="plugin">
    </oscd-plugin5a7d3bc66a309a58>
    <oscd-plugin4a885ca583b179b1 class="plugin">
    </oscd-plugin4a885ca583b179b1>
  </div>
  <div class="landing">
    <mwc-icon-button
      class="landing_icon"
      icon="folder_open"
    >
      <div class="landing_label">
        Open project
      </div>
    </mwc-icon-button>
    <mwc-icon-button
      class="landing_icon"
      icon="create_new_folder"
    >
      <div class="landing_label">
        New project
      </div>
    </mwc-icon-button>
  </div>
  <oscd-plugin-manager id="pluginManager">
  </oscd-plugin-manager>
  <oscd-custom-plugin-dialog id="pluginAdd">
  </oscd-custom-plugin-dialog>
</div>
`;
/* end snapshot open-scd renders menu plugins passed down as props and it looks like its snapshot */

snapshots["open-scd renders editor plugins passed down as props and it looks like its snapshot"] = 
`<div>
  <slot>
  </slot>
  <mwc-top-app-bar-fixed>
    <mwc-icon-button
      icon="menu"
      label="Menu"
      slot="navigationIcon"
    >
    </mwc-icon-button>
    <div
      id="title"
      slot="title"
    >
    </div>
    <mwc-icon-button
      disabled=""
      icon="undo"
      label="undo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      disabled=""
      icon="redo"
      label="redo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="list"
      label="menu.viewLog"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="history"
      label="menu.viewHistory"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="rule"
      label="menu.viewDiag"
      slot="actionItems"
    >
    </mwc-icon-button>
  </mwc-top-app-bar-fixed>
  <mwc-drawer
    class="mdc-theme--surface"
    hasheader=""
    id="menu"
    type="modal"
  >
    <span slot="title">
      Menu
    </span>
    <mwc-list wrapfocus="">
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="Open project"
        data-src="/oscd-plugins/menu/OpenProject.js"
        graphic="icon"
        iconid="folder_open"
        mwc-list-item=""
        tabindex="0"
      >
        <mwc-icon slot="graphic">
          folder_open
        </mwc-icon>
        <span>
          Open project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="New project"
        data-src="/oscd-plugins/menu/NewProject.js"
        graphic="icon"
        iconid="create_new_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          create_new_folder
        </mwc-icon>
        <span>
          New project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="top"
        data-name="Save project"
        data-src="/oscd-plugins/menu/SaveProject.js"
        disabled=""
        graphic="icon"
        iconid="save"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          save
        </mwc-icon>
        <span>
          Save project
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Schema"
        data-src="/oscd-plugins/validators/ValidateSchema.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Schema
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Templates"
        data-src="/oscd-plugins/validators/ValidateTemplates.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Templates
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Import IEDs"
        data-src="/oscd-plugins/menu/ImportIEDs.js"
        disabled=""
        graphic="icon"
        iconid="snippet_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          snippet_folder
        </mwc-icon>
        <span>
          Import IEDs
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Subscriber Update"
        data-src="/oscd-plugins/menu/SubscriberInfo.js"
        disabled=""
        graphic="icon"
        iconid="play_circle"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          play_circle
        </mwc-icon>
        <span>
          Subscriber Update
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Merge Project"
        data-src="/oscd-plugins/menu/Merge.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Merge Project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Update Substation"
        data-src="/oscd-plugins/menu/UpdateSubstation.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Update Substation
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Compare IED"
        data-src="/oscd-plugins/menu/CompareIED.js"
        disabled=""
        graphic="icon"
        iconid="compare_arrows"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          compare_arrows
        </mwc-icon>
        <span>
          Compare IED
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="settings.title"
        data-src=""
        graphic="icon"
        iconid="settings"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          settings
        </mwc-icon>
        <span>
          Settings
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="bottom"
        data-name="Show SCL History"
        data-src="/oscd-plugins/menu/SclHistory.js"
        disabled=""
        graphic="icon"
        iconid="history_toggle_off"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          history_toggle_off
        </mwc-icon>
        <span>
          Show SCL History
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="bottom"
        data-name="Help"
        data-src="/oscd-plugins/menu/Help.js"
        graphic="icon"
        iconid="help"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          help
        </mwc-icon>
        <span>
          Help
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="plugins.heading"
        data-src=""
        graphic="icon"
        iconid="extension"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          extension
        </mwc-icon>
        <span>
          Plug-ins
        </span>
      </mwc-list-item>
    </mwc-list>
  </mwc-drawer>
  <div id="menuContent">
    <oscd-plugin10568d096ec8f277 class="plugin">
    </oscd-plugin10568d096ec8f277>
    <oscd-plugin46165f64695ee3df class="plugin">
    </oscd-plugin46165f64695ee3df>
    <oscd-pluginf55d4fe6193df7fc class="plugin">
    </oscd-pluginf55d4fe6193df7fc>
    <oscd-plugin6e8549659e6140e4 class="plugin validator">
    </oscd-plugin6e8549659e6140e4>
    <oscd-plugin367677805e681bde class="plugin validator">
    </oscd-plugin367677805e681bde>
    <oscd-plugin97eeed6baf6ee18f class="plugin">
    </oscd-plugin97eeed6baf6ee18f>
    <oscd-plugin4ffd98c62d9638ee class="plugin">
    </oscd-plugin4ffd98c62d9638ee>
    <oscd-plugin712d917a7d839ac0 class="plugin">
    </oscd-plugin712d917a7d839ac0>
    <oscd-pluginbc2372057e6dcff5 class="plugin">
    </oscd-pluginbc2372057e6dcff5>
    <oscd-plugin949ded31b3aa7251 class="plugin">
    </oscd-plugin949ded31b3aa7251>
    <oscd-plugin5a7d3bc66a309a58 class="plugin">
    </oscd-plugin5a7d3bc66a309a58>
    <oscd-plugin4a885ca583b179b1 class="plugin">
    </oscd-plugin4a885ca583b179b1>
  </div>
  <div class="landing">
    <mwc-icon-button
      class="landing_icon"
      icon="folder_open"
    >
      <div class="landing_label">
        Open project
      </div>
    </mwc-icon-button>
    <mwc-icon-button
      class="landing_icon"
      icon="create_new_folder"
    >
      <div class="landing_label">
        New project
      </div>
    </mwc-icon-button>
  </div>
  <oscd-plugin-manager id="pluginManager">
  </oscd-plugin-manager>
  <oscd-custom-plugin-dialog id="pluginAdd">
  </oscd-custom-plugin-dialog>
</div>
`;
/* end snapshot open-scd renders editor plugins passed down as props and it looks like its snapshot */

snapshots["open-scd layout looks like its snapshot"] = 
`<div>
  <slot>
  </slot>
  <mwc-top-app-bar-fixed>
    <mwc-icon-button
      icon="menu"
      label="Menu"
      slot="navigationIcon"
    >
    </mwc-icon-button>
    <div
      id="title"
      slot="title"
    >
    </div>
    <mwc-icon-button
      disabled=""
      icon="undo"
      label="undo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      disabled=""
      icon="redo"
      label="redo"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="list"
      label="menu.viewLog"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="history"
      label="menu.viewHistory"
      slot="actionItems"
    >
    </mwc-icon-button>
    <mwc-icon-button
      icon="rule"
      label="menu.viewDiag"
      slot="actionItems"
    >
    </mwc-icon-button>
  </mwc-top-app-bar-fixed>
  <mwc-drawer
    class="mdc-theme--surface"
    hasheader=""
    id="menu"
    type="modal"
  >
    <span slot="title">
      Menu
    </span>
    <mwc-list wrapfocus="">
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="Open project"
        data-src="/oscd-plugins/menu/OpenProject.js"
        graphic="icon"
        iconid="folder_open"
        mwc-list-item=""
        tabindex="0"
      >
        <mwc-icon slot="graphic">
          folder_open
        </mwc-icon>
        <span>
          Open project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="top"
        data-name="New project"
        data-src="/oscd-plugins/menu/NewProject.js"
        graphic="icon"
        iconid="create_new_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          create_new_folder
        </mwc-icon>
        <span>
          New project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="top"
        data-name="Save project"
        data-src="/oscd-plugins/menu/SaveProject.js"
        disabled=""
        graphic="icon"
        iconid="save"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          save
        </mwc-icon>
        <span>
          Save project
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Schema"
        data-src="/oscd-plugins/validators/ValidateSchema.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Schema
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="validator"
        data-name="Validate Templates"
        data-src="/oscd-plugins/validators/ValidateTemplates.js"
        disabled=""
        graphic="icon"
        iconid="rule_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          rule_folder
        </mwc-icon>
        <span>
          Validate Templates
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Import IEDs"
        data-src="/oscd-plugins/menu/ImportIEDs.js"
        disabled=""
        graphic="icon"
        iconid="snippet_folder"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          snippet_folder
        </mwc-icon>
        <span>
          Import IEDs
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Subscriber Update"
        data-src="/oscd-plugins/menu/SubscriberInfo.js"
        disabled=""
        graphic="icon"
        iconid="play_circle"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          play_circle
        </mwc-icon>
        <span>
          Subscriber Update
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Merge Project"
        data-src="/oscd-plugins/menu/Merge.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Merge Project
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Update Substation"
        data-src="/oscd-plugins/menu/UpdateSubstation.js"
        disabled=""
        graphic="icon"
        iconid="merge_type"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          merge_type
        </mwc-icon>
        <span>
          Update Substation
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="middle"
        data-name="Compare IED"
        data-src="/oscd-plugins/menu/CompareIED.js"
        disabled=""
        graphic="icon"
        iconid="compare_arrows"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          compare_arrows
        </mwc-icon>
        <span>
          Compare IED
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="settings.title"
        data-src=""
        graphic="icon"
        iconid="settings"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          settings
        </mwc-icon>
        <span>
          Settings
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="true"
        class="bottom"
        data-name="Show SCL History"
        data-src="/oscd-plugins/menu/SclHistory.js"
        disabled=""
        graphic="icon"
        iconid="history_toggle_off"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          history_toggle_off
        </mwc-icon>
        <span>
          Show SCL History
        </span>
      </mwc-list-item>
      <mwc-list-item
        aria-disabled="false"
        class="bottom"
        data-name="Help"
        data-src="/oscd-plugins/menu/Help.js"
        graphic="icon"
        iconid="help"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          help
        </mwc-icon>
        <span>
          Help
        </span>
      </mwc-list-item>
      <li
        divider=""
        padded=""
        role="separator"
      >
      </li>
      <mwc-list-item
        aria-disabled="false"
        class="static"
        data-name="plugins.heading"
        data-src=""
        graphic="icon"
        iconid="extension"
        mwc-list-item=""
        tabindex="-1"
      >
        <mwc-icon slot="graphic">
          extension
        </mwc-icon>
        <span>
          Plug-ins
        </span>
      </mwc-list-item>
    </mwc-list>
  </mwc-drawer>
  <div id="menuContent">
    <oscd-plugin10568d096ec8f277 class="plugin">
    </oscd-plugin10568d096ec8f277>
    <oscd-plugin46165f64695ee3df class="plugin">
    </oscd-plugin46165f64695ee3df>
    <oscd-pluginf55d4fe6193df7fc class="plugin">
    </oscd-pluginf55d4fe6193df7fc>
    <oscd-plugin6e8549659e6140e4 class="plugin validator">
    </oscd-plugin6e8549659e6140e4>
    <oscd-plugin367677805e681bde class="plugin validator">
    </oscd-plugin367677805e681bde>
    <oscd-plugin97eeed6baf6ee18f class="plugin">
    </oscd-plugin97eeed6baf6ee18f>
    <oscd-plugin4ffd98c62d9638ee class="plugin">
    </oscd-plugin4ffd98c62d9638ee>
    <oscd-plugin712d917a7d839ac0 class="plugin">
    </oscd-plugin712d917a7d839ac0>
    <oscd-pluginbc2372057e6dcff5 class="plugin">
    </oscd-pluginbc2372057e6dcff5>
    <oscd-plugin949ded31b3aa7251 class="plugin">
    </oscd-plugin949ded31b3aa7251>
    <oscd-plugin5a7d3bc66a309a58 class="plugin">
    </oscd-plugin5a7d3bc66a309a58>
    <oscd-plugin4a885ca583b179b1 class="plugin">
    </oscd-plugin4a885ca583b179b1>
  </div>
  <div class="landing">
    <mwc-icon-button
      class="landing_icon"
      icon="folder_open"
    >
      <div class="landing_label">
        Open project
      </div>
    </mwc-icon-button>
    <mwc-icon-button
      class="landing_icon"
      icon="create_new_folder"
    >
      <div class="landing_label">
        New project
      </div>
    </mwc-icon-button>
  </div>
  <oscd-plugin-manager id="pluginManager">
  </oscd-plugin-manager>
  <oscd-custom-plugin-dialog id="pluginAdd">
  </oscd-custom-plugin-dialog>
</div>
`;
/* end snapshot open-scd layout looks like its snapshot */

