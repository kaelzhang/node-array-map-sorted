[![Build Status](https://travis-ci.org/kaelzhang/node-array-map-sorted.svg?branch=master)](https://travis-ci.org/kaelzhang/node-array-map-sorted)
[![Coverage](https://codecov.io/gh/kaelzhang/node-array-map-sorted/branch/master/graph/badge.svg)](https://codecov.io/gh/kaelzhang/node-array-map-sorted)
<!-- optional appveyor tst
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/github/kaelzhang/node-array-map-sorted?branch=master&svg=true)](https://ci.appveyor.com/project/kaelzhang/node-array-map-sorted)
-->
<!-- optional npm version
[![NPM version](https://badge.fury.io/js/array-map-sorted.svg)](http://badge.fury.io/js/array-map-sorted)
-->
<!-- optional npm downloads
[![npm module downloads per month](http://img.shields.io/npm/dm/array-map-sorted.svg)](https://www.npmjs.org/package/array-map-sorted)
-->
<!-- optional dependency status
[![Dependency Status](https://david-dm.org/kaelzhang/node-array-map-sorted.svg)](https://david-dm.org/kaelzhang/node-array-map-sorted)
-->

# array-map-sorted

Compare two sorted arrays, and map the items of the first map to matched ones.

## Install

```sh
$ npm install array-map-sorted
```

## Usage

```js
import map from 'array-map-sorted'

const args = [
  [
    // 1 matches 4
    1,
    // 2 starts to match from 5 (4 has already been matched), and no matches
    2,
    // 3 starts to match from 5, and matches 9
    3
  ],
  [4, 5, 7, 9],
  (a, b) => b % a === 0
]

map(...args)
// [4, undefined, 9]

map(...args, 0)
// [4, 0, 9]

map(...args, 0, (datum, rel) => datum + rel)
// [5, 0, 12]
```

## map(data, relative, matcher, defaultValue = undefined, mapper)

Returns `Array`

## License

MIT
