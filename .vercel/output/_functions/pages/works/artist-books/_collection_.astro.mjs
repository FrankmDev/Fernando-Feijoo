import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$Layout } from '../../../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../../../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../../../chunks/TitleSection_B3TR0LwQ.mjs';
import { W as WORKS } from '../../../chunks/works_9ylaZ1I1.mjs';
/* empty css                                              */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://fernando-feijoo.com");
async function getStaticPaths() {
  const artistBooksCategory = WORKS.find((category) => category.slug === "artist-books");
  if (!artistBooksCategory || !artistBooksCategory.collections) {
    return [];
  }
  return artistBooksCategory.collections.map((collection) => ({
    params: { collection: collection.slug },
    props: {
      collection,
      categoryTitle: artistBooksCategory.title,
      categorySlug: artistBooksCategory.slug
    }
  }));
}
const $$collection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$collection;
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
  const { collection, categoryTitle } = Astro2.props;
  if (!collection) {
    throw new Error(`Collection not found for slug: ${Astro2.params.collection}`);
  }
  const bannerBackgroundImage = collection.works && collection.works.length > 0 && collection.works[0].imageUrls && collection.works[0].imageUrls.length > 0 ? processImageUrl(collection.works[0].imageUrls[0]) : null;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${collection.title} - ${categoryTitle} - Fernando Feijoo`, "data-astro-cid-4nrd7vyn": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "collection-detail", "data-astro-cid-4nrd7vyn": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-4nrd7vyn> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": collection.title, "subtitle": categoryTitle, "backgroundImage": bannerBackgroundImage, "data-astro-cid-4nrd7vyn": true })} <section class="py-12" data-astro-cid-4nrd7vyn> <div class="container mx-auto px-4" data-astro-cid-4nrd7vyn> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8" data-astro-cid-4nrd7vyn> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-4nrd7vyn>Home</a> <span data-astro-cid-4nrd7vyn>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-4nrd7vyn>Works</a> <span data-astro-cid-4nrd7vyn>/</span> <a href="/works/artist-books" class="hover:text-gray-700 transition-colors" data-astro-cid-4nrd7vyn>Artist Books</a> <span data-astro-cid-4nrd7vyn>/</span> <span class="text-gray-900" data-astro-cid-4nrd7vyn>${collection.title}</span> </nav> <!-- Collection Info --> ${collection.description && renderTemplate`<div class="text-center mb-12" data-astro-cid-4nrd7vyn> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-4nrd7vyn> ${collection.description} </p> </div>`} <!-- Works Grid --> ${collection.works && collection.works.length > 0 ? renderTemplate`<div data-astro-cid-4nrd7vyn> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": `Works in ${collection.title}`, "data-astro-cid-4nrd7vyn": true })} <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-8" data-astro-cid-4nrd7vyn> ${collection.works.map((work) => {
    if (!work || !work.slug) return null;
    const workImageUrls = work.imageUrls || [];
    const hasImages = workImageUrls.length > 0;
    const firstImageUrl = hasImages ? processImageUrl(workImageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/${work.slug}`, "href")} class="group block transition-transform duration-200 hover:translate-y-[-2px]"${addAttribute(`View details for ${work.title}`, "aria-label")} data-astro-cid-4nrd7vyn> <article class="bg-white" data-astro-cid-4nrd7vyn> <!-- Image Container --> <div class="aspect-[3/4] bg-gray-100 overflow-hidden mb-4" data-astro-cid-4nrd7vyn> ${hasImages && firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(`${work.title} by Fernando Feijoo`, "alt")} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" loading="lazy" decoding="async" data-astro-cid-4nrd7vyn>` : renderTemplate`<div class="w-full h-full flex items-center justify-center" data-astro-cid-4nrd7vyn> <div class="text-center" data-astro-cid-4nrd7vyn> <div class="text-gray-400 text-4xl mb-2" data-astro-cid-4nrd7vyn>📚</div> <p class="text-xs text-gray-400" data-astro-cid-4nrd7vyn>Image coming soon</p> </div> </div>`} </div> <!-- Content --> <div class="space-y-2" data-astro-cid-4nrd7vyn> <h3 class="text-lg font-medium text-gray-900 group-hover:text-gray-700 transition-colors" data-astro-cid-4nrd7vyn> ${work.title} </h3> ${work.medium && renderTemplate`<p class="text-sm text-gray-600" data-astro-cid-4nrd7vyn> ${work.medium} </p>`} ${work.dimensions && renderTemplate`<p class="text-xs text-gray-500" data-astro-cid-4nrd7vyn> ${work.dimensions} </p>`} </div> </article> </a>`;
  })} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-4nrd7vyn> <div class="text-6xl mb-4" data-astro-cid-4nrd7vyn>📚</div> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-4nrd7vyn>No Works Available</h2> <p class="text-gray-600 mb-6" data-astro-cid-4nrd7vyn>
This collection is currently being updated. Please check back soon.
</p> <a href="/works/artist-books" class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-4nrd7vyn>
View Other Artist Books
</a> </div>`} <!-- Back to Collections --> <div class="text-center mt-16 pt-12 border-t border-gray-200" data-astro-cid-4nrd7vyn> <div class="flex flex-col sm:flex-row gap-4 justify-center" data-astro-cid-4nrd7vyn> <a href="/contact" class="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-4nrd7vyn>
Inquire About This Collection
</a> <a href="/works/artist-books" class="inline-flex items-center px-6 py-3 text-base font-medium text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-200" data-astro-cid-4nrd7vyn>
← Back to Artist Books
</a> </div> </div> </div> </section> </main> ` })} ` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/artist-books/[collection].astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/artist-books/[collection].astro";
const $$url = "/works/artist-books/[collection]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$collection,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
