import js from "@eslint/js";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import unicornPlugin from "eslint-plugin-unicorn";
import vuePlugin from "eslint-plugin-vue";
import vueParser from "vue-eslint-parser";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...vuePlugin.configs["flat/vue3-recommended"],
  {
    languageOptions: {
      parser: vueParser,
      globals: {
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
      ...prettierConfig.rules,
      
      "brace-style": ["error", "1tbs"],
      curly: ["error", "all"],
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
      "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "warn",
      "prettier/prettier": "error",
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
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
            props: true,
            req: true,
            res: true,
          },
        },
      ],
      "vue/multi-word-component-names": "off",
      "vue/order-in-components": "off",
    },
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts"],
        },
        typescript: true,
        node: true,
      },
    },
  },
  // Import configuration for Vue files
  {
    files: ["**/*.{js,ts,vue}"],
    rules: {
      ...importPlugin.configs.recommended.rules,
      ...importPlugin.configs.typescript.rules,
    },
  },
  // Prettier configuration for Vue files
  {
    files: ["**/*.{js,ts,vue}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
    },
  },
];
