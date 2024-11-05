# @12deg/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Supported configurations:
- `@12deg/eslint-config` for general typescript projects
- `@12deg/eslint-config/react` for react libraries
- `@12deg/eslint-config/react-app` for react apps
- `@12deg/eslint-config/vue` for vue projects

## Install
Install the required dependencies:

```sh
$ npm i -D @12deg/eslint-config eslint prettier typescript
```

## Usage
In the root directory of your app or package, create a `.eslintrc.js` file:

* For fastify libraries and apis:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config"],
  };
  ```

* For react libraries:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/react"],
  };
  ```

* For react apps:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/react-app"],

* For vue libraries and apps:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/vue"],
  };
  ```

  **Note:** If you're using this configuration for a vue app, you may want to disable the `vue/no-reserved-component-names` rule, which prevents using reserved HTML tag names (e.g., Button, Input) as component names. You can do this by adding the following configuration:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/vue"],
    rules: {
      "vue/no-reserved-component-names": "off",
    }
  };
  ```

* For general typescript projects:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config"],
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
