# @12deg/tsconfig
A shared TypeScript configuration for consistent and reliable type-checking across projects.

## Install
Install the required dependencies:

```sh
$ npm i -D @12deg/tsconfig
```

## Usage
In the root directory of your project, create or update a `tsconfig.json` file to extend the base configuration that fits your project type:

* For general typescript project
  ```json
  {
    "extends": "@12deg/tsconfig",
    // add custom options here if needed
  }
  ```

* For fastify-api:
  ```json
  {
    "extends": "@12deg/tsconfig/fastify-api.json",
    // add custom options here if needed
  }
  ```
  
* For react app:
  ```json
  {
    "extends": "@12deg/tsconfig/react-app.json",
    // add custom options here if needed
  }
  ```

* For react library:
  ```json
  {
    "extends": "@12deg/tsconfig/react-library.json",
    // add custom options here if needed
  }
  ```
  
* For vue library:
  ```json
  {
    "extends": "@12deg/tsconfig/vue-library.json",
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
