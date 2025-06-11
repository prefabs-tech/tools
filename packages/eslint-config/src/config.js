import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import promisePlugin from "eslint-plugin-promise";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      promise: promisePlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...prettierConfig.rules,

      curly: ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            ["parent", "sibling"],
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
        },
      ],
      "prettier/prettier": "error",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            snakeCase: true,
          },
        },
      ],
      "unicorn/import-style": [
        "error",
        {
          styles: {
            "node:path": {
              named: true,
            },
          },
        },
      ],
      "unicorn/numeric-separators-style": [
        "error",
        {
          number: {
            minimumDigits: 6,
            groupLength: 3,
          },
        },
      ],
      "unicorn/prevent-abbreviations": [
        "error",
        {
          allowList: {
            db: true,
            docs: true,
            env: true,
            err: true,
            i: true,
            param: true,
            req: true,
            res: true,
          },
        },
      ],
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx"],
        },
      },
      node: {
        tryExtensions: [".js", ".json", ".node", ".ts"],
      },
    },
  },
  // Import configuration
  {
    files: ["**/*.{js,ts,tsx}"],
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
    },
  },
  // Unicorn configuration
  {
    files: ["**/*.{js,ts,tsx}"],
    rules: {
      ...unicornPlugin.configs.recommended.rules,
    },
  },
  // Prettier configuration
  {
    files: ["**/*.{js,ts,tsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ["coverage/", "dist/", "node_modules/", "eslint.config.js"],
  },
];
