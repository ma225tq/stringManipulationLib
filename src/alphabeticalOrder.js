function alphabeticalOrder(array) {
  if (!Array.isArray(array)) {
    throw new Error('array must be an array')
  }

  if (array.length === 0) {
    throw new Error('array must not be empty')
  }

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'string') {
      throw new Error('array must be an array of strings only')
    }
  }


  let manipulatedString = array.sort((a, b) => {
    const firstLetterA = a.trim()[0]
    const firstLetterB = b.trim()[0]

    if (firstLetterA < firstLetterB) {
      return -1
    } else if (firstLetterA > firstLetterB) {
      return 1
    } else {
      return 0
    }
  }).join('\n')

    return manipulatedString
}

module.exports = alphabeticalOrder
