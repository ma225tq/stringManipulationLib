const titleCase = require('../src/titleCase')

test('titleCase should capitalize the first letter of each word', () => {
    expect(titleCase('hello world')).toBe('Hello World')
    expect(titleCase('hello world, how are you doing?')).toBe('Hello World, How Are You Doing?')
    expect(titleCase('hello')).toBe('Hello')
    expect(titleCase('And but or nor for so yet if since until when where while a an the about above after along among as at below but by down for from in into like near of off on onto out over past round since till to under up upon with')).toBe('And but or nor for so yet if since until when where while a an the about above after along among as at below but by down for from in into like near of off on onto out over past round since till to under up upon with')
})

test('titleCase should throw an error if the input is not a string', () => {
    expect(() => titleCase(123)).toThrow(new Error('Input must be a string'))
})