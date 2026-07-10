import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import nodePlugin from "eslint-plugin-n";
import perfectionistPlugin from "eslint-plugin-perfectionist";
import prettierPluginRecommened from "eslint-plugin-prettier/recommended";
import promisePlugin from "eslint-plugin-promise";
import unicornPlugin from "eslint-plugin-unicorn";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["coverage/", "dist/", "node_modules/", "eslint.config.js"],
  },
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
      n: nodePlugin,
      import: importPlugin,
      perfectionist: perfectionistPlugin,
      promise: promisePlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      // Base rules
      curly: ["error", "all"],
      "brace-style": ["error", "1tbs"],

      // Node rules
      ...nodePlugin.configs["flat/recommended-script"].rules,
      "n/no-missing-import": "off",
      "n/no-unsupported-features/es-syntax": [
        "error",
        { ignores: ["modules"] },
      ],
      "n/no-unpublished-import": [
        "error",
        {
          allowModules: [
            "@faker-js/faker",
            "mercurius-codegen",
            "query-string",
          ],
        },
      ],

      "preserve-caught-error": "off",

      // Import rules
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
      "import/order": "off",
      "sort-imports": "off",

      // Perfectionist rules
      ...perfectionistPlugin.configs["recommended-natural"].rules,

      // Unicorn rules
      ...unicornPlugin.configs.recommended.rules,
      "unicorn/consistent-boolean-name": "off",
      "unicorn/consistent-class-member-order": "off",
      "unicorn/default-export-style": "off",
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
      "unicorn/name-replacements": "off",
      "unicorn/no-computed-property-existence-check": "off",  
      "unicorn/no-error-property-assignment": "off",
      "unicorn/no-return-array-push": "off",
      "unicorn/numeric-separators-style": [
        "error",
        {
          number: {
            minimumDigits: 6,
            groupLength: 3,
          },
        },
      ],
      " unicorn/prefer-await": "off",
      "unicorn/prefer-includes-over-repeated-comparisons": "off",
      "unicorn/prefer-math-constants": "off",
      "unicorn/prefer-number-coercion": "off",
      "unicorn/prefer-structured-clone": "off",
      " unicorn/prefer-ternary": "off",
      "unicorn/name-replacements": [
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
            utils: true,
          },
        },
      ],
    },
    settings: {
      node: {
        tryExtensions: [".js", ".json", ".node", ".ts"],
      },
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  prettierPluginRecommened,
];
