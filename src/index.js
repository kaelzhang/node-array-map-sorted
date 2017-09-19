export default (array, relative, mapper, defaultValue) => {
  let matchedIndex = -1

  return array.map((datum, index) => {
    let i = matchedIndex + 1
    let length = relative.length
    let rel

    for (; i < length; i ++) {
      rel = relative[i]
      if (mapper(datum, rel, index, i)) {
        matchedIndex = i
        return rel
      }
    }

    return defaultValue
  })
}
