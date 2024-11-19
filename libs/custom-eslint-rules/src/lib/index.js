const path = require('path');

module.exports = {
  rules: {
    'consecutive-comments': require(path.resolve(
      __dirname,
      './rules/consecutive-comments'
    )),
    'empty-catch': require(path.resolve(__dirname, './rules/empty-catch')),
    'empty-else': require(path.resolve(__dirname, './rules/empty-else')),
    'empty-finally': require(path.resolve(__dirname, './rules/empty-finally')),
    'html-multiline-comments': require(path.resolve(
      __dirname,
      './rules/html-multiline-comments'
    )),
  },
};
