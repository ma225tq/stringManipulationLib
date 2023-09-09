function removeSpecialChars(string) {
    if (typeof string !== 'string') {
        throw new Error('Input must be a string')
    }
    return string.replace(/[^\w\s]/gi, '')
}

module.exports = removeSpecialChars;