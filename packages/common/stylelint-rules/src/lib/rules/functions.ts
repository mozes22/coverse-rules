/** @type {import('stylelint').Config['rules']} */
const functionRules = {
    'function-no-unknown': [
        true,
        {
            ignoreFunctions: [
                'map-get',
                'map-merge',
                'light-dark',
                'linear',
                'xywh',
                'fade',
                'fadeout',
                'tint',
                'darken',
                'ceil',
                'fadein',
                'floor',
                'unit',
                'shade',
                'lighten',
                'percentage',
                'theme',
            ],
        },
    ],
    'number-max-precision': 8,
    'alpha-value-notation': 'number',
};

export default functionRules;
