function moveChar(string, charToMove, steps, direction) {
  let result = string.split('')
  const indices = []

  for (let i = 0; i < result.length; i++) {
    if (result[i] === charToMove) {
      indices.push(i)
    }
  }

  if (direction === 'right') {
    for (let i = indices.length - 1; i >= 0; i--) {
      let newIndex = indices[i] + steps
      if (newIndex > result.length - 1) newIndex = result.length - 1

      result.splice(newIndex, 0, result.splice(indices[i], 1)[0])
    }
  } else if (direction === 'left') {
    for (let i = 0; i < indices.length; i++) {
      let newIndex = indices[i] - steps
      if (newIndex < 0) newIndex = 0

      result.splice(newIndex, 0, result.splice(indices[i], 1)[0])
    }
  } else {
    throw new Error('Direction must be either "left" or "right"')
  }

  return result.join('')
}

module.exports = moveChar
