const vxv = require('../packages/vxv/index.js');
const RED = '#ff0000';

test('works', () => {
  const insert = vxv`
    font-size: 2em;
  `;

  const c1 = vxv`
    ${insert}

    & p {
      text-align: center;

      &.red {
        color: ${RED};
      }
    }
  `;

  const c2 = vxv(`p { color: red; }`);

  expect(c1.startsWith('vxv_')).toBeTruthy();
  expect(String(c1).length).toBeGreaterThan(4);

  expect(c2.startsWith('vxv_')).toBeTruthy();
  expect(String(c2).length).toBeGreaterThan(4);
});
