module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description:
        'Allow up to two consecutive full-line comment lines and remove any additional ones, with exceptions for certain formats.',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'whitespace',
    schema: [],
    messages: {
      tooManyConsecutiveComments:
        'More than two consecutive comments are not allowed.',
    },
  },

  create(context) {
    const sourceCode = context.sourceCode ?? context.getSourceCode();

    return {
      Program() {
        const comments = sourceCode.getAllComments();

        /* Identify full-line comments */
        const fullLineComments = comments.filter((comment) => {
          if (comment.type !== 'Line') return false;
          const commentLine = comment.loc.start.line;
          const tokenBefore = sourceCode.getTokenBefore(comment, {
            includeComments: true,
          });
          return !tokenBefore || tokenBefore.loc.end.line < commentLine;
        });

        const prefixes = ['TODO', '?', '!', '*', '#'];

        /* Helper to check if a comment is excluded */
        const isExcludedComment = (comment) =>
          prefixes.some((prefix) => comment.value.trim().startsWith(prefix));

        /* Filter comments, ignoring excluded ones */
        const filteredComments = fullLineComments.filter(
          (comment) => !isExcludedComment(comment)
        );

        /* Process filtered comments */
        filteredComments.forEach((comment, index) => {
          const prevComment = filteredComments[index - 1];
          const nextComment = filteredComments[index + 1];
          const nextNextComment = filteredComments[index + 2];

          const isPartOfTwoLineGroup =
            nextComment &&
            nextComment.loc.start.line === comment.loc.start.line + 1 &&
            (!nextNextComment ||
              nextNextComment.loc.start.line !==
              nextComment.loc.start.line + 1);

          const isSurroundedByGroup =
            prevComment &&
            prevComment.loc.start.line === comment.loc.start.line - 1 &&
            (!nextComment ||
              nextComment.loc.start.line !== comment.loc.start.line + 1);

          /* Allow up to two consecutive comments */
          if (isPartOfTwoLineGroup || isSurroundedByGroup) {
            return;
          }

          /* Report and fix any comment exceeding two consecutive lines */
          context.report({
            node: comment,
            messageId: 'tooManyConsecutiveComments',
            fix(fixer) {
              return fixer.removeRange(comment.range);
            },
          });
        });
      },
    };
  },
};
