<h1 align="center">VXV - Parser</h1>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv-parser"><img src="https://img.shields.io/npm/v/vxv-parser.svg" alt="vxv"></a>
</p>

<p align="center">
  __VXV's__ css parser, powered by [stylis](https://github.com/thysultan/stylis.js)
</p>

## Install

```
$ npm install vxv-parser
```

## Usage

__VXV-Parser__ namespaces your styles with any selector and automatically prefixes css rules.

### Prefixed styles

```js
const parser = require('vxv-parser');

parser('.hello', `
  .world {
    color: green;
  }
`);
// => .hello .world {
// =>   color: green;
// => }
```

### Global styles

```js
const parser = require('vxv-parser');

parser('.hello', `
  :global(body) {
    background: red;
  }
`);
// => body {
// =>   color: red;
// => }
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
