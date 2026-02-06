import js from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import importPlugin from "eslint-plugin-import";
import unicornPlugin from "eslint-plugin-unicorn";
import prettierPlugin from "eslint-plugin-prettier";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["dist/", "build/", "coverage/", "node_modules/"],
  },

  // Base JS rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Disable rules that conflict with Prettier
  prettierConfig,

  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
      ecmaVersion: "latest",
      parser: tseslint.parser,
      sourceType: "module",
    },
    plugins: {
      import: importPlugin,
      unicorn: unicornPlugin,
      prettier: prettierPlugin,
      "@typescript-eslint": tseslint.plugin,
    },
    rules: {
      // Base rules
      "brace-style": ["error", "1tbs"],
      curly: ["error", "all"],

      // Imports rules
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

      // TypeScript rules
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
      "@typescript-eslint/no-unused-expressions": [
        "error",
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true,
        },
      ],

      // Unicorn rules
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
            req: true,
            res: true,
          },
        },
      ],

      // Prettier rules
      "prettier/prettier": "error",
    },
    settings: {
      "import/resolver": {
        typescript: {
          extensions: [".ts", ".tsx", ".d.ts", ".js", ".jsx", ".json", ".node"],
        },
      },
    },
  },
];
