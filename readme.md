<p align="center">
  <img src="https://i.imgur.com/R4GAGr8.png" />
</p>

<p align="center">
  [![Build Status](https://travis-ci.org/herber/vxv.svg?branch=master)](https://travis-ci.org/herber/vxv)
  [![VXV](https://img.shields.io/npm/v/vxv.svg)](https://npm.im/vxv)
</p>

<p align="center">
  A tiny library for writing native css code in JavaScript.

  __VXV__ is powered by [`stylis`](https://github.com/thysultan/stylis.js) and [`insert-css`](https://github.com/substack/insert-css).
</p>

## Features
  - __Tiny__: VXV does not bloat you bundle
  - Powered by __tagged template literals__
  - __Isomorphic__: VXV works in node and in browsers
  - __Namespaced__: Don't worry about IDs or classes
  - __Modular__: Import css from other files

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

## Dynamic styles

__VXV__ does not support variables in styles. However you can use the inline `style` attribute for dynamic styles. This makes you code even more explicit.

```js
const vxv = require('vxv');
const xou = require('xou');

const styles = vxv`
font-family: sans-serif;

& h1 {
  color: red;
}
`;

const color = 'blue';

const element = xou`<div class="${ styles }">
  <h1 style="color: ${ color }">Dynamic</h1>
</div>`;
```

## Styling global elements

Global elements can either be tagged by the `global` statement, or not at all.

```js
const vxv = require('vxv');

vxv`
:global(body) {
  background: red;
}

h1 {
  color: green;
}
`;
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
