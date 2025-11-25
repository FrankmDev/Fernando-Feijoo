import { a as createComponent, e as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Layout } from '../../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../../chunks/TitleSection_B3TR0LwQ.mjs';
import { $ as $$ContactBanner } from '../../chunks/ContactBanner_g_NP5E_m.mjs';
import { W as WORKS } from '../../chunks/works_9ylaZ1I1.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Ceramics = createComponent(($$result, $$props, $$slots) => {
  function processImageUrl(imageUrl) {
    if (!imageUrl) return "";
    if (imageUrl.startsWith("@assets/")) {
      return imageUrl.replace("@assets/", "/");
    }
    if (imageUrl.startsWith("@")) {
      return imageUrl.substring(1);
    }
    if (imageUrl.startsWith("/") || imageUrl.startsWith("http")) {
      return imageUrl;
    }
    return "/" + imageUrl;
  }
  const ceramicsCategory = WORKS.find((category) => category.slug === "ceramics");
  if (!ceramicsCategory) {
    throw new Error("Ceramics category not found");
  }
  const bannerBackgroundImage = ceramicsCategory.works && ceramicsCategory.works.length > 0 && ceramicsCategory.works[0].imageUrls && ceramicsCategory.works[0].imageUrls.length > 0 ? processImageUrl(ceramicsCategory.works[0].imageUrls[0]) : null;
  const pageTitle = "Ceramics - Fernando Feijoo | Artist & Printmaker";
  const pageDescription = `Explore Fernando Feijoo's ceramics collection featuring ${ceramicsCategory.works?.length || 0} unique pieces crafted with underglaze painting, oxides and clear glaze finishes.`;
  const pageUrl = "https://fernandofeijoo.com/works/ceramics";
  const ogImage = bannerBackgroundImage ? `https://fernandofeijoo.com${bannerBackgroundImage}` : "https://fernandofeijoo.com/og-image.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-2zjlyrgj": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "ceramics", "data-astro-cid-2zjlyrgj": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-2zjlyrgj> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": "Ceramics", "backgroundImage": bannerBackgroundImage, "data-astro-cid-2zjlyrgj": true })} <section class="py-12" data-astro-cid-2zjlyrgj> <div class="container mx-auto px-4" data-astro-cid-2zjlyrgj> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8" data-astro-cid-2zjlyrgj> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-2zjlyrgj>Home</a> <span data-astro-cid-2zjlyrgj>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-2zjlyrgj>Works</a> <span data-astro-cid-2zjlyrgj>/</span> <span class="text-gray-900" data-astro-cid-2zjlyrgj>Ceramics</span> </nav> <!-- Category Description --> <div class="text-center mb-12" data-astro-cid-2zjlyrgj> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-2zjlyrgj>
Explore Fernando Feijoo's ceramics collection featuring
${ceramicsCategory.works?.length || 0} unique ${ceramicsCategory.works?.length === 1 ? "piece" : "pieces"}
crafted with underglaze painting, oxides and clear glaze finishes.
</p> </div> <!-- Works Grid --> ${ceramicsCategory.works && ceramicsCategory.works.length > 0 ? renderTemplate`<div data-astro-cid-2zjlyrgj> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Ceramic Works", "class": "text-center mb-8", "data-astro-cid-2zjlyrgj": true })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 w-full max-w-7xl mx-auto" data-astro-cid-2zjlyrgj> ${ceramicsCategory.works.map((work) => {
    if (!work || !work.slug) return null;
    const workImageUrls = work.imageUrls || [];
    const hasImages = workImageUrls.length > 0;
    const firstImageUrl = hasImages ? processImageUrl(workImageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/${work.slug}`, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]"${addAttribute(`View details for ${work.title}`, "aria-label")} data-astro-cid-2zjlyrgj> <article class="w-full" data-astro-cid-2zjlyrgj> <!-- Image Container --> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-2zjlyrgj> ${hasImages && firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(`${work.title} by Fernando Feijoo`, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" width="400" height="400" data-astro-cid-2zjlyrgj>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-2zjlyrgj> <div class="text-center p-4" data-astro-cid-2zjlyrgj> <div class="text-gray-400 text-2xl md:text-4xl mb-2" data-astro-cid-2zjlyrgj>🏺</div> <h3 class="text-xs md:text-sm font-medium text-gray-600 line-clamp-2" data-astro-cid-2zjlyrgj> ${work.title} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center" data-astro-cid-2zjlyrgj> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-2zjlyrgj> <h3 class="text-3xl font-medium mb-1" data-astro-cid-2zjlyrgj>${work.title}</h3> <p class="text-md opacity-80" data-astro-cid-2zjlyrgj>View Details</p> </div> </div> </div> </article> </a>`;
  })} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-2zjlyrgj> <div class="text-6xl mb-4" data-astro-cid-2zjlyrgj>🏺</div> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-2zjlyrgj>No Ceramic Works Available</h2> <p class="text-gray-600 mb-6" data-astro-cid-2zjlyrgj>
This collection is currently being updated. Please check back soon.
</p> <a href="/works" class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-2zjlyrgj>
View Other Collections
</a> </div>`} </div> </section> <!-- Contact Banner --> ${renderComponent($$result3, "ContactBanner", $$ContactBanner, { "data-astro-cid-2zjlyrgj": true })} </main> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <meta name="description"', '> <meta name="keywords" content="Fernando Feijoo, ceramics, pottery, underglaze painting, contemporary ceramics, art"> <link rel="canonical"', '>  <meta property="og:type" content="website"> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url"', '> <meta property="og:image"', '> <meta property="og:site_name" content="Fernando Feijoo">  <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="twitter:image"', '>  <script type="application/ld+json">', "<\/script> "])), addAttribute(pageDescription, "content"), addAttribute(pageUrl, "href"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(pageUrl, "content"), addAttribute(ogImage, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Ceramics Collection",
    "description": pageDescription,
    "url": pageUrl,
    "creator": {
      "@type": "Person",
      "name": "Fernando Feijoo",
      "url": "https://fernandofeijoo.com"
    },
    "numberOfItems": ceramicsCategory.works?.length || 0
  }))) })}` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/ceramics.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/ceramics.astro";
const $$url = "/works/ceramics";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Ceramics,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
