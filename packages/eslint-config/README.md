# @prefabs.tech/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Supported configurations:
- `@prefabs.tech/eslint-config/fastify` fastify apis and libraries
- `@prefabs.tech/eslint-config/react` for react libraries
- `@prefabs.tech/eslint-config/react-app` for react apps
- `@prefabs.tech/eslint-config/vue` for vue apps and libraries
- `@prefabs.tech/eslint-config` for general typescript projects

## Installation and usage

**Note:** For CommonJS projects, use `eslint.config.mjs` instead of `eslint.config.js`.

* ### For fastify apis and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/eslint-config eslint prettier typescript
  ```

  Create a `eslint.config.js` file:

  ```js
  import fastifyConfig from "@prefabs.tech/eslint-config/fastify.js";

  export default fastifyConfig;
  ```

* ### For react libraries:

  In the root directory of your the react package:

  Install dependencies:

  ```sh
  pnpm i -D @prefabs.tech/eslint-config eslint prettier typescript
  ```

  Create a `eslint.config.js` file:

  ```js
  import reactConfig from "@prefabs.tech/eslint-config/react.js";

  export default reactConfig;
  ```

* ### For react apps:

  In the root directory of the react app:

  Install dependencies:

  ```sh
  pnpm i -D @prefabs.tech/eslint-config eslint prettier typescript
  ```

  Create a `eslint.config.js` file:

    ```js
    import reactConfig from "@prefabs.tech/eslint-config/react-app.js";

    export default reactConfig;
    ```

* ### For vue apps and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  pnpm i -D @prefabs.tech/eslint-config eslint prettier typescript
  ```

  Create a `eslint.config.js` file:

  ```js
  import vueConfig from "@prefabs.tech/eslint-config/vue.js";

  export default vueConfig;
  ```

  **Note:** If you're using this configuration for a vue app, you may want to disable the `vue/no-reserved-component-names` rule, which prevents using reserved HTML tag names (e.g., Button, Input) as component names. You can do this by adding the following configuration:

  ```js
  import vueConfig from "@prefabs.tech/eslint-config/vue.js";

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
  npm i -D @prefabs.tech/eslint-config eslint prettier typescript
  ```

  Create a `eslint.config.js` file:

  ```js
  import config from "@prefabs.tech/eslint-config";

  export default config;
  ```

## Adding linting scripts
In your `package.json`, add the following commands to the `scripts` section:

* For typescript or react projects:
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
