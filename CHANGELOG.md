# Changelog

## [0.36.0](https://github.com/com-pas/open-scd/compare/v0.43.0...v0.36.0) (2025-11-13)


### ⚠ BREAKING CHANGES

* Edit API v1 validation is no longer supported (e.g. edit api v1 checked if an elements id was unique in the document)

### Features

* **../substation/sub-equipment-editor.ts:** add_button_to_the_SubEqui… ([#1113](https://github.com/com-pas/open-scd/issues/1113)) ([f262cae](https://github.com/com-pas/open-scd/commit/f262caef555bddfdf823b13ee9af703a60145302))
* **../substation/sub-equipment-editor.ts:** add_remove_button ([#1112](https://github.com/com-pas/open-scd/issues/1112)) ([70d6867](https://github.com/com-pas/open-scd/commit/70d686762b5e4121145c942cff11c2c8520445d2))
* **104-plugin:** add some German translations ([5b0a43b](https://github.com/com-pas/open-scd/commit/5b0a43bd7d438580007c52db7057b1cce4b55ba5))
* **104/AddAddress:** Add Address Element (including SCL Private Element) for first set of CDC's ([664eb0b](https://github.com/com-pas/open-scd/commit/664eb0bbfe08236ac7b5ba60e65a546e87c8f4d3))
* **104/Address:** Added "Control" handling of CDC and first part of refactoring after discussion. ([8381d52](https://github.com/com-pas/open-scd/commit/8381d525ff74cf676990d22cb38bbaf8a4a4c7b4))
* **104/Address:** Added logic to handle Check Addresses. ([2805261](https://github.com/com-pas/open-scd/commit/28052611ec974f94cf68ebf4f5618dccfc944808))
* **104/Address:** Changed handling when/how Address with inverted attribute are created ([c047707](https://github.com/com-pas/open-scd/commit/c047707a8514d9b4e910b42b0c009c7387c40d99))
* **104/CreateAddresses:** Use DO Template Structure to create DAI Elements ([748e2e5](https://github.com/com-pas/open-scd/commit/748e2e531084b8ab223adefcc27c4dbfcc1a2498))
* **104/ExpectedValue:** Handling Enum Values as Expected Values in 104 address elements. ([5ccf677](https://github.com/com-pas/open-scd/commit/5ccf677f18896e75a089e3534085b34bc1979cd6))
* **104/ShowDOIWizard:** Show detailed info about known/found TIs ([b55e405](https://github.com/com-pas/open-scd/commit/b55e405c38555aaa4c2e9de4b82e1f4f7b7f4ccc))
* **104/Subnetworks:** Show/edit subnetworks with redundancy ([6f1e388](https://github.com/com-pas/open-scd/commit/6f1e388916027fde3f15f8bdb86fec40403286e6))
* **104/values:** Added List of IEDs and 104-related DAI to values screen. ([adbc4a4](https://github.com/com-pas/open-scd/commit/adbc4a4da06f9b5dadd27de686e70409ea86c57d))
* **104:** added descriptions to control ti numbers ([#1400](https://github.com/com-pas/open-scd/issues/1400)) ([758a3b8](https://github.com/com-pas/open-scd/commit/758a3b887b75b1eabdda7add0b3abf4cbe2df949))
* **104:** added descriptions to ti numbers ([#1378](https://github.com/com-pas/open-scd/issues/1378)) ([0e74294](https://github.com/com-pas/open-scd/commit/0e742944e4e834c515488ad1f75cecf88d234a8a))
* **104:** implement enc cdc support ([#1391](https://github.com/com-pas/open-scd/issues/1391)) ([fa4142b](https://github.com/com-pas/open-scd/commit/fa4142b4b85085f092533dd54097d3c4efbf5441))
* **104:** implement wye and del cdc support ([#1390](https://github.com/com-pas/open-scd/issues/1390)) ([43b8285](https://github.com/com-pas/open-scd/commit/43b82853f877a8eb080db2b4ea99898f861c8418))
* **104Protocol:** Refactor list of 104 Address and add wizard to edit existing Address Element ([39a8188](https://github.com/com-pas/open-scd/commit/39a8188f5aebf3b85ebd8018c75576421c3eb136))
* add commit lint to OpenSCD ([#1676](https://github.com/com-pas/open-scd/issues/1676)) ([fffd1a7](https://github.com/com-pas/open-scd/commit/fffd1a766f175044f78f34b0d833079dba34e085))
* add elements to virtual ied ([#1714](https://github.com/com-pas/open-scd/issues/1714)) ([0c1074b](https://github.com/com-pas/open-scd/commit/0c1074bf9d4f154a06c8031e593974c1f618fead))
* add ISD file extension ([#1351](https://github.com/com-pas/open-scd/issues/1351)) ([1c2ef60](https://github.com/com-pas/open-scd/commit/1c2ef606a64f1af75af1c88dcdd3a5659b35d2aa))
* add missing editor icons ([#1495](https://github.com/com-pas/open-scd/issues/1495)) ([d404464](https://github.com/com-pas/open-scd/commit/d404464444a0f03fbe0ca3d0774e1cc1bc704e38))
* Add oscd api with plugin state ([#1696](https://github.com/com-pas/open-scd/issues/1696)) ([1c457cf](https://github.com/com-pas/open-scd/commit/1c457cf02a404a61b7ff09553223091bc5edd1f6))
* add subscriber later binding plugin ([#1664](https://github.com/com-pas/open-scd/issues/1664)) ([26f6900](https://github.com/com-pas/open-scd/commit/26f690007cb5e7fe42b22f7fc46f18035d934008))
* add virtual ied ([#1712](https://github.com/com-pas/open-scd/issues/1712)) ([cf45fe9](https://github.com/com-pas/open-scd/commit/cf45fe92e4a09066ca9b426b282486229dfbc43a))
* added acd as a supported cdc type ([#1371](https://github.com/com-pas/open-scd/issues/1371)) ([5ee353c](https://github.com/com-pas/open-scd/commit/5ee353cf85e61ce9edd6f48268d198adfdc3f0b2))
* added acd as a supported ens type ([#1384](https://github.com/com-pas/open-scd/issues/1384)) ([cebcd37](https://github.com/com-pas/open-scd/commit/cebcd37ecbc0230561018c4bb2a8c5e58de3b807))
* Added Settings Addon ([#1441](https://github.com/com-pas/open-scd/issues/1441)) ([7ab3553](https://github.com/com-pas/open-scd/commit/7ab355340a64cc2afaf6118ea8ca1ea7acc2a319))
* Added Waiter addon ([#1439](https://github.com/com-pas/open-scd/issues/1439)) ([91a2ca9](https://github.com/com-pas/open-scd/commit/91a2ca97998551aa07e96452ce3c73ddea6b1641))
* Added XML Package for OpenSCD ([#1536](https://github.com/com-pas/open-scd/issues/1536)) ([ca60c2a](https://github.com/com-pas/open-scd/commit/ca60c2a63c304a5e1c88095ea2f24b597fc5a2ad))
* Allow .fsd file creation ([d9a4a0c](https://github.com/com-pas/open-scd/commit/d9a4a0c6f6a0c9c86927d80bf5c81b4e9f6fc6d5))
* allow for plugins being passed down as props to `<open-scd>` ([#1486](https://github.com/com-pas/open-scd/issues/1486)) ([01bcc01](https://github.com/com-pas/open-scd/commit/01bcc017c373185fa34036ea4d80c5ef105d5ee2))
* API compliant editor ([#1719](https://github.com/com-pas/open-scd/issues/1719)) ([e43ee6a](https://github.com/com-pas/open-scd/commit/e43ee6a10805d1d09e5a8adb539be7d68a65ab6a))
* Attach files to release build ([#1620](https://github.com/com-pas/open-scd/issues/1620)) ([2273c2d](https://github.com/com-pas/open-scd/commit/2273c2dab6799f3665b1897bc9abcbe0dab2c496))
* change release please Workflow trigger ([#1624](https://github.com/com-pas/open-scd/issues/1624)) ([53f24cb](https://github.com/com-pas/open-scd/commit/53f24cbc9b2be8407aa1420b5665d2a09e9051ea))
* edit and delete virtual IED elements ([#1715](https://github.com/com-pas/open-scd/issues/1715)) ([106688b](https://github.com/com-pas/open-scd/commit/106688bd736b449a3182045ecb6fccc5a51067c7))
* Edit api v3 ([#1615](https://github.com/com-pas/open-scd/issues/1615)) ([ce39e2b](https://github.com/com-pas/open-scd/commit/ce39e2b7bfcda40659f36e40659b1efd571f2a53))
* Edit events v1 will be converted event v2 ([14e933e](https://github.com/com-pas/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* Editor plugins can be rendered without an active document ([8b06a37](https://github.com/com-pas/open-scd/commit/8b06a375ecfbc6275c5238d4a95383f4e80449b8))
* **editor/ied:** Add wizard/action to remove IED including references ([#732](https://github.com/com-pas/open-scd/issues/732)) ([bba9b3c](https://github.com/com-pas/open-scd/commit/bba9b3c7154a6e7d81a0776d10b1a41738bad388))
* **editor/ied:** Filter for logical nodes ([#990](https://github.com/com-pas/open-scd/issues/990)) ([629cbcc](https://github.com/com-pas/open-scd/commit/629cbcc2590b22c052e16778c919ac365a2886c6))
* **editor/ied:** Show the technical path to a DO/DA ([15c4f7b](https://github.com/com-pas/open-scd/commit/15c4f7bd3124c4f734b00f1b52d579eec1c08d89))
* **editor/laterbinding:** Added first part for SMV Later Binding Editor ([#927](https://github.com/com-pas/open-scd/issues/927)) ([5bfc3aa](https://github.com/com-pas/open-scd/commit/5bfc3aa5f5e91c8a313875beb6b225a81f88f663))
* **editor/laterbinding:** Show connected and available ExtRef Element from selected FCDA Element ([#941](https://github.com/com-pas/open-scd/issues/941)) ([d06d0b4](https://github.com/com-pas/open-scd/commit/d06d0b463a5cc150bfdf1d9ea24739c8f96d3f4f))
* **editor/laterbinding:** Subscribe and unsubscribe from ExtRef for Later Binding (SMV) ([#944](https://github.com/com-pas/open-scd/issues/944)) ([b25f9a6](https://github.com/com-pas/open-scd/commit/b25f9a67d541583678a19f5a5a211cc8ef5d0d2a))
* **editor/subscriber:** Added plugin for Subscriber Logical Nodes (GOOSE/SMV) ([#1036](https://github.com/com-pas/open-scd/issues/1036)) ([971f0c1](https://github.com/com-pas/open-scd/commit/971f0c10d112b4c68791daa1aada2c94cbc3b20b))
* **editor/subscriber:** Show counter for Subscriber Plugins (Logical Nodes / Later) (GOOSE/SMV) ([#1040](https://github.com/com-pas/open-scd/issues/1040)) ([02ec714](https://github.com/com-pas/open-scd/commit/02ec714e7ac44204a972b55a872e0445eab66e72))
* **editor/subscriber:** Subscribe and unsubscribe for Subscriber Logical Nodes (GOOSE/SMV) ([#1039](https://github.com/com-pas/open-scd/issues/1039)) ([1c55aed](https://github.com/com-pas/open-scd/commit/1c55aede2f89eb85a069b213a6a4ea709e171b02))
* **editor/subscription:** add supervision indication ([#1082](https://github.com/com-pas/open-scd/issues/1082)) ([8ebac53](https://github.com/com-pas/open-scd/commit/8ebac53bbf86b86e6b8cdb9d79b28957d4a7b5fc))
* **editor/substation/l-node-editor:** add remove button ([#771](https://github.com/com-pas/open-scd/issues/771)) ([7966f0f](https://github.com/com-pas/open-scd/commit/7966f0f383bee611b1f840f3222075b56dbe9498))
* **editor/substation:** Add read-only view for General Equipment ([#1050](https://github.com/com-pas/open-scd/issues/1050)) ([d3baa74](https://github.com/com-pas/open-scd/commit/d3baa7479eeb54121e975cc1a89038c0769acade))
* **editor/substation:** read-only editor for SubEquipment element ([#1030](https://github.com/com-pas/open-scd/issues/1030)) ([f6e96b5](https://github.com/com-pas/open-scd/commit/f6e96b5d2bbb5014b4951299e55ae1462b9b1c33))
* **editors/104:** Add connected AP ([440a2f6](https://github.com/com-pas/open-scd/commit/440a2f69e16cbb1ce70a6f42c38fd48ba0be18a0))
* **editors/104:** Show/edit subnetworks without redundancy ([638fbf4](https://github.com/com-pas/open-scd/commit/638fbf42ffa74eb63f83f5033dd25ddf32e04c5e))
* **editors/binding:** Allow filtering of subscribed/unsubscribed data in binding editors ([#1149](https://github.com/com-pas/open-scd/issues/1149)) ([874be45](https://github.com/com-pas/open-scd/commit/874be4518c7574846abbaed4cf597c779c747d5e))
* **editors/cleanup:** Support DataTypeTemplates ([#701](https://github.com/com-pas/open-scd/issues/701)) ([1db5169](https://github.com/com-pas/open-scd/commit/1db5169b2139f4fa1b423f7f13b7609af3e0e058))
* **editors/communication:** add GSE and SMV editor type elements ([#1021](https://github.com/com-pas/open-scd/issues/1021)) ([81487c1](https://github.com/com-pas/open-scd/commit/81487c184d610def07fec4a8919f9be8f133c730))
* **editors/ied:** Improve IED editor UI for IED and LN selection ([#1288](https://github.com/com-pas/open-scd/issues/1288)) ([e5bc0b8](https://github.com/com-pas/open-scd/commit/e5bc0b8509a40950188e2f4bcf52569932309c69))
* **editors/ied:** Improve IED editor UI for IED and LN selection, closes [#1287](https://github.com/com-pas/open-scd/issues/1287) ([e5bc0b8](https://github.com/com-pas/open-scd/commit/e5bc0b8509a40950188e2f4bcf52569932309c69))
* **editors/ied:** show all instantiated setting group values ([#1155](https://github.com/com-pas/open-scd/issues/1155)) ([d9680fa](https://github.com/com-pas/open-scd/commit/d9680fa1195650aeef6a5ec0290ec6cc321303ef))
* **editors/later-binding:** Improve supervision visibility and remove clutter ([#1141](https://github.com/com-pas/open-scd/issues/1141)) ([845d1a5](https://github.com/com-pas/open-scd/commit/845d1a5200e54b1d7e2a470604b553c519d5f6dd))
* **editors/laterbinding:** Filter later binding GOOSE/SMV by serviceType (closes [#1150](https://github.com/com-pas/open-scd/issues/1150)) ([#1151](https://github.com/com-pas/open-scd/issues/1151)) ([ea59f70](https://github.com/com-pas/open-scd/commit/ea59f702546f1b9186054d77ec61f4ca57de5b10))
* **editors/publisher:** add read only data set element editor ([#911](https://github.com/com-pas/open-scd/issues/911)) ([45b5440](https://github.com/com-pas/open-scd/commit/45b5440970b515e6d344f53f851c974267eaf961))
* **editors/publisher:** add read only gse-control-element-editor ([#917](https://github.com/com-pas/open-scd/issues/917)) ([2aee3cc](https://github.com/com-pas/open-scd/commit/2aee3ccb78cbe1c18a2b55769b130e196bc45869))
* **editors/publisher:** add sampled-value-control-element-editor ([#920](https://github.com/com-pas/open-scd/issues/920)) ([e95dfc5](https://github.com/com-pas/open-scd/commit/e95dfc509b710dafc53f2980f5ac93e303cc995d))
* **editors/publisher:** filter for control blocks and DataSets ([#844](https://github.com/com-pas/open-scd/issues/844)) ([4c663d0](https://github.com/com-pas/open-scd/commit/4c663d0374129894eb61168404e0d47aab28694f))
* **editors/subscriber-later-binding:** Add plugin with filterable FCDA list ([#945](https://github.com/com-pas/open-scd/issues/945)) ([758da72](https://github.com/com-pas/open-scd/commit/758da723193b069ca5772a9be25c4fc39659713b))
* **editors/subscriber-later-binding:** Show connected and available ExtRef on FCDA selection (GOOSE) ([#995](https://github.com/com-pas/open-scd/issues/995)) ([d88b7d2](https://github.com/com-pas/open-scd/commit/d88b7d24cd50682cca4eb39e37f547fcc6702ce0))
* **editors/subscriber/later-binding:** add input requirement check ([#1049](https://github.com/com-pas/open-scd/issues/1049)) ([26f7fe5](https://github.com/com-pas/open-scd/commit/26f7fe56ecbc216495ddb747e75fb28d002f9447))
* **editors/subscription:** add subscription supervision support ([#1010](https://github.com/com-pas/open-scd/issues/1010)) ([3f6b659](https://github.com/com-pas/open-scd/commit/3f6b6597bfeb854a1a96e6cbff8044526a6c7f5f))
* **editors/subscription:** Support valKind and valImport on first instances, improve instance use counting and allow Val updates ([#1169](https://github.com/com-pas/open-scd/issues/1169)) ([aaab451](https://github.com/com-pas/open-scd/commit/aaab451ca01bcd29b1bb2dc73299a0b171b30389))
* **editors/substation/transformerwinding:** add remove button  ([#1157](https://github.com/com-pas/open-scd/issues/1157)) ([a01e0ed](https://github.com/com-pas/open-scd/commit/a01e0ed5f1e34cc93a041c57400ae306db5228e4))
* **editors/substation:** add read-only l-node-editor ([#730](https://github.com/com-pas/open-scd/issues/730)) ([ecfeb5d](https://github.com/com-pas/open-scd/commit/ecfeb5d03a7b36493a10193541afbd3a2edd0e9a))
* **editors/substation:** Add read-only transformer winding editor ([#1073](https://github.com/com-pas/open-scd/issues/1073)) ([e57b5c2](https://github.com/com-pas/open-scd/commit/e57b5c20ae3117a971d8b0b2854281c05f034ef5))
* **editors/substation:** redirect LNode's on clone ([#1079](https://github.com/com-pas/open-scd/issues/1079)) ([cfd16d6](https://github.com/com-pas/open-scd/commit/cfd16d66e2efe13930d3537486750b8bc46b3d87))
* **editors/substation:** remove button to function type editors ([#761](https://github.com/com-pas/open-scd/issues/761)) ([ce9dea1](https://github.com/com-pas/open-scd/commit/ce9dea1ce9365ff115b14e1174166c466e884539))
* **editors/subtation:** allow instantiation of LNode from LNodeType's ([#766](https://github.com/com-pas/open-scd/issues/766)) ([8ee23fc](https://github.com/com-pas/open-scd/commit/8ee23fc8a5c3b3f9dfd57f4d445e9da744edd850))
* **editors:** Show label of Action Pane also as tool-tip ([#838](https://github.com/com-pas/open-scd/issues/838)) ([492778f](https://github.com/com-pas/open-scd/commit/492778ff02812a06e96df775f1040f96b24642be))
* enable custom plugin dialog through an event ([9c5859e](https://github.com/com-pas/open-scd/commit/9c5859e1b5734e482ffdc7ad1396e7e93420c725))
* enable transpower publisher plugin ([3697c38](https://github.com/com-pas/open-scd/commit/3697c387917a3d53ef22e1ef0b72c3eda53b4751))
* **filter-button:** Added option to disable filter button ([205449b](https://github.com/com-pas/open-scd/commit/205449b019f31c4b412e8e41379133f2846478c3))
* **filtered-list:** Add ? and * wildcards to filtered-search, closes [#1006](https://github.com/com-pas/open-scd/issues/1006). ([#1007](https://github.com/com-pas/open-scd/issues/1007)) ([48ef7ea](https://github.com/com-pas/open-scd/commit/48ef7ea26d772573027f9627612fb56e3a982d67))
* **filtered-list:** filter on list item value ([#876](https://github.com/com-pas/open-scd/issues/876)) ([9d7916b](https://github.com/com-pas/open-scd/commit/9d7916bc684b338a076a84060ae317e4bf00cb83))
* Form library ([#1718](https://github.com/com-pas/open-scd/issues/1718)) ([396bb13](https://github.com/com-pas/open-scd/commit/396bb13d0d5ecf6c3994072f00958587bb9e5fcd))
* **general-equipment-editor:** add remove button ([#1107](https://github.com/com-pas/open-scd/issues/1107)) ([b3def87](https://github.com/com-pas/open-scd/commit/b3def87e33d9a47a9bfb8872b35161e59ded4a80))
* Handle Config Plugin Events ([a510664](https://github.com/com-pas/open-scd/commit/a5106648367dad831a248b734cd5c34aa1043d89))
* **line-editor.ts:** unit_test_added ([#1193](https://github.com/com-pas/open-scd/issues/1193)) ([bbfde76](https://github.com/com-pas/open-scd/commit/bbfde76c40606e843b3542f146e6931c1c4afcce))
* Make layout parts overwriteable ([#1692](https://github.com/com-pas/open-scd/issues/1692)) ([b3822d2](https://github.com/com-pas/open-scd/commit/b3822d27416baff13b358fca50f6a7dfe0eee50c))
* make use of lerna nx ([#1462](https://github.com/com-pas/open-scd/issues/1462)) ([94d68d7](https://github.com/com-pas/open-scd/commit/94d68d7e395b545c699ead584266231085cffeac))
* **menu/compareied:** Compare View redesign to make it more clear ([#996](https://github.com/com-pas/open-scd/issues/996)) ([342c30f](https://github.com/com-pas/open-scd/commit/342c30ff826c10ff54ae9205f12841f7b02824c6))
* **menu/compareied:** compares two IED elements with one another ([#903](https://github.com/com-pas/open-scd/issues/903)) ([cb07c07](https://github.com/com-pas/open-scd/commit/cb07c071a554ee46780472566f2cfe5fa4b7dd10))
* **menu/compareied:** ignore attributes/elements when comparing IED Elements ([#926](https://github.com/com-pas/open-scd/issues/926)) ([7e25149](https://github.com/com-pas/open-scd/commit/7e2514929d3997f598990d41a01696e567b5d6a6))
* **menu/exportCommunication:** Allow XML export of communication section  ([#1044](https://github.com/com-pas/open-scd/issues/1044)) ([e4d4e24](https://github.com/com-pas/open-scd/commit/e4d4e2414c2f3e9fafe82d9e634772f7d14d0236))
* **menu/history:** move history from log to own menu plugin ([30d568f](https://github.com/com-pas/open-scd/commit/30d568fd7596df307f301170b96a74b47af5053a))
* **menu/VirtualTemplateIED:** automatically create virtual IEDs ([#806](https://github.com/com-pas/open-scd/issues/806)) ([dc59736](https://github.com/com-pas/open-scd/commit/dc59736111c73450cebb3b1f9963886f3dc94d90))
* **monorepo:** Add contributing guide ([#1588](https://github.com/com-pas/open-scd/issues/1588)) ([dd692a8](https://github.com/com-pas/open-scd/commit/dd692a8d9784aaf5f8509fdad5298293195d1465))
* move gse smv between connectedAPs ([#1680](https://github.com/com-pas/open-scd/issues/1680)) ([da8324e](https://github.com/com-pas/open-scd/commit/da8324e08483a3b45dc7436d7c2e22381fa3c9e8))
* **openscd:** Add multiple Val element into DAI distinguished by sGroup ([#1221](https://github.com/com-pas/open-scd/issues/1221)) ([a238cc9](https://github.com/com-pas/open-scd/commit/a238cc97c271ce6fb55116c438d8f449a5e8d54c))
* **openscd:** Move progress indicator beneath plugin tabs ([#1181](https://github.com/com-pas/open-scd/issues/1181)) ([a7a7081](https://github.com/com-pas/open-scd/commit/a7a7081a32ee14998d0ead75ffb89ba2726631f8))
* optional nsd upload button ([#1474](https://github.com/com-pas/open-scd/issues/1474)) ([a6c5d3e](https://github.com/com-pas/open-scd/commit/a6c5d3e55e7fd13ada773be7f56d7869e06f30c0))
* **plugin:** add read-only report-control-element-editor ([#913](https://github.com/com-pas/open-scd/issues/913)) ([21732c9](https://github.com/com-pas/open-scd/commit/21732c984c5af0e1a31424f3485cb98ccaa70f6a))
* **plugins/SampledValues:** Switch publisher and subscriber in SV subscription editor ([a5ce813](https://github.com/com-pas/open-scd/commit/a5ce813fb27c597b7f8bd8399b92c5d884ba1b5e))
* prevent losing data on user navigation ([#800](https://github.com/com-pas/open-scd/issues/800)) ([8ffcbbb](https://github.com/com-pas/open-scd/commit/8ffcbbb21263e70f43d791434d88a9e21641fc30))
* Programatic Plugin Activation ([#1611](https://github.com/com-pas/open-scd/issues/1611)) ([d3b2a0a](https://github.com/com-pas/open-scd/commit/d3b2a0a7b2d08d0ce5484567ebfe6c6d4e548c5e))
* Provide ability to see Services section XML ([#1346](https://github.com/com-pas/open-scd/issues/1346)) ([83d1d61](https://github.com/com-pas/open-scd/commit/83d1d611eeeb79082c7f0eb7934ee045b25fe0c2))
* remove communication from the substation editor and use oscd-publisher plugin ([#1650](https://github.com/com-pas/open-scd/issues/1650)) ([c850088](https://github.com/com-pas/open-scd/commit/c8500880bfdffd87cf014a5ad1d9fcef89a5ba41))
* render plugin download UI on event ([44a51f0](https://github.com/com-pas/open-scd/commit/44a51f05797e8dd6345215c177a2e7b68e189d69))
* set up PR preview ([#1547](https://github.com/com-pas/open-scd/issues/1547)) ([fede42b](https://github.com/com-pas/open-scd/commit/fede42b43272e4fbf036e18df299a45fe52741cc))
* **sub-equipment-editor:** edit wizard ([#1063](https://github.com/com-pas/open-scd/issues/1063)) ([4778e7d](https://github.com/com-pas/open-scd/commit/4778e7d4146c4ce7f8a26bbf953f8494d56cd32a))
* **substation/general-equipment-editor:** add_button_general-equipment_container ([#1110](https://github.com/com-pas/open-scd/issues/1110)) ([812ff94](https://github.com/com-pas/open-scd/commit/812ff942d2a4fbee9b3ff7013c02fab7b78c5b17))
* **substation/general-equipment-editor:** edit wizard ([#1089](https://github.com/com-pas/open-scd/issues/1089)) ([95ba5ab](https://github.com/com-pas/open-scd/commit/95ba5aba9df7348da92011c2f091b0b2b317260b))
* **substation/transformerwinding:** add create wizard ([#1154](https://github.com/com-pas/open-scd/issues/1154)) ([51e19a7](https://github.com/com-pas/open-scd/commit/51e19a75d3cadaf9c61969a54e0a67d9e9fd1fda))
* Support edit api v2 ([#1581](https://github.com/com-pas/open-scd/issues/1581)) ([14e933e](https://github.com/com-pas/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* support ldname attribute ([#1401](https://github.com/com-pas/open-scd/issues/1401)) ([c0972f3](https://github.com/com-pas/open-scd/commit/c0972f33b7e386c39a127739b4c2962f9c9a60f4))
* update nsd files ([#1691](https://github.com/com-pas/open-scd/issues/1691)) ([c437f5a](https://github.com/com-pas/open-scd/commit/c437f5acaf5a45032cfae559ecf70de968913d45))
* update release please action ([#1635](https://github.com/com-pas/open-scd/issues/1635)) ([06b8356](https://github.com/com-pas/open-scd/commit/06b8356485940f2841b01293de5bea2a6fa1399d))
* **wizard/connectedap:** auto create GSE and SMV elements ([#1019](https://github.com/com-pas/open-scd/issues/1019)) ([984652a](https://github.com/com-pas/open-scd/commit/984652ae435729b20b3939624e1b88924684454b))
* **wizard/dai:** Set/Update a value for a type 'Timestamp' of Data Attribute Instance ([#959](https://github.com/com-pas/open-scd/issues/959)) ([4d52a9a](https://github.com/com-pas/open-scd/commit/4d52a9a3e3aee64ee695606b046b85afdbddb2a8))
* **wizards/function:** add create wizards for Function, SubFunction, EqFunction and EqSubFunction element ([#731](https://github.com/com-pas/open-scd/issues/731)) ([774add7](https://github.com/com-pas/open-scd/commit/774add7510c4b909fab4e0d09f173cf7d3726027))
* **wizards/generalequipment:** Add_create_wizard_GeneralEquipment_and_test ([#1102](https://github.com/com-pas/open-scd/issues/1102)) ([2d1464f](https://github.com/com-pas/open-scd/commit/2d1464fa3446d459aa411f82080241ebf0ff379a))
* **wizards/ied:** added new textfields for IED properties  ([#822](https://github.com/com-pas/open-scd/issues/822)) ([1cd6fb7](https://github.com/com-pas/open-scd/commit/1cd6fb72b0ecae47106425ecff1b1d8523f7d50e))
* **wizards/lnode:** add edit wizard ([#778](https://github.com/com-pas/open-scd/issues/778)) ([965f10a](https://github.com/com-pas/open-scd/commit/965f10a1d7a9c66fdc4e74265e265fdc950c3a09))
* **wizards/sampledvaluecontrol:** add create wizard ([#744](https://github.com/com-pas/open-scd/issues/744)) ([f510446](https://github.com/com-pas/open-scd/commit/f510446da42d20b45c57b41c4463a663b6bc712d))
* **wizards/services:** add read-only wizard on access point and ied ([#1109](https://github.com/com-pas/open-scd/issues/1109)) ([81088f0](https://github.com/com-pas/open-scd/commit/81088f06bbae8ca022525fe29d59589ba87647a9))
* **wizards/substation/l-node-editor:** add duplicate button ([#782](https://github.com/com-pas/open-scd/issues/782)) ([7470e2d](https://github.com/com-pas/open-scd/commit/7470e2d0f657002222d771243d4cb609649f5f80))
* **wizards/transformerwinding:** add edit wizard ([#1137](https://github.com/com-pas/open-scd/issues/1137)) ([cf65a50](https://github.com/com-pas/open-scd/commit/cf65a50366cb0659c3a510e3664ea4226c4c26d4))
* **wizards:** add function type create wizards ([#768](https://github.com/com-pas/open-scd/issues/768)) ([6e9c928](https://github.com/com-pas/open-scd/commit/6e9c928bc09f7e05282d88c7967840e0b441d811))


### Bug Fixes

* **../substation/general-equipment-editor.ts:** action-icon_is_rendered ([#1122](https://github.com/com-pas/open-scd/issues/1122)) ([598988b](https://github.com/com-pas/open-scd/commit/598988b9f09282b2edf88922b040e24a52e6ca73))
* **104/address:** Input fields are reset when using multiple time ([1d31358](https://github.com/com-pas/open-scd/commit/1d313580cb377cec75c11fd718014c703a6fbf4b))
* **104:** change options between different tis when selecting a doi ([#1380](https://github.com/com-pas/open-scd/issues/1380)) ([cb80080](https://github.com/com-pas/open-scd/commit/cb800808e9679e673e987038678e4c9f2da9fdf3))
* **104:** Temporary fix to refresh components. ([41a0a4b](https://github.com/com-pas/open-scd/commit/41a0a4bb046787d20a38e0198a4449dff001f9e6))
* 1553 LN LN0 wizards read only attributes ([#1568](https://github.com/com-pas/open-scd/issues/1568)) ([87aa759](https://github.com/com-pas/open-scd/commit/87aa75961c7ef0bfe11810d2fa5d4e08704da033)), closes [#1553](https://github.com/com-pas/open-scd/issues/1553)
* **action:** correct source folder ([2ae1cd3](https://github.com/com-pas/open-scd/commit/2ae1cd316743b912551c245da15533bcb9ec2426))
* add missing code editor to edit wizards ([#1136](https://github.com/com-pas/open-scd/issues/1136)) ([2171569](https://github.com/com-pas/open-scd/commit/2171569a9885cd105804cf342906799e678f8009))
* add node release type and core path ([#1437](https://github.com/com-pas/open-scd/issues/1437)) ([d1bde4e](https://github.com/com-pas/open-scd/commit/d1bde4e8077f378a5f6e1cc6ebc62561be37db04))
* added editcount to reflect made changes ([#1321](https://github.com/com-pas/open-scd/issues/1321)) ([802dd41](https://github.com/com-pas/open-scd/commit/802dd4174fb49fc969e601ba04f3ca1966adedbb))
* added translation key for phase ([#1186](https://github.com/com-pas/open-scd/issues/1186)) ([479c499](https://github.com/com-pas/open-scd/commit/479c49991a2f4e3e0b70ddd39e90deda3ec935ec))
* Adding Subnetwork to a configuration without a Communication Ele… ([0f661d4](https://github.com/com-pas/open-scd/commit/0f661d467f40d6c40df85269846b6c8a34832a4a))
* Adding Subnetwork to a configuration without a Communication Element failed for the first time ([c1d2086](https://github.com/com-pas/open-scd/commit/c1d2086ec5b12edef0b3c16e3e1855cf40fbf7b3))
* Adding Subnetwork to a configuration without a Communication Element failed for the first time ([4af30c2](https://github.com/com-pas/open-scd/commit/4af30c29765a3658b25d639bac6133ca1fd8595a))
* Adding Subnetwork to a configuration without a Communication Element failed for the first time ([617e72d](https://github.com/com-pas/open-scd/commit/617e72d210869450611f5c8c75a41dbc2b6be9d1))
* Adding Subnetwork to a configuration without a Communication Element failed for the first time ([5a8e659](https://github.com/com-pas/open-scd/commit/5a8e6592dd5e2e8410c4e5e949f66b8e3890bf99))
* allow address update for new entries ([#1331](https://github.com/com-pas/open-scd/issues/1331)) ([d1f4ff9](https://github.com/com-pas/open-scd/commit/d1f4ff90e211bc8ba8c2e9fc4e900fb093acfad5))
* Attach release files in release please ([#1636](https://github.com/com-pas/open-scd/issues/1636)) ([f2e6a1d](https://github.com/com-pas/open-scd/commit/f2e6a1d8b8fc49b03c75e94dfeed565eeb1bda2f))
* Build entire project and attach distribution to build output ([#1639](https://github.com/com-pas/open-scd/issues/1639)) ([bd554e7](https://github.com/com-pas/open-scd/commit/bd554e72f308a3c6e60f4ee1d98fa4884fc5d8f8))
* change pattern definition of tIDNaming to non-whitespace characters ([#1670](https://github.com/com-pas/open-scd/issues/1670)) ([5476bd0](https://github.com/com-pas/open-scd/commit/5476bd08711ae94341802db0636dcfd0e231cd41))
* **ci:** remove unneeded permission check ([8d5de2d](https://github.com/com-pas/open-scd/commit/8d5de2d93714cef7f5a725704a6adf38602b581c))
* close menu after open project ([#1111](https://github.com/com-pas/open-scd/issues/1111)) ([0e047a3](https://github.com/com-pas/open-scd/commit/0e047a377f0eedd81996da24c5da80c9b67cbee3))
* **communication-plugin:** Offer only valid connected aps as move targets ([#1685](https://github.com/com-pas/open-scd/issues/1685)) ([bfd43ba](https://github.com/com-pas/open-scd/commit/bfd43bab3e164d15f7aa2bafe5d0d428df9d10e7))
* **communication:** display changes to ConnectedAPs in SubNetworks ([#819](https://github.com/com-pas/open-scd/issues/819)) ([f082d20](https://github.com/com-pas/open-scd/commit/f082d20871641f4819fc9623eb88d5b126bb5936))
* Connected AP wizard element order ([#1703](https://github.com/com-pas/open-scd/issues/1703)) ([cd3b39a](https://github.com/com-pas/open-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))
* continue to upload assets job even if npm publish step fails ([#1638](https://github.com/com-pas/open-scd/issues/1638)) ([bc7571e](https://github.com/com-pas/open-scd/commit/bc7571e8351d2a1770e19c58eabf91404cf1726e))
* correct plug-ins' paths ([a7a14ce](https://github.com/com-pas/open-scd/commit/a7a14ced59294d8a24daabf5ecdc76a5dbb75237))
* Disable experimental require module to make node 20.19 and above work ([#1709](https://github.com/com-pas/open-scd/issues/1709)) ([d47a3da](https://github.com/com-pas/open-scd/commit/d47a3dac6c57ee814cfbd78f3636fe872a052568))
* do and da wizard lnclass textfield correction ([#1444](https://github.com/com-pas/open-scd/issues/1444)) ([ad08ff2](https://github.com/com-pas/open-scd/commit/ad08ff2f4ea51655da5fd158c7106680b6b68506))
* **editing:** don't validate after no-op action ([#889](https://github.com/com-pas/open-scd/issues/889)) ([b93dab2](https://github.com/com-pas/open-scd/commit/b93dab2a3367807959fd4fe7fe33f5ce99bfea41))
* **editing:** reactively update after changes to doc ([#814](https://github.com/com-pas/open-scd/issues/814)) ([78e8f0f](https://github.com/com-pas/open-scd/commit/78e8f0f655e039580e2c26f4d42517a6d40f3862))
* **Editing:** set false attribute values on update ([#899](https://github.com/com-pas/open-scd/issues/899)) ([0b414e1](https://github.com/com-pas/open-scd/commit/0b414e1687f9a796e7ec161237ad1ab78f04e87e))
* **editing:** use editCount property for change propagation ([#1233](https://github.com/com-pas/open-scd/issues/1233)) ([548f63b](https://github.com/com-pas/open-scd/commit/548f63b5b35dac6772230004e6ca7859cf3337b8))
* **editing:** wait for new doc before validating ([#879](https://github.com/com-pas/open-scd/issues/879)) ([1548282](https://github.com/com-pas/open-scd/commit/1548282e124285b1cfd4bdaf1e58d8b815ff93bd))
* **editor/104:** Small improvements and fix. ([#874](https://github.com/com-pas/open-scd/issues/874)) ([eb22280](https://github.com/com-pas/open-scd/commit/eb222802b70162c7748938b593b15dd35312b96c))
* **editor/ied:** fixed styling how DA(I) values are displayed. ([#872](https://github.com/com-pas/open-scd/issues/872)) ([7a12d77](https://github.com/com-pas/open-scd/commit/7a12d77447fcf2f24a8b7f3e2549ce1626f41774))
* **editor/SingleLineDiagram:** Fixed redrawing when new document loaded ([ccd8ff0](https://github.com/com-pas/open-scd/commit/ccd8ff031ac73d9882a98a8a3d80b940e31cf84b))
* **editor/subscriber:** filtering on FCDAs retains the parent ([#1048](https://github.com/com-pas/open-scd/issues/1048)) ([d5f8bb7](https://github.com/com-pas/open-scd/commit/d5f8bb7ed8ceeb9c2ca14a91d3624afda7a43513))
* **editor/subscriber:** make sure to add all mendatory attributes to ExtRef ([b814c00](https://github.com/com-pas/open-scd/commit/b814c007514e18f1aacb6698eb2c747459d6f5da))
* **editor/substation:** Updated IED name is shown in IED container ([cff0bb7](https://github.com/com-pas/open-scd/commit/cff0bb71a9a0cc404115ec52fd4302921bc45f35))
* **editors/cleanup:** Fix filter issue with in cleanup plugin ([#910](https://github.com/com-pas/open-scd/issues/910)) ([92e7390](https://github.com/com-pas/open-scd/commit/92e7390a9cfb42d25858578b71bf935304cc4691))
* **editors/cleanup:** quote input in selector of control blocks cleanup editor, closes [#1145](https://github.com/com-pas/open-scd/issues/1145) ([ae26764](https://github.com/com-pas/open-scd/commit/ae26764c5be29667114e35fb6ac1e16f5e3704a4))
* **editors/communication,wizards:** Fix P-type names and display of BitRate ([#1277](https://github.com/com-pas/open-scd/issues/1277)) ([2706f82](https://github.com/com-pas/open-scd/commit/2706f82283cc7a58a8da5ca4cb775bfec7c6b986))
* **editors/IED:** Allow IEDs to be updated after edit count change (closes [#1272](https://github.com/com-pas/open-scd/issues/1272)) ([#1275](https://github.com/com-pas/open-scd/issues/1275)) ([1df6842](https://github.com/com-pas/open-scd/commit/1df6842002891223cf7a58821494731c01be73a5))
* **editors/later-binding:** Resolve absent prefix in ExtRef for later binding subscription ([#1026](https://github.com/com-pas/open-scd/issues/1026)) ([31fd177](https://github.com/com-pas/open-scd/commit/31fd1777eebce8ff5627d70559127d2458915571))
* **editors/plugin:** disable read-only inputs ([#1000](https://github.com/com-pas/open-scd/issues/1000)) ([e399e7e](https://github.com/com-pas/open-scd/commit/e399e7e3685ad0ee5fee351eed0f53703a0f6528))
* **editors/subscriber-later-binding:** Add GOOSE icon to later binding editor, closes [#1017](https://github.com/com-pas/open-scd/issues/1017) ([#1022](https://github.com/com-pas/open-scd/issues/1022)) ([49e9007](https://github.com/com-pas/open-scd/commit/49e9007d072bd2832fcfc513c2b592d91543f4ff))
* **editors/subscription:** Increase timeout for failing subscriber/fcda-binding-list test, closes [#1257](https://github.com/com-pas/open-scd/issues/1257) ([#1274](https://github.com/com-pas/open-scd/issues/1274)) ([8c620eb](https://github.com/com-pas/open-scd/commit/8c620eb97fb34a0a01e2ac21cefbb87950e5a6b4))
* **editors/substation/guess-wizard:** make sure guessed content is added to the substation ([#1148](https://github.com/com-pas/open-scd/issues/1148)) ([cc0051f](https://github.com/com-pas/open-scd/commit/cc0051f54a89984af9676ed2209a0481f49fa7a2))
* **editors/substation:** make sure add new child menu always open its create wizard ([#912](https://github.com/com-pas/open-scd/issues/912)) ([ed0e71d](https://github.com/com-pas/open-scd/commit/ed0e71d5579cfc539036adc6120ae62a4d763ab6))
* **editors/substation:** update on action ([#852](https://github.com/com-pas/open-scd/issues/852)) ([7af5b5c](https://github.com/com-pas/open-scd/commit/7af5b5c2e74841cb75629b10f1349dd96ae86ab2))
* **editors/template:** make sure that edit wizards are always opened ([#845](https://github.com/com-pas/open-scd/issues/845)) ([15c2d3b](https://github.com/com-pas/open-scd/commit/15c2d3b08c1d2ef20e0b7e239c1e0a6056ed4d30))
* enable compare plugin by default ([#1255](https://github.com/com-pas/open-scd/issues/1255)) ([a71b667](https://github.com/com-pas/open-scd/commit/a71b6676cb5753512b776259a0cc85f0a1b18d88))
* enable IED editor plugin by default ([#1253](https://github.com/com-pas/open-scd/issues/1253)) ([436c764](https://github.com/com-pas/open-scd/commit/436c764d505cd2534845cce1ef64ff8ed9eb2eeb))
* escaped symbols in regex patterns ([#1266](https://github.com/com-pas/open-scd/issues/1266)) ([de2dd0d](https://github.com/com-pas/open-scd/commit/de2dd0dc2351c8feb6a70da62e43640334df571b))
* Fix handle activate editor ([#1651](https://github.com/com-pas/open-scd/issues/1651)) ([3847944](https://github.com/com-pas/open-scd/commit/384794420292a9e5192eac937d907238a6113120))
* fixed dotype-wizarding test for correct translation ([#1464](https://github.com/com-pas/open-scd/issues/1464)) ([4517106](https://github.com/com-pas/open-scd/commit/4517106c3e651d930fd6c53b4df34f6fc7a065f4))
* Forgetting Plugin Settnigs ([#1619](https://github.com/com-pas/open-scd/issues/1619)) ([101aaae](https://github.com/com-pas/open-scd/commit/101aaaef2217d7bb9d1b1d6a99d3b7ea3d77c503))
* **gh-action:** build-and-deploy should first build core before building OpenSCD ([#1427](https://github.com/com-pas/open-scd/issues/1427)) ([e25e5f8](https://github.com/com-pas/open-scd/commit/e25e5f8c94457deeed207891fec3234201fb1a03))
* goose subscription reflects state incorrectly ([#1261](https://github.com/com-pas/open-scd/issues/1261)) ([4440bff](https://github.com/com-pas/open-scd/commit/4440bff63c0ebe816a9fdc25f8af6da1ca6645f4))
* **iededitor:** Refreshing components after update IED or DAI Element ([67f5ed4](https://github.com/com-pas/open-scd/commit/67f5ed43931c807b1f244f8cc5dd291919020abf))
* **ieds-import:** multiple IEDs import ([#1103](https://github.com/com-pas/open-scd/issues/1103)) ([af0f5a3](https://github.com/com-pas/open-scd/commit/af0f5a3f4c2648a9538ce7c7e6eca5a73746b784))
* **Import IED:** Fix order of edits ([#1698](https://github.com/com-pas/open-scd/issues/1698)) ([0831fa4](https://github.com/com-pas/open-scd/commit/0831fa4e4cde55a21c261b1b4b8b5994868509b0))
* inconsistent plugin activation behaviour caused by refactoring ([#1626](https://github.com/com-pas/open-scd/issues/1626)) ([00c4dc0](https://github.com/com-pas/open-scd/commit/00c4dc06f6d0cf1c39e4822a5b21d650d698785e))
* **Logging:** broken toggle button styling ([81da900](https://github.com/com-pas/open-scd/commit/81da900c5d3850143961c23e197e19fb2cb02ad1))
* **menu/importieds:** Accept multiple IEDs from same file in import IEDs. Closes [#897](https://github.com/com-pas/open-scd/issues/897) ([#900](https://github.com/com-pas/open-scd/issues/900)) ([44b4f87](https://github.com/com-pas/open-scd/commit/44b4f87c64ef1311fcfa8cbd6f9771301dd5be19))
* **menu/importieds:** allow import to new projects ([#1012](https://github.com/com-pas/open-scd/issues/1012)) ([216226c](https://github.com/com-pas/open-scd/commit/216226c0a8497b048ff6d1dc3c9e6157c9a67eec))
* **menu/importIEDs:** Allow importing multiple IEDs from multiple SCD files ([#1222](https://github.com/com-pas/open-scd/issues/1222)) ([8bdd990](https://github.com/com-pas/open-scd/commit/8bdd990a1d0c77b50743281d71b61489709e433a))
* **menu/importieds:** import TEMPLATE IEDs with Communication section ([#1075](https://github.com/com-pas/open-scd/issues/1075)) ([013bfa5](https://github.com/com-pas/open-scd/commit/013bfa53a6524fc62a755320fa81d86c3573a523))
* **menu/importieds:** Transfer namespaces to document element for ied import ([#1081](https://github.com/com-pas/open-scd/issues/1081)) ([eccc3fc](https://github.com/com-pas/open-scd/commit/eccc3fc0d39e926176e9177058385851ab4f8f35))
* **menu/save-project:** Add missing XML prolog on document save ([#1173](https://github.com/com-pas/open-scd/issues/1173)) ([6cae0da](https://github.com/com-pas/open-scd/commit/6cae0da557ef69029312a854e94bc5ecc9558909))
* **menu/subscriberinfo:** fix lnInst attribute for lnClass LLN0 ([#749](https://github.com/com-pas/open-scd/issues/749)) ([2f0bad9](https://github.com/com-pas/open-scd/commit/2f0bad905cdc6450c1eec95d3c3a4755afb3098a))
* **mergeWizard:** insert element at valid position ([#888](https://github.com/com-pas/open-scd/issues/888)) ([027462c](https://github.com/com-pas/open-scd/commit/027462cedaa419c2832741563721d5b8d9c49652))
* modify start script to clear snowpack cache ([#1654](https://github.com/com-pas/open-scd/issues/1654)) ([ff699e3](https://github.com/com-pas/open-scd/commit/ff699e357442593f07bf9665473b1fbc499606b0))
* Move menu item content outside drawer ([#1683](https://github.com/com-pas/open-scd/issues/1683)) ([15b2872](https://github.com/com-pas/open-scd/commit/15b287240a015ab49590d6a4ab094f9180a16917))
* Moved towards get function from lit-translate ([#1471](https://github.com/com-pas/open-scd/issues/1471)) ([03dabf9](https://github.com/com-pas/open-scd/commit/03dabf94bf3e57f012bb078415ba0c284ce7b1e8))
* only later binding subscribers by default ([#1254](https://github.com/com-pas/open-scd/issues/1254)) ([04d351f](https://github.com/com-pas/open-scd/commit/04d351f7ca5469c42516f86bb2853ea9f5dd18cb))
* **open-scd:** Make linear progress bar Github stylez, closes [#1269](https://github.com/com-pas/open-scd/issues/1269) ([ebde770](https://github.com/com-pas/open-scd/commit/ebde77000373780dccfa6f345126732667be1c43))
* **open-scd:** Make linear progress bar Github stylez, closes [#1269](https://github.com/com-pas/open-scd/issues/1269) ([#1276](https://github.com/com-pas/open-scd/issues/1276)) ([ebde770](https://github.com/com-pas/open-scd/commit/ebde77000373780dccfa6f345126732667be1c43))
* opened menu cut off ([#1125](https://github.com/com-pas/open-scd/issues/1125)) ([0c3bd0c](https://github.com/com-pas/open-scd/commit/0c3bd0c838c75a6ef9ca575894bbc410a40ac36f))
* openscd forgets disabled plugins ([#1618](https://github.com/com-pas/open-scd/issues/1618)) ([c39cd6c](https://github.com/com-pas/open-scd/commit/c39cd6cffde6fb37a68f2bf71b3cc74adeafd6b1))
* **plain-compare-list:** swap list relations ([#1096](https://github.com/com-pas/open-scd/issues/1096)) ([9fbfbcd](https://github.com/com-pas/open-scd/commit/9fbfbcd0880b6d68ee892614e302bb298571c059))
* **Pluggin/Hosting:** allow using own dialogs in menu plugins ([#843](https://github.com/com-pas/open-scd/issues/843)) ([a9bad36](https://github.com/com-pas/open-scd/commit/a9bad366bec77060a1f4efa4622a3d5b356753fc))
* publish packages to npm ([2c38caa](https://github.com/com-pas/open-scd/commit/2c38caaa12a2b343b767ed48aa27ab9c85e6517c))
* publish packages to npm ([7ee5158](https://github.com/com-pas/open-scd/commit/7ee515894f0ad44089d32318c25f065688bee871))
* publish plugins to npm and remove empty packages from release step ([21fa2ac](https://github.com/com-pas/open-scd/commit/21fa2ac8f61816c04a6cef4d72f622befcb9dcf9))
* re-enable input fields in custom plugins dialog ([#1541](https://github.com/com-pas/open-scd/issues/1541)) ([38b490d](https://github.com/com-pas/open-scd/commit/38b490d1ca7988cebef8513fb640eb077c6246a0))
* recover ace editor files in packages/distribution ([#1544](https://github.com/com-pas/open-scd/issues/1544)) ([34a58c0](https://github.com/com-pas/open-scd/commit/34a58c04e496716f6a7107e082814fbd8ed053fe))
* reduce items on menu if elsewhere in the UI ([#1256](https://github.com/com-pas/open-scd/issues/1256)) ([ed41def](https://github.com/com-pas/open-scd/commit/ed41def4fe266ed6a5755c5818d579473552183c))
* Removed Custom web components in tests ([#1445](https://github.com/com-pas/open-scd/issues/1445)) ([183717b](https://github.com/com-pas/open-scd/commit/183717b2aa90a44a6ffc4b404e79b98fd6bcc917))
* rename releases_created into release_created for release_please_action@V4 ([#1641](https://github.com/com-pas/open-scd/issues/1641)) ([81801cc](https://github.com/com-pas/open-scd/commit/81801cc776311ff996c512ea2f441b2b9cc5e2cd))
* Require lnInst only for regular lns ([#1713](https://github.com/com-pas/open-scd/issues/1713)) ([003161f](https://github.com/com-pas/open-scd/commit/003161fd5a0b363477ece059629ed2c0d6d86aa0))
* restore deploy step in build-and-deploy workflow ([65c64f5](https://github.com/com-pas/open-scd/commit/65c64f59ec65b8fb5e7b515a966a9da88ad323a4))
* Settings addon translations ([cd3b39a](https://github.com/com-pas/open-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))
* **Settings:** Allow missmatched nsdoc import ([#1690](https://github.com/com-pas/open-scd/issues/1690)) ([287d0f0](https://github.com/com-pas/open-scd/commit/287d0f070ca1deaa88148ce16c67aa51407f4000))
* **Settings:** Make language loader configureable ([#1693](https://github.com/com-pas/open-scd/issues/1693)) ([5205a9f](https://github.com/com-pas/open-scd/commit/5205a9f751d8e9dbc0cb5b2630af39c31dc09460))
* splitting up open-scd and plugins ([#1469](https://github.com/com-pas/open-scd/issues/1469)) ([200c030](https://github.com/com-pas/open-scd/commit/200c0308a96899a7bc06a4f0357423901c1fff49))
* stale issue action ([a170e8b](https://github.com/com-pas/open-scd/commit/a170e8b4e06f6871b1895d64dd710ccdcf76bc1a))
* store nsdocs correctly for descriptions (closes [#1605](https://github.com/com-pas/open-scd/issues/1605)) ([ddcd5fc](https://github.com/com-pas/open-scd/commit/ddcd5fc06b6def75bbe120f53a993b1740b04851))
* styling issue with SubEquipment editor ([#1130](https://github.com/com-pas/open-scd/issues/1130)) ([d0e9657](https://github.com/com-pas/open-scd/commit/d0e96572f3d57c84674f12d2eeeca93afbe667ad))
* Subscribing on minimal ExtRef definition ([#1551](https://github.com/com-pas/open-scd/issues/1551)) ([29483e6](https://github.com/com-pas/open-scd/commit/29483e6562061ae1edd69b2dccf33a512a8aef93))
* supervision updates after ied rename ([#1338](https://github.com/com-pas/open-scd/issues/1338)) ([2066e4c](https://github.com/com-pas/open-scd/commit/2066e4c71d8ab888cc04f1628c30b39582033fcb))
* temp turn off build-and-deploy workflow ([a9d65a8](https://github.com/com-pas/open-scd/commit/a9d65a8d1cf1c30d0a7ded5e71f7257fd4803367))
* update deprecated ubuntu image in pr-preview workflow ([#1665](https://github.com/com-pas/open-scd/issues/1665)) ([f9f5e45](https://github.com/com-pas/open-scd/commit/f9f5e450dee98fe3c5192f50d8ecb302be666705))
* update node  to 20.x in release workflow ([#1716](https://github.com/com-pas/open-scd/issues/1716)) ([115f22a](https://github.com/com-pas/open-scd/commit/115f22a6f1f9cfe02a4817ec03811bcc53cd1fea))
* update release please version to 0.37.2 ([#1632](https://github.com/com-pas/open-scd/issues/1632)) ([a3d6d2f](https://github.com/com-pas/open-scd/commit/a3d6d2f68952e98d62375b037b5b36bca63f325a))
* use materialized icons for primary apparatus ([#1498](https://github.com/com-pas/open-scd/issues/1498)) ([fa07ec2](https://github.com/com-pas/open-scd/commit/fa07ec2e12392f0973a138f8260837eec746a64d))
* **validate-schema:** cache validator workers ([#901](https://github.com/com-pas/open-scd/issues/901)) ([2de7d26](https://github.com/com-pas/open-scd/commit/2de7d269b15012af84927de90689e95ca901d05a))
* **wizard-diagram, wizard-select, wizard-checkbox:** disabled attribute ([#781](https://github.com/com-pas/open-scd/issues/781)) ([528db27](https://github.com/com-pas/open-scd/commit/528db27992173630a22056e50bd7c56903a6a283))
* **wizards/conductingequipment:** on create earth switch add missing ground cNode ([#753](https://github.com/com-pas/open-scd/issues/753)) ([8f89f27](https://github.com/com-pas/open-scd/commit/8f89f27c6a66316c1b7941fa313ba85d08b1256d))
* **wizards/doTypes:** Adjust regular expressions for v flag in template editor ([#1273](https://github.com/com-pas/open-scd/issues/1273)) ([baa9bdc](https://github.com/com-pas/open-scd/commit/baa9bdcd73bb6db9ab2956dfd58344bc8859262d))
* **wizards/foundation:** Added missing DAI bTypes ([#1320](https://github.com/com-pas/open-scd/issues/1320)) ([0bff5aa](https://github.com/com-pas/open-scd/commit/0bff5aa448bdfd94956aa602b74a3f44099facd1))
* **wizards/foundation:** Escape limit regexes, closes [#1271](https://github.com/com-pas/open-scd/issues/1271) ([baa9bdc](https://github.com/com-pas/open-scd/commit/baa9bdcd73bb6db9ab2956dfd58344bc8859262d))


### Miscellaneous Chores

* Add @nx/nx-linux-x64-gnu as optional dependency ([#1557](https://github.com/com-pas/open-scd/issues/1557)) ([64f73ac](https://github.com/com-pas/open-scd/commit/64f73ace8701e17c1a51b335d76735f7793c210c))
* Release 0.34.0, core 0.1.2 ([#1555](https://github.com/com-pas/open-scd/issues/1555)) ([e8fe207](https://github.com/com-pas/open-scd/commit/e8fe20739267ea14b74c3d2be0fbf5fa4faa546b))
* Release 0.34.0, core 0.1.2 attempt 3 ([#1558](https://github.com/com-pas/open-scd/issues/1558)) ([62a7918](https://github.com/com-pas/open-scd/commit/62a79183f7f5b6a55c0ebf500d94c05c0d348ac1))
* Release 0.34.0, core 0.1.2 attempt 4 ([#1559](https://github.com/com-pas/open-scd/issues/1559)) ([85d6433](https://github.com/com-pas/open-scd/commit/85d6433f4105a6b0bc06e8059755e1b9311f4c4f))
* Set release version to 0.36.0 ([#1607](https://github.com/com-pas/open-scd/issues/1607)) ([267935f](https://github.com/com-pas/open-scd/commit/267935f9c4879b8efb395adb7df87d2c5fe8f4b6))

## [0.43.0](https://github.com/openscd/open-scd/compare/v0.42.0...v0.43.0) (2025-10-27)


### Features

* add elements to virtual ied ([#1714](https://github.com/openscd/open-scd/issues/1714)) ([0c1074b](https://github.com/openscd/open-scd/commit/0c1074bf9d4f154a06c8031e593974c1f618fead))
* add virtual ied ([#1712](https://github.com/openscd/open-scd/issues/1712)) ([cf45fe9](https://github.com/openscd/open-scd/commit/cf45fe92e4a09066ca9b426b282486229dfbc43a))
* edit and delete virtual IED elements ([#1715](https://github.com/openscd/open-scd/issues/1715)) ([106688b](https://github.com/openscd/open-scd/commit/106688bd736b449a3182045ecb6fccc5a51067c7))


### Bug Fixes

* Disable experimental require module to make node 20.19 and above work ([#1709](https://github.com/openscd/open-scd/issues/1709)) ([d47a3da](https://github.com/openscd/open-scd/commit/d47a3dac6c57ee814cfbd78f3636fe872a052568))
* Require lnInst only for regular lns ([#1713](https://github.com/openscd/open-scd/issues/1713)) ([003161f](https://github.com/openscd/open-scd/commit/003161fd5a0b363477ece059629ed2c0d6d86aa0))

## [0.42.0](https://github.com/openscd/open-scd/compare/v0.41.0...v0.42.0) (2025-09-15)


### Features

* Add oscd api with plugin state ([#1696](https://github.com/openscd/open-scd/issues/1696)) ([1c457cf](https://github.com/openscd/open-scd/commit/1c457cf02a404a61b7ff09553223091bc5edd1f6))


### Bug Fixes

* Connected AP wizard element order ([#1703](https://github.com/openscd/open-scd/issues/1703)) ([cd3b39a](https://github.com/openscd/open-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))
* **Import IED:** Fix order of edits ([#1698](https://github.com/openscd/open-scd/issues/1698)) ([0831fa4](https://github.com/openscd/open-scd/commit/0831fa4e4cde55a21c261b1b4b8b5994868509b0))
* Settings addon translations ([cd3b39a](https://github.com/openscd/open-scd/commit/cd3b39ad45b6ddfc5d8c3641a5c120dd95bb5dd6))

## [0.41.0](https://github.com/openscd/open-scd/compare/v0.40.0...v0.41.0) (2025-08-04)


### Features

* update nsd files ([#1691](https://github.com/openscd/open-scd/issues/1691)) ([c437f5a](https://github.com/openscd/open-scd/commit/c437f5acaf5a45032cfae559ecf70de968913d45))


### Bug Fixes

* **Settings:** Make language loader configureable ([#1693](https://github.com/openscd/open-scd/issues/1693)) ([5205a9f](https://github.com/openscd/open-scd/commit/5205a9f751d8e9dbc0cb5b2630af39c31dc09460))

## [0.40.0](https://github.com/openscd/open-scd/compare/v0.39.0...v0.40.0) (2025-07-31)


### Features

* Make layout parts overwriteable ([#1692](https://github.com/openscd/open-scd/issues/1692)) ([b3822d2](https://github.com/openscd/open-scd/commit/b3822d27416baff13b358fca50f6a7dfe0eee50c))


### Bug Fixes

* **communication-plugin:** Offer only valid connected aps as move targets ([#1685](https://github.com/openscd/open-scd/issues/1685)) ([bfd43ba](https://github.com/openscd/open-scd/commit/bfd43bab3e164d15f7aa2bafe5d0d428df9d10e7))
* **Settings:** Allow missmatched nsdoc import ([#1690](https://github.com/openscd/open-scd/issues/1690)) ([287d0f0](https://github.com/openscd/open-scd/commit/287d0f070ca1deaa88148ce16c67aa51407f4000))

## [0.39.0](https://github.com/openscd/open-scd/compare/v0.38.1...v0.39.0) (2025-05-28)


### Features

* add commit lint to OpenSCD ([#1676](https://github.com/openscd/open-scd/issues/1676)) ([fffd1a7](https://github.com/openscd/open-scd/commit/fffd1a766f175044f78f34b0d833079dba34e085))
* add subscriber later binding plugin ([#1664](https://github.com/openscd/open-scd/issues/1664)) ([26f6900](https://github.com/openscd/open-scd/commit/26f690007cb5e7fe42b22f7fc46f18035d934008))
* move gse smv between connectedAPs ([#1680](https://github.com/openscd/open-scd/issues/1680)) ([da8324e](https://github.com/openscd/open-scd/commit/da8324e08483a3b45dc7436d7c2e22381fa3c9e8))
* remove communication from the substation editor and use oscd-publisher plugin ([#1650](https://github.com/openscd/open-scd/issues/1650)) ([c850088](https://github.com/openscd/open-scd/commit/c8500880bfdffd87cf014a5ad1d9fcef89a5ba41))


### Bug Fixes

* change pattern definition of tIDNaming to non-whitespace characters ([#1670](https://github.com/openscd/open-scd/issues/1670)) ([5476bd0](https://github.com/openscd/open-scd/commit/5476bd08711ae94341802db0636dcfd0e231cd41))
* Fix handle activate editor ([#1651](https://github.com/openscd/open-scd/issues/1651)) ([3847944](https://github.com/openscd/open-scd/commit/384794420292a9e5192eac937d907238a6113120))
* modify start script to clear snowpack cache ([#1654](https://github.com/openscd/open-scd/issues/1654)) ([ff699e3](https://github.com/openscd/open-scd/commit/ff699e357442593f07bf9665473b1fbc499606b0))
* Move menu item content outside drawer ([#1683](https://github.com/openscd/open-scd/issues/1683)) ([15b2872](https://github.com/openscd/open-scd/commit/15b287240a015ab49590d6a4ab094f9180a16917))
* update deprecated ubuntu image in pr-preview workflow ([#1665](https://github.com/openscd/open-scd/issues/1665)) ([f9f5e45](https://github.com/openscd/open-scd/commit/f9f5e450dee98fe3c5192f50d8ecb302be666705))

## [0.38.1](https://github.com/openscd/open-scd/compare/v0.38.0...v0.38.1) (2025-03-05)


### Bug Fixes

* Attach release files in release please ([#1636](https://github.com/openscd/open-scd/issues/1636)) ([f2e6a1d](https://github.com/openscd/open-scd/commit/f2e6a1d8b8fc49b03c75e94dfeed565eeb1bda2f))
* Build entire project and attach distribution to build output ([#1639](https://github.com/openscd/open-scd/issues/1639)) ([bd554e7](https://github.com/openscd/open-scd/commit/bd554e72f308a3c6e60f4ee1d98fa4884fc5d8f8))
* continue to upload assets job even if npm publish step fails ([#1638](https://github.com/openscd/open-scd/issues/1638)) ([bc7571e](https://github.com/openscd/open-scd/commit/bc7571e8351d2a1770e19c58eabf91404cf1726e))
* rename releases_created into release_created for release_please_action@V4 ([#1641](https://github.com/openscd/open-scd/issues/1641)) ([81801cc](https://github.com/openscd/open-scd/commit/81801cc776311ff996c512ea2f441b2b9cc5e2cd))

## [0.38.0](https://github.com/openscd/open-scd/compare/v0.37.1...v0.38.0) (2025-02-26)


### Features

* change release please Workflow trigger ([#1624](https://github.com/openscd/open-scd/issues/1624)) ([53f24cb](https://github.com/openscd/open-scd/commit/53f24cbc9b2be8407aa1420b5665d2a09e9051ea))
* update release please action ([#1635](https://github.com/openscd/open-scd/issues/1635)) ([06b8356](https://github.com/openscd/open-scd/commit/06b8356485940f2841b01293de5bea2a6fa1399d))


### Bug Fixes

* inconsistent plugin activation behaviour caused by refactoring ([#1626](https://github.com/openscd/open-scd/issues/1626)) ([00c4dc0](https://github.com/openscd/open-scd/commit/00c4dc06f6d0cf1c39e4822a5b21d650d698785e))
* update release please version to 0.37.2 ([#1632](https://github.com/openscd/open-scd/issues/1632)) ([a3d6d2f](https://github.com/openscd/open-scd/commit/a3d6d2f68952e98d62375b037b5b36bca63f325a))

## [0.37.1](https://github.com/openscd/open-scd/compare/v0.37.0...v0.37.1) (2025-02-04)


### Features

* Programatic Plugin Activation ([#1611](https://github.com/openscd/open-scd/issues/1611)) ([d3b2a0a](https://github.com/openscd/open-scd/commit/d3b2a0a7b2d08d0ce5484567ebfe6c6d4e548c5e))

## [0.37.0](https://github.com/openscd/open-scd/compare/v0.36.0...v0.37.0) (2025-01-27)


### Features

* Edit api v3 ([#1615](https://github.com/openscd/open-scd/issues/1615)) ([ce39e2b](https://github.com/openscd/open-scd/commit/ce39e2b7bfcda40659f36e40659b1efd571f2a53))
* **monorepo:** Add contributing guide ([#1588](https://github.com/openscd/open-scd/issues/1588)) ([dd692a8](https://github.com/openscd/open-scd/commit/dd692a8d9784aaf5f8509fdad5298293195d1465))

## [0.36.0](https://github.com/openscd/open-scd/compare/v0.35.0...v0.36.0) (2024-11-14)


### ⚠ BREAKING CHANGES

* Edit API v1 validation is no longer supported (e.g. edit api v1 checked if an elements id was unique in the document)
* Edit event v1 properties `derived` and `checkValidity` will be ignored

### Features

* Allow .fsd file creation ([d9a4a0c](https://github.com/openscd/open-scd/commit/d9a4a0c6f6a0c9c86927d80bf5c81b4e9f6fc6d5))
* Edit events v1 will be converted event v2 ([14e933e](https://github.com/openscd/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* Editor plugins can be rendered without an active document ([8b06a37](https://github.com/openscd/open-scd/commit/8b06a375ecfbc6275c5238d4a95383f4e80449b8))
* Handle Config Plugin Events ([a510664](https://github.com/openscd/open-scd/commit/a5106648367dad831a248b734cd5c34aa1043d89))
* render plugin download UI on event ([44a51f0](https://github.com/openscd/open-scd/commit/44a51f05797e8dd6345215c177a2e7b68e189d69))
* Support edit api v2 ([#1581](https://github.com/openscd/open-scd/issues/1581)) ([14e933e](https://github.com/openscd/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))


### Bug Fixes

* 1553 LN LN0 wizards read only attributes ([#1568](https://github.com/openscd/open-scd/issues/1568)) ([87aa759](https://github.com/openscd/open-scd/commit/87aa75961c7ef0bfe11810d2fa5d4e08704da033)), closes [#1553](https://github.com/openscd/open-scd/issues/1553)
* correct plug-ins' paths ([a7a14ce](https://github.com/openscd/open-scd/commit/a7a14ced59294d8a24daabf5ecdc76a5dbb75237))

## [0.35.0](https://github.com/openscd/open-scd/compare/v0.34.0...v0.35.0) (2024-07-17)

### Features

* **104:** added descriptions to control ti numbers ([#1400](https://github.com/openscd/open-scd/issues/1400)) ([758a3b8](https://github.com/openscd/open-scd/commit/758a3b887b75b1eabdda7add0b3abf4cbe2df949))
* **104:** added descriptions to ti numbers ([#1378](https://github.com/openscd/open-scd/issues/1378)) ([0e74294](https://github.com/openscd/open-scd/commit/0e742944e4e834c515488ad1f75cecf88d234a8a))
* **104:** implement enc cdc support ([#1391](https://github.com/openscd/open-scd/issues/1391)) ([fa4142b](https://github.com/openscd/open-scd/commit/fa4142b4b85085f092533dd54097d3c4efbf5441))
* **104:** implement wye and del cdc support ([#1390](https://github.com/openscd/open-scd/issues/1390)) ([43b8285](https://github.com/openscd/open-scd/commit/43b82853f877a8eb080db2b4ea99898f861c8418))
* add ISD file extension ([#1351](https://github.com/openscd/open-scd/issues/1351)) ([1c2ef60](https://github.com/openscd/open-scd/commit/1c2ef606a64f1af75af1c88dcdd3a5659b35d2aa))
* add missing editor icons ([#1495](https://github.com/openscd/open-scd/issues/1495)) ([d404464](https://github.com/openscd/open-scd/commit/d404464444a0f03fbe0ca3d0774e1cc1bc704e38))
* added acd as a supported cdc type ([#1371](https://github.com/openscd/open-scd/issues/1371)) ([5ee353c](https://github.com/openscd/open-scd/commit/5ee353cf85e61ce9edd6f48268d198adfdc3f0b2))
* added acd as a supported ens type ([#1384](https://github.com/openscd/open-scd/issues/1384)) ([cebcd37](https://github.com/openscd/open-scd/commit/cebcd37ecbc0230561018c4bb2a8c5e58de3b807))
* Added Settings Addon ([#1441](https://github.com/openscd/open-scd/issues/1441)) ([7ab3553](https://github.com/openscd/open-scd/commit/7ab355340a64cc2afaf6118ea8ca1ea7acc2a319))
* Added Waiter addon ([#1439](https://github.com/openscd/open-scd/issues/1439)) ([91a2ca9](https://github.com/openscd/open-scd/commit/91a2ca97998551aa07e96452ce3c73ddea6b1641))
* Added XML Package for OpenSCD ([#1536](https://github.com/openscd/open-scd/issues/1536)) ([ca60c2a](https://github.com/openscd/open-scd/commit/ca60c2a63c304a5e1c88095ea2f24b597fc5a2ad))
* allow for plugins being passed down as props to `&lt;open-scd&gt;` ([#1486](https://github.com/openscd/open-scd/issues/1486)) ([01bcc01](https://github.com/openscd/open-scd/commit/01bcc017c373185fa34036ea4d80c5ef105d5ee2))
* **editors/ied:** Improve IED editor UI for IED and LN selection ([#1288](https://github.com/openscd/open-scd/issues/1288)) ([e5bc0b8](https://github.com/openscd/open-scd/commit/e5bc0b8509a40950188e2f4bcf52569932309c69))
* make use of lerna nx ([#1462](https://github.com/openscd/open-scd/issues/1462)) ([94d68d7](https://github.com/openscd/open-scd/commit/94d68d7e395b545c699ead584266231085cffeac))
* optional nsd upload button ([#1474](https://github.com/openscd/open-scd/issues/1474)) ([a6c5d3e](https://github.com/openscd/open-scd/commit/a6c5d3e55e7fd13ada773be7f56d7869e06f30c0))
* Provide ability to see Services section XML ([#1346](https://github.com/openscd/open-scd/issues/1346)) ([83d1d61](https://github.com/openscd/open-scd/commit/83d1d611eeeb79082c7f0eb7934ee045b25fe0c2))
* set up PR preview ([#1547](https://github.com/openscd/open-scd/issues/1547)) ([fede42b](https://github.com/openscd/open-scd/commit/fede42b43272e4fbf036e18df299a45fe52741cc))
* support ldname attribute ([#1401](https://github.com/openscd/open-scd/issues/1401)) ([c0972f3](https://github.com/openscd/open-scd/commit/c0972f33b7e386c39a127739b4c2962f9c9a60f4))

### Bug Fixes

* **104:** change options between different tis when selecting a doi ([#1380](https://github.com/openscd/open-scd/issues/1380)) ([cb80080](https://github.com/openscd/open-scd/commit/cb800808e9679e673e987038678e4c9f2da9fdf3))
* **action:** correct source folder ([2ae1cd3](https://github.com/openscd/open-scd/commit/2ae1cd316743b912551c245da15533bcb9ec2426))
* add node release type and core path ([#1437](https://github.com/openscd/open-scd/issues/1437)) ([d1bde4e](https://github.com/openscd/open-scd/commit/d1bde4e8077f378a5f6e1cc6ebc62561be37db04))
* added editcount to reflect made changes ([#1321](https://github.com/openscd/open-scd/issues/1321)) ([802dd41](https://github.com/openscd/open-scd/commit/802dd4174fb49fc969e601ba04f3ca1966adedbb))
* allow address update for new entries ([#1331](https://github.com/openscd/open-scd/issues/1331)) ([d1f4ff9](https://github.com/openscd/open-scd/commit/d1f4ff90e211bc8ba8c2e9fc4e900fb093acfad5))
* **ci:** remove unneeded permission check ([8d5de2d](https://github.com/openscd/open-scd/commit/8d5de2d93714cef7f5a725704a6adf38602b581c))
* do and da wizard lnclass textfield correction ([#1444](https://github.com/openscd/open-scd/issues/1444)) ([ad08ff2](https://github.com/openscd/open-scd/commit/ad08ff2f4ea51655da5fd158c7106680b6b68506))
* **editors/communication,wizards:** Fix P-type names and display of BitRate ([#1277](https://github.com/openscd/open-scd/issues/1277)) ([2706f82](https://github.com/openscd/open-scd/commit/2706f82283cc7a58a8da5ca4cb775bfec7c6b986))
* **editors/IED:** Allow IEDs to be updated after edit count change (closes [#1272](https://github.com/openscd/open-scd/issues/1272)) ([#1275](https://github.com/openscd/open-scd/issues/1275)) ([1df6842](https://github.com/openscd/open-scd/commit/1df6842002891223cf7a58821494731c01be73a5))
* **editors/subscription:** Increase timeout for failing subscriber/fcda-binding-list test, closes [#1257](https://github.com/openscd/open-scd/issues/1257) ([#1274](https://github.com/openscd/open-scd/issues/1274)) ([8c620eb](https://github.com/openscd/open-scd/commit/8c620eb97fb34a0a01e2ac21cefbb87950e5a6b4))
* fixed dotype-wizarding test for correct translation ([#1464](https://github.com/openscd/open-scd/issues/1464)) ([4517106](https://github.com/openscd/open-scd/commit/4517106c3e651d930fd6c53b4df34f6fc7a065f4))
* **gh-action:** build-and-deploy should first build core before building OpenSCD ([#1427](https://github.com/openscd/open-scd/issues/1427)) ([e25e5f8](https://github.com/openscd/open-scd/commit/e25e5f8c94457deeed207891fec3234201fb1a03))
* **menu/importIEDs:** Allow importing multiple IEDs from multiple SCD files ([#1222](https://github.com/openscd/open-scd/issues/1222)) ([8bdd990](https://github.com/openscd/open-scd/commit/8bdd990a1d0c77b50743281d71b61489709e433a))
* Moved towards get function from lit-translate ([#1471](https://github.com/openscd/open-scd/issues/1471)) ([03dabf9](https://github.com/openscd/open-scd/commit/03dabf94bf3e57f012bb078415ba0c284ce7b1e8))
* **open-scd:** Make linear progress bar Github stylez, closes [#1269](https://github.com/openscd/open-scd/issues/1269) ([ebde770](https://github.com/openscd/open-scd/commit/ebde77000373780dccfa6f345126732667be1c43))
* **open-scd:** Make linear progress bar Github stylez, closes [#1269](https://github.com/openscd/open-scd/issues/1269) ([#1276](https://github.com/openscd/open-scd/issues/1276)) ([ebde770](https://github.com/openscd/open-scd/commit/ebde77000373780dccfa6f345126732667be1c43))
* re-enable input fields in custom plugins dialog ([#1541](https://github.com/openscd/open-scd/issues/1541)) ([38b490d](https://github.com/openscd/open-scd/commit/38b490d1ca7988cebef8513fb640eb077c6246a0))
* recover ace editor files in packages/distribution ([#1544](https://github.com/openscd/open-scd/issues/1544)) ([34a58c0](https://github.com/openscd/open-scd/commit/34a58c04e496716f6a7107e082814fbd8ed053fe))
* Removed Custom web components in tests ([#1445](https://github.com/openscd/open-scd/issues/1445)) ([183717b](https://github.com/openscd/open-scd/commit/183717b2aa90a44a6ffc4b404e79b98fd6bcc917))
* splitting up open-scd and plugins ([#1469](https://github.com/openscd/open-scd/issues/1469)) ([200c030](https://github.com/openscd/open-scd/commit/200c0308a96899a7bc06a4f0357423901c1fff49))
* stale issue action ([a170e8b](https://github.com/openscd/open-scd/commit/a170e8b4e06f6871b1895d64dd710ccdcf76bc1a))
* Subscribing on minimal ExtRef definition ([#1551](https://github.com/openscd/open-scd/issues/1551)) ([29483e6](https://github.com/openscd/open-scd/commit/29483e6562061ae1edd69b2dccf33a512a8aef93))
* supervision updates after ied rename ([#1338](https://github.com/openscd/open-scd/issues/1338)) ([2066e4c](https://github.com/openscd/open-scd/commit/2066e4c71d8ab888cc04f1628c30b39582033fcb))
* use materialized icons for primary apparatus ([#1498](https://github.com/openscd/open-scd/issues/1498)) ([fa07ec2](https://github.com/openscd/open-scd/commit/fa07ec2e12392f0973a138f8260837eec746a64d))
* **wizards/doTypes:** Adjust regular expressions for v flag in template editor ([#1273](https://github.com/openscd/open-scd/issues/1273)) ([baa9bdc](https://github.com/openscd/open-scd/commit/baa9bdcd73bb6db9ab2956dfd58344bc8859262d))
* **wizards/foundation:** Added missing DAI bTypes ([#1320](https://github.com/openscd/open-scd/issues/1320)) ([0bff5aa](https://github.com/openscd/open-scd/commit/0bff5aa448bdfd94956aa602b74a3f44099facd1))
* **wizards/foundation:** Escape limit regexes, closes [#1271](https://github.com/openscd/open-scd/issues/1271) ([baa9bdc](https://github.com/openscd/open-scd/commit/baa9bdcd73bb6db9ab2956dfd58344bc8859262d))

### Miscellaneous Chores

* Add @nx/nx-linux-x64-gnu as optional dependency ([#1557](https://github.com/openscd/open-scd/issues/1557)) ([64f73ac](https://github.com/openscd/open-scd/commit/64f73ace8701e17c1a51b335d76735f7793c210c))
* Release 0.34.0, core 0.1.2 ([#1555](https://github.com/openscd/open-scd/issues/1555)) ([e8fe207](https://github.com/openscd/open-scd/commit/e8fe20739267ea14b74c3d2be0fbf5fa4faa546b))
* Release 0.34.0, core 0.1.2 attempt 3 ([#1558](https://github.com/openscd/open-scd/issues/1558)) ([62a7918](https://github.com/openscd/open-scd/commit/62a79183f7f5b6a55c0ebf500d94c05c0d348ac1))
* Release 0.34.0, core 0.1.2 attempt 4 ([#1559](https://github.com/openscd/open-scd/issues/1559)) ([85d6433](https://github.com/openscd/open-scd/commit/85d6433f4105a6b0bc06e8059755e1b9311f4c4f))
