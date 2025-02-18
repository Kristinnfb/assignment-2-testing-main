// eslint/custom-rules.js

// Helper function for camelCase conversion
const toCamelCase = (str) => {
  return str
    .replace(/([-_]\w)/g, (match) => match[1].toUpperCase())
    .replace(/^[A-Z]/, (match) => match.toLowerCase());
};

export default {
  rules: {
    // 1. Enforce camelCase function names
    'camelcase-functions': {
      meta: {
        type: 'suggestion',
        fixable: 'code',
        docs: {
          description: 'Enforce camelCase naming convention for functions'
        },
        messages: {
          camelcase: 'Function name "{{name}}" should be in camelCase'
        }
      },
      create(context) {
        return {
          FunctionDeclaration(node) {
            if (node.id && !/^[a-z][a-zA-Z0-9]*$/.test(node.id.name)) {
              context.report({
                node: node.id,
                messageId: 'camelcase',
                data: { name: node.id.name },
                fix: fixer => fixer.replaceText(node.id, toCamelCase(node.id.name))
              });
            }
          }
        };
      }
    },

    // 2. Forbid moment.js imports
    'no-moment': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow usage of the moment.js library'
        },
        messages: {
          noMoment: 'The moment library usage is forbidden'
        }
      },
      create(context) {
        return {
          ImportDeclaration(node) {
            if (node.source.value === 'moment') {
              context.report({
                node,
                messageId: 'noMoment'
              });
            }
          }
        };
      }
    },

    // 3. Forbid console.log
    'no-console-log': {
      meta: {
        type: 'problem',
        docs: {
          description: 'Disallow use of console.log'
        },
        messages: {
          noConsole: 'Use proper logging instead of console.log'
        }
      },
      create(context) {
        return {
          MemberExpression(node) {
            if (node.object.name === 'console' && node.property.name === 'log') {
              context.report({
                node,
                messageId: 'noConsole'
              });
            }
          }
        };
      }
    }
  }
};