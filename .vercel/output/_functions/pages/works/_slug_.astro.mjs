import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, f as renderScript, r as renderTemplate, e as renderComponent, u as unescapeHTML, F as Fragment } from '../../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                      */
import { $ as $$Layout } from '../../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../../chunks/TitleSection_B3TR0LwQ.mjs';
import { $ as $$Cta } from '../../chunks/Cta_DtZwO9-v.mjs';
import 'clsx';
/* empty css                                     */
import { $ as $$ContactBanner } from '../../chunks/ContactBanner_g_NP5E_m.mjs';
import { W as WORKS } from '../../chunks/works_9ylaZ1I1.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://fernando-feijoo.com");
const $$ImageModal = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ImageModal;
  const { id = "imageModal" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(id, "id")} class="image-modal hidden fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4" data-astro-cid-qj24g3rp> <div class="relative max-w-full max-h-full flex items-center justify-center" data-astro-cid-qj24g3rp> <!-- Close button --> <button class="modal-close absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10" aria-label="Close modal" data-astro-cid-qj24g3rp> <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qj24g3rp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-qj24g3rp></path> </svg> </button> <!-- Navigation buttons --> <button class="modal-prev absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70" aria-label="Previous image" data-astro-cid-qj24g3rp> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qj24g3rp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" data-astro-cid-qj24g3rp></path> </svg> </button> <button class="modal-next absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-70" aria-label="Next image" data-astro-cid-qj24g3rp> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-qj24g3rp> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" data-astro-cid-qj24g3rp></path> </svg> </button> <!-- Image container --> <div class="modal-image-container flex items-center justify-center max-w-full max-h-full" data-astro-cid-qj24g3rp> <!-- Loading indicator --> <div class="modal-loading absolute inset-0 flex items-center justify-center bg-black bg-opacity-20" data-astro-cid-qj24g3rp> <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-white" data-astro-cid-qj24g3rp></div> </div> <img class="modal-image max-w-full max-h-full object-contain opacity-0 transition-opacity duration-300" src="" alt="" style="max-height: 90vh; max-width: 90vw;" data-astro-cid-qj24g3rp> </div> <!-- Image counter --> <div class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full text-sm" data-astro-cid-qj24g3rp> <span class="modal-current" data-astro-cid-qj24g3rp>1</span> / <span class="modal-total" data-astro-cid-qj24g3rp>1</span> </div> </div> </div> ${renderScript($$result, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/ImageModal.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/ImageModal.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://fernando-feijoo.com");
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
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
  function findWorkBySlug(slugToFind) {
    for (const category of WORKS) {
      if (category.works) {
        const work2 = category.works.find((w) => w.slug === slugToFind);
        if (work2) {
          return {
            work: work2,
            categorySlug: category.slug,
            categoryTitle: category.title
          };
        }
      }
      if (category.collections) {
        for (const collection of category.collections) {
          const work2 = collection.works.find((w) => w.slug === slugToFind);
          if (work2) {
            return {
              work: work2,
              categorySlug: category.slug,
              categoryTitle: category.title,
              collectionSlug: collection.slug,
              collectionTitle: collection.title
            };
          }
        }
      }
    }
    return null;
  }
  const { slug } = Astro2.params;
  if (!slug) {
    return Astro2.redirect("/404");
  }
  const result = findWorkBySlug(slug);
  if (!result) {
    return Astro2.redirect("/404");
  }
  const { work, categorySlug, categoryTitle, collectionSlug, collectionTitle } = result;
  const allWorks = WORKS.flatMap(
    (category) => category.works ? category.works.map((w) => ({
      slug: w.slug,
      title: w.title,
      description: w.description,
      medium: w.medium,
      imageUrls: w.imageUrls,
      dimensions: w.dimensions,
      edition: w.edition,
      price: w.price,
      categorySlug: category.slug,
      categoryTitle: category.title
    })) : category.collections ? category.collections.flatMap(
      (collection) => collection.works.map((w) => ({
        slug: w.slug,
        title: w.title,
        description: w.description,
        medium: w.medium,
        imageUrls: w.imageUrls,
        dimensions: w.dimensions,
        edition: w.edition,
        price: w.price,
        categorySlug: category.slug,
        categoryTitle: category.title,
        collectionSlug: collection.slug,
        collectionTitle: collection.title
      }))
    ) : []
  );
  let relatedWorks = allWorks.filter((w) => {
    if (w.slug === work.slug) return false;
    if (collectionSlug) {
      return w.categorySlug === categorySlug;
    }
    return w.categorySlug === categorySlug;
  }).slice(0, 6);
  if (relatedWorks.length < 6) {
    const categoryWorks = allWorks.filter(
      (w) => w.slug !== work.slug && w.categorySlug === categorySlug && !relatedWorks.some((rw) => rw.slug === w.slug)
      // Avoid duplicates
    ).slice(0, 6 - relatedWorks.length);
    relatedWorks = relatedWorks.concat(categoryWorks);
  }
  const bannerBackgroundImage = work?.imageUrls && work.imageUrls.length > 0 ? processImageUrl(work.imageUrls[0]) : null;
  const processedImageUrls = work?.imageUrls ? work.imageUrls.map((url) => processImageUrl(url)) : [];
  const pageTitle = `${work?.title || "Work"} by Fernando Feijoo`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": pageTitle, "data-astro-cid-4vgqnzw6": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", "  ", '  <script type="application/ld+json">', "<\/script>  ", " "])), renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "work-detail", "data-astro-cid-4vgqnzw6": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-4vgqnzw6> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": work?.title || "Work Not Found", "backgroundImage": bannerBackgroundImage, "data-astro-cid-4vgqnzw6": true })} ${work ? renderTemplate`<section class="py-12" data-astro-cid-4vgqnzw6> <div class="container mx-auto px-4" data-astro-cid-4vgqnzw6> <!-- Breadcrumb --> <nav class="flex items-center space-x-2 text-sm text-gray-500 mb-8" aria-label="Breadcrumb" data-astro-cid-4vgqnzw6> <a href="/" class="hover:text-gray-700 transition-colors" data-astro-cid-4vgqnzw6>Home</a> <span data-astro-cid-4vgqnzw6>/</span> <a href="/works" class="hover:text-gray-700 transition-colors" data-astro-cid-4vgqnzw6>Works</a> <span data-astro-cid-4vgqnzw6>/</span> ${collectionTitle ? renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-4vgqnzw6": true }, { "default": ($$result4) => renderTemplate` <a${addAttribute(`/works/${categorySlug}`, "href")} class="hover:text-gray-700 transition-colors" data-astro-cid-4vgqnzw6>${categoryTitle}</a> <span data-astro-cid-4vgqnzw6>/</span> <a${addAttribute(`/works/${categorySlug}/${collectionSlug}`, "href")} class="hover:text-gray-700 transition-colors" data-astro-cid-4vgqnzw6>${collectionTitle}</a> <span data-astro-cid-4vgqnzw6>/</span> ` })}` : renderTemplate`${renderComponent($$result3, "Fragment", Fragment, { "data-astro-cid-4vgqnzw6": true }, { "default": ($$result4) => renderTemplate` <a${addAttribute(`/works/${categorySlug}`, "href")} class="hover:text-gray-700 transition-colors" data-astro-cid-4vgqnzw6>${categoryTitle}</a> <span data-astro-cid-4vgqnzw6>/</span> ` })}`} <span class="text-gray-900" data-astro-cid-4vgqnzw6>${work.title}</span> </nav> <div class="flex flex-col lg:flex-row gap-12 lg:gap-10 mt-16 items-stretch" data-astro-cid-4vgqnzw6> <!-- Main Image Section --> <div class="w-full lg:w-1/2 flex flex-col" data-astro-cid-4vgqnzw6> <div class="relative flex-grow w-full overflow-hidden bg-gray-100 rounded-lg group" data-astro-cid-4vgqnzw6> ${work.imageUrls && work.imageUrls.length > 0 ? renderTemplate`<img id="main-work-image"${addAttribute(processImageUrl(work.imageUrls[0]), "src")}${addAttribute(work.title, "alt")} class="w-full h-full object-cover cursor-pointer hover:opacity-95 transition-opacity absolute inset-0" loading="eager" fetchpriority="high" decoding="async"${addAttribute(JSON.stringify(processedImageUrls), "data-images")} data-astro-cid-4vgqnzw6>` : renderTemplate`<div class="w-full h-full flex items-center justify-center min-h-[500px]" data-astro-cid-4vgqnzw6> <div class="text-center p-4" data-astro-cid-4vgqnzw6> <div class="text-gray-400 text-4xl mb-2" data-astro-cid-4vgqnzw6>🖼️</div> <p class="text-gray-500" data-astro-cid-4vgqnzw6>No image available</p> </div> </div>`} <!-- Zoom hint overlay --> ${work.imageUrls && work.imageUrls.length > 0 && renderTemplate`<div class="absolute inset-0 flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-4vgqnzw6> <div class="bg-black/50 text-white px-4 py-2 rounded-full backdrop-blur-sm text-sm font-medium" data-astro-cid-4vgqnzw6>
