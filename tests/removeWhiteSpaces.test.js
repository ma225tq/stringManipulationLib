const removeWhiteSpaces = require('../src/removeWhiteSpaces')

test('removeWhiteSpaces should remove all white spaces from a string', () => {
    expect(removeWhiteSpaces('hello world')).toBe('helloworld')
    expect(removeWhiteSpaces('hello world 123')).toBe('helloworld123')
    expect(removeWhiteSpaces('hello world 123 !')).toBe('helloworld123!')
})

test('removeWhiteSpaces should throw an error if the input is not a string', () => {
    expect(() => removeWhiteSpaces(123)).toThrow(new Error('Input must be a string'))
})