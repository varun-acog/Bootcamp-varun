// eslint.config.mjs
import { defineConfig } from 'eslint';

export default defineConfig({
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'], // Points to your tsconfig.json file
  },
  plugins: ['@typescript-eslint', 'prettier'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 'warn', // Warn for unused variables
    '@typescript-eslint/no-explicit-any': 'error', // Avoid implicit 'any'
    'prettier/prettier': 'error', // Enforce Prettier formatting
    'no-console': 'warn', // Warn when using console.log
    'no-debugger': 'warn', // Warn about debugger statements
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './tsconfig.json', // Uses tsconfig paths
      },
    },
  },
});

