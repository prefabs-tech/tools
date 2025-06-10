import js from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import unicornPlugin from "eslint-plugin-unicorn";
import cypressPlugin from "eslint-plugin-cypress";
import prettierConfig from "eslint-config-prettier";
import { FlatCompat } from "@eslint/eslintrc";
import typescriptParser from "@typescript-eslint/parser";
import globals from "globals";

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends("react-app", "react-app/jest"),
  {
    languageOptions: {
      parser: typescriptParser,
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      prettier: prettierPlugin,
      unicorn: unicornPlugin,
    },
    rules: {
      ...prettierConfig.rules,
      
      "import/order": [
        1,
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
            params: true,
            req: true,
            res: true,
          },
        },
      ],
    },
  },
  // Prettier configuration
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
    },
  },
  // Cypress configuration
  {
    files: ["cypress/integration/**.spec.{js,ts,jsx,tsx}"],
    plugins: {
      cypress: cypressPlugin,
    },
    rules: {
      ...cypressPlugin.configs.recommended.rules,
    },
  },
];
