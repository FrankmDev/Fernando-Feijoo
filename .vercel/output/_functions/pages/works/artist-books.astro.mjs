import { a as createComponent, e as renderComponent, r as renderTemplate, F as Fragment, u as unescapeHTML, b as addAttribute, m as maybeRenderHead } from '../../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Layout } from '../../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../../chunks/TitleSection_B3TR0LwQ.mjs';
import { W as WORKS } from '../../chunks/works_9ylaZ1I1.mjs';
/* empty css                                           */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$ArtistBooks = createComponent(($$result, $$props, $$slots) => {
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
  const artistBooksCategory = WORKS.find((category) => category.slug === "artist-books");
  if (!artistBooksCategory) {
    throw new Error("Artist Books category not found");
  }
  const allArtistBooksWorks = artistBooksCategory.collections ? artistBooksCategory.collections.flatMap(
    (collection) => collection.works.map((work) => ({
      ...work,
      collectionTitle: collection.title,
      collectionSlug: collection.slug
    }))
  ) : [];
  const bannerBackgroundImage = allArtistBooksWorks.length > 0 && allArtistBooksWorks[0].imageUrls && allArtistBooksWorks[0].imageUrls.length > 0 ? processImageUrl(allArtistBooksWorks[0].imageUrls[0]) : null;
  const pageTitle = "Artist Books - Fernando Feijoo | Artist & Printmaker";
  const pageDescription = `Explore Fernando Feijoo's artist books collection featuring ${allArtistBooksWorks.length} unique books across ${artistBooksCategory.collections?.length || 0} collections that combine visual art with narrative storytelling.`;
  const pageUrl = "https://fernandofeijoo.com/works/artist-books";
  const ogImage = bannerBackgroundImage ? `https://fernandofeijoo.com${bannerBackgroundImage}` : "https://fernandofeijoo.com/og-image.jpg";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-kwymuvwo": true }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "artist-books", "data-astro-cid-kwymuvwo": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-kwymuvwo> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": "Artist Books", "backgroundImage": bannerBackgroundImage, "data-astro-cid-kwymuvwo": true })} <section class="py-12" data-astro-cid-kwymuvwo> <div class="container mx-auto px-4" data-astro-cid-kwymuvwo> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8" data-astro-cid-kwymuvwo> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-kwymuvwo>Home</a> <span data-astro-cid-kwymuvwo>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-kwymuvwo>Works</a> <span data-astro-cid-kwymuvwo>/</span> <span class="text-gray-900" data-astro-cid-kwymuvwo>Artist Books</span> </nav> <!-- Category Description --> <div class="text-center mb-12" data-astro-cid-kwymuvwo> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-kwymuvwo>
Explore Fernando Feijoo's artist books collection featuring
${allArtistBooksWorks.length} unique ${allArtistBooksWorks.length === 1 ? "book" : "books"}
that combine visual art with narrative storytelling across
${artistBooksCategory.collections?.length || 0} collections.
</p> </div> <!-- Collections Grid --> ${artistBooksCategory.collections && artistBooksCategory.collections.length > 0 ? renderTemplate`<div data-astro-cid-kwymuvwo> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Artist Book Collections", "class": "text-center mb-8", "data-astro-cid-kwymuvwo": true })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 w-full max-w-7xl mx-auto" data-astro-cid-kwymuvwo> ${artistBooksCategory.collections.map((collection) => {
    if (!collection || !collection.slug) return null;
    const collectionWorks = collection.works || [];
    const hasWorks = collectionWorks.length > 0;
    const firstWork = hasWorks ? collectionWorks[0] : null;
    const firstImageUrl = firstWork && firstWork.imageUrls && firstWork.imageUrls.length > 0 ? processImageUrl(firstWork.imageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/artist-books/${collection.slug}`, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]"${addAttribute(`View ${collection.title} collection`, "aria-label")} data-astro-cid-kwymuvwo> <article class="w-full" data-astro-cid-kwymuvwo> <!-- Image Container --> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-kwymuvwo> ${firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(`${collection.title} collection by Fernando Feijoo`, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" width="400" height="400" data-astro-cid-kwymuvwo>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-kwymuvwo> <div class="text-center p-4" data-astro-cid-kwymuvwo> <div class="text-gray-400 text-2xl md:text-4xl mb-2" data-astro-cid-kwymuvwo>📚</div> <h3 class="text-xs md:text-sm font-medium text-gray-600 line-clamp-2" data-astro-cid-kwymuvwo> ${collection.title} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center" data-astro-cid-kwymuvwo> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-kwymuvwo> <h3 class="text-3xl font-medium mb-1" data-astro-cid-kwymuvwo>${collection.title}</h3> <p class="text-md opacity-80" data-astro-cid-kwymuvwo> ${collectionWorks.length} ${collectionWorks.length === 1 ? "book" : "books"} </p> </div> </div> </div> </article> </a>`;
  })} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-kwymuvwo> <div class="text-6xl mb-4" data-astro-cid-kwymuvwo>📚</div> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-kwymuvwo>No Books Available</h2> <p class="text-gray-600 mb-6" data-astro-cid-kwymuvwo>
This collection is currently being updated. Please check back soon.
</p> <a href="/works" class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-kwymuvwo>
View Other Collections
</a> </div>`} <!-- Contact Section --> <div class="text-center mt-16 pt-12 border-t border-gray-200" data-astro-cid-kwymuvwo> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-kwymuvwo>
Interested in These Artist Books?
</h2> <p class="text-gray-600 mb-6 max-w-md mx-auto" data-astro-cid-kwymuvwo>
Get in touch to inquire about availability, pricing, or commissioning custom artist books.
</p> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-kwymuvwo> <a href="/contact" class="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-kwymuvwo>
Contact Fernando
</a> <a href="/works" class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200" data-astro-cid-kwymuvwo>
← Back to All Works
</a> </div> </div> </div> </section> </main> ` })} `, "head": ($$result2) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "slot": "head" }, { "default": ($$result3) => renderTemplate(_a || (_a = __template(['  <meta name="description"', '> <meta name="keywords" content="Fernando Feijoo, artist books, book art, printmaking, contemporary books, narrative art"> <link rel="canonical"', '>  <meta property="og:type" content="website"> <meta property="og:title"', '> <meta property="og:description"', '> <meta property="og:url"', '> <meta property="og:image"', '> <meta property="og:site_name" content="Fernando Feijoo">  <meta name="twitter:card" content="summary_large_image"> <meta name="twitter:title"', '> <meta name="twitter:description"', '> <meta name="twitter:image"', '>  <script type="application/ld+json">', "<\/script> "])), addAttribute(pageDescription, "content"), addAttribute(pageUrl, "href"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(pageUrl, "content"), addAttribute(ogImage, "content"), addAttribute(pageTitle, "content"), addAttribute(pageDescription, "content"), addAttribute(ogImage, "content"), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Artist Books Collection",
    "description": pageDescription,
    "url": pageUrl,
    "creator": {
      "@type": "Person",
      "name": "Fernando Feijoo",
      "url": "https://fernandofeijoo.com"
    },
    "numberOfItems": artistBooksCategory.collections?.length || 0
  }))) })}` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/artist-books.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/artist-books.astro";
const $$url = "/works/artist-books";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$ArtistBooks,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
