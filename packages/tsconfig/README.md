# @12deg/tsconfig
A shared TypeScript configuration for consistent and reliable type-checking across projects.

## Install
Install the required dependencies:

```sh
$ npm i -D @12deg/tsconfig
```

## Usage
In the root directory of your project, create or update a tsconfig.json file to extend the base configuration provided by `@12deg/tsconfig`:

```json
{
  "extends": "@12deg/tsconfig",
  // add custom options here if needed
}
```

## Adding typescript checking scripts
In your `package.json`, include a script for running typescript checks without emitting compiled files:

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit -p tsconfig.json --composite false"
  }
}
```

## Running typescript checks
Use the following command to type-check your code:

```bash
npm run typecheck
```
