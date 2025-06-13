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
    ignores: ["coverage/", "dist/", "node_modules/", "eslint.config.js"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs["flat/vue3-recommended"],
  {
    files: ["**/*.{js,ts,vue}"],
    languageOptions: {
      parser: vueParser,
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
      unicorn: unicornPlugin,
      vue: vuePlugin,
    },
    rules: {
      // Base rules
      curly: ["error", "all"],
      "brace-style": ["error", "1tbs"],
      "arrow-body-style": "off",

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
            props: true,
            req: true,
            res: true,
          },
        },
      ],

      // Vue specific rules
      "vue/multi-word-component-names": "off",
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
