import js from "@eslint/js";
import nPlugin from "eslint-plugin-n";
import importPlugin from "eslint-plugin-import";
import prettierPlugin from "eslint-plugin-prettier";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import typescriptParser from "@typescript-eslint/parser";
import unicornPlugin from "eslint-plugin-unicorn";
import promisePlugin from "eslint-plugin-promise";
import prettierConfig from "eslint-config-prettier";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parser: typescriptParser,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslint,
      import: importPlugin,
      n: nPlugin,
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
      "n/no-unsupported-features/es-syntax": ["error", { ignores: ["modules"] }],
      "n/no-unpublished-import": [
        "error",
        {
          allowModules: ["@faker-js/faker", "mercurius-codegen", "query-string"],
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
      // [DU 2024-SEP-10]: Disabled the 'unicorn/prefer-structured-clone' rule, which recommends using 'structuredClone' 
      // instead of 'JSON.parse(JSON.stringify(...))' (see: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-structured-clone.md). 
      // This may cause warnings when using 'JSON.parse(JSON.stringify(data))'. The reason for using this approach is unclear, 
      // but it could potentially lead to issues for other developers. Further review is needed to determine if 'structuredClone' should be used instead.
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
      node: {
        tryExtensions: [".js", ".json", ".node", ".ts"],
      },
    },
  },
  // TypeScript configuration
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      ...typescriptEslint.configs.recommended.rules,
    },
  },
  // Node.js configuration
  {
    files: ["**/*.{js,ts}"],
    rules: {
      ...nPlugin.configs.recommended.rules,
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
  // Test files configuration
  {
    files: ["**/*.spec.ts", "**/*.test.ts"],
    rules: {
      // Add any specific rules for test files if needed
    },
  },
];
