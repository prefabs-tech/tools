# @12deg/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Supported configurations:
- `@12deg/eslint-config` for general typescript projects
- `@12deg/eslint-config/react` for react libraries
- `@12deg/eslint-config/react-app` for react apps

## Install
Install the required dependencies:

```sh
$ npm i -D @12deg/eslint-config eslint prettier typescript
```

## Usage
In the root directory of your app or package, create a `.eslintrc.js` file:

* For general typescript projects:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config"],
  };
  ```

* For react libraires:
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
  };
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
