import js from "@eslint/js"
import globals from "globals"
import tseslint from "typescript-eslint"
import react from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import stylistic from "@stylistic/eslint-plugin"

export default defineConfig([
    { files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"] },
    { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
    js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.flat.recommended,
    stylistic.configs.customize({
        indent: 4,
        quotes: "double",
        jsx: true,
        arrowParens: true,
        quoteProps: "as-needed",
        commaDangle: "always-multiline",
    }),
])
