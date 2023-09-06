const truncate = require('../src/truncate')

test('truncate should truncate a string to the given length', () => {
    expect(truncate('hello', 3)).toBe('hel...')
    expect(truncate('hello', 5)).toBe('hello...')
    expect(truncate('hello', 10)).toBe('hello...')
    expect(truncate('hello world', 7)).toBe('hello w...')
})

test('truncate should throw an error if the input is not a string', () => {
    expect(() => truncate(123, 1)).toThrow(new Error('Input must be a string'))
})