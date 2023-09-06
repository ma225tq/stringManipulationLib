const lineBreakAfterEachWord = require('../src/lineBreakAfterEachWord')


test('lineBreakAfterEachWord should add a line break after each word', () => {
    expect(lineBreakAfterEachWord('hello world')).toBe('hello\nworld')
    expect(lineBreakAfterEachWord('hello world, how are you doing?')).toBe('hello\nworld,\nhow\nare\nyou\ndoing?')
    expect(lineBreakAfterEachWord('hello')).toBe('hello')

})

test('lineBreakAfterEachWord should throw an error if the input is not a string', () => {
    expect(() => lineBreakAfterEachWord(123)).toThrow(new Error('Input must be a string'))
})