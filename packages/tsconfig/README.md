# @prefabs.tech/tsconfig
A shared TypeScript configuration for consistent and reliable type-checking across projects.

## Install
Install the required dependencies:

```sh
npm i -D @prefabs.tech/tsconfig
```

## Usage
In the root directory of your project, create or update a `tsconfig.json` file to extend the base configuration that fits your project type:

* For fastify libraries:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/fastify.json",
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

* For fastify apis:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/fastify-api.json",
  }
  ```
  
* For react apps:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/react-app.json",
    "include": ["src"],
  }
  ```

* For react libraries:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/react.json",
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

* For vue apps:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/vue-app.json",
    
  }
  ```
  
* For vue libraries:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig/vue.json",
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

  * For general typescript projects:
  ```json
  {
    "extends": "@prefabs.tech/tsconfig",
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
