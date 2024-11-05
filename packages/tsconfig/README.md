# @12deg/tsconfig
A shared TypeScript configuration for consistent and reliable type-checking across projects.

## Install
Install the required dependencies:

```sh
$ npm i -D @12deg/tsconfig
```

## Usage
In the root directory of your project, create or update a `tsconfig.json` file to extend the base configuration that fits your project type:

* For fastify library:
  ```json
  {
    "extends": "@12deg/tsconfig/fastify.json",
    "exclude": [
      "src/**/__test__/**/*",
    ],
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "./dist",
    },
    "include": [
      "src/**/*.ts"
    ],
  }
  ```

* For fastify api:
  ```json
  {
    "extends": "@12deg/tsconfig/fastify-api.json",
  }
  ```
  
* For react app:
  ```json
  {
    "extends": "@12deg/tsconfig/react-app.json",
    "include": ["src"],
  }
  ```

* For react library:
  ```json
  {
    "extends": "@12deg/tsconfig/react.json",
    "compilerOptions": {
    "baseUrl": ".",
    "outDir": "./dist",
    "paths": {
      "@/*": ["./src/*"]
    },
  },
    "include": ["vite.config.*", "src/**/*", "src/**/*.tsx"],
  }
  ```

* For vue app:
  ```json
  {
    "extends": "@12deg/tsconfig/vue-app.json",
    
  }
  ```
  
* For vue library:
  ```json
  {
    "extends": "@12deg/tsconfig/vue.json",
    "exclude": [
      "src/**/__test__/**/*",
    ],
    "compilerOptions": {
      "baseUrl": "./",
      "outDir": "./dist/src"
    },
    "include": [
      "src/**/*",
      "src/**/*/*.vue"
    ],
  }
  ```

  * For general typescript project:
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
