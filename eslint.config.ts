import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import css from '@eslint/css'
import { defineConfig } from 'eslint/config'
import stylistic from '@stylistic/eslint-plugin'

export default defineConfig([
  { files: ['**/*.{js,mjs,cjs,ts,mts,cts}'], plugins: { js }, extends: ['js/recommended'], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  { files: ['**/*.css'], plugins: { css }, language: 'css/css', extends: ['css/recommended'] },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'no-empty-pattern': 'off',
      '@stylistic/quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'comma-dangle': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],
      '@typescript-eslint/consistent-type-imports': 'error',
      'space-before-function-paren': ['error', 'always'],
      '@stylistic/arrow-parens': ['error', 'always']
    }
  }
])
