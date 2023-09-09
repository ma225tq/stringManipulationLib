function titleCase(string) {
    if (typeof string !== 'string') {
        throw new Error('Input must be a string')
    }
    return string.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
} 

module.exports = titleCase