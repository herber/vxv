const vxv = require('../packages/vxv/index.js');

test('works', () => {
  const c1 = vxv`
    & p {
      text-align: center;

      &.red {
        color: red;
      }
    }
  `;

  const c2 = vxv(`p { color: red; }`);

  expect(c1.startsWith('vxv_')).toBeTruthy();
  expect(String(c1).length).toBeGreaterThan(4);

  expect(c2.startsWith('vxv_')).toBeTruthy();
  expect(String(c2).length).toBeGreaterThan(4);
});
