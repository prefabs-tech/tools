# @12deg/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Supported configurations:
- `@12deg/eslint-config` for general typescript projects
- `@12deg/eslint-config/react` for react projects
- `@12deg/eslint-config/vue` for vue projects


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

* For react projects:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/react"],
  };
  ```

* For vue projects:
  ```js
  module.exports = {
    root: true,
    extends: ["@12deg/eslint-config/vue"],
  };
  ```

## Adding linting scripts
In your `package.json`, add the following commands to the `scripts` section:

* For typeScript or react projects:
  ```json
  "lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore",
  "lint:fix": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  ```

* For Vue projects (including .vue files):
  ```json
  "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore",
  "lint:fix": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
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
