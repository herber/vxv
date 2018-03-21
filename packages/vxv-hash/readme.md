<h1 align="center">VXV - Hash</h1>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv-hash"><img src="https://img.shields.io/npm/v/vxv-hash.svg" alt="vxv"></a>
</p>

<p align="center">
  A simple, isomorphic hashing function that works in node and in browsers.
</p>

## Install

```
$ npm install vxv-hash
```

## Usage

__VXV-Hash__ simple hashes strings, it does not care about unicode, it just works.

```js
const hash = require('vxv-hash');

hash(`A unicode 🦄`);
// => 1086155160
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)