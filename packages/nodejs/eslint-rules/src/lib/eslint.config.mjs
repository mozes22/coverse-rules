import eslintPkg from 'eslint';
import nodePluginPkg from 'eslint-plugin-n';
import jsdocPluginPkg from 'eslint-plugin-jsdoc';
import babelParser from '@babel/eslint-parser';
import jsoncPluginPkg from 'eslint-plugin-jsonc';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPluginPkg from 'eslint-plugin-jest';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import stylisticPluginPkg from '@stylistic/eslint-plugin-ts';
import typescriptEslintPkg from 'typescript-eslint';
import nxEslintPluginPkg from '@nx/eslint-plugin';
import importPluginPkg from 'eslint-plugin-import-x';
import eslintJsPkg from '@eslint/js';
import markdown from 'eslint-plugin-markdown';
import mdxPluginPkg from 'eslint-plugin-mdx';
import { fileURLToPath } from 'url';
import path from 'path';
import jsonParser from 'jsonc-eslint-parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { configs: ________configs } = eslintJsPkg;
const { flatConfigs, configs: _______configs } = importPluginPkg;
const { configs: ______configs } = nxEslintPluginPkg;
const {
  config: _config,
  configs: _____configs,
  parser: _parser,
  plugin,
} = typescriptEslintPkg;
const { configs: ____configs } = stylisticPluginPkg;
const { configs: ___configs, environments } = jestPluginPkg;
const { configs: __configs } = jsoncPluginPkg;
const { configs: _configs } = jsdocPluginPkg;
const { configs } = nodePluginPkg;
const { Linter } = eslintPkg;
const { flat, createRemarkProcessor, flatCodeBlocks } = mdxPluginPkg;

