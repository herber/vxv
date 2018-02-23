const stylis = require('stylis');
stylis.set({ semicolon: true });

const parser = (prefix, styles) => {
  return stylis(prefix, styles);
};

module.exports = parser;
