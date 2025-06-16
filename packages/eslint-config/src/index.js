import js from "@eslint/js";
import globals from "globals";
import importPlugin from "eslint-plugin-import";
import nodePlugin from "eslint-plugin-n";
import prettierPluginRecommened from "eslint-plugin-prettier/recommended";
import promisePlugin from "eslint-plugin-promise";
import unicornPlugin from "eslint-plugin-unicorn";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["coverage/", "dist/", "node_modules/", "eslint.config.js"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,ts,tsx}"],
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
      n: nodePlugin,
      import: importPlugin,
      promise: promisePlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      // Base rules
      curly: ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "arrow-body-style": "off",

      ...nodePlugin.configs["flat/recommended-script"],
      "n/no-unsupported-features/es-syntax": "off",
      "n/no-unpublished-import": [
        "error",
        {
          allowModules: ["@faker-js/faker", "mercurius-codegen", "query-string"],
        },
      ],

      // Import rules
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
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

      // Promise rules
      ...promisePlugin.configs.recommended.rules,

      // Unicorn rules
      ...unicornPlugin.configs.recommended.rules,
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
      "unicorn/prefer-structured-clone": "off",
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
  // Prettier config should be last to override any conflicting rules
  prettierPluginRecommened
];