/** @type {Linter.Config} */
const config = _config(
  {
    settings: {
      'import-x/resolver-next': [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
          project: './tsconfig.*?.json',
        }),
      ],
    },
  },
  ...______configs['flat/base'],
  ...______configs['flat/typescript'],
  ...______configs['flat/javascript'],
  {
    ignores: [
      'eslint.config.js',
      'eslint.config.mjs',
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
      '**/node_modules',
      '*.tsbuildinfo',
      '.npm',
      '.eslintcache',
      '.yarn-integrity',
      '.env',
      '.env.test',
      '.cache/',
      '.yarn',
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
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
        },
      ],
      '@typescript-eslint/no-empty-function': [
        'error',
        {
          allow: ['arrowFunctions', 'constructors'],
        },
      ],
    },
  },
  eslintConfigPrettier,
  ..._____configs.strict.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  _____configs.eslintRecommended,
  ..._____configs.stylistic.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  flatConfigs.typescript,
  {
    files: ['**/*.ts'],
    languageOptions: {
      parser: _parser,
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
      '@typescript-eslint': plugin,
      'import-x': importPluginPkg,
      n: nodePluginPkg,
      '@stylistic/ts': stylisticPluginPkg,
    },
    rules: {
      ...____configs['all'].rules,
      ...configs['flat/recommended-script'].rules,
      ...________configs.recommended.rules,
      ...flatConfigs.recommended.rules,
      ..._______configs.errors.rules,
      ..._______configs.warnings.rules,
      '@stylistic/ts/no-extra-parens': 'off',
      '@stylistic/ts/object-curly-spacing': 'off',
      '@stylistic/ts/indent': 'off',
      '@stylistic/ts/quote-props': 'off',
      '@stylistic/ts/space-before-function-paren': 'off',
      '@stylistic/ts/brace-style': 'off',
      '@stylistic/ts/object-property-newline': 'off',
      'n/no-extraneous-import': 'warn',
      'n/no-missing-import': 'off',
      'n/no-unsupported-features/es-builtins': [
        'warn',
        {
          ignores: [],
        },
      ],
      'n/no-unsupported-features/es-syntax': [
        'warn',
        {
          ignores: [],
        },
      ],
      'n/no-unsupported-features/node-builtins': [
        'warn',
        {
          ignores: [],
        },
      ],
      'no-restricted-globals': ['error', 'fit', 'fdescribe'],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@/no-throw-literal': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
      curly: ['error'],
      eqeqeq: 'error',
      'grouped-accessor-pairs': ['error', 'getBeforeSet'],
      'import-x/no-absolute-path': ['error'],
      'import-x/no-useless-path-segments': ['error'],
      '@typescript-eslint/no-deprecated': 'warn',
      'no-debugger': 'warn',
      '@stylistic/ts/lines-around-comment': 'off',
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
          exceptions: [
            '_',
            'i',
            'j',
            'x',
            'y',
            'id',
            'PI',
            'to',
            'in',
            'lt',
            'fs',
            'OR',
          ],
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
      'no-unused-expressions': 'off',
      'no-shadow': 'off',
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
      '@stylistic/ts/member-delimiter-style': [
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
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
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
      'import-x/order': [
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
      'import-x/first': 'error',
      'import-x/no-deprecated': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/named': 'error',
      '@typescript-eslint/no-dynamic-delete': 'warn',
      '@typescript-eslint/no-extraneous-class': 'warn',
      '@typescript-eslint/no-invalid-void-type': 'warn',
      '@typescript-eslint/prefer-literal-enum-member': 'warn',
      'import-x/no-unresolved': 'warn',
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
      node: {
        version: '>=22.0.0',
      },
    },
  },
  {
    files: ['**/*.spec.ts', '**/*.spec.js', '**/*.spec.js', '**/*.test.js'],
    ...___configs['flat/recommended'],
    plugins: { jest: jestPluginPkg },
    languageOptions: {
      globals: environments.globals.globals,
    },
    rules: {
      'max-nested-callbacks': 'off',
      'no-magic-numbers': 'off',
      'func-style': 'off',
      'id-length': 'off',
      'prefer-destructuring': 'off',
      'jest/no-disabled-tests': 1,
      'jest/no-focused-tests': 2,
      'jest/no-identical-title': 2,
      'jest/prefer-to-have-length': 1,
      'jest/valid-expect': 2,
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
      'import-x/order': [
        'error',
        {
          'newlines-between': 'always',
          groups: ['external', 'internal', ['parent', 'sibling', 'index']],
          pathGroups: [],
        },
      ],
      'import-x/first': 'error',
      'import-x/no-deprecated': 'off',
      'import-x/newline-after-import': 'error',
      'import-x/no-unresolved': 'off',
      '@typescript-eslint/no-deprecated': 'warn',
      'import-x/named': 'error',
      'unused-imports/no-unused-imports': 'error',
      'no-var': 'error',
      '@stylistic/ts/comma-dangle': ['error', 'always-multiline'],
    },
  },
  {
    files: ['**/*.json', '**/*.jsonc'],
    plugins: {
      jsonc: jsoncPluginPkg,
    },
    rules: {
      '@nx/dependency-checks': [
        'error',
        {
          ignoredFiles: ['{projectRoot}/eslint.config.{js,cjs,mjs}'],
        },
      ],
      ...__configs['flat/recommended-with-jsonc'].rules,
      '@/no-multiple-empty-lines': [
        'error',
        {
          max: 0,
        },
      ],
    },
    languageOptions: {
      parser: jsonParser,
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
      jsdoc: jsdocPluginPkg,
    },
    rules: {
      ..._configs['flat/recommended'].rules,
      ..._____configs.disableTypeChecked.rules,
      'no-undef': 0,
    },
  },
  {
    files: ['**/*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    ...flat,
    processor: createRemarkProcessor({
      lintCodeBlocks: true,
    }),
  },
  {
    ...flatCodeBlocks,
    rules: {
      ...flatCodeBlocks.rules,
      'no-var': 'error',
      'prefer-const': 'error',
    },
  },
);

export default config;
