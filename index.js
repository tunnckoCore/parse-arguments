/*!
 * parse-arguments <https://github.com/tunnckoCore/parse-arguments>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var utils = require('./utils')

/**
 * > Parse function to object with same key names as its arguments names.
 *
 * @param  {Array|Arguments} `args`
 * @param  {Function} `fn`
 * @return {Object}
 * @api public
 */

module.exports = function parseArguments (args, fn) {
  args = utils.arrayify(args)

  var names = utils.functionArguments(fn)
  var len = names.length
  var i = 0
  var res = {}

  while (i < len) {
    res[names[i]] = args[i]
    i++
  }
  return res
}
