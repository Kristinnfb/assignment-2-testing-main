// eslint/custom-rules.test.js
import { RuleTester } from 'eslint';
import customRules from './custom-rules.js';

const ruleTester = new RuleTester({
  parserOptions: { ecmaVersion: 2022 }
});

ruleTester.run('camelcase-functions', customRules.rules['camelcase-functions'], {
  valid: ['function validFunction() {}'],
  invalid: [
    {
      code: 'function Invalid_Function() {}',
      errors: [{ messageId: 'camelcase' }],
      output: 'function invalidFunction() {}'
    }
  ]
});