const makeStringNumbered = require('../src/makeStringNumbered')

test('makeStringNumbered should add a number before each word', () => {
    expect(makeStringNumbered('hello world')).toBe('1. hello\n2. world')
    expect(makeStringNumbered('hello world, how are you doing?')).toBe('1. hello\n2. world,\n3. how\n4. are\n5. you\n6. doing?')
    expect(makeStringNumbered('hello')).toBe('1. hello')

})

test('makeStringNumbered should throw an error if the input is not a string', () => {
    expect(() => makeStringNumbered(123)).toThrow(new Error('Input must be a string'))
})