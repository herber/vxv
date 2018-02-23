const insert = src => {
  /* istanbul ignore else */
  if (typeof window == 'object') {
    const styleElement = window.document.createElement('style');
    styleElement.setAttribute('type', 'text/css');
    styleElement.setAttribute('class', '_vxv_');
    styleElement.innerHTML = src;

    window.document.head.appendChild(styleElement);
  }
};

module.exports = insert;
