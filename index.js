const insertCss = require('insert-css');
const stylis = require('stylis');
const assembleTemplate = require('assemble-template');

const hash = str => {
  let h = 0;
  let l = str.length;
  let i = 0;

  if (l > 0) {
    while (i < l) {
      h = ((h << 5) - h + str.charCodeAt(i++)) | 0;
    }
  }

  return Math.abs(h);
};

const insert = styles => {
  if (typeof window == 'object') {
    const styleElement = insertCss(styles);
    styleElement.setAttribute('class', 'vxv_style');
  }
};

module.exports = (strings, ...values) => {
  strings = Array.isArray(strings) ? strings : [strings];
  let str = assembleTemplate(strings, ...values);

  const h = hash(str);
  const styles = stylis(`.vxv_${h}`, str);

  insert(styles);

  return `vxv_${h}`;
};

module.exports.hash = hash;
