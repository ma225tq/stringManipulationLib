const removeSpecialChars = require('./removeSpecialChars')

function camelCase(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string')
  }
  string = removeSpecialChars(string)
  return string
    .split(' ')
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase()
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    })
    .join('')
}
module.exports = camelCase
