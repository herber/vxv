const hash = require('../packages/vxv-hash');

test('hashes strings', () => {
  const str1 = hash(`A unicode 🦄`);
  const str2 = hash('');

  expect(str1).toBe(1086155160);
  expect(str2).toBe(0);
});
