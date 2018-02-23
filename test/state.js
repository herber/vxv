const state = require('../packages/vxv-state');

test('saves state', () => {
  state.set('hello', 'world');
  state.set('answer', 42);

  expect(state.all()).toEqual({ hello: 'world', answer: 42 });
});
