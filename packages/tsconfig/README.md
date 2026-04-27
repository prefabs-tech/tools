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

## Configuration Options

The base configuration (`tsconfig.json`) includes the following compiler options.

For detailed information about each option, see the [TypeScript TSConfig Reference](https://www.typescriptlang.org/tsconfig/).

| Option | Value | Description |
|--------|-------|-------------|
| `allowJs` | `true` | Allows JavaScript files to be compiled alongside TypeScript files |
| `composite` | `true` | Enables project references and incremental compilation for better build performance |
| `declaration` | `true` | Generates `.d.ts` declaration files for TypeScript definitions |
| `declarationMap` | `true` | Creates source maps for declaration files, enabling "Go to Definition" to jump to source |
| `esModuleInterop` | `true` | Enables interoperability between CommonJS and ES modules |
| `forceConsistentCasingInFileNames` | `true` | Ensures file name casing is consistent across imports |
| `inlineSourceMap` | `true` | Embeds source maps directly in the compiled JavaScript files |
| `inlineSources` | `true` | Includes the original TypeScript source code in the source maps |
| `isolatedModules` | `true` | Ensures each file can be safely transpiled independently (required for tools like Babel) |
| `jsx` | `preserve` | Keeps JSX syntax as-is for processing by other tools (e.g., Babel, esbuild) |
| `lib` | `["ES2021"]` | Includes type definitions for ES2021 features |
| `module` | `ES2022` | Specifies ES2022 module code generation (supports top-level await) |
| `moduleResolution` | `Node` | Uses Node.js-style module resolution algorithm |
| `noUnusedLocals` | `false` | Allows unused local variables (disabled for flexibility during development) |
| `noUnusedParameters` | `false` | Allows unused function parameters (disabled for flexibility during development) |
| `preserveWatchOutput` | `true` | Keeps previous console output when running in watch mode |
| `resolveJsonModule` | `true` | Allows importing JSON files as modules |
| `skipLibCheck` | `true` | Skips type checking of declaration files for faster compilation |
| `sourceMap` | `false` | Disables separate source map files (using inline source maps instead) |
| `strict` | `true` | Enables all strict type-checking options for maximum type safety |
| `target` | `ES2021` | Compiles TypeScript to ES2021 JavaScript |
| `useDefineForClassFields` | `true` | Uses ECMAScript standard semantics for class field initialization |
