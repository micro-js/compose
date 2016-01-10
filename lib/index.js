/**
 * Modules
 */

var reduce = require('@f/reduce-array')
var slice = require('@f/slice')

/**
 * Expose compose
 */

module.exports = compose

/**
 * Accumulate function compositions.
 * f . g . h ...
 */

function compose () {
  var args = arguments
  return reduce(
    composeTwo,
    args[0],
    slice(args, 1, args.length)
  )
}

/**
 * Compose `f` with `g`
 * f . g
 */

function composeTwo (f, g) {
  return function () {
    return f.call(null, g.apply(null, arguments))
  }
}
