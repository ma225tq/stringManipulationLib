function titleCase(string) {
  if (typeof string !== 'string') {
    throw new Error('Input must be a string')
  }

  // articles, conjunctions, and prepositions shorter than 6 letters

  wordsNotToCapitalize = [
    'and',
    'but',
    'or',
    'nor',
    'for',
    'so',
    'yet',
    'if',
    'since',
    'until',
    'when',
    'where',
    'while',
    'a',
    'an',
    'the',
    'about',
    'above',
    'after',
    'along',
    'among',
    'as',
    'at',
    'below',
    'but',
    'by',
    'down',
    'for',
    'from',
    'in',
    'into',
    'like',
    'near',
    'of',
    'off',
    'on',
    'onto',
    'out',
    'over',
    'past',
    'round',
    'since',
    'till',
    'to',
    'under',
    'up',
    'upon',
    'with'
    
  ]

let words = string.split(' ');
    
words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1).toLowerCase();

for (let i = 1; i < words.length; i++) {
  if (wordsNotToCapitalize.includes(words[i].toLowerCase())) {
    words[i] = words[i].toLowerCase();
  } else {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
  }
}

return words.join(' ');
}
module.exports = titleCase
