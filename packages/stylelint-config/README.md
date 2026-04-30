# @prefabs.tech/stylelint-config

Custom stylelint configuration for CSS/SCSS linting across projects.

## Supported configurations:

- `@prefabs.tech/stylelint-config` for CSS/SCSS linting in general projects
- `@prefabs.tech/stylelint-config/vue` for CSS/SCSS linting in Vue projects

## Installation and usage

**Note:** For CommonJS projects, use `stylelint.config.mjs` instead of `stylelint.config.js`.

- ### For general linting:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/stylelint-config stylelint stylelint-config-standard stylelint-order
  ```

  Create a `stylelint.config.js` file:

  ```js
  import stylelintConfig from "@prefabs.tech/eslint-config/stylelint.js";

  export default stylelintConfig;
  ```

  ### For Vue projects:

  Install dependencies:

  ```sh
  npm i -D @prefabs.tech/stylelint-config stylelint stylelint-config-recommended-vue stylelint-order
  ```

  Create a `stylelint.config.js` file:

  ```js
  import stylelintConfig from "@prefabs.tech/eslint-config/stylelint-vue.js";

  export default stylelintConfig;
  ```

## Adding stylelint scripts

In your `package.json`, add the following commands to the `scripts` section:

```json
"stylelint": "stylelint \"src/**/*.{css,vue}\"",
"stylelint:fix": "stylelint \"src/**/*.{css,vue}\" --fix",
```

## Running stylelint

Run the following command to lint your code:

```bash
npm run stylelint
```

To automatically fix issues, run:

```bash
npm run stylelint:fix
```
