/** @type {import('stylelint').Config['rules']} */
const scssRules = {
    'scss/at-mixin-argumentless-call-parentheses': 'always',
    'scss/at-rule-no-unknown': null,
    'scss/dollar-variable-pattern': null,
    'scss/selector-no-redundant-nesting-selector': true,
    'scss/dollar-variable-empty-line-before': [
        'always',
        { ignore: ['after-comment'] },
    ],
};

export default scssRules;
