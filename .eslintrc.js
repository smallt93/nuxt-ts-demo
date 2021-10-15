module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  },
  extends: [
    "@nuxtjs",
    "plugin:vue/recommended",
    "plugin:nuxt/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "prettier/standard",
    "prettier/vue"
  ],
  plugins: ["@typescript-eslint", "import", "prettier", "jest", "graphql"],
  settings: {
    "import/resolver": {
      nuxt: {},
      typescript: {}
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  },
  // add your custom rules here
  rules: {
    "nuxt/no-cjs-in-config": "off",
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true
      }
    ],
    "import/no-unresolved": [
      "error",
      {
        caseSensitive: true
      }
    ],
    "no-param-reassign": ["warn", { props: false }],
    eqeqeq: "warn",
    camelcase: "warn",
    "no-console": "off",
    "no-new": "warn",
    "no-throw-literal": "error",
    "one-var": "error",
    "no-unreachable": "error",
    "no-dupe-keys": "error",
    "no-useless-escape": "warn",
    "no-unused-expressions": "error",
    "no-useless-constructor": "error",
    "no-return-assign": "error",
    "no-multiple-empty-lines": "error",
    "no-undef": "error",
    "handle-callback-err": "warn",
    "new-cap": "warn",
    "space-before-function-paren": ["error", "never"],
    "comma-spacing": "error",
    "lines-between-class-members": "off",
    semi: "error",
    quotes: ["error", "single"],
    "space-before-blocks": "error",
    "space-infix-ops": "error",
    "comma-dangle": "error",
    "no-multi-spaces": "error",
    "padded-blocks": "error",
    "eol-last": "error",
    "vue/name-property-casing": ["error", "kebab-case"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    "@typescript-eslint/array-type": ["error", "generic"],
    "@typescript-eslint/ban-ts-ignore": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        types: {
          Object: "",
          String: {
            message: 'Use "string" instead',
            fixWith: "string"
          },
          Boolean: {
            message: 'Use "boolean" instead',
            fixWith: "boolean"
          },
          Number: {
            message: 'Use "Number" instead',
            fixWith: "number"
          }
        }
      }
    ],
    "@typescript-eslint/camelcase": ["error", { properties: "never" }],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      { allowExpressions: true }
    ],
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-explicit-any": "error"
  }
};
