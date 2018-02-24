const assembleTemplate = require('assemble-template');

const hash = require('vxv-hash');
const insert = require('vxv-insert');
const parser = require('vxv-parser');
const state = require('vxv-state');

const buildString = (strings, ...values) => {
  let str = '';

  for (let i in strings) {
    if (String(values[i]).startsWith('vxv_')) {
      str += state.all()[values[i].substring(4)];
    } else {
      str += strings[i] + (values[i] !== undefined ? values[i] : '');
    }
  }

  return str;
};

const vxv = (strings, ...values) => {
  strings = Array.isArray(strings) ? strings : [strings];
  const str = buildString(strings, ...values);

  const h = hash(str);
  const styles = parser(`.vxv_${h}`, str);

  state.set(h, styles);
  insert(styles);

  return `vxv_${h}`;
};

module.exports = vxv;
