const assembleTemplate = require('assemble-template');

const hash = require('vxv-hash');
const insert = require('vxv-insert');
const parser = require('vxv-parser');
const state = require('vxv-state');

const vxv = (strings, ...values) => {
  strings = Array.isArray(strings) ? strings : [strings];
  let str = assembleTemplate(strings, ...values);

  const h = hash(str);
  const styles = parser(`.vxv_${h}`, str);

  state.set(h, styles);
  insert(styles);

  return `vxv_${h}`;
};

module.exports = vxv;
