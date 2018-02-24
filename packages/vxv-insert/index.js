const insert = (src, id) => {
  /* istanbul ignore else */
  if (typeof window == 'object') {
    if (window.document.querySelector('._vxv_' + id) == null) {
      const styleElement = window.document.createElement('style');
      styleElement.setAttribute('type', 'text/css');
      styleElement.setAttribute('class', '_vxv_ _vxv_' + id);
      styleElement.innerHTML = src;

      window.document.head.appendChild(styleElement);
    }
  }
};

module.exports = insert;
