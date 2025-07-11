import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import { defineConfig } from "eslint/config";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"] },
  { languageOptions: { globals: {...globals.browser, ...globals.node} } },
  js.configs.recommended,
  tseslint.configs.recommended,
  react.configs.flat.recommended
]);
