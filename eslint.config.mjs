/* eslint-env node */

import vuePlugin from "eslint-plugin-vue";
import { globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier/recommended";
import {
  defineConfigWithVueTs,
  vueTsConfigs,
} from "@vue/eslint-config-typescript";
// import vueA11yPlugin from "eslint-plugin-vuejs-accessibility";
import prettierConfig from "@vue/eslint-config-prettier";

import { includeIgnoreFile } from "@eslint/compat";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");

export default [
  // add more generic rulesets here

  // include ignore .gitignore patterns
  globalIgnores(["**/.*", "**/dist/**", "**/build/**"]),
  includeIgnoreFile(gitignorePath),

  // add vue with ts configs
  ...defineConfigWithVueTs(
    vuePlugin.configs["flat/recommended"],
    vueTsConfigs.recommended,
  ),

  // add vue a11y configs
  // ...vueA11yPlugin.configs["flat/recommended"],

  // add prettier configs
  prettierPlugin,
  prettierConfig,

  // your modifications
  {
    rules: {
      "@typescript-eslint/no-explicit-any": ["warn"],
      "@typescript-eslint/ban-ts-comment": ["warn"],
      "@typescript-eslint/explicit-function-return-type": ["warn"],
      "vue/padding-line-between-blocks": ["error", "always"],
      "vue/multi-word-component-names": ["off"],
      "vue/block-order": ["error", { order: ["script", "template", "style"] }],
      "vue/block-lang": ["error", { script: { lang: "ts" } }],
      "comma-dangle": ["error", "always-multiline"],
      "prettier/prettier": [
        "error",
        {
          trailingComma: "all",
          endOfLine: "auto",
          bracketSameLine: true,
        },
      ],
    },
  },
];
