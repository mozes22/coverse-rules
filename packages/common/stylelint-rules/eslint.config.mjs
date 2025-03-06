import * as baseConfig from '../../../eslint.config.mjs';
import jsoncEslintParser from 'jsonc-eslint-parser';

export default [
  ...baseConfig.default,
  {
    files: ['**/*.json'],
    rules: {
      /** HACK: Turned `off` dep check since its not always working and causing issues on lint fix */
      '@nx/dependency-checks': [
        'off',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
];
