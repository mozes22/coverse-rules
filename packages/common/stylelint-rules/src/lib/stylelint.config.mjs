/** @type {import('stylelint').Config} */

// Import modular rule files
import colors from './rules/colors';
import order from './rules/order';
import scss from './rules/scss';
import naming from './rules/naming';
import functions from './rules/functions';
import others from './rules/others';

// Merge all rule groups (later groups override earlier ones)
const finalRules = {
  ...colors,
  ...order,
  ...scss,
  ...naming,
  ...functions,
  ...others,
};

const config = {
  // Set configBasedir so module resolution (if needed) starts at the consumer's root.
  // NOT REQUIRED !
  // configBasedir: process.cwd(),

  // Listing extends for documentation; actual rule definitions have been merged.
  extends: [
    'stylelint-config-html',
    'stylelint-config-tailwindcss',
    'stylelint-config-standard-scss',
    'stylelint-config-prettier-scss',
    'stylelint-config-standard',
  ],
  // Include the actual plugin modules so that the rule definitions are available.
  plugins: ['stylelint-scss', 'stylelint-order'],
  // Final merged rules from all modules.
  rules: finalRules,
};

export default config;
