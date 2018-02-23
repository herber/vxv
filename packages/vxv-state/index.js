const s = {};

module.exports = {
  set: (name, value) => {
    s[name] = value;
  },
  all: () => s
};
