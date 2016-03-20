# [parse-arguments][author-www-url] [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Parse function to object with same key names as arguments names and values that you pass in same order.

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]

## Install
```
npm i parse-arguments --save
```

## Usage
> For more use-cases see the [tests](./test.js)

```js
const parseArguments = require('parse-arguments')
```

### [parseArguments](index.js#L35)
> Parse function to object with same key names as its arguments names.

**Params**

* `args` **{Array|Arguments}**    
* `fn` **{Function}**    
* `returns` **{Object}**  

**Example**

```js
function fixture (xxx, yyy, zzz) {
  return parseArguments(arguments, fixture)
}
var parsed = fixture(444, {a: 'b'}, 'foo')

console.log(parsed.xxx) // => 444
console.log(parsed.yyy) // => { a: 'b' }
console.log(parsed.zzz) // => 'foo'
console.log(parsed) // => { xxx: 444, yyy: { a: 'b' }, zzz: 'foo' }
```

## Related
* [bind-arguments](https://www.npmjs.com/package/bind-arguments): Bind context (optional) and multiple arguments to function. | [homepage](https://github.com/tunnckocore/bind-arguments)
* [bind-context](https://www.npmjs.com/package/bind-context): Bind context to a function and preserves her name. Can be used to change name of a function. The toString also works correctly. | [homepage](https://github.com/tunnckocore/bind-context)
* [flatten-arguments](https://www.npmjs.com/package/flatten-arguments): Fastest, simplest and smallest. Pass `arguments` object or list of arguments and get flattened array. | [homepage](https://github.com/tunnckocore/flatten-arguments)
* [function-arguments](https://www.npmjs.com/package/function-arguments): Get arguments of a function, useful for and used in dependency injectors. Works for regular functions, generator functions and arrow functions. | [homepage](https://github.com/tunnckocore/function-arguments)
* [handle-arguments](https://www.npmjs.com/package/handle-arguments): Handles given Arguments object - return separatly last argument (commonly callback) and other arguments as Array. Useful in node-style callback flow. Used by `hybridify`. | [homepage](https://github.com/hybridables/handle-arguments)
* [is-arguments](https://www.npmjs.com/package/is-arguments): Is this an arguments object? It's a harder question than you think. | [homepage](https://github.com/ljharb/is-arguments)
* [manage-arguments](https://www.npmjs.com/package/manage-arguments): Prevents arguments leakage - managing arguments. From Optimization killers by Petka Antonov. | [homepage](https://github.com/tunnckocore/manage-arguments)

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/parse-arguments/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.

## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckoCore.tk][author-www-img]][author-www-url] [![keybase tunnckoCore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]

[function-arguments]: https://github.com/tunnckocore/function-arguments
[is-arguments]: https://github.com/ljharb/is-arguments
[isarray]: https://github.com/juliangruber/isarray
[lazy-cache]: https://github.com/jonschlinkert/lazy-cache

[npmjs-url]: https://www.npmjs.com/package/parse-arguments
[npmjs-img]: https://img.shields.io/npm/v/parse-arguments.svg?label=parse-arguments

[license-url]: https://github.com/tunnckoCore/parse-arguments/blob/master/LICENSE
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg

[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/parse-arguments
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/parse-arguments.svg

[travis-url]: https://travis-ci.org/tunnckoCore/parse-arguments
[travis-img]: https://img.shields.io/travis/tunnckoCore/parse-arguments/master.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/parse-arguments
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/parse-arguments.svg

[david-url]: https://david-dm.org/tunnckoCore/parse-arguments
[david-img]: https://img.shields.io/david/tunnckoCore/parse-arguments.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/ama
[new-message-img]: https://img.shields.io/badge/ask%20me-anything-green.svg

