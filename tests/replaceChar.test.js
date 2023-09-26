const replaceChar = require('../src/replaceChar')

test('replaceChar should replace a character in a string', () => {
    expect(replaceChar('hello', 'o', 'z')).toBe('hellz')
    expect(replaceChar('hello', 'h', 'H')).toBe('Hello')
    expect(replaceChar('hello, world', ',', '.')).toBe('hello. world')
})