const { JSDOM } = require('jsdom');
const insert = require('../packages/vxv-insert/index.js');

test('appends styles to the dom', () => {
  insert(`
    body {
      background: red;
    }
  `);
});

test('appends styles to the dom', () => {
  const dom = new JSDOM(`
    <!DOCTYPE html>
    <html>
      <head>
      </head>
      <body>
      </body>
    </html>
  `);

  insert(`
    body {
      background: red;
    }
  `);

  global.window = dom.window;

  // expect(dom.window.document.querySelectorAll('style').length).toBe(1);
  expect(
    global.window.document.querySelector('style').innerHTML.indexOf('background: red;')
  ).not.toBe(-1);
});
