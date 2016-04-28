# Electron Base

A base for Electron applications.

## Setup

Install the dependencies.

    npm install

Install `gulp` globally, if you don't have `./node_modules/.bin` in your path.

    npm install -g gulp

## Development

To run the application.

    gulp run

To run the application, and reload the renderer code when changed.

    gulp watch

Before pushing changes, check the code.

    gulp lint

## Releasing

To generate a signed release with a ZIP and DMG version.

    gulp release
