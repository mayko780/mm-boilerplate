const micromatch = require('micromatch')
const prettier = require('prettier')

const prettierSupportedExtensions = prettier
  .getSupportInfo()
  .languages.map(({ extensions }) => extensions)
  .flat()
const addQuotes = (a) => `"${a}"`

module.exports = (stagedFiles) => {
  const linter = []

  const codeFiles = micromatch(stagedFiles, [
    '**/*.js',
    '**/*.jsx',
    '**/*.ts',
    '**/*.tsx',
  ])
  if (codeFiles.length > 0) {
    linter.push(`eslint --fix ${codeFiles.join(' ')}`)
  }

  const prettierFiles = micromatch(
    stagedFiles,
    prettierSupportedExtensions.map((extension) => `**/*${extension}`)
  )
  if (prettierFiles.length > 0) {
    linter.push(`prettier --write ${prettierFiles.map(addQuotes).join(' ')}`)
  }

  return linter
}
