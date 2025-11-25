import { c as createAstro, a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                         */
import { $ as $$Layout } from '../../../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../../../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../../../chunks/TitleSection_B3TR0LwQ.mjs';
import { $ as $$ContactBanner } from '../../../chunks/ContactBanner_g_NP5E_m.mjs';
import { W as WORKS } from '../../../chunks/works_9ylaZ1I1.mjs';
/* empty css                                              */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://fernando-feijoo.com");
async function getStaticPaths() {
  const printsCategory = WORKS.find((category) => category.slug === "prints");
  if (!printsCategory || !printsCategory.collections) {
    return [];
  }
  return printsCategory.collections.map((collection) => ({
    params: { collection: collection.slug },
    props: {
      collection,
      categoryTitle: printsCategory.title,
      categorySlug: printsCategory.slug
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
  const pageTitle = `${collection.title} - ${categoryTitle} - Fernando Feijoo`;
  const pageDescription = collection.description || `Explore ${collection.title}, a collection of ${categoryTitle.toLowerCase()} by Fernando Feijoo. ${collection.works?.length || 0} unique works featuring linocut, wood block and letterpress techniques.`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "description": pageDescription, "data-astro-cid-dllb2zfv": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "collection-detail", "data-astro-cid-dllb2zfv": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-dllb2zfv> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": collection.title, "subtitle": categoryTitle, "backgroundImage": bannerBackgroundImage, "data-astro-cid-dllb2zfv": true })} <section class="py-12" data-astro-cid-dllb2zfv> <div class="container mx-auto px-4" data-astro-cid-dllb2zfv> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb" data-astro-cid-dllb2zfv> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-dllb2zfv>Home</a> <span data-astro-cid-dllb2zfv>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-dllb2zfv>Works</a> <span data-astro-cid-dllb2zfv>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-dllb2zfv>${categoryTitle}</a> <span data-astro-cid-dllb2zfv>/</span> <span class="text-gray-900" data-astro-cid-dllb2zfv>${collection.title}</span> </nav> <!-- Collection Info --> ${collection.description && renderTemplate`<div class="text-center mb-12" data-astro-cid-dllb2zfv> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-dllb2zfv> ${collection.description} </p> </div>`} <!-- Works Grid --> ${collection.works && collection.works.length > 0 ? renderTemplate`<div data-astro-cid-dllb2zfv> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": `${collection.works.length} Works in ${collection.title}`, "class": "text-center mb-8", "data-astro-cid-dllb2zfv": true })} <div class="grid grid-cols-3 gap-1 md:gap-2 w-full max-w-7xl mx-auto" data-astro-cid-dllb2zfv> ${collection.works.map((work) => {
    if (!work || !work.slug) return null;
    const workImageUrls = work.imageUrls || [];
    const hasImages = workImageUrls.length > 0;
    const firstImageUrl = hasImages ? processImageUrl(workImageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/${work.slug}`, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]"${addAttribute(`View details for ${work.title}`, "aria-label")} data-astro-cid-dllb2zfv> <article class="w-full" data-astro-cid-dllb2zfv> <!-- Image Container --> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-dllb2zfv> ${hasImages && firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(`${work.title} by Fernando Feijoo`, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" data-astro-cid-dllb2zfv>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-dllb2zfv> <div class="text-center p-4" data-astro-cid-dllb2zfv> <div class="text-gray-400 text-2xl md:text-4xl mb-2" data-astro-cid-dllb2zfv>🖼️</div> <h3 class="text-xs md:text-sm font-medium text-gray-600 line-clamp-2" data-astro-cid-dllb2zfv> ${work.title} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center" data-astro-cid-dllb2zfv> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-dllb2zfv> <h3 class="text-sm md:text-lg font-medium mb-1" data-astro-cid-dllb2zfv>${work.title}</h3> <p class="text-xs opacity-80" data-astro-cid-dllb2zfv>${work.medium}</p> </div> </div> </div> </article> </a>`;
  })} </div> </div>` : renderTemplate`<div class="text-center py-12" data-astro-cid-dllb2zfv> <div class="text-6xl mb-4" data-astro-cid-dllb2zfv>🖼️</div> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-dllb2zfv>No Works Available</h2> <p class="text-gray-600 mb-6" data-astro-cid-dllb2zfv>
This collection is currently being updated. Please check back soon.
</p> <a href="/works" class="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-dllb2zfv>
View Other Collections
</a> </div>`} </div> </section> <!-- Contact Banner --> ${renderComponent($$result3, "ContactBanner", $$ContactBanner, { "data-astro-cid-dllb2zfv": true })} </main> ` })} ` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/prints/[collection].astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/prints/[collection].astro";
const $$url = "/works/prints/[collection]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$collection,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
