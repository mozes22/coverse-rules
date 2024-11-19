module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow empty catch blocks',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      emptyCatchBlock: 'Empty catch block is not allowed.',
    },
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      CatchClause(node) {
        /* Check if the `catch` block is empty */
        if (node.body.body.length === 0) {
          context.report({
            node: node.body,
            messageId: 'emptyCatchBlock',
            fix(fixer) {
              const catchToken = sourceCode.getTokenBefore(node.body);
              const closingBrace = sourceCode.getLastToken(node.body);

              /* Ensure valid tokens are found before applying fix */
              if (catchToken && closingBrace) {
                return fixer.removeRange([
                  catchToken.range[0],
                  closingBrace.range[1],
                ]);
              }

              return null; /* Graceful handling for edge cases */
            },
          });
        }
      },
    };
  },
};
