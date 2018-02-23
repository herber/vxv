const css = require('vxv');
const html = require('xou');

const navStyles = css`
position: fixed;
border-bottom: solid black 2px;
top: 0px;
right: 0px;
left: 0px;
padding: 10px 5px;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
background: white;

& .right {
  float: right;
}

& a {
  color: black;
  text-decoration: none;
  margin: 0px 15px;

  &:hover {
    text-decoration: underline;
  }
}

@media only screen and (max-width: 720px) {
  & .other {
    display: none
  }
}
`;

const nav = html`
  <nav class="${ navStyles }">
    <span class="left"><a href="/">VXV</a></span>
    <span class="right">
      <a class="other" href="#usage">Usage</a>
      <a class="other" href="#ssr">Serverside rendering</a>
      <a href="https://github.com/herber/vxv">Repo</a>
    </span>
  </nav>
`;

const mainStyles = css`
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
max-width: 720px;
margin: 150px auto 100px auto;

& a {
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

& img {
  width: 95%;
  max-width: 250px;
  display: block;
  margin: auto;
}

& .sub {
  text-align: center;
  margin: 40px auto 50px auto;
}
`;

const usageCode = `const vxv = require('vxv');
const xou = require('xou');

const styles = vxv\`
font-family: sans-serif;

// Nested elements have to be tagged by an &.
& h1 {
color: red;
}

& p {
color: blue;
}
\`;

const element = xou\`<div class="\${ styles }">
<h1>I am red.</h1>
<p>I am blue.</p>
</div>\`;

document.body.appendChild(element);`;

const ssrCode = `const vxv = require('vxv');
const server = require('vxv-server');

const mainStyles = vxv\`
h1 { font-size: 2rem }
h2 { font-size: 1.5rem }
h3 { font-size: 1.25rem }
h4 { font-size: 1rem }
h5 { font-size: .875rem }
h6 { font-size: .75rem }
\`;

const otherStyles = vxv\`
p, dl, ol, ul, pre, blockquote {
  margin-top: 1em;
  margin-bottom: 1em;
}
\`;

server();
// => All styles even those used in other files -
// => prefixed and concatenated into single string,
// => that you can use for serverside rendering.`;

const main = html`
  <section class="${ mainStyles }">
    <img src="https://i.imgur.com/R4GAGr8.png" />
    <p class="sub">
      A tiny library for writing native css code in JavaScript.<br><b>VXV</b> is powered by <a href="https://github.com/thysultan/stylis.js">stylis</a>, a fast css preprocessor.
    </p>

    <h2>Features</h2>
    <ul>
      <li><strong>Tiny</strong>: VXV does not bloat you bundle</li>
      <li>Powered by <strong>tagged template literals</strong></li>
      <li><strong>Namespaced</strong>: VXV automatically namespaces your css</li>
      <li><strong>Modular</strong>: Import css from js files</li>
      <li><strong>Isomorphic</strong>: VXV works in node and in browsers, this is great for server side rendering</li>
      <li><strong>Just CSS</strong>: VXV does not force you to learn anything new, it’s just good old css.</li>
    </ul>

    <h2>Install</h2>
    <pre><code class="language-bash">$ npm install vxv</code></pre>

    <h2 id="usage">Usage</h2>
    <p><strong>VXV</strong> supports standard css(with some extras). It returns a simple class name that you can use to access the styles.</p>
    <pre><code class="language-javascript">${ usageCode }</code></pre>

    <h3><a id="ssr"></a>Serverside rendering</h3>
    <p>For serverside rendering you need the <a href="https://github.com/herber/vxv/tree/master/packages/vxv-server">vxv-server</a> module.</p>
    <p><strong>VXV-Server</strong> processes your styles just like <strong>VXV</strong> does including hash prefixing. <code>server()</code> will return a simple string containing all your styles - you can now save those styles somewhere or send them directly to the user.</p>
    <pre><code class="language-javascript">${ ssrCode }</code></pre>
  </section>
`;

const node = html`<div>
  ${ nav }
  ${ main }
</div>`;

document.body.appendChild(node);

photon.setup({ apiKey: '9e016915ad94546c6fda1961b569f974' });
photon.highlight();
