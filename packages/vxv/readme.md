<p align="center">
  <img src="https://i.imgur.com/R4GAGr8.png" />
</p>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv"><img src="https://img.shields.io/npm/v/vxv.svg" alt="vxv"></a>
</p>

<p align="center">
  A tiny library for writing native css code in JavaScript.<br><b>VXV</b> is powered by <a href="https://github.com/thysultan/stylis.js">stylis</a>, a fast css preprocessor.
  <br>
  <a href="https://github.com/herber/vxv/blob/master/readme.md">Full documentation</a>
</p>

## Features
  - __Tiny__: VXV does not bloat you bundle
  - Powered by __tagged template literals__
  - __Namespaced__: VXV automatically namespaces your css
  - __Modular__: Import css from js files
  - __Isomorphic__: VXV works in node and in browsers, this is great for server side rendering
  - __Just CSS__: VXV does not force you to learn anything new, it's just good old css.

## Install

```
$ npm install vxv
```

## Usage

__VXV__ supports standard css(with some extras). It returns a simple class name that you can use to access the styles.

```js
const vxv = require('vxv');
const xou = require('xou');

const styles = vxv`
font-family: sans-serif;

// Nested elements have to be tagged by an &.
& h1 {
  color: red;
}

& p {
  color: blue;
}
`;

const element = xou`<div class="${ styles }">
  <h1>I am red.</h1>
  <p>I am blue.</p>
</div>`;

document.body.appendChild(element);
```


## License

MIT © [Tobias Herber](http://tobihrbr.com)
