import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { destinations } from '../src/content.js';

export const siteUrl = 'https://www.cherry-bit.com/';
export const description = 'CherryBit builds and modernises frontend applications with React, Angular and TypeScript. Expertise in real-time systems, complex data and reliable interfaces.';

// The fallback and interactive experience share copy to prevent content drift.
export function staticContent() {
  return renderToStaticMarkup(h('main', { className: 'static-page', id: 'top' },
    h('img', { src: '/cherrybit-logo.png', alt: 'CherryBit', width: 80, height: 80 }),
    h('h1', null, 'Serious engineering. With a cherry on top.'),
    h('p', null, description),
    h('nav', { 'aria-label': 'Explore CherryBit' }, destinations.map(({ id, label }) =>
      h('a', { key: id, href: `#${id}` }, label))),
    ...destinations.map(({ id, label, title, intro, items }) => h('section', { key: id, id },
      h('p', null, label), h('h2', null, title), h('p', null, intro),
      ...items.map(([name, body]) => h('article', { key: name }, h('h3', null, name), h('p', null, body))))),
    h('a', { href: 'mailto:hello@cherrybit.dev' }, 'Let’s talk — hello@cherrybit.dev')));
}

export function seoPlugin() {
  return {
    name: 'cherrybit-static-content',
    transformIndexHtml(html) {
      return html.replace('<div id="root"></div>', `<div id="root">${staticContent()}</div>`);
    },
  };
}
