const customEslintRules = require('@coverse-tech/custom-eslint-rules');
const nodePlugin = require('eslint-plugin-n');
const jsdoc = require('eslint-plugin-jsdoc');
const babelParser = require('@babel/eslint-parser');
const jsoncPlugin = require('eslint-plugin-jsonc');
const eslintConfigPrettier = require('eslint-config-prettier');
const jestPlugin = require('eslint-plugin-jest');
const unusedImportsPlugin = require('eslint-plugin-unused-imports');
const stylisticPlugin = require('@stylistic/eslint-plugin-ts');
const tseslint = require('typescript-eslint');
const nxPlugin = require('@nx/eslint-plugin');
const importPlugin = require('eslint-plugin-import');
const eslint = require('@eslint/js');
const markdown = require('eslint-plugin-markdown');

module.exports = tseslint.config(
  ...nxPlugin.configs['flat/base'],
  ...nxPlugin.configs['flat/typescript'],
  ...nxPlugin.configs['flat/javascript'],
  {
    ignores: [
      '.env-cmdrc.json',
      '.commitlintrc.json',
      'package.json',
      'package-lock.json',
      'pnpm-lock.yaml',
      'project.json',
      'capacitor.*.ts',
      'storybook-static',
      'storybook',
      'documentation',
      'compodoc',
      'dist',
      'tmp',
      '**/.angular/*',
      '**/.vscode/*',
      'docs/**/*',
      'scripts/',
      'generators/',
      'junit/',
      'coverage-report/',
      'logs',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'node_modules/',
      '*.tsbuildinfo',
      '.npm',
      '.eslintcache',
      '.yarn-integrity',
      '.env',
      '.env.test',
      '.cache/',
      '.yarn',
      '.angular/',
      '.vscode/',
      '.stackblitz/',
      '.husky/',
      '.github/',
      '**/dist/*',
    ],
    rules: {
      curly: 'error',
      eqeqeq: 'error',
      'no-var': 'error',
      'no-irregular-whitespace': [
        'error',
        {
          skipTemplates: true,
        },
      ],
    },
  },
  eslintConfigPrettier,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.strictTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  ...tseslint.configs.stylisticTypeChecked.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  {
    files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
    rules: {},
  },
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.base.json'],
        sourceType: 'module',
        ecmaVersion: 'latest',
      },
    },
    plugins: {
      'unused-imports': unusedImportsPlugin,
      '@typescript-eslint': tseslint.plugin,
      import: importPlugin,
      jest: jestPlugin,
      n: nodePlugin,
      '@coverse-tech/custom-eslint-rules': customEslintRules,
      '@stylistic/ts': stylisticPlugin,
    },
    rules: {
      ...stylisticPlugin.configs['all-flat'].rules,
      ...nodePlugin.configs['flat/recommended-script'].rules,
      ...eslint.configs.recommended.rules,
      ...importPlugin.flatConfigs.recommended.rules,
      ...importPlugin.configs.errors.rules,
      ...importPlugin.configs.warnings.rules,
      '@stylistic/ts/object-curly-spacing': 'off',
      'n/no-missing-import': 'warn',
      'n/no-extraneous-import': 'warn',
      '@stylistic/ts/indent': 'off',
      '@stylistic/ts/quote-props': 'off',
      '@coverse-tech/custom-eslint-rules/empty-else': 'error',
      '@coverse-tech/custom-eslint-rules/empty-catch': 'error',
      '@coverse-tech/custom-eslint-rules/consecutive-comments': 'error',
      '@coverse-tech/custom-eslint-rules/empty-finally': 'error',
      'no-restricted-globals': [
        'error',
        'fit',
        'fdescribe',
        {
          name: 'window',
          message:
            "Avoid using the global `window` directly to ensure server-side rendering (SSR) compatibility. Instead, inject `WINDOW` into your class using `private _window = inject(WINDOW);`. Ensure you import `WINDOW` from '@ng-web-apis/common' with `import { WINDOW } from '@ng-web-apis/common';`.",
        },
        {
          name: 'document',
          message:
            "Avoid using the global `document` directly to ensure server-side rendering (SSR) compatibility. Instead, inject `DOCUMENT` into your class using `private _document = inject(DOCUMENT);`. Ensure you import `DOCUMENT` from '@angular/common' with `import { DOCUMENT } from '@angular/common';`.",
        },
        {
          name: 'navigator',
          message:
            "Avoid using the global `navigator` directly to ensure server-side rendering (SSR) compatibility. Instead, inject `NAVIGATOR` into your class using `private _navigator = inject(NAVIGATOR);`. Ensure you import `NAVIGATOR` from '@ng-web-apis/common' with `import { NAVIGATOR } from '@ng-web-apis/common';`.",
        },
      ],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@/no-throw-literal': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      curly: ['error'],
      eqeqeq: 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'import/no-absolute-path': ['error'],
      'import/no-useless-path-segments': ['error'],
      '@typescript-eslint/no-deprecated': 'warn',
      'no-debugger': 'warn',
      '@stylistic/ts/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: '*',
          next: ['for', 'while', 'export', 'if', 'return'],
        },
        {
          blankLine: 'always',
          prev: ['for', 'while', 'export', 'if', 'return'],
          next: '*',
        },
        {
          blankLine: 'always',
          prev: ['const', 'let', 'var'],
          next: ['multiline-expression'],
        },
        {
          blankLine: 'always',
          prev: ['multiline-expression'],
          next: ['*'],
        },
        {
          blankLine: 'always',
          prev: 'export',
          next: '*',
        },
        {
          blankLine: 'never',
          prev: 'export',
          next: 'export',
        },
        {
          blankLine: 'never',
          prev: 'case',
          next: 'case',
        },
        {
          blankLine: 'never',
          prev: 'const',
          next: 'const',
        },
      ],
      '@/max-len': [
        'error',
        {
          code: 170,
          ignoreUrls: true,
          ignorePattern: '^import .*',
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        },
      ],
      'max-params': ['off', 2],
      complexity: [
        'off',
        {
          max: 3,
        },
      ],
      'max-depth': ['error', 2],
      'no-extend-native': 'error',
      'no-magic-numbers': [
        'error',
        {
          ignore: [1, 0],
          ignoreArrayIndexes: true,
          enforceConst: true,
          detectObjects: false,
        },
      ],
      'prefer-destructuring': [
        'error',
        {
          object: true,
          array: true,
        },
      ],
      'default-param-last': 'error',
      camelcase: 'error',
      'prefer-const': 'error',
      'func-style': ['error', 'expression'],
      'id-length': [
        'error',
        {
          min: 3,
          exceptions: ['_', 'i', 'j', 'x', 'y', 'id', 'PI', 'to'],
        },
      ],
      'no-empty-function': 'off',
      'no-empty': [
        'error',
        {
          allowEmptyCatch: false,
        },
      ],
      'no-unused-vars': 'off',
      'no-async-promise-executor': 'error',
      'no-await-in-loop': 'error',
      'no-promise-executor-return': 'error',
      'require-atomic-updates': 'error',
      'max-nested-callbacks': ['error', 2],
      'prefer-promise-reject-errors': [
        'error',
        {
          allowEmptyReject: true,
        },
      ],
      'n/handle-callback-err': ['error', 'error'],
      'n/no-sync': [
        'error',
        {
          allowAtRootLevel: true,
        },
      ],
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-empty-object-type': [
        'warn',
        {
          allowInterfaces: 'with-single-extends',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-non-null-assertion': 'error',
      '@typescript-eslint/no-unsafe-function-type': 'error',
      '@typescript-eslint/no-wrapper-object-types': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        {
          allowExpressions: true,
          allowConciseArrowFunctionExpressionsStartingWithVoid: true,
        },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'constructors'],
        },
      ],
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/member-delimiter-style': [
        'off',
        {
          multiline: {
            delimiter: 'none',
            requireLast: true,
          },
          singleline: {
            delimiter: 'semi',
            requireLast: false,
          },
        },
      ],
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'objectLiteralProperty',
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'memberLike',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'classMethod',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'memberLike',
          modifiers: ['public', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'classMethod',
          modifiers: ['public', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          args: 'all',
        },
      ],
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-inferrable-types': [
        'off',
        {
          ignoreParameters: false,
          ignoreProperties: false,
        },
      ],
      '@typescript-eslint/no-shadow': [
        'error',
        {
          hoist: 'all',
        },
      ],

      '@typescript-eslint/triple-slash-reference': [
        'error',
        {
          lib: 'always',
          path: 'always',
          types: 'prefer-import',
        },
      ],
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          accessibility: 'explicit',
          overrides: {
            accessors: 'explicit',
            constructors: 'off',
            methods: 'explicit',
            properties: 'explicit',
            parameterProperties: 'explicit',
          },
        },
      ],
      '@typescript-eslint/member-ordering': [
        'error',
        {
          default: [
            'signature',
            'call-signature',
            'private-static-field',
            'protected-static-field',
            'public-static-field',
            'private-instance-field',
            'protected-instance-field',
            'public-instance-field',
            'protected-abstract-field',
            'public-abstract-field',
            'private-field',
            'protected-field',
            'public-field',
            'static-field',
            'instance-field',
            'abstract-field',
            'field',
            'private-constructor',
            'protected-constructor',
            'public-constructor',
            'constructor',
            ['public-static-get', 'public-static-set'],
            ['protected-static-get', 'protected-static-set'],
            ['private-static-get', 'private-static-set'],
            ['public-get', 'public-set'],
            ['protected-get', 'protected-set'],
            ['private-get', 'private-set'],
            ['get', 'set'],
            'public-static-method',
            'protected-static-method',
            'private-static-method',
            'public-instance-method',
            'protected-instance-method',
            'private-instance-method',
            'public-abstract-method',
            'protected-abstract-method',
            'public-method',
            'protected-method',
            'private-method',
            'static-method',
            'instance-method',
            'abstract-method',
            'method',
          ],
        },
      ],
      '@/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      '@stylistic/ts/lines-between-class-members': [
        'error',
        'always',
        {
          exceptAfterOverload: false,
          exceptAfterSingleLine: true,
        },
      ],
      'import/order': [
        'error',
        {
          alphabetize: {
            order: 'asc',
            caseInsensitive: false,
          },
          'newlines-between': 'always',
          groups: [
            'external',
            'builtin',
            'internal',
            ['parent', 'sibling', 'index'],
          ],
          pathGroupsExcludedImportTypes: [],
        },
      ],
      'no-irregular-whitespace': [
        'error',
        {
          skipTemplates: true,
        },
      ],
      'sort-imports': [
        'error',
        {
          ignoreCase: true,
          ignoreDeclarationSort: true,
        },
      ],
      'unused-imports/no-unused-imports': 'error',
      'import/first': 'error',
      'import/no-deprecated': 'off',
      'import/newline-after-import': 'error',
      'import/named': 'error',
      '@typescript-eslint/no-dynamic-delete': 'warn',
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      'import/no-unresolved': ['error'],
      'no-restricted-imports': [
        'error',
        {
          paths: [
            '@example/example-library',
            {
              name: 'lodash',
              message:
                'Do not import `lodash` directly. Use "lodash-es" package instead',
            },
            {
              name: 'lodash-es',
              importNames: ['isEqual'],
              message:
                'Do not use `isEqual` from `lodash-es`. Use `fast-deep-equal` package instead',
            },
          ],
        },
      ],
      '@typescript-eslint/ban-ts-comment': [
        'error',
        {
          'ts-expect-error': 'allow-with-description',
          'ts-ignore': true,
          'ts-nocheck': true,
          'ts-check': false,
          minimumDescriptionLength: 3,
        },
      ],
      'no-var': 'error',
    },
    settings: {
      'import/extensions': ['.js', '.jsx', '.tsx', '.ts'],
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.base.json',
        },
      },
    },
  },
  {
    files: ['*.spec.ts'],
    rules: {
      'max-nested-callbacks': 'off',
      'no-magic-numbers': 'off',
      'func-style': 'off',
      'id-length': 'off',
      'prefer-destructuring': 'off',
    },
  },
  {
    files: ['*.entity.ts'],
    rules: {
      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'objectLiteralProperty',
          format: null,
          modifiers: ['requiresQuotes'],
        },
        {
          selector: 'classMethod',
          modifiers: ['private'],
          format: ['camelCase'],
          leadingUnderscore: 'require',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'memberLike',
          modifiers: ['public', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
        {
          selector: 'classMethod',
          modifiers: ['public', 'protected'],
          format: ['camelCase'],
          leadingUnderscore: 'forbid',
          trailingUnderscore: 'forbid',
        },
      ],
    },
  },
  {
    files: ['*.module.ts'],
    rules: {
      '@/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [],
        },
      ],
      'import/first': 'error',
      'import/no-deprecated': 'off',
      'import/newline-after-import': 'error',
      'import/no-unresolved': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      'import/named': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-var': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.json', '**/*.jsonc'],
    plugins: {
      jsonc: jsoncPlugin,
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
      ...jsoncPlugin.configs['recommended-with-json'].rules,
      '@/no-multiple-empty-lines': [
        'error',
        {
          max: 0,
        },
      ],
    },
    languageOptions: {
      parser: require('jsonc-eslint-parser'),
    },
  },
  {
    files: ['**/*.js', '**/*.mjs'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        allowImportExportEverywhere: true,
        requireConfigFile: false,
      },
    },
    plugins: {
      jsdoc,
    },
    rules: {
      ...jsdoc.configs['flat/recommended'].rules,
      ...tseslint.configs.disableTypeChecked.rules,
      'no-undef': 0,
    },
  },
  {
    files: ['test/**'],
    ...jestPlugin.configs['flat/recommended'],
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
);
