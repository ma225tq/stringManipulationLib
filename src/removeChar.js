function removeChar(string, charToRemove) {
    if (typeof string !== 'string') {
        throw new Error('string must be a string')
      }
    if (typeof charToRemove !== 'string') {
        throw new Error('charToRemove must be a string')
      }
    if (charToRemove.length !== 1) {
        throw new Error('charToRemove must be a single character')
      }

    let manipulatedString = ''

    for (let i = 0; i < string.length; i++) {
        if (string[i] !== charToRemove) {
            manipulatedString = manipulatedString.concat(string[i])
        }
    }

    return manipulatedString

}

module.exports = removeChar