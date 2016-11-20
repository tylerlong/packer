require('font-awesome/css/font-awesome.css');
require('ionicons/dist/css/ionicons.css');
require('katex/dist/katex.min.css');
require('github-markdown-css/github-markdown.css');
require('./index.css');

const katex = require('katex');


const f = () => {
  katex.render("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById('katex-container'));
};

f();
