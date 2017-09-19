import test from 'ava'
import map from '../src'

;[
  [
    'normal',
    [
      [1, 9, 3, 4, 5],
      [2, 3, 4, 5, 6, 7],
      (a, b) => b % a === 0
    ],
    [2, undefined, 3, 4, 5]
  ]
]
.forEach(([d, args, expected]) => {
  test(d, async t => {
    const result = map(...args)
    t.deepEqual(result, expected)
  })
})
