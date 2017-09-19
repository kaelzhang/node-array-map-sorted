export default (array, relative, mapper) => {
  let matchedIndex = -1

  return array.map(datum => {
    let i = matchedIndex + 1
    let length = relative.length
    let rel

    for (; i < length; i ++) {
      rel = relative[i]
      if (mapper(datum, rel)) {
        matchedIndex = i
        return rel
      }
    }
  })
}
