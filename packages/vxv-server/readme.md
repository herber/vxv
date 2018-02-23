<h1 align="center">VXV - Server</h1>

<p align="center">
  <a href="https://travis-ci.org/herber/vxv"><img src="https://travis-ci.org/herber/vxv.svg?branch=master" alt="Build Status"></a>
  <a href="https://codecov.io/gh/herber/vxv"><img src="https://codecov.io/gh/herber/vxv/branch/master/graph/badge.svg" /></a>
  <a href="https://npm.im/vxv-server"><img src="https://img.shields.io/npm/v/vxv-server.svg" alt="vxv"></a>
</p>

<p align="center">
  Simple serverside rendering for [vxv](https://github.com/herber/vxv).
</p>

## Install

```
$ npm install vxv-server
```

## Usage

__VXV-Server__ processes your styles just like vxv does including hash prefixing. `server()` will return a simple string containing all your styles - you can now save those styles somewhere or send them directly to the user.

```js
const vxv = require('vxv');
const server = require('vxv-server');

const mainStyles = vxv`
h1 { font-size: 2rem }
h2 { font-size: 1.5rem }
h3 { font-size: 1.25rem }
h4 { font-size: 1rem }
h5 { font-size: .875rem }
h6 { font-size: .75rem }
`;

const otherStyles = vxv`
p, dl, ol, ul, pre, blockquote {
  margin-top: 1em;
  margin-bottom: 1em;
}
`;

server();
// => All styles even those used in other files -
// => prefixed and concatenated into single string,
// => that you can use for serverside rendering.
```

## License

MIT © [Tobias Herber](http://tobihrbr.com)
