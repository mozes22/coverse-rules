import eslint from 'eslint';
import nodePlugin from 'eslint-plugin-n';
import jsDocPkg from 'eslint-plugin-jsdoc';
import babelParser from '@babel/eslint-parser';
import jsoncPlugin from 'eslint-plugin-jsonc';
import eslintConfigPrettier from 'eslint-config-prettier';
import jestPlugin from 'eslint-plugin-jest';
import angularEslint from 'angular-eslint';
import rxjsPlugin from 'eslint-plugin-rxjs-x';
import unusedImportsPlugin from 'eslint-plugin-unused-imports';
import stylisticPlugin from '@stylistic/eslint-plugin-ts';
import typescriptEslint from 'typescript-eslint';
import tailwindcssPlugin from 'eslint-plugin-tailwindcss';
import nxEslintPlugin from '@nx/eslint-plugin';
import importPlugin from 'eslint-plugin-import-x';
import eslintJs from '@eslint/js';
import markdown from 'eslint-plugin-markdown';
import eslintPluginMdx from 'eslint-plugin-mdx';
import { fileURLToPath } from 'url';
import path from 'path';
import jsonParser from 'jsonc-eslint-parser';
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const { configs: _configs } = jsDocPkg;
const { configs: __configs } = jsoncPlugin;
const { configs: ___configs, environments } = jestPlugin;
const { configs: ____configs, processInlineTemplates } = angularEslint;
const { configs: _____configs } = rxjsPlugin;
const { configs: ______configs } = stylisticPlugin;
const {
  config: _config,
  configs: _______configs,
  parser: _parser,
  plugin,
} = typescriptEslint;
const { configs: ________configs } = tailwindcssPlugin;
const { configs: _________configs } = nxEslintPlugin;
const { flatConfigs, configs: __________configs } = importPlugin;
const { configs: ___________configs } = eslintJs;
const { flat, createRemarkProcessor, flatCodeBlocks } = eslintPluginMdx;
const { configs } = nodePlugin;
const { Linter } = eslint;

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
  ..._________configs['flat/base'],
  ..._________configs['flat/typescript'],
  ..._________configs['flat/javascript'],
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
      '**/node_modules',
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
  ..._______configs.strict.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  _______configs.eslintRecommended,
  ..._______configs.stylistic.map((config) => ({
    ...config,
    files: ['**/*.ts'],
  })),
  ...____configs.tsRecommended,
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
    processor: processInlineTemplates,
    plugins: {
      'unused-imports': unusedImportsPlugin,
      '@typescript-eslint': plugin,
      n: nodePlugin,
      '@stylistic/ts': stylisticPlugin,
      'rxjs-x': rxjsPlugin,
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...________configs['flat/recommended'].rules,
      ..._____configs.recommended.rules,
      ...______configs['all'].rules,
      ...configs['flat/recommended-script'].rules,
      ...___________configs.recommended.rules,
      ...flatConfigs.recommended.rules,
      ...__________configs.errors.rules,
      ...__________configs.warnings.rules,
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
      '@angular-eslint/prefer-standalone': 2,
      '@angular-eslint/prefer-on-push-component-change-detection': 1,
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
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
      'rxjs-x/no-unsafe-takeuntil': [
        'error',
        {
          allow: [
            'count',
            'defaultIfEmpty',
            'endWith',
            'every',
            'finalize',
            'finally',
            'isEmpty',
            'last',
            'max',
            'min',
            'publish',
            'publishBehavior',
            'publishLast',
            'publishReplay',
            'reduce',
            'share',
            'shareReplay',
            'skipLast',
            'takeLast',
            'throwIfEmpty',
            'toArray',
          ],
        },
      ],
      '@angular-eslint/component-class-suffix': [
        'error',
        {
          suffixes: ['Page', 'Component', 'Element', 'Layout'],
        },
      ],
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
      '@angular-eslint/no-input-rename': 'warn',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        {
          ignoredMethodNames: [
            'ngOnInit',
            'ngOnChanges',
            'ngAfterViewInit',
            'ngDoCheck',
            'ngAfterContentInit',
            'ngAfterContentChecked',
            'ngAfterViewChecked',
            'ngOnDestroy',
          ],
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
            'rxjs-x/Rx',
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
    plugins: { jest: jestPlugin },
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
    files: ['*.html'],
    plugins: {
      tailwindcss: tailwindcssPlugin,
    },
    rules: {
      ...____configs.templateRecommended.rules,
      ...____configs.templateAccessibility.rules,
      ...________configs['flat/recommended'].rules,
      'tailwindcss/classnames-order': 'warn',
      'tailwindcss/no-custom-classname': 'off',
      'max-lines': ['error', 500],
      '@angular-eslint/template/prefer-self-closing-tags': 2,
      '@angular-eslint/template/prefer-ngsrc': 2,
      '@angular-eslint/template/prefer-control-flow': 2,
    },
  },
  {
    files: ['*.component.html'],
    rules: {
      ...____configs.templateRecommended.rules,
      ...____configs.templateAccessibility.rules,
      '@/max-len': [
        'error',
        {
          code: 170,
          ignoreUrls: true,
          ignorePattern: 'd="([\\s\\S]*?)"',
        },
      ],
      '@/no-multiple-empty-lines': [
        'error',
        {
          max: 1,
        },
      ],
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
      jsdoc: jsDocPkg,
    },
    rules: {
      ..._configs['flat/recommended'].rules,
      ..._______configs.disableTypeChecked.rules,
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
