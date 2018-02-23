<h1 align="center">VXV - State </h1>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv-state"><img src="https://img.shields.io/npm/v/vxv-state.svg" alt="vxv"></a>
</p>

<p align="center">
  A simple application wide state management solution.
</p>

## Install

```
$ npm install vxv-state
```

## Usage

```js
const state = require('vxv-state');

state.set('hello', 'world');
state.set('answer',  42);

state.all();
// => {
// =>   hello: 'world'
// =>   answer: 42
// => }
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
