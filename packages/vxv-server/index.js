const state = require('vxv-state');

const server = () => {
  const values = Object.values(state.all());
  const styles = values.join('\n');

  return styles;
};

module.exports = server;
