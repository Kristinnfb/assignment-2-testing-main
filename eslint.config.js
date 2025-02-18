// eslint.config.js
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import customRules from './eslint/custom-rules.js'; 

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'custom-rules': customRules // 
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: { project: true }
    },
    rules: {
      'custom-rules/camelcase-functions': 'error',
      'custom-rules/no-moment': 'error',
      'custom-rules/no-console-log': 'error',
      '@typescript-eslint/no-unused-vars': 'warn'
    }
  },
  {
    ignores: ["node_modules/", "dist/"]
  }
];