import { c as createAstro, a as createComponent, e as renderComponent, f as renderScript, r as renderTemplate, b as addAttribute, m as maybeRenderHead, d as renderSlot, i as renderHead, u as unescapeHTML } from './astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */
/* empty css                           */

const $$Astro$4 = createAstro("https://fernando-feijoo.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$3 = createAstro("https://fernando-feijoo.com");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/node_modules/astro/components/ClientRouter.astro", void 0);

const $$Astro$2 = createAstro("https://fernando-feijoo.com");
const $$Logo = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Logo;
  const { class: className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="/"${addAttribute(["flex gap-3 items-center", className], "class:list")}> <h2 class="text-3xl md:text-4xl font-bold uppercase">Fernando Feijoo</h2> <div class="flex flex-col text-xs md:text-sm"> <span class="-mb-1">Artist &</span> <span>Printmaker</span> </div> </a>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/Header/Logo.astro", void 0);

const $$Astro$1 = createAstro("https://fernando-feijoo.com");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const navItems = [
    { href: "/", text: "Home" },
    { href: "/works", text: "Works" },
    { href: "/profile", text: "Profile" },
    {
      href: "/contact",
      text: "Contact"
    }
  ];
  const currentPath = Astro2.url.pathname;
  return renderTemplate`${maybeRenderHead()}<header class="w-full bg-white fixed top-0 left-0 right-0 z-50" data-astro-cid-266qv2yk> <div class="container mx-auto px-4 py-4" data-astro-cid-266qv2yk> <div class="flex items-center justify-between" data-astro-cid-266qv2yk> ${renderComponent($$result, "Logo", $$Logo, { "data-astro-cid-266qv2yk": true })} <!-- Navegación de escritorio --> <nav class="hidden md:flex items-center space-x-8" data-astro-cid-266qv2yk> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "text-sm font-medium py-2 transition-all duration-300 text-black",
    currentPath === item.href ? " border-b-2 border-black" : " hover:skew-x-[-10deg]"
  ], "class:list")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-astro-cid-266qv2yk> ${item.text} </a>`)} </nav> <button id="mobile-menu-toggle" class="md:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none transition-colors" aria-label="Open Nav" aria-expanded="false" aria-controls="mobile-menu" data-astro-cid-266qv2yk> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none" class="icon-mobile-nav open-icon" data-astro-cid-266qv2yk> <path d="M10 5L20 5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-266qv2yk></path> <path d="M4 12L20 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-266qv2yk></path> <path d="M4 19L14 19" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-266qv2yk></path> </svg> </button> </div> </div> <div id="mobile-menu" class="fixed inset-0 bg-black z-50 flex items-center justify-center transform translate-x-full transition-transform duration-500 ease-in-out md:hidden" data-astro-cid-266qv2yk> <button id="close-menu-button" class="absolute top-4 right-4 p-2 text-white hover:text-gray-300 focus:outline-none" aria-label="Close Nav" data-astro-cid-266qv2yk> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#fff" fill="none" class="icon-mobile-nav close-icon" data-astro-cid-266qv2yk> <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-266qv2yk></path> </svg> </button> <nav class="flex flex-col items-center justify-center space-y-6 w-full px-8" data-astro-cid-266qv2yk> ${navItems.map((item) => renderTemplate`<a${addAttribute(item.href, "href")}${addAttribute([
    "text-2xl font-medium py-2 px-4 text-center transition-all duration-300 w-full ",
    currentPath === item.href ? "text-white w-min border-b-2 border-white" : "text-white hover:skew-x-[-10deg]"
  ], "class:list")}${addAttribute(currentPath === item.href ? "page" : void 0, "aria-current")} data-astro-cid-266qv2yk> ${item.text} </a>`)} </nav> </div> </header> <div class="pt-16" data-astro-cid-266qv2yk> ${renderSlot($$result, $$slots["default"])} </div> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/sections/Header/Header.astro", void 0);

const $$XIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-x"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/x-icon.astro", void 0);

const $$InstagramIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"></path><path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path><path d="M16.5 7.5v.01"></path></svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/instagram-icon.astro", void 0);