Click to expand
</div> </div>`} </div> </div> <!-- Information Section --> <div class="w-full lg:w-1/2 space-y-8 flex flex-col justify-center py-4" data-astro-cid-4vgqnzw6> <header data-astro-cid-4vgqnzw6> <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-3 leading-tight" data-astro-cid-4vgqnzw6> ${work.title} </h1> <p class="text-xl text-gray-600" data-astro-cid-4vgqnzw6> ${categoryTitle}${collectionTitle && ` \u2022 ${collectionTitle}`} </p> </header> <!-- Description --> ${work.description && work.description.trim() !== "" && renderTemplate`<div class="prose max-w-none" data-astro-cid-4vgqnzw6> <p class="text-gray-700 leading-relaxed text-lg" data-astro-cid-4vgqnzw6>${work.description}</p> </div>`} <!-- Details --> <div class="space-y-6 border-t border-gray-200 pt-6" data-astro-cid-4vgqnzw6> <div data-astro-cid-4vgqnzw6> <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2" data-astro-cid-4vgqnzw6>Medium</h3> <p class="text-gray-900 text-lg" data-astro-cid-4vgqnzw6>${work.medium || `Mixed media`}</p> </div> ${work.dimensions && renderTemplate`<div data-astro-cid-4vgqnzw6> <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2" data-astro-cid-4vgqnzw6>Dimensions</h3> <p class="text-gray-900 text-lg" data-astro-cid-4vgqnzw6>${work.dimensions}</p> </div>`} ${work.edition && renderTemplate`<div data-astro-cid-4vgqnzw6> <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2" data-astro-cid-4vgqnzw6>Edition</h3> <p class="text-gray-900 text-lg" data-astro-cid-4vgqnzw6>${work.edition}</p> </div>`} </div> <!-- Price --> ${work.price && renderTemplate`<div class="border-t border-gray-200 pt-6" data-astro-cid-4vgqnzw6> <h3 class="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2" data-astro-cid-4vgqnzw6>Price</h3> <p class="text-4xl font-bold text-gray-900" data-astro-cid-4vgqnzw6>${work.price}</p> </div>`} <!-- Contact Button --> ${renderComponent($$result3, "Cta", $$Cta, { "href": `mailto:contact@fernandofeijoo.com?subject=Inquiry about ${encodeURIComponent(work.title)}`, "label": "Inquire About This Work", "isDark": true, "data-astro-cid-4vgqnzw6": true })} </div> </div> <!-- Related Works --> ${relatedWorks.length > 0 && renderTemplate`<div class="mt-16 border-t border-gray-200 pt-12" data-astro-cid-4vgqnzw6> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": collectionTitle ? `More from ${collectionTitle}` : `More ${categoryTitle}`, "align": "center", "size": "md", "data-astro-cid-4vgqnzw6": true })} <div class="grid grid-cols-3 gap-1 md:gap-2 w-full max-w-7xl mx-auto" data-astro-cid-4vgqnzw6> ${relatedWorks.map((relatedWork) => {
    if (!relatedWork || !relatedWork.slug) return null;
    const workImageUrls = relatedWork.imageUrls || [];
    const hasImages = workImageUrls.length > 0;
    const firstImageUrl = hasImages ? processImageUrl(workImageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/${relatedWork.slug}`, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]" data-astro-cid-4vgqnzw6> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-4vgqnzw6> ${hasImages && firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(relatedWork.title || "Related work", "alt")} class="w-full h-full object-cover group-hover:opacity-90 transition-opacity" loading="lazy" decoding="async" data-astro-cid-4vgqnzw6>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-4vgqnzw6> <div class="text-center p-4" data-astro-cid-4vgqnzw6> <div class="text-gray-400 text-2xl mb-2" data-astro-cid-4vgqnzw6>🖼️</div> <h3 class="text-xs font-medium text-gray-600 line-clamp-2" data-astro-cid-4vgqnzw6> ${relatedWork.title || "Untitled"} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center" data-astro-cid-4vgqnzw6> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-4vgqnzw6> <h3 class="text-sm md:text-lg font-medium mb-1" data-astro-cid-4vgqnzw6>${relatedWork.title || "Untitled"}</h3> <p class="text-xs opacity-80" data-astro-cid-4vgqnzw6>View Details</p> </div> </div> </div> </a>`;
  })} </div> </div>`} </div> </section>` : renderTemplate`<section class="py-12" data-astro-cid-4vgqnzw6> <div class="container mx-auto px-4 text-center" data-astro-cid-4vgqnzw6> <div class="max-w-md mx-auto" data-astro-cid-4vgqnzw6> <div class="text-6xl mb-4" data-astro-cid-4vgqnzw6>🖼️</div> <h1 class="text-2xl font-bold text-gray-900 mb-4" data-astro-cid-4vgqnzw6>Work Not Found</h1> <p class="text-gray-600 mb-6" data-astro-cid-4vgqnzw6>
The work you're looking for doesn't exist or has been moved.
</p> <a href="/works" class="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium text-white bg-gray-900 hover:bg-gray-800 transition-colors duration-200" data-astro-cid-4vgqnzw6>
View All Works
</a> </div> </div> </section>`} <!-- Contact Banner --> ${renderComponent($$result3, "ContactBanner", $$ContactBanner, { "data-astro-cid-4vgqnzw6": true })} </main> ` }), renderComponent($$result2, "ImageModal", $$ImageModal, { "id": "imageModal", "data-astro-cid-4vgqnzw6": true }), unescapeHTML(JSON.stringify({
    "@context": "https://schema.org",
    "@type": "VisualArtwork",
    "name": work.title,
    "image": processedImageUrls[0] ? `https://fernando-feijoo.com${processedImageUrls[0]}` : void 0,
    "description": work.description,
    "artist": {
      "@type": "Person",
      "name": "Fernando Feijoo"
    },
    "artMedium": work.medium,
    "artForm": categoryTitle,
    "width": work.dimensions ? { "@type": "Distance", "name": work.dimensions } : void 0,
    "offers": work.price ? {
      "@type": "Offer",
      "price": work.price.replace(/[^0-9.]/g, ""),
      "priceCurrency": "GBP",
      "availability": "https://schema.org/InStock"
    } : void 0
  })), renderScript($$result2, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/[slug].astro?astro&type=script&index=0&lang.ts")) })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/[slug].astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/works/[slug].astro";
const $$url = "/works/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
