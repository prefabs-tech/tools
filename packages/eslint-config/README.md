# @12deg/eslint-config
Custom ESLint configuration for streamlined linting across projects.

**⚡ ESLint 9 Compatible**: This package now supports ESLint 9 with the new flat config format.

## Supported configurations:
- `@12deg/eslint-config/fastify` fastify apis and libraries
- `@12deg/eslint-config/react` for react libraries
- `@12deg/eslint-config/react-app` for react apps
- `@12deg/eslint-config/vue` for vue apps and libraries
- `@12deg/eslint-config` for general typescript projects

## Installation and usage
* ### For fastify apis and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  $ npm i -D @12deg/eslint-config eslint
  ```

  Create a `eslint.config.js` file:

  ```js
  import baseConfig from "@12deg/eslint-config/fastify";

  export default [
    ...baseConfig,
  ];
  ```

* ### For react libraries:

  In the root directory of your the react package:

  Install dependencies:

  ```sh
  $ npm i -D @12deg/eslint-config eslint
  ```

  Create a `eslint.config.js` file:

  ```js
  import reactConfig from "@12deg/eslint-config/react";

  export default reactConfig;
  ```

* ### For react apps:

  In the root directory of the react app:

  Install dependencies:

  ```sh
  $ npm i -D @12deg/eslint-config eslint
  ```

  Create a `eslint.config.js` file:

  ```js
  import reactAppConfig from "@12deg/eslint-config/react-app";

  export default reactAppConfig;
  ```

* ### For vue apps and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  $ npm i -D @12deg/eslint-config eslint
  ```

  Create a `eslint.config.js` file:

  ```js
  import vueConfig from "@12deg/eslint-config/vue";

  export default vueConfig;
  ```

  **Note:** If you're using this configuration for a vue app, you may want to disable the `vue/no-reserved-component-names` rule, which prevents using reserved HTML tag names (e.g., Button, Input) as component names. You can do this by adding the following configuration:

  ```js
  import vueConfig from "@12deg/eslint-config/vue";

  export default [
    ...vueConfig,
    {
      rules: {
        "vue/no-reserved-component-names": "off",
      }
    }
  ];
  ```

* ### For general typescript projects:
  In the root directory of your app or package:

  Install dependencies:

  ```sh

  ```

  Create a `eslint.config.js` file:

  ```js
  import baseConfig from "@12deg/eslint-config/fastify";

  export default [
    ...baseConfig,
  ];

## Migrating from ESLint 8.x

If you're migrating from ESLint 8.x, you'll need to:

1. Update ESLint to version 9.x
2. Replace your `.eslintrc.js` file with `eslint.config.js` using ES modules syntax
3. Update your dependencies to the versions listed above
4. Use the new flat config import syntax shown in the examples

### Legacy Support

If you need to continue using ESLint 8.x with the old `.eslintrc.js` format, you can pin to version `0.1.11` of this package:

```sh
npm i -D @12deg/eslint-config@0.1.11
```

## Adding linting scripts
In your `package.json`, add the following commands to the `scripts` section:

```json
"lint": "eslint .",
"lint:fix": "eslint . --fix"
```

## Running linting
Run the following command to lint your code:

```bash
npm run lint
```

To automatically fix issues, run:

```bash
npm run lint:fix
```
