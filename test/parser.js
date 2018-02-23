const parser = require('../packages/vxv-parser');

test('parses css', () => {
  const css = parser(
    '.hello',
    `
    .world {
      color: green;
    }
  `
  );

  expect(css.indexOf('.hello')).not.toBe(-1);
});
