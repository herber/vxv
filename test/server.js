const vxv = require('../packages/vxv/index.js');
const server = require('../packages/vxv-server');

test('works', () => {
  const c1 = vxv`
    & p {
      text-align: center;

      &.red {
        color: red;
      }
    }
  `;

  const c2 = vxv`
    .markdown-body .pl-c {
      color: #6a737d;
    }

    .markdown-body .pl-c1,
    .markdown-body .pl-s .pl-v {
      color: #005cc5;
    }
  `;

  const c3 = vxv`
    h1 { font-size: 2rem }
    h2 { font-size: 1.5rem }
    h3 { font-size: 1.25rem }
    h4 { font-size: 1rem }
    h5 { font-size: .875rem }
    h6 { font-size: .75rem }

    p, dl, ol, ul, pre, blockquote {
      margin-top: 1em;
      margin-bottom: 1em;
    }
  `;

  expect(server().indexOf(c1)).not.toBe(-1);
  expect(server().indexOf(c2)).not.toBe(-1);
  expect(server().indexOf(c3)).not.toBe(-1);
});
