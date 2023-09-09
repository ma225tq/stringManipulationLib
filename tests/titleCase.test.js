const titleCase = require('../src/titleCase')

test('titleCase should capitalize the first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World')
    expect(titleCase('hello world, how are you doing?')).toBe('Hello World, How Are You Doing?')
    expect(titleCase('hello')).toBe('Hello')
})

test('titleCase should throw an error if the input is not a string', () => {
    expect(() => titleCase(123)).toThrow(new Error('Input must be a string'))
})