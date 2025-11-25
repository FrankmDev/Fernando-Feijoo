import { a as createComponent, m as maybeRenderHead, e as renderComponent, b as addAttribute, r as renderTemplate } from '../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                   */
import { a as $$Socials, $ as $$Layout } from '../chunks/Layout_pwlqf5jp.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createVNode, createBlock, openBlock, Fragment, renderList } from 'vue';
import { C as CarouselItem, a as CarouselContent, b as Carousel, c as CardContent, d as Card } from '../chunks/CarouselPrevious_ABb-BdFG.mjs';
import Autoplay from 'embla-carousel-autoplay';
import { ssrRenderComponent, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
/* empty css                                 */
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
import { $ as $$ContactBanner } from '../chunks/ContactBanner_g_NP5E_m.mjs';
import { W as WORKS } from '../chunks/works_9ylaZ1I1.mjs';
import { $ as $$Cta } from '../chunks/Cta_DtZwO9-v.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SliderHero",
  setup(__props, { expose: __expose }) {
    __expose();
    const plugin = Autoplay({
      delay: 4e3,
      stopOnMouseEnter: true,
      stopOnInteraction: false
    });
    const slides = [
      { id: 1, src: "/heroSlider/TheFall.avif", alt: "The Fall artwork" },
      { id: 2, src: "/heroSlider/2.avif", alt: "The ing on artwork" },
      { id: 3, src: "/heroSlider/3.avif", alt: "Monsters artwork" }
    ];
    const __returned__ = { plugin, slides, get Card() {
      return Card;
    }, get CardContent() {
      return CardContent;
    }, get Carousel() {
      return Carousel;
    }, get CarouselContent() {
      return CarouselContent;
    }, get CarouselItem() {
      return CarouselItem;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Carousel"], mergeProps({
    class: "relative w-full h-[50vh] md:h-auto",
    plugins: [$setup.plugin],
    opts: {
      loop: true
    },
    onMouseenter: $setup.plugin.stop,
    onMouseleave: ($event) => [$setup.plugin.reset(), $setup.plugin.play()]
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["CarouselContent"], { class: "h-full md:h-auto -ml-4" }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<!--[-->`);
              ssrRenderList($setup.slides, (slide) => {
                _push3(ssrRenderComponent($setup["CarouselItem"], {
                  key: slide.id,
                  class: "h-full md:h-auto pl-4"
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(`<div class="p-1 h-full md:h-auto" data-v-be50fb0b${_scopeId3}>`);
                      _push4(ssrRenderComponent($setup["Card"], { class: "h-full md:h-auto" }, {
                        default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                          if (_push5) {
                            _push5(ssrRenderComponent($setup["CardContent"], { class: "flex items-center justify-center h-full md:h-auto p-6 pt-0" }, {
                              default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                if (_push6) {
                                  _push6(`<img${ssrRenderAttr("src", slide.src)}${ssrRenderAttr("alt", slide.alt)}${ssrRenderAttr("loading", slide.id === 1 ? "eager" : "lazy")}${ssrRenderAttr("fetchpriority", slide.id === 1 ? "high" : "auto")} decoding="async" sizes="100vw" draggable="false" class="w-full h-full object-cover select-none animate-ken-burns" data-v-be50fb0b${_scopeId5}>`);
                                } else {
                                  return [
                                    createVNode("img", {
                                      src: slide.src,
                                      alt: slide.alt,
                                      loading: slide.id === 1 ? "eager" : "lazy",
                                      fetchpriority: slide.id === 1 ? "high" : "auto",
                                      decoding: "async",
                                      sizes: "100vw",
                                      draggable: "false",
                                      class: "w-full h-full object-cover select-none animate-ken-burns"
                                    }, null, 8, ["src", "alt", "loading", "fetchpriority"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent5, _scopeId4));
                          } else {
                            return [
                              createVNode($setup["CardContent"], { class: "flex items-center justify-center h-full md:h-auto p-6 pt-0" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: slide.src,
                                    alt: slide.alt,
                                    loading: slide.id === 1 ? "eager" : "lazy",
                                    fetchpriority: slide.id === 1 ? "high" : "auto",
                                    decoding: "async",
                                    sizes: "100vw",
                                    draggable: "false",
                                    class: "w-full h-full object-cover select-none animate-ken-burns"
                                  }, null, 8, ["src", "alt", "loading", "fetchpriority"])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent4, _scopeId3));
                      _push4(`</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-1 h-full md:h-auto" }, [
                          createVNode($setup["Card"], { class: "h-full md:h-auto" }, {
                            default: withCtx(() => [
                              createVNode($setup["CardContent"], { class: "flex items-center justify-center h-full md:h-auto p-6 pt-0" }, {
                                default: withCtx(() => [
                                  createVNode("img", {
                                    src: slide.src,
                                    alt: slide.alt,
                                    loading: slide.id === 1 ? "eager" : "lazy",
                                    fetchpriority: slide.id === 1 ? "high" : "auto",
                                    decoding: "async",
                                    sizes: "100vw",
                                    draggable: "false",
                                    class: "w-full h-full object-cover select-none animate-ken-burns"
                                  }, null, 8, ["src", "alt", "loading", "fetchpriority"])
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent3, _scopeId2));
              });
              _push3(`<!--]-->`);
            } else {
              return [
                (openBlock(), createBlock(Fragment, null, renderList($setup.slides, (slide) => {
                  return createVNode($setup["CarouselItem"], {
                    key: slide.id,
                    class: "h-full md:h-auto pl-4"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "p-1 h-full md:h-auto" }, [
                        createVNode($setup["Card"], { class: "h-full md:h-auto" }, {
                          default: withCtx(() => [
                            createVNode($setup["CardContent"], { class: "flex items-center justify-center h-full md:h-auto p-6 pt-0" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: slide.src,
                                  alt: slide.alt,
                                  loading: slide.id === 1 ? "eager" : "lazy",
                                  fetchpriority: slide.id === 1 ? "high" : "auto",
                                  decoding: "async",
                                  sizes: "100vw",
                                  draggable: "false",
                                  class: "w-full h-full object-cover select-none animate-ken-burns"
                                }, null, 8, ["src", "alt", "loading", "fetchpriority"])
                              ]),
                              _: 2
                            }, 1024)
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1024);
                }), 64))
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["CarouselContent"], { class: "h-full md:h-auto -ml-4" }, {
            default: withCtx(() => [
              (openBlock(), createBlock(Fragment, null, renderList($setup.slides, (slide) => {
                return createVNode($setup["CarouselItem"], {
                  key: slide.id,
                  class: "h-full md:h-auto pl-4"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-1 h-full md:h-auto" }, [
                      createVNode($setup["Card"], { class: "h-full md:h-auto" }, {
                        default: withCtx(() => [
                          createVNode($setup["CardContent"], { class: "flex items-center justify-center h-full md:h-auto p-6 pt-0" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: slide.src,
                                alt: slide.alt,
                                loading: slide.id === 1 ? "eager" : "lazy",
                                fetchpriority: slide.id === 1 ? "high" : "auto",
                                decoding: "async",
                                sizes: "100vw",
                                draggable: "false",
                                class: "w-full h-full object-cover select-none animate-ken-burns"
                              }, null, 8, ["src", "alt", "loading", "fetchpriority"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ])
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ]),
            _: 1
          })
        ];
      }
    }),
    _: 1
  }, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SliderHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SliderHero = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-be50fb0b"]]);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
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
  const allWorks = WORKS.flatMap(
    (category) => category.works ? category.works.map((work) => ({
      ...work,
      categorySlug: category.slug,
      categoryTitle: category.title
    })) : category.collections ? category.collections.flatMap(
      (collection) => collection.works.map((work) => ({
        ...work,
        categorySlug: category.slug,
        categoryTitle: category.title,
        collectionSlug: collection.slug,
        collectionTitle: collection.title
      }))
    ) : []
  );
  const gallery = WORKS.map((category) => {
    const categoryWorks = allWorks.filter((work) => work.categorySlug === category.slug).slice(0, 9);
    return {
      id: category.slug,
      title: category.title,
      items: categoryWorks
    };
  }).filter((category) => category.items.length > 0);
  return renderTemplate`${maybeRenderHead()}<section class="w-full mx-auto flex flex-col items-center" data-astro-cid-3qi2gjp3> <div class="w-full md:px-4 md:py-16" data-astro-cid-3qi2gjp3> ${renderComponent($$result, "SliderHero", SliderHero, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/SliderHero.vue", "client:component-export": "default", "data-astro-cid-3qi2gjp3": true })} </div> <div class="w-full px-4  flex flex-col items-center gap-20" data-astro-cid-3qi2gjp3> ${renderComponent($$result, "Socials", $$Socials, { "data-astro-cid-3qi2gjp3": true })} <section class="flex flex-col items-center gap-10 md:gap-20 w-full mb-10 md:mb-20" data-astro-cid-3qi2gjp3> ${gallery.map(({ id, title, items }) => renderTemplate`<section${addAttribute(id, "id")} class="w-full max-w-7xl" data-astro-cid-3qi2gjp3> <h2 class="text-3xl md:text-4xl font-semibold mb-12 tracking-tight text-zinc-900 text-center" data-astro-cid-3qi2gjp3> ${title} </h2> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 md:gap-2 w-full" data-astro-cid-3qi2gjp3> ${items.map((work) => {
    const workImageUrls = work.imageUrls || [];
    const hasImages = workImageUrls.length > 0;
    const firstImageUrl = hasImages ? processImageUrl(workImageUrls[0]) : "";
    return renderTemplate`<a${addAttribute(`/works/${work.slug}`, "href")} class="group block relative bg-white transition-transform duration-300 hover:scale-[1.02]"${addAttribute(`View details for ${work.title}`, "aria-label")} data-astro-cid-3qi2gjp3> <div class="aspect-square relative overflow-hidden bg-gray-100" data-astro-cid-3qi2gjp3> ${hasImages && firstImageUrl ? renderTemplate`<img${addAttribute(firstImageUrl, "src")}${addAttribute(work.title, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" data-astro-cid-3qi2gjp3>` : renderTemplate`<div class="w-full h-full flex items-center justify-center bg-gray-50" data-astro-cid-3qi2gjp3> <div class="text-center p-4" data-astro-cid-3qi2gjp3> <div class="text-gray-400 text-2xl md:text-4xl mb-2" data-astro-cid-3qi2gjp3>🖼️</div> <h3 class="text-xs md:text-sm font-medium text-gray-600 line-clamp-2" data-astro-cid-3qi2gjp3> ${work.title} </h3> </div> </div>`} <!-- Hover overlay --> <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center" data-astro-cid-3qi2gjp3> <div class="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-3qi2gjp3> <h3 class="text-3xl font-medium mb-1" data-astro-cid-3qi2gjp3>${work.title}</h3> <p class="text-md opacity-80" data-astro-cid-3qi2gjp3>View Details</p> </div> </div> </div> </a>`;
  })} </div>  <div class="text-center my-8" data-astro-cid-3qi2gjp3> ${renderComponent($$result, "Cta", $$Cta, { "href": `/works/${id}`, "label": `View All ${title}`, "isDark": true, "data-astro-cid-3qi2gjp3": true })} </div> </section>`)} </section> ${renderComponent($$result, "ContactBanner", $$ContactBanner, { "data-astro-cid-3qi2gjp3": true })} </div> </section> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/sections/Hero/Hero.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Fernando Feijoo | Artist & Printmaker" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main> ${renderComponent($$result2, "Hero", $$Hero, {})} </main> ` })}`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/index.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
