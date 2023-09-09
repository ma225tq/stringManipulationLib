function removeWhiteSpaces(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string')
  }
  return string.replace(/\s/g, '')
}

module.exports = removeWhiteSpaces
