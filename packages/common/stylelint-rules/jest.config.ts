/* eslint-disable */
export default {
  displayName: 'common-stylelint-rules-stylelint-rules',
  preset: '../../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory:
    '../../../coverage/packages/common/stylelint-rules/stylelint-rules',
};
