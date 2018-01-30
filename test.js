import test from 'ava';
import m from '.';

const hash = str => {
  let h = 0,
    l = str.length,
    i = 0;

  if (l > 0) {
    while (i < l) {
      h = ((h << 5) - h + str.charCodeAt(i++)) | 0;
    }
  }

  return Math.abs(h);
};

const styles = `html {
  line-height: 1.15; /* 1 */
  -ms-text-size-adjust: 100%; /* 2 */
  -webkit-text-size-adjust: 100%; /* 2 */
}

body {
  margin: 0;
}

article,
aside,
footer,
header,
nav,
section {
  display: block;
}

h1 {
  font-size: 2em;
  margin: 0.67em 0;
}`;

test('return a class', t => {
  const c = m(styles);

  t.is(c, `vxv_${hash(styles)}`);
});

test('hashes strings', t => {
  const str = hash(`A unicode 🦄`);

  t.is(str, 1086155160);
});
