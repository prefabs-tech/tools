import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import unicornPlugin from "eslint-plugin-unicorn";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: [
      "build/",
      "coverage/",
      "dist/",
      "node_modules/",
      "eslint.config.js",
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs['flat/recommended'],
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      parser: vueParser,
      parserOptions: {
        parser: tseslint.parser,
        ecmaVersion: "latest",
        sourceType: "module",
        extraFileExtensions: [".vue"],
      },
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
      prettier: prettierPlugin,
      unicorn: unicornPlugin,
      vue: vuePlugin,
    },
    rules: {
      // Base rules
      "brace-style": ["error", "1tbs"],
      curly: ["error", "all"],

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

      // Prettier rules
      ...prettierPlugin.configs.recommended.rules,
      "prettier/prettier": "error",

      // Unicorn rules
      ...unicornPlugin.configs.recommended.rules,
      "unicorn/consistent-function-scoping": "off",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
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
      "unicorn/no-abusive-eslint-disable": "off",
      "unicorn/no-array-callback-reference": "off",
      "unicorn/no-array-reduce": "off",
      "unicorn/no-negated-condition": "off",
      "unicorn/no-null": "off",
      "unicorn/numeric-separators-style": [
        "error",
        {
          number: {
            minimumDigits: 6,
            groupLength: 3,
          },
        },
      ],
      "unicorn/no-useless-undefined": "off",
      "unicorn/prefer-array-some": "off",
      "unicorn/prefer-export-from": "off",
      "unicorn/prefer-global-this": "off",
      "unicorn/prefer-query-selector": "off",
      "unicorn/prefer-structured-clone": "off",
      "unicorn/prefer-type-error": "off",
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
            props: true,
            req: true,
            res: true,
          },
        },
      ],

      // Vue specific rules
      "vue/multi-word-component-names": "off",
      "vue/no-multiple-template-root": "off",
      "vue/no-v-for-template-key": "off",
      "vue/no-v-model-argument": "off",
      "vue/order-in-components": "off",
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
    },
    settings: {
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".vue"],
        },
        typescript: {
          alwaysTryTypes: true,
        },
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts", ".vue"],
        },
      },
      node: {
        tryExtensions: [".js", ".json", ".node", ".ts", ".vue"],
      },
    },
  },
  // Test files configuration
  {
    files: ["**/*.spec.{js,ts}"],
    rules: {
      // Add any test-specific rules here
    },
  },
  // Prettier config should be last to override any conflicting rules
  {
    rules: {
      ...prettierConfig.rules,
    },
  },
];
