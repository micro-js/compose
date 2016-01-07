/**
 * Imports
 */

var compose = require('..')
var test = require('tape')

/**
 * Setup
 */

var times2plus1 = compose(plus1, times2)

/**
 * Tests
 */

test('should compose two functions', function (t) {
  t.equal(times2plus1(3), 7)
  t.end()
})

test('should compose from right to left', function (t) {
  var times2plus1 = compose(plus1, times2)
  t.notEqual(times2plus1(3), 8)
  t.equal(times2plus1(3), 7)
  t.end()
})

test('should compose multiple functions', function (t) {
  var times2plus3 = compose(plus1, plus1, plus1, times2)
  t.equal(times2plus3(3), 9)
  t.end()
})

function plus1 (x) {
  return x + 1
}

function times2 (x) {
  return x * 2
}
