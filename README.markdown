# Electron Base

A base for Electron applications with React.

## Setup

Install the dependencies.

    yarn install

## Development

To run the application, and reload the renderer code when changed.

    yarn start

If you're making changes, be sure to write and run the tests.

    yarn test

Before pushing changes, check the code.

    yarn run lint

## Releasing

To generate a signed release with a ZIP and DMG version.

    yarn run package

Be sure to correct the identity name in `package.json` for signing.

## License

electron-base uses the MIT license. See LICENSE for more details.
