import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$Layout } from '../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../chunks/TitleSection_B3TR0LwQ.mjs';
import { $ as $$ContactBanner } from '../chunks/ContactBanner_g_NP5E_m.mjs';
import { W as WORKS } from '../chunks/works_9ylaZ1I1.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  function processImageUrl(imageUrl) {
    if (!imageUrl) return null;
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
  function getFirstImageFromWorks(works) {
    if (!works || works.length === 0) return null;
    for (const work of works) {
      if (work.imageUrls && work.imageUrls.length > 0) {
        const processed = processImageUrl(work.imageUrls[0]);
        if (processed) return processed;
      }
    }
    return null;
  }
  const processedCategories = WORKS.map((category) => {
    if (category.collections) {
      const collections = category.collections.map(
        (collection) => ({
          title: collection.title,
          slug: collection.slug,
          description: collection.description,
          workCount: collection.works.length,
          href: `/works/${category.slug}/${collection.slug}`,
          imageUrl: getFirstImageFromWorks(collection.works),
          imageAlt: `${collection.title} collection by Fernando Feijoo`
        })
      );
      return {
        ...category,
        collections
      };
    } else if (category.works) {
      const collections = [
        {
          title: category.title,
          slug: category.slug,
          description: `Explore ${category.title.toLowerCase()} works`,
          workCount: category.works.length,
          href: `/works/${category.slug}`,
          imageUrl: getFirstImageFromWorks(category.works),
          imageAlt: `${category.title} works by Fernando Feijoo`
        }
      ];
      return {
        ...category,
        collections
      };
    }
    return {
      ...category,
      collections: []
    };
  });
  const categoriesWithContent = processedCategories.filter(
    (category) => category.collections && category.collections.length > 0
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Works - Fernando Feijoo", "data-astro-cid-3vzc7iem": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "works", "data-astro-cid-3vzc7iem": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-3vzc7iem> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": "Works", "data-astro-cid-3vzc7iem": true })} <section class="py-12" data-astro-cid-3vzc7iem> <div class="container mx-auto px-4" data-astro-cid-3vzc7iem> <div class="text-center mb-12" data-astro-cid-3vzc7iem> <p class="text-lg text-gray-600 max-w-2xl mx-auto" data-astro-cid-3vzc7iem>
Explore Fernando Feijoo's diverse body of work spanning prints,
              artist books, ceramics, drawings, and mixed media pieces.
</p> </div> ${categoriesWithContent.map((category) => renderTemplate`<div class="mb-16" data-astro-cid-3vzc7iem> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": category.title, "class": "text-center mb-8", "data-astro-cid-3vzc7iem": true })} <div class="grid grid-cols-3 gap-1 md:gap-2 w-full max-w-7xl mx-auto" data-astro-cid-3vzc7iem> ${category.collections?.map((collection) => renderTemplate`<a${addAttribute(collection.href, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]"${addAttribute(`View ${collection.title} collection`, "aria-label")} data-astro-cid-3vzc7iem> <article class="w-full" data-astro-cid-3vzc7iem> <!-- Image Container --> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-3vzc7iem> ${collection.imageUrl ? renderTemplate`<img${addAttribute(collection.imageUrl, "src")}${addAttribute(collection.imageAlt, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" data-astro-cid-3vzc7iem>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-3vzc7iem> <div class="text-center p-4" data-astro-cid-3vzc7iem> <div class="text-gray-400 text-2xl md:text-4xl mb-2" data-astro-cid-3vzc7iem> ${category.title === "Prints" ? "\u{1F5BC}\uFE0F" : category.title === "Artist Books" ? "\u{1F4DA}" : category.title === "Ceramics" ? "\u{1F3FA}" : category.title === "Drawings" ? "\u270F\uFE0F" : "\u{1F3A8}"} </div> <h3 class="text-xs md:text-sm font-medium text-gray-600 line-clamp-2" data-astro-cid-3vzc7iem> ${collection.title} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center" data-astro-cid-3vzc7iem> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-3vzc7iem> <h3 class="text-sm md:text-lg font-medium mb-1" data-astro-cid-3vzc7iem>${collection.title}</h3> <p class="text-xs opacity-80" data-astro-cid-3vzc7iem> ${collection.workCount} ${collection.workCount === 1 ? "work" : "works"} </p> </div> </div> </div> </article> </a>`)} </div> </div>`)} <!-- Call to Action --> <div class="text-center mt-16 pt-12 border-t border-gray-200" data-astro-cid-3vzc7iem> <h2 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-3vzc7iem>
Interested in a Piece?
</h2> <p class="text-gray-600 mb-6 max-w-md mx-auto" data-astro-cid-3vzc7iem>
Get in touch to inquire about availability, pricing, or
              commissioning new work.
</p> <a href="/contact" class="inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-900 hover:bg-gray-700 transition-colors duration-200" data-astro-cid-3vzc7iem>
Contact Fernando
</a> </div> </div> </section> <!-- Contact Banner --> ${renderComponent($$result3, "ContactBanner", $$ContactBanner, { "data-astro-cid-3vzc7iem": true })} </main> ` })} ` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/index.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/index.astro";
const $$url = "/works";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
