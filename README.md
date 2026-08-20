# `OpenSCD`

[![Built with open-wc recommendations](https://img.shields.io/badge/built%20with-open--wc-blue.svg)](https://github.com/open-wc)
[![Zulip Chat](https://img.shields.io/badge/Zulip%20-%20%23OpenSCD%20chat-purple?logo=zulip&color=2aa198&labelColor=6c71c4)](https://openscd.zulipchat.com/join/k3cyur3wx526tvafkjwubhjn)

Open Substation Communication Designer is an editor for SCL files as described in `IEC 61850-6`.

## Project scope

This repository is the home of the OpenSCD codebase used for editing and validating SCL-based substation configuration files. It contains the reusable OpenSCD packages, the distribution app used for local development, and the core libraries consumed by CoMPAS-specific integrations.

The project focuses on:

- editing and validating SCL IEC 61850 configurations
- reusable web components and editor foundations for OpenSCD itself
- official OpenSCD plug-ins and package exports
- local distribution and demo tooling for development and testing
- integration points for CoMPAS-specific applications that consume the OpenSCD packages from npm

## Package overview

This monorepo contains the OpenSCD packages that are published and consumed as part of the current npm-based setup:

- [`packages/core`](packages/core) contains the core editor foundation and the base web components. See the package README in [packages/core/README.md](packages/core/README.md).
- [`packages/xml`](packages/xml) contains the XML helpers and schema-related utilities. See [packages/xml/README.md](packages/xml/README.md).
- [`packages/openscd`](packages/openscd) contains the main OpenSCD application package and editor runtime. See [packages/openscd/README.md](packages/openscd/README.md).
- [`packages/plugins`](packages/plugins) contains the official plug-ins distributed with OpenSCD. See [packages/plugins/README.md](packages/plugins/README.md).
- [`packages/distribution`](packages/distribution) contains the local distribution app used to run the project locally and validate the built frontend. See [packages/distribution/README.md](packages/distribution/README.md).
- [`packages/forms`](packages/forms) and [`packages/wizards`](packages/wizards) provide supporting form and wizard infrastructure used by the app and plugins.

## Running locally

For local development and testing, use the distribution package in [packages/distribution](packages/distribution). It is the package intended to run the project in a browser from source and build the deployable frontend.

From the repository root:

```sh
pnpm install
pnpm run build
cd packages/distribution
pnpm start
```

This starts the local development server for the OpenSCD distribution app. The package README in [packages/distribution/README.md](packages/distribution/README.md) contains the package-specific instructions and is the recommended place to look for local setup details.

## Installation

In order to install OpenSCD on your local device (only for you), simply visit [↗ openscd.github.io](https://openscd.github.io), click the "Install OpenSCD" button in your address bar (Chrome or Edge on desktop) or click the "Add OpenSCD to home screen" notification in any mobile browser.

## Relationship with CoMPAS OpenSCD

This repository is the source of truth for the OpenSCD-specific code and packages. Historically, `compas-open-scd` was a fork of `open-scd`, but that is no longer the relationship in practice.

Today:

- `open-scd` continues to maintain the OpenSCD-specific packages, libraries, and the local distribution app.
- `compas-open-scd` is a separate repository focused on CoMPAS-specific functionality and integrations.
- `compas-open-scd` does not share a forked codebase with `open-scd`; it consumes the published OpenSCD packages from npm as dependencies.
- The local distribution package in `open-scd` remains for local development and testing, independent from the published npm packages.

Code flow:

1. `open-scd` develops and publishes the OpenSCD packages to npm.
2. `compas-open-scd` consumes those packages as npm dependencies.
3. `compas-open-scd` adds CoMPAS-specific behavior, workflows, and integrations on top of the shared OpenSCD foundation.

Release and versioning:

- `open-scd` manages its own package versions and changelogs for the OpenSCD libraries and distribution.
- `compas-open-scd` follows its own CoMPAS release/versioning cycle and pins the OpenSCD packages it consumes, rather than tracking a shared forked source tree.

## Plug-ins

We gather the available plug-ins from the community in the [plug-ins](docs/plug-ins.md) file.  
If you would like to list your plug-in here, please open a pull request.

## Contributing

See [Contributing Guide](CONTRIBUTING.md)

## Documentation

How the documentation is organized.

A high-level overview of how it’s organized will help you know where to look for certain things:

- [⚖️ Decisions](docs/decisions/README.md) documents the decisions we made and why we made them.
- [✏️ Edit event API](docs/core-api/edit-api.md) documents the edit event API.
- [🧩 OpenSCD plugin API](https://raw.githubusercontent.com/openscd/oscd-api/refs/heads/main/docs/plugin-api.md) describes how plugins communicate with OpenSCD core and how they receive document and editor state.
- [🎨 OpenSCD theming guide](https://raw.githubusercontent.com/openscd/oscd-api/refs/heads/main/docs/theming.md) documents the theming model, CSS variables, and the palette used for consistent plugin styling.

These specifications are relevant both for the core OpenSCD platform and for CoMPAS-specific extensions built on top of it.

## CC-EULA license

Some of the files in this repository are subject to the CC-EULA License. Please check the [disclaimer](./packages/openscd/xml/Disclaimer.md) to to see what his means.
