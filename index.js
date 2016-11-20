require('font-awesome/css/font-awesome.css');
require('ionicons/dist/css/ionicons.css');
require('katex/dist/katex.min.css');
require('github-markdown-css/github-markdown.css');
require('highlight.js/styles/atom-one-light.css');
require('emojione/assets/css/emojione.css');
require('./index.css');


const katex = require('katex');
const hljs = require('highlight.js');


const f = () => {
    katex.render("c = \\pm\\sqrt{a^2 + b^2}", document.getElementById('katex-container'));
    hljs.initHighlightingOnLoad();
};

f();
