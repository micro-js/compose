/**
 * Modules
 */

var reduce = require('@f/reduce-array')
var identity = require('@f/identity')

/**
 * Expose compose
 */

module.exports = compose

/**
 * Accumulate function compositions.
 * f . g . h ...
 */

function compose () {
  var args = new Array(arguments.length === 0 ? 0 : arguments.length - 1)
  for (var i = 1; i < arguments.length; i++) { args[i-1] = arguments[i] }

  return reduce(
    composeTwo,
    arguments[0] || identity,
    args
  )
}

/**
 * Compose `f` with `g`
 * f . g
 */

function composeTwo (f, g) {
  return function () {
    return f.call(this, g.apply(this, arguments))
  }
}
