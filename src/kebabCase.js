const removeSpecialChars = require('./removeSpecialChars')

function kebabCase(string) {
    if (typeof string !== 'string') {
        throw new Error('Input must be a string')
    }
    string = removeSpecialChars(string)
    return string.replace(/\s/g, '-').toLowerCase()
}

module.exports = kebabCase;