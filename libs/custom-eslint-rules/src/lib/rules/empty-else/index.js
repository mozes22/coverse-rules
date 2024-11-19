module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow and remove empty else blocks.',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      emptyElseBlock: 'Empty else block is not allowed.',
    },
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      IfStatement(node) {
        const { alternate } = node;

        /* Check if an `else` block exists and is empty */
        if (
          alternate &&
          alternate.type === 'BlockStatement' &&
          alternate.body.length === 0
        ) {
          const elseToken = sourceCode.getTokenBefore(alternate);
          const closingBrace = sourceCode.getLastToken(alternate);

          /* Report the issue and provide a fix */
          context.report({
            node: alternate,
            messageId: 'emptyElseBlock',
            fix(fixer) {
              if (elseToken && closingBrace) {
                return fixer.removeRange([
                  elseToken.range[0],
                  closingBrace.range[1],
                ]);
              }
              return null; /* Handle edge cases where tokens might be undefined */
            },
          });
        }
      },
    };
  },
};
