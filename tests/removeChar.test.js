const removeChar = require('../src/removeChar')

test('removeChar should remove the specified character from a string', () => {
    expect(removeChar('hello', 'l')).toBe('heo')
    expect(removeChar('hello', 'h')).toBe('ello')
    expect(removeChar('hello', 'z')).toBe('hello')
    expect(removeChar('hello, world', ',')).toBe('hello world')
})

test('removeChar should throw an error if the input is not a string', () => {
    expect(() => removeChar(123, 'l')).toThrow(new Error('string must be a string'))
    expect(() => removeChar('hello', 123)).toThrow(new Error('charToRemove must be a string'))
    expect(() => removeChar('hello', 'll')).toThrow(new Error('charToRemove must be a single character'))
})