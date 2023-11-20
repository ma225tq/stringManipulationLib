# String Manipulation

*String Manipulation* (name change incoming) is a lightweight library for some common string manipulation tasks.

I am yet to publish it to npm so it's used by downloading or cloning the Github repo.

### Features

**alphabeticalOrder** - Sort an array of strings by the first letter of each string\
**capitalizeFirstLetter** - Capitalize The First Letter Of Every Word\
**countWords** - Count the words in a string\
**lineBreakAfterEachWord** - Add a line break after each word\
**moveChar** - Move a character a number of steps\
**numberedList** - Add a number before each line\
**removeChar** - Remove a select character from a string\
**removeSpecialChars** - Remove special characters from a string\
**removeWhiteSpaces** - Remove white spaces from a string\
**replaceChar** - Replace a character in a string\
**truncate** - Truncate a string\

**kebabCase** - Convert a string to kebab-case\
**camelCase** - Convert a string to camelCase\
**snakeCase** - Convert a string to snake_case\
**titleCase** Convert a String to Title Case

## Usage

Import and use the needed function.

E.g.

```javascript

const titleCase = require('../src/titleCase')

let exampleString = 'Hello world'

// titleCase(string)

console.log(titleCase(exampleString)) // Outputs: 'Hello World'

```

Some functions require two or more arguments.

```javascript

const removeChar = require('../src/removeChar)

let exampleString = 'Hello world'

//removeChar(string, charToRemove)

console.log(removeChar(exampleString, 'H')) // Outputs: 'ello World'




```
