# plugin-104-dialog-manager

## Properties

| Property                | Type                    |
|-------------------------|-------------------------|
| `createAddressesDialog` | `CreateAddressesDialog` |
| `selectDODialog`        | `SelectDODialog`        |

## Methods

| Method                      | Type                                             |
|-----------------------------|--------------------------------------------------|
| `showCreateAddressesDialog` | `(params: CreateAddressesDialogParams): Promise<EditEventV2<EditV2> \| null>` |
| `showSelectDODialog`        | `(params: SelectDODialogParams): Promise<Path \| null>` |
