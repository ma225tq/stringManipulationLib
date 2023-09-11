function replaceChar(string, charsToReplace, newChar) {
    if (typeof string !== 'string') {
        throw new Error('string must be a string')
    }

    if (!Array.isArray(charsToReplace)) {
        throw new Error('charsToReplace must be an array');
    }

    if (charsToReplace.length === 0) {
        throw new Error('charsToReplace must not be empty');
    }


    for (let i = 0; i < charsToReplace.length; i++) {
        if (typeof charsToReplace[i] !== 'string') {
            throw new Error('charsToReplace must be an array of strings only')
        }
    }

    if (typeof newChar !== 'string') {
        throw new Error('newChar must be a string')
    }

    if (newChar.length !== 1) {
        throw new Error('newChar must be a single character')
    }

    let manipulatedString = ''

    for (let i = 0; i < string.length; i++) {
        if (charsToReplace.includes(string[i])) {
            manipulatedString += newChar;
        } else {
            manipulatedString += string[i];
        }
    }

    return manipulatedString;
}

module.exports = replaceChar;
