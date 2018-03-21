<h1 align="center">VXV - Insert</h1>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv-insert"><img src="https://img.shields.io/npm/v/vxv-insert.svg" alt="vxv"></a>
</p>

<p align="center">
  __VXV-Insert__ inserts styles into the DOM. It appends a style attribute to the document's head.
</p>

## Install

```
$ npm install vxv-insert
```

## Usage

```js
const insert = require('vxv-insert');

insert(`
  body {
    background: red;
  }
`);

// The pages background is red now
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)