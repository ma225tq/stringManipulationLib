const numberedList = require('../src/numberedList')

test('numberedList should add a number before each word', () => {
    expect(numberedList('hello world')).toBe('1. hello\n2. world')
    expect(numberedList('hello world, how are you doing?')).toBe('1. hello\n2. world,\n3. how\n4. are\n5. you\n6. doing?')
    expect(numberedList('hello')).toBe('1. hello')

})

test('numberedList should throw an error if the input is not a string', () => {
    expect(() => numberedList(123)).toThrow(new Error('Input must be a string'))
})