import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_DKKMrGB3.mjs';
import { manifest } from './manifest_BncRSzIY.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/404.astro.mjs');
const _page2 = () => import('./pages/api/contact.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/profile.astro.mjs');
const _page5 = () => import('./pages/works/artist-books/_collection_.astro.mjs');
const _page6 = () => import('./pages/works/artist-books.astro.mjs');
const _page7 = () => import('./pages/works/ceramics.astro.mjs');
const _page8 = () => import('./pages/works/drawings.astro.mjs');
const _page9 = () => import('./pages/works/mixed-media.astro.mjs');
const _page10 = () => import('./pages/works/prints/_collection_.astro.mjs');
const _page11 = () => import('./pages/works/prints.astro.mjs');
const _page12 = () => import('./pages/works/_slug_.astro.mjs');
const _page13 = () => import('./pages/works.astro.mjs');
const _page14 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/api/contact.ts", _page2],
    ["src/pages/contact.astro", _page3],
    ["src/pages/profile.astro", _page4],
    ["src/pages/works/artist-books/[collection].astro", _page5],
    ["src/pages/works/artist-books.astro", _page6],
    ["src/pages/works/ceramics.astro", _page7],
    ["src/pages/works/drawings.astro", _page8],
    ["src/pages/works/mixed-media.astro", _page9],
    ["src/pages/works/prints/[collection].astro", _page10],
    ["src/pages/works/prints.astro", _page11],
    ["src/pages/works/[slug].astro", _page12],
    ["src/pages/works/index.astro", _page13],
    ["src/pages/index.astro", _page14]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "a9063650-2fb4-46c6-b4db-da9643236c81",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
