const removeSpecialChars = require('./removeSpecialChars')

function snakeCase(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string')
  }
  string = removeSpecialChars(string)
  return string.replace(/\s/g, '_').toLowerCase()
}

module.exports = snakeCase
