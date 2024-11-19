module.exports = {
  meta: {
    type: 'problem',
    docs: {
      description: 'Disallow empty finally blocks',
      category: 'Best Practices',
      recommended: true,
    },
    fixable: 'code',
    schema: [],
    messages: {
      emptyFinally: 'Empty finally block is not allowed.',
    },
  },

  create(context) {
    const sourceCode = context.getSourceCode();

    return {
      TryStatement(node) {
        const { finalizer } = node;

        /* Check if the `finally` block exists and is empty */
        if (finalizer && finalizer.body.length === 0) {
          const finallyToken = sourceCode.getTokenBefore(finalizer);
          const closingBrace = sourceCode.getLastToken(finalizer);

          /* Report the issue and provide a fix */
          context.report({
            node: finalizer,
            messageId: 'emptyFinally',
            fix(fixer) {
              if (finallyToken && closingBrace) {
                return fixer.removeRange([
                  finallyToken.range[0],
                  closingBrace.range[1],
                ]);
              }
              return null;
            },
          });
        }
      },
    };
  },
};
