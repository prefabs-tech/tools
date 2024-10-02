# @12degrees/eslint-config
Custom ESLint configuration for streamlined linting across projects.

## Install
Install the required dependencies:

```sh
$ npm i -D @12degrees/eslint-config eslint prettier typescript
```

## Usage
In the root directory of your app or package, create a `.eslintrc.js` file:

```ts
module.exports = {
  root: true,
  extends: ["@12degrees/eslint-config"],
};
```

## Adding linting scripts
In your `package.json`, add the following commands to the `scripts` section:

```json
"lint": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --ignore-path .gitignore",
"lint:fix": "eslint . --ext .js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
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
