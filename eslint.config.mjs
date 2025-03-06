import nxEslint from '@nx/eslint-plugin';
import jsoncEslintParser from 'jsonc-eslint-parser';

const { configs } = nxEslint;

export default [
  ...configs['flat/base'],
  ...configs['flat/typescript'],
  ...configs['flat/javascript'],
  {
    ignores: ['**/dist'],
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    rules: {
      '@nx/enforce-module-boundaries': [
        'error',
        {
          enforceBuildableLibDependency: true,
          allow: ['^.*/eslint(\\.base)?\\.config\\.[cm]?js$'],
          depConstraints: [
            {
              sourceTag: '*',
              onlyDependOnLibsWithTags: ['*'],
            },
          ],
        },
      ],
    },
  },
  {
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    // Override or add rules here
    rules: {},
  },
  {
    files: ['**/*.json'],
    rules: {
      /** HACK: Turned `off` dep check since its not always working and causing issues on lint fix */
      '@nx/dependency-checks': 'off',
    },
    languageOptions: {
      parser: jsoncEslintParser,
    },
  },
];
