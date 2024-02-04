const path = require('path')

const buildEslintCommand = filenames =>
  `node_modules/.bin/eslint --fix ${filenames.map(f => path.relative(process.cwd(), f)).join(' ')}`

module.exports = {
  '**/*.{js,ts,tsx}': [buildEslintCommand],
  '**/*.{js,ts,tsx,json}': 'yarn prettier:fix'
}
