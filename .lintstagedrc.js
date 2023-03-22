const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

module.exports = {
  'src/**/*.{ts,tsx,js,jsx}': [buildEslintCommand, 'prettier --write'],
  'pages/**/*.{ts,tsx,js,jsx}': [buildEslintCommand, 'prettier --write']
};
