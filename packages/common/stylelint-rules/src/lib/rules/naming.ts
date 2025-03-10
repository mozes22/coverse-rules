/** @type {import('stylelint').Config['rules']} */
const namingRules = {
    'keyframes-name-pattern': [
        '^[a-z]+(-[a-z]+)*$|^[a-z]+([A-Z][a-z]+)*$',
        {
            message: 'Keyframe names should be in kebab-case or camelCase',
        },
    ],
    'selector-id-pattern': [
        '^[a-z]+[a-z0-9-_]*$',
        {
            message: 'Expected id selector to meet the BEM naming convention',
        },
    ],
    'selector-class-pattern': [
        '^[a-z]+([a-z0-9-_]+[a-z0-9]+)?([_-]+[a-z0-9]+([a-z0-9-_]+[a-z0-9]+)*)?([_-]+[a-z0-9]+([a-z0-9-_]+[a-z0-9]+)*)?$',
        {
            message: 'Expected class selector to meet the BEM naming convention',
        },
    ],
    'custom-property-pattern': null,
};

export default namingRules;
