/*!
 * parse-arguments <https://github.com/tunnckoCore/parse-arguments>
 *
 * Copyright (c) 2016 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var parseArguments = require('./index')

test('should number of keys in returned object be equal to number of passed arguments', function (done) {
  /* istanbul ignore next */
  function fixture (num, str, obj) {}
  var actual = parseArguments([111, 'foo', {a: 'b'}], fixture)

  test.strictEqual(Object.keys(actual).length, fixture.length)
  done()
})

test('should arguments names and object keys match exact', function (done) {
  /* istanbul ignore next */
  function fn (aa, bb, cc) {}
  var parsed = parseArguments(['foo', 'bar', 'baz'], fn)

  test.deepEqual(Object.keys(parsed), ['aa', 'bb', 'cc'])
  done()
})

test('should values in returned object are exact as passed', function (done) {
  /* istanbul ignore next */
  function foo (bar, qux) {}
  var res = parseArguments(['str', 123], foo)

  test.strictEqual(res.bar, 'str')
  test.strictEqual(res.qux, 123)
  done()
})

test('should be able to accept Arguments object as first argument', function (done) {
  function fixture (xxx, yyy, zzz) {
    return parseArguments(arguments, fixture)
  }
  var parsed = fixture(444, {a: 'b'}, 'foo')

  test.strictEqual(parsed.xxx, 444)
  test.deepEqual(parsed, {
    xxx: 444,
    yyy: {a: 'b'},
    zzz: 'foo'
  })
  test.deepEqual(parsed.yyy, {a: 'b'})
  test.strictEqual(parsed.zzz, 'foo')
  done()
})
