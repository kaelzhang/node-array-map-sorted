const returnRel = (datum, rel) => rel

export default (array, relative, matcher, defaultValue, mapper = returnRel) => {
  let matchedIndex = -1

  return array.map((datum, index) => {
    let i = matchedIndex + 1
    let rel
    const length = relative.length

    for (; i < length; i ++) {
      rel = relative[i]
      if (matcher(datum, rel, index, i)) {
        matchedIndex = i
        return mapper(datum, rel, index, i)
      }
    }

    return defaultValue
  })
}