const $$VimeoIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" class="icon icon-tabler icons-tabler-filled icon-tabler-brand-vimeo"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M18.5 3c2.38 0 3.985 2.174 3.486 5.164c-.535 3.21 -2.25 6.074 -4.808 8.675c-1.277 1.298 -2.211 2.061 -4.112 3.485c-2.323 1.597 -4.408 .365 -5.47 -1.897c-.292 -.618 -.586 -1.724 -1.248 -4.477l-.03 -.126c-.483 -2.01 -.819 -3.319 -.982 -3.878l-.016 -.052l-.031 .013l-.13 .06l-.137 .07a4 4 0 0 0 -.43 .269a1 1 0 0 1 -1.3 -.099l-1 -1a1 1 0 0 1 -.124 -1.262a20 20 0 0 1 1.918 -2.382c.98 -1.037 1.955 -1.816 2.928 -2.233c.5 -.214 .996 -.33 1.486 -.33c2.237 0 3.02 1.588 3.567 4.963c.03 .183 .057 .359 .112 .709c.123 .784 .197 1.198 .292 1.588c.292 1.185 .528 1.984 .735 2.483l-.016 -.039l.096 -.107c.354 -.411 .757 -1.014 1.172 -1.771l.157 -.291c.391 -.745 .505 -1.528 .363 -1.9c-.028 -.073 .007 -.065 -.456 .218a1 1 0 0 1 -1.51 -1.013c.496 -3.053 2.745 -4.84 5.488 -4.84"></path></svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/vimeo-icon.astro", void 0);

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col items-center justify-center gap-2"> <div class="flex center gap-4"> <a href="https://x.com/" class="bg-black rounded-full p-1 text-white" aria-label="Fernando Feijoo on X" title="Fernando Feijoo on X" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "XIcon", $$XIcon, { "aria-hidden": "true", "focusable": "false" })} </a> <a href="https://instagram.com/" aria-label="Fernando Feijoo on Instagram" title="Fernando Feijoo on Instagram" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "InstagramIcon", $$InstagramIcon, { "aria-hidden": "true", "focusable": "false" })} </a> <a href="https://vimeo.com/" class="bg-black rounded-full p-1 text-white" aria-label="Fernando Feijoo on Vimeo" title="Fernando Feijoo on Vimeo" target="_blank" rel="noopener noreferrer"> ${renderComponent($$result, "VimeoIcon", $$VimeoIcon, { "aria-hidden": "true", "focusable": "false" })} </a> </div> </section>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/Hero/Socials.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col items-center px-6 py-8 w-full"> <div class="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6"> ${renderComponent($$result, "Logo", $$Logo, {})} ${renderComponent($$result, "Socials", $$Socials, {})} </div> </footer>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/sections/Footer/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fernando-feijoo.com");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title,
    description = "Fernando Feijoo is a multi-disciplinary artist and printmaker exploring printmaking, drawing, painting, artist books and ceramics. View his portfolio of contemporary artwork.",
    image = "/favicon.png",
    canonicalURL,
    noindex = false
  } = Astro2.props;
  const siteUrl = Astro2.site ? Astro2.site.toString() : "https://fernando-feijoo.com";
  const currentUrl = canonicalURL || `${siteUrl}${Astro2.url.pathname}`;
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Feijoo",
    jobTitle: "Artist & Printmaker",
    description: "Multi-disciplinary artist specializing in printmaking, ceramics, drawings, and mixed media",
    url: siteUrl,
    sameAs: [
      // Add social media URLs when available
    ],
    knowsAbout: [
      "Printmaking",
      "Ceramics",
      "Drawing",
      "Mixed Media",
      "Artist Books"
    ]
  };
  const pageStructuredData = structuredData;
  return renderTemplate(_a || (_a = __template(['<html lang="en" prefix="og: http://ogp.me/ns#" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no"><meta name="generator"', "><!-- Primary Meta Tags --><title>", '</title><meta name="title"', '><meta name="description"', '><meta name="author" content="Fernando Feijoo"><meta name="keywords" content="Fernando Feijoo, artist, printmaker, ceramics, drawings, mixed media, artist books, contemporary art, linocut, letterpress"><!-- Robots -->', "", '<!-- Canonical URL --><link rel="canonical"', '><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:site_name" content="Fernando Feijoo - Artist & Printmaker"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="Fernando Feijoo - Contemporary Artist & Printmaker"><meta property="og:locale" content="en_GB"><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><meta property="twitter:image:alt" content="Fernando Feijoo - Contemporary Artist & Printmaker"><!-- Favicons --><link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"><link rel="icon" type="image/avif" sizes="32x32" href="/favicon.avif"><link rel="apple-touch-icon" sizes="180x180" href="/favicon.png"><link rel="manifest" href="/site.webmanifest"><meta name="theme-color" content="#000000"><!-- Preconnect to external domains --><link rel="dns-prefetch" href="//fonts.googleapis.com"><!-- Preload critical resources --><link rel="preload" href="/styles/general.css" as="style"><link rel="preload" href="/Exo2-VariableFont_wght.woff2" as="font" type="font/woff2" crossorigin><!-- Styles --><link rel="stylesheet" href="/styles/general.css"><!-- Structured Data --><script type="application/ld+json">', '<\/script><!-- Scripts --><script src="/components/scripts/mobile-menu.js" defer><\/script><!-- Performance optimizations --><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="format-detection" content="telephone=no"><!-- Security --><meta http-equiv="X-Content-Type-Options" content="nosniff"><!-- Astro transitions -->', "", '</head> <body class="flex flex-col items-center max-w-[2000px] mx-auto min-h-screen bg-white text-gray-900" data-astro-cid-sckkx6r4> <!-- Skip to main content for accessibility --> <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-black text-white px-4 py-2 z-50" data-astro-cid-sckkx6r4>\nSkip to main content\n</a> ', ' <main id="main-content" class="flex-1 w-full" role="main" data-astro-cid-sckkx6r4> ', " ", " </main> ", " <!-- Performance monitoring --> ", " <!-- Service Worker registration --> ", " </body> </html> "])), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), noindex && renderTemplate`<meta name="robots" content="noindex, nofollow">`, !noindex && renderTemplate`<meta name="robots" content="index, follow">`, addAttribute(currentUrl, "href"), addAttribute(currentUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), addAttribute(currentUrl, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(imageUrl, "content"), unescapeHTML(JSON.stringify(pageStructuredData)), renderComponent($$result, "ClientRouter", $$ClientRouter, { "data-astro-cid-sckkx6r4": true }), renderHead(), renderComponent($$result, "Header", $$Header, { "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Analytics", $$Index, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderScript($$result, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"), renderScript($$result, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/layouts/Layout.astro?astro&type=script&index=1&lang.ts"));
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Socials as a };
