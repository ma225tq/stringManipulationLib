# String Manipulation

*String Manipulation* is a lightweight library for some common string manipulation tasks.

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
**titleCase** Convert a String to Title Case\

## Usage

Import and use the needed function.

E.g.

```

const titleCase = require('../src/titleCase')

let exampleString = 'Hello world'

// titleCase(string)

console.log(titleCase(exampleString) // Outputs: 'Hello World'

```

Some functions require two or more arguments.

```

const moveChar = require('./moveChar')

let exampleString = 'Hello world , how are you?'

// moveChar(string, charToMove, steps, direction)

console.log(moveChar(exampleString, ',', '1', 'left') // Output: 'Hello world, How are you?'




```