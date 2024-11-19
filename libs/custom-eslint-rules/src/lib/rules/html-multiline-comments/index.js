const htmlparser = require('htmlparser2');

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Only allow specific single-line comments in HTML files.',
      category: 'Stylistic Issues',
      recommended: false,
    },
    fixable: 'code',
    schema: [],
    messages: {
      multilineCommentNotAllowed:
        'Multiline comments are not allowed. Use single-line comments instead.',
    },
  },

  create(context) {
    return {
      Program(node) {
        const sourceCode = context.getSourceCode();
        const text = sourceCode.getText();
        const comments = [];
        const parser = new htmlparser.Parser(
          {
            oncomment(data) {
              const startIndex = parser.startIndex;
              const endIndex = parser.endIndex + 1;
              const lines = data.split('\n').length;

              comments.push({
                value: data,
                range: [startIndex, endIndex],
                lines,
                loc: {
                  start: sourceCode.getLocFromIndex(startIndex),
                  end: sourceCode.getLocFromIndex(endIndex),
                },
              });
            },
          },
          { decodeEntities: true }
        );

        parser.write(text);
        parser.end();

        comments.forEach((comment) => {
          // Limit comments to single line
          if (comment.lines > 1) {
            context.report({
              node,
              loc: comment.loc,
              messageId: 'multilineCommentNotAllowed',
              fix(fixer) {
                return fixer.removeRange(comment.range);
              },
            });
          }
        });
      },
    };
  },
};
