# Changelog

## [0.34.0](https://github.com/com-pas/open-scd/compare/core@v0.1.23...core@v0.34.0) (2026-05-19)


### ⚠ BREAKING CHANGES

* Edit API v1 validation is no longer supported (e.g. edit api v1 checked if an elements id was unique in the document)

### ✨ Features

* Add oscd api with plugin state ([#1696](https://github.com/com-pas/open-scd/issues/1696)) ([1c457cf](https://github.com/com-pas/open-scd/commit/1c457cf02a404a61b7ff09553223091bc5edd1f6))
* Added XML Package for OpenSCD ([#1536](https://github.com/com-pas/open-scd/issues/1536)) ([ca60c2a](https://github.com/com-pas/open-scd/commit/ca60c2a63c304a5e1c88095ea2f24b597fc5a2ad))
* allow for plugins being passed down as props to `<open-scd>` ([#1486](https://github.com/com-pas/open-scd/issues/1486)) ([01bcc01](https://github.com/com-pas/open-scd/commit/01bcc017c373185fa34036ea4d80c5ef105d5ee2))
* API compliant editor ([#1719](https://github.com/com-pas/open-scd/issues/1719)) ([e43ee6a](https://github.com/com-pas/open-scd/commit/e43ee6a10805d1d09e5a8adb539be7d68a65ab6a))
* Edit api v3 ([#1615](https://github.com/com-pas/open-scd/issues/1615)) ([ce39e2b](https://github.com/com-pas/open-scd/commit/ce39e2b7bfcda40659f36e40659b1efd571f2a53))
* Edit events v1 will be converted event v2 ([14e933e](https://github.com/com-pas/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* make use of lerna nx ([#1462](https://github.com/com-pas/open-scd/issues/1462)) ([94d68d7](https://github.com/com-pas/open-scd/commit/94d68d7e395b545c699ead584266231085cffeac))
* Programatic Plugin Activation ([#1611](https://github.com/com-pas/open-scd/issues/1611)) ([d3b2a0a](https://github.com/com-pas/open-scd/commit/d3b2a0a7b2d08d0ce5484567ebfe6c6d4e548c5e))
* replace editor with @openscd/oscd-editor ([ff330a8](https://github.com/com-pas/open-scd/commit/ff330a8d035ab9c09443473fd23e3c74ecb4a225))
* Support edit api v2 ([#1581](https://github.com/com-pas/open-scd/issues/1581)) ([14e933e](https://github.com/com-pas/open-scd/commit/14e933ed776ec5592c3c38e84b9884fa41a05e81))
* use official xml editor ([f5b0517](https://github.com/com-pas/open-scd/commit/f5b05176aa97d0db8e688bb509c907c6573aa753))


### 🐞 Bug Fixes

* add missing exports for CommitDetail, LogDetail, and EditorActionEvent ([c3109ed](https://github.com/com-pas/open-scd/commit/c3109ed4b0c755912a7a3b93705b19dac4a4b894))
* add missing exports for deprecated foundation components ([c81cff9](https://github.com/com-pas/open-scd/commit/c81cff99ed39abbbef4bc3e9f3faf70b44e4b736))
* Allow SetAttributes without namespace object ([58b67bf](https://github.com/com-pas/open-scd/commit/58b67bfb762c5aae4f98c5ca1dabff53eb93f623))
* Allow setattributes without ns object ([01c0420](https://github.com/com-pas/open-scd/commit/01c04208bd41287b54cbca7703bbd2025fb11250))
* inconsistent plugin activation behaviour caused by refactoring ([#1626](https://github.com/com-pas/open-scd/issues/1626)) ([00c4dc0](https://github.com/com-pas/open-scd/commit/00c4dc06f6d0cf1c39e4822a5b21d650d698785e))
* publish packages to npm ([2c38caa](https://github.com/com-pas/open-scd/commit/2c38caaa12a2b343b767ed48aa27ab9c85e6517c))
* publish packages to npm ([7ee5158](https://github.com/com-pas/open-scd/commit/7ee515894f0ad44089d32318c25f065688bee871))
* restore original names for deprecated editor actions ([d940480](https://github.com/com-pas/open-scd/commit/d9404802dc8b085b5393cd552f7cebc43d1cbbbe))
* update core package version and restructure exports ([1cd643d](https://github.com/com-pas/open-scd/commit/1cd643d651f9e34ccfa91be013f94dfccc26bf80))
* update core package version and restructure exports ([8a61a0e](https://github.com/com-pas/open-scd/commit/8a61a0e089d547873e67cddfd02dc75ad605d282))
* update core package version to 0.1.15 ([1cb8824](https://github.com/com-pas/open-scd/commit/1cb88244f3778f5fd5b460d0da8d363b85cdaf7b))
* update core package version to 0.1.17 ([e165a5a](https://github.com/com-pas/open-scd/commit/e165a5a7fea65c6b3c12658443465e33df2e5fa2))
* update core package version to 0.1.18 and add missing LogDetailBase export ([275f273](https://github.com/com-pas/open-scd/commit/275f273538b18124190b61ef261a75342ff79894))
* update core package version to 0.1.19 ([25da418](https://github.com/com-pas/open-scd/commit/25da4186adb31c56cec3b3262cfa13a204098e95))
* update core package version to 0.1.20 ([4cd507b](https://github.com/com-pas/open-scd/commit/4cd507b9a2c7f4b10cd1046e08993e5559a4a0df))
* update core package version to 0.1.21 and add invert export ([d9bee12](https://github.com/com-pas/open-scd/commit/d9bee12a047e398b896778dea919a7ad0eae4b54))
* update core package version to 0.1.22 ([a87de45](https://github.com/com-pas/open-scd/commit/a87de45fd7f99bb1aea36075d24a0acda6eb47c5))
* update core package version to 0.1.23 ([6f1cfca](https://github.com/com-pas/open-scd/commit/6f1cfca8cc7ae1baf0fa9adb61f1cb2565b635b5))
* update exports for editor actions and types for clarity ([bc04400](https://github.com/com-pas/open-scd/commit/bc04400b9151daa895adc9efac718eb725d9138c))
* update history to match compas ([ecec576](https://github.com/com-pas/open-scd/commit/ecec576fa8923b9bd2446f855a423f35664213ed))
* update release please version to 0.37.2 ([#1632](https://github.com/com-pas/open-scd/issues/1632)) ([a3d6d2f](https://github.com/com-pas/open-scd/commit/a3d6d2f68952e98d62375b037b5b36bca63f325a))


### 📦 Miscellaneous Chores

* Add @nx/nx-linux-x64-gnu as optional dependency ([#1557](https://github.com/com-pas/open-scd/issues/1557)) ([64f73ac](https://github.com/com-pas/open-scd/commit/64f73ace8701e17c1a51b335d76735f7793c210c))
* Add nx graph ([#1497](https://github.com/com-pas/open-scd/issues/1497)) ([316bf8a](https://github.com/com-pas/open-scd/commit/316bf8a20d964ed462b52cc9e67139c8797ea4ce))
* Added oscd-edit-completed Event ([#1533](https://github.com/com-pas/open-scd/issues/1533)) ([b967902](https://github.com/com-pas/open-scd/commit/b967902748e93d57519a71b362b3c9771e7aaaeb))
* **main:** release 0.36.0 ([#1580](https://github.com/com-pas/open-scd/issues/1580)) ([074ae4c](https://github.com/com-pas/open-scd/commit/074ae4c5c298ffee1e6c54aac27aa855bcb4174c))
* moving events, interfaces and types to @openscd/core ([#1507](https://github.com/com-pas/open-scd/issues/1507)) ([7268462](https://github.com/com-pas/open-scd/commit/72684624b387c6eca760987b3ca27094798efccf))
* Raise core version to 0.1.4 ([#1616](https://github.com/com-pas/open-scd/issues/1616)) ([65d6f73](https://github.com/com-pas/open-scd/commit/65d6f733836f260329f29e388d1ebcaed5a51c55))
* Release 0.34.0, core 0.1.2 ([#1555](https://github.com/com-pas/open-scd/issues/1555)) ([e8fe207](https://github.com/com-pas/open-scd/commit/e8fe20739267ea14b74c3d2be0fbf5fa4faa546b))
* Release 0.34.0, core 0.1.2 attempt 4 ([#1559](https://github.com/com-pas/open-scd/issues/1559)) ([85d6433](https://github.com/com-pas/open-scd/commit/85d6433f4105a6b0bc06e8059755e1b9311f4c4f))
* release main ([#1410](https://github.com/com-pas/open-scd/issues/1410)) ([faecf83](https://github.com/com-pas/open-scd/commit/faecf834aa65fd07e93b822ac53ce23851b50d26))
* removed non existing script reference from doc ([#1504](https://github.com/com-pas/open-scd/issues/1504)) ([fea6372](https://github.com/com-pas/open-scd/commit/fea637254c35ebbf790338914adf4dfd974cce1f))
* Update README.md ([#1409](https://github.com/com-pas/open-scd/issues/1409)) ([fedb6c7](https://github.com/com-pas/open-scd/commit/fedb6c7c20392aed352292f4951fb29ce7a3aed4))
* update release please version to 0.37.2 ([#1627](https://github.com/com-pas/open-scd/issues/1627)) ([1e50fd9](https://github.com/com-pas/open-scd/commit/1e50fd935512172d97d923b62e25bd064d850ca0))

## [0.1.1](https://github.com/openscd/open-scd/compare/core-v0.1.0...core@v0.1.1) (2024-01-11)


### 📦 Miscellaneous Chores

* Update README.md ([#1409](https://github.com/openscd/open-scd/issues/1409)) ([fedb6c7](https://github.com/openscd/open-scd/commit/fedb6c7c20392aed352292f4951fb29ce7a3aed4))

## [1.0.1](https://github.com/openscd/open-scd-core/compare/v1.0.0...v1.0.1) (2023-05-30)


### Bug Fixes

* mdc-top-app-bar-fixed has link to --oscd-theme-app-bar-primary and --oscd-theme-primary ([2db5577](https://github.com/openscd/open-scd-core/commit/2db55775c01131d22582814fb9218ee2a4ebfd00))

## 1.0.0 (2023-05-25)


### Features

* **demo:** add remote open and save plugins ([bcc3a58](https://github.com/openscd/open-scd-core/commit/bcc3a582697a0e88e779312a2225e3ff894e7b79))
* **editing:** add editing user interface elements ([3bd4746](https://github.com/openscd/open-scd-core/commit/3bd47461c37c99f46f28deaa56f3c0d3e835d16a))
* **editing:** insert and remove nodes ([196160a](https://github.com/openscd/open-scd-core/commit/196160a178b079a91a5dd3834312f11db113643e))
* **editing:** open documents ([4252916](https://github.com/openscd/open-scd-core/commit/4252916bcc7f7430dfee225a708787f62bc534d5))
* **editing:** update elements' attributes ([90ed0a2](https://github.com/openscd/open-scd-core/commit/90ed0a2361dfc0eb704d47271a3f1ba42722a134))
* export open-scd and mixin types ([80a4097](https://github.com/openscd/open-scd-core/commit/80a4097c08fcf9056354abb7dcb3e99bee8c34ac))
* **foundation:** export cyrb64 hash function ([a4d04ce](https://github.com/openscd/open-scd-core/commit/a4d04ceea5da886d67d4f5092f59b0344102b3c5))
* **open-scd:** pass editCount to editor and menu plugins ([d3b745a](https://github.com/openscd/open-scd-core/commit/d3b745a5a5d39509b0975260fe73ad1ab16314ae))
* **plugging:** load menu and editor plugins ([73110da](https://github.com/openscd/open-scd-core/commit/73110dabfb99795de8ed16ee1f57d7c54110ec75))


### Bug Fixes

* **open-scd:** hide menu plugin element container ([ca5f016](https://github.com/openscd/open-scd-core/commit/ca5f016f90bad6a56379bf222130f208eea364c9))
* **open-scd:** import locales from relative URL ([6c8172e](https://github.com/openscd/open-scd-core/commit/6c8172e330a475ade550bb61272c1ba4d36e0088))
* **plugging:** import relative paths from origin ([e268869](https://github.com/openscd/open-scd-core/commit/e2688695515d08a176509978a93e71bb6052964d))

## Changelog
