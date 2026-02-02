# @prefabs.tech/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Supported configurations:
- `@prefabs.tech/eslint-config/fastify` fastify apis and libraries
- `@prefabs.tech/eslint-config/react` for react libraries
- `@prefabs.tech/eslint-config/react-app` for react apps
- `@prefabs.tech/eslint-config/vue` for vue apps and libraries
- `@prefabs.tech/eslint-config` for general typescript projects

## Installation and usage
* ### For fastify apis and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/eslint-config @typescript-eslint/eslint-plugin@8.14.0 @typescript-eslint/parser@8.14.0 eslint@8.57.1 eslint-config-prettier@9.1.0 eslint-import-resolver-alias@1.1.2 eslint-import-resolver-typescript@3.6.3 eslint-plugin-import@2.31.0 eslint-plugin-n@14.0.0 eslint-plugin-prettier@5.2.1 eslint-plugin-promise@7.1.0 eslint-plugin-unicorn@56.0.1 prettier@3.3.3 typescript
  ```

  Create a `.eslintrc.js` file:

  ```js
  module.exports = {
    root: true,
    extends: ["@prefabs.tech/eslint-config/fastify"],
  };
  ```

* ### For react libraries:

  In the root directory of your the react package:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/eslint-config @typescript-eslint/eslint-plugin@8.14.0 @typescript-eslint/parser@8.14.0 eslint@8.57.1 eslint-config-prettier@9.1.0 eslint-import-resolver-alias@1.1.2 eslint-import-resolver-typescript@3.6.3 eslint-plugin-import@2.31.0 eslint-plugin-prettier@5.2.1 eslint-plugin-unicorn@56.0.1 prettier@3.3.3 typescript
  ```

  Create a `.eslintrc.js` file:

  ```js
  module.exports = {
    root: true,
    extends: ["@prefabs.tech/eslint-config/react"],
  };
  ```

* ### For react apps:

  In the root directory of the react app:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/eslint-config @typescript-eslint/eslint-plugin@8.14.0 @typescript-eslint/parser@8.14.0 eslint@8.57.1 eslint-config-prettier@9.1.0 eslint-config-react-app@7.0.1 eslint-import-resolver-alias@1.1.2 eslint-import-resolver-typescript@3.6.3 eslint-plugin-cypress@3.6.0 eslint-plugin-import@2.31.0 eslint-plugin-prettier@5.2.1 eslint-plugin-unicorn@56.0.1 prettier@3.3.3 typescript
  ```

  Create a `.eslintrc.js` file:

  ```js
  module.exports = {
    root: true,
    extends: ["@prefabs.tech/eslint-config/react-app"],
  };
  ```

* ### For vue apps and libraries:

  In the root directory of your app or package:

  Install dependencies:

  ```sh
  pnpm i -D @prefabs.tech/eslint-config eslint
  ```

  Create a `.eslint.config.js` file:

  ```js
  import vueConfig from "@12deg/eslint-config/vue.js";

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
  npm i -D @prefabs.tech/eslint-config eslint@8.57.1 @typescript-eslint/eslint-plugin@8.14.0 @typescript-eslint/parser@8.14.0 eslint@8.57.1 eslint-config-prettier@9.1.0 eslint-import-resolver-alias@1.1.2 eslint-import-resolver-typescript@3.6.3 eslint-plugin-import@2.31.0 eslint-plugin-n@14.0.0 eslint-plugin-prettier@5.2.1 eslint-plugin-promise@7.1.0 eslint-plugin-unicorn@56.0.1 prettier@3.3.3 typescript
  ```

  Create a `.eslintrc.js` file:

  ```js
  module.exports = {
    root: true,
    extends: ["@prefabs.tech/eslint-config"],
  };
  ```

## Adding linting scripts
In your `package.json`, add the following commands to the `scripts` section:

* For typescript or react projects:
  ```json
  "lint": "eslint .",
  "lint:fix": "eslint . --fix"
  ```

* For vue projects (including .vue files):
  ```json
  "lint": "eslint . --ext .vue",
  "lint:fix": "eslint . --ext .vue --fix",
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
