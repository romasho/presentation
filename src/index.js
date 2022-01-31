import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import RevealHighlight from 'reveal.js/plugin/highlight/highlight.js'
import './css/reveal.css';
import './css/black.css';
import './css/monokai.css';

let deck = new Reveal({
  plugins: [ Markdown, RevealHighlight ]
})
deck.initialize({
  theme: 'default'
});


