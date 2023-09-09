const countWords = require('../src/countWords')

test('countWords should count the number of words in a string', () => {
    expect(countWords('hello world')).toBe(2)
    expect(countWords('hello world, how are you doing?')).toBe(6)
    expect(countWords('hello')).toBe(1)
})

test('countWords should throw an error if the input is not a string', () => {
    expect(() => countWords(123)).toThrow(new Error('Input must be a string'))
})