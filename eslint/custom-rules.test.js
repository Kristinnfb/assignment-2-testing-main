const { RuleTester } = require("eslint");

const ruleTester = new RuleTester({ parserOptions: { ecmaVersion: 2020 } });

// Test camelcase-functions rule
ruleTester.run(
  "camelcase-functions",
  require("./custom-rules").rules["camelcase-functions"],
  {
    valid: ["function myFunction() {}"],
    invalid: [
      {
        code: "function My_function() {}",
        errors: [
          { message: 'Function name "My_function" should be in camelCase' },
        ],
      },
    ],
  },
);
