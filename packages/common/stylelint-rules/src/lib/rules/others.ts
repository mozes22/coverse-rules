/** @type {import('stylelint').Config['rules']} */
const extrasRules = {
    'at-rule-no-unknown': null,
    'declaration-property-unit-allowed-list': null,
    'declaration-property-value-no-unknown': null,
    'no-empty-source': null,
    'import-notation': null,
    'no-invalid-position-at-import-rule': null,
    'no-descending-specificity': null,
    'declaration-empty-line-before': null,
    'at-rule-empty-line-before': null,
    'selector-pseudo-element-no-unknown': [
        true,
        { ignorePseudoElements: ['ng-deep', '/^input-/'] },
    ],
};

export default extrasRules;
