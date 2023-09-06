function lineBreakAfterEachWord(string) {
    if (typeof string !== 'string') {
        throw new Error('Input must be a string')
    }
    return string.split(' ').join('\n');
}

module.exports = lineBreakAfterEachWord;