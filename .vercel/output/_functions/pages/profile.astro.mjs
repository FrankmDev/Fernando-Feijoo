import { a as createComponent, m as maybeRenderHead, r as renderTemplate, e as renderComponent, b as addAttribute } from '../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$SectionContainer } from '../chunks/SectionContainer_B9C6rjhV.mjs';
import { a as $$TitleSection, $ as $$PageBanner } from '../chunks/TitleSection_B3TR0LwQ.mjs';
import { $ as $$Layout } from '../chunks/Layout_pwlqf5jp.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createVNode } from 'vue';
import { C as CarouselItem, a as CarouselContent, b as Carousel, c as CardContent, d as Card } from '../chunks/CarouselPrevious_ABb-BdFG.mjs';
import Autoplay from 'embla-carousel-autoplay';
import { ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
import { $ as $$ContactBanner } from '../chunks/ContactBanner_g_NP5E_m.mjs';
import { $ as $$Cta } from '../chunks/Cta_DtZwO9-v.mjs';
import { $ as $$MapIcon } from '../chunks/map-icon_CLqn08pQ.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "SliderImg",
  setup(__props, { expose: __expose }) {
    __expose();
    const plugin = Autoplay({
      delay: 2e3,
      stopOnMouseEnter: true,
      stopOnInteraction: false
    });
    const __returned__ = { plugin, get Card() {
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
    class: "relative w-full max-w-[500px]",
    plugins: [$setup.plugin],
    onMouseenter: $setup.plugin.stop,
    onMouseleave: ($event) => [$setup.plugin.reset(), $setup.plugin.play()]
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent($setup["CarouselContent"], null, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(ssrRenderComponent($setup["CarouselItem"], null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="p-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent($setup["Card"], null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img src="/profile/studio.avif" alt="Fernando Feijoo in his studio workspace" class="w-full h-full object-cover" loading="lazy" decoding="async"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: "/profile/studio.avif",
                                    alt: "Fernando Feijoo in his studio workspace",
                                    class: "w-full h-full object-cover",
                                    loading: "lazy",
                                    decoding: "async"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/studio.avif",
                                  alt: "Fernando Feijoo in his studio workspace",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-1" }, [
                        createVNode($setup["Card"], null, {
                          default: withCtx(() => [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/studio.avif",
                                  alt: "Fernando Feijoo in his studio workspace",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent($setup["CarouselItem"], null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="p-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent($setup["Card"], null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img src="/profile/columbian.avif" alt="Fernando Feijoo working with Columbian printing press" class="w-full h-full object-cover" loading="lazy" decoding="async"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: "/profile/columbian.avif",
                                    alt: "Fernando Feijoo working with Columbian printing press",
                                    class: "w-full h-full object-cover",
                                    loading: "lazy",
                                    decoding: "async"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/columbian.avif",
                                  alt: "Fernando Feijoo working with Columbian printing press",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-1" }, [
                        createVNode($setup["Card"], null, {
                          default: withCtx(() => [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/columbian.avif",
                                  alt: "Fernando Feijoo working with Columbian printing press",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent($setup["CarouselItem"], null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="p-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent($setup["Card"], null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img src="/profile/printing.avif" alt="Fernando Feijoo during the printing process" class="w-full h-full object-cover" loading="lazy" decoding="async"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: "/profile/printing.avif",
                                    alt: "Fernando Feijoo during the printing process",
                                    class: "w-full h-full object-cover",
                                    loading: "lazy",
                                    decoding: "async"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/printing.avif",
                                  alt: "Fernando Feijoo during the printing process",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-1" }, [
                        createVNode($setup["Card"], null, {
                          default: withCtx(() => [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/printing.avif",
                                  alt: "Fernando Feijoo during the printing process",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(ssrRenderComponent($setup["CarouselItem"], null, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<div class="p-1"${_scopeId3}>`);
                    _push4(ssrRenderComponent($setup["Card"], null, {
                      default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                        if (_push5) {
                          _push5(ssrRenderComponent($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                              if (_push6) {
                                _push6(`<img src="/profile/working.avif" alt="Fernando Feijoo working on an art piece" class="w-full h-full object-cover" loading="lazy" decoding="async"${_scopeId5}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    src: "/profile/working.avif",
                                    alt: "Fernando Feijoo working on an art piece",
                                    class: "w-full h-full object-cover",
                                    loading: "lazy",
                                    decoding: "async"
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent5, _scopeId4));
                        } else {
                          return [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/working.avif",
                                  alt: "Fernando Feijoo working on an art piece",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent4, _scopeId3));
                    _push4(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-1" }, [
                        createVNode($setup["Card"], null, {
                          default: withCtx(() => [
                            createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  src: "/profile/working.avif",
                                  alt: "Fernando Feijoo working on an art piece",
                                  class: "w-full h-full object-cover",
                                  loading: "lazy",
                                  decoding: "async"
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
            } else {
              return [
                createVNode($setup["CarouselItem"], null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-1" }, [
                      createVNode($setup["Card"], null, {
                        default: withCtx(() => [
                          createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/profile/studio.avif",
                                alt: "Fernando Feijoo in his studio workspace",
                                class: "w-full h-full object-cover",
                                loading: "lazy",
                                decoding: "async"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode($setup["CarouselItem"], null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-1" }, [
                      createVNode($setup["Card"], null, {
                        default: withCtx(() => [
                          createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/profile/columbian.avif",
                                alt: "Fernando Feijoo working with Columbian printing press",
                                class: "w-full h-full object-cover",
                                loading: "lazy",
                                decoding: "async"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode($setup["CarouselItem"], null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-1" }, [
                      createVNode($setup["Card"], null, {
                        default: withCtx(() => [
                          createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/profile/printing.avif",
                                alt: "Fernando Feijoo during the printing process",
                                class: "w-full h-full object-cover",
                                loading: "lazy",
                                decoding: "async"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                }),
                createVNode($setup["CarouselItem"], null, {
                  default: withCtx(() => [
                    createVNode("div", { class: "p-1" }, [
                      createVNode($setup["Card"], null, {
                        default: withCtx(() => [
                          createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                            default: withCtx(() => [
                              createVNode("img", {
                                src: "/profile/working.avif",
                                alt: "Fernando Feijoo working on an art piece",
                                class: "w-full h-full object-cover",
                                loading: "lazy",
                                decoding: "async"
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode($setup["CarouselContent"], null, {
            default: withCtx(() => [
              createVNode($setup["CarouselItem"], null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-1" }, [
                    createVNode($setup["Card"], null, {
                      default: withCtx(() => [
                        createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/profile/studio.avif",
                              alt: "Fernando Feijoo in his studio workspace",
                              class: "w-full h-full object-cover",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode($setup["CarouselItem"], null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-1" }, [
                    createVNode($setup["Card"], null, {
                      default: withCtx(() => [
                        createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/profile/columbian.avif",
                              alt: "Fernando Feijoo working with Columbian printing press",
                              class: "w-full h-full object-cover",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode($setup["CarouselItem"], null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-1" }, [
                    createVNode($setup["Card"], null, {
                      default: withCtx(() => [
                        createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/profile/printing.avif",
                              alt: "Fernando Feijoo during the printing process",
                              class: "w-full h-full object-cover",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              }),
              createVNode($setup["CarouselItem"], null, {
                default: withCtx(() => [
                  createVNode("div", { class: "p-1" }, [
                    createVNode($setup["Card"], null, {
                      default: withCtx(() => [
                        createVNode($setup["CardContent"], { class: "flex aspect-square items-center justify-center p-0 overflow-hidden" }, {
                          default: withCtx(() => [
                            createVNode("img", {
                              src: "/profile/working.avif",
                              alt: "Fernando Feijoo working on an art piece",
                              class: "w-full h-full object-cover",
                              loading: "lazy",
                              decoding: "async"
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/SliderImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const SliderImg = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$RightArrowIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" color="#000000" fill="none"> <path d="M9.00005 6C9.00005 6 15 10.4189 15 12C15 13.5812 9 18 9 18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/rightArrow-icon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Profile = createComponent(($$result, $$props, $$slots) => {
  const COLLECTIONS = [
    "Ashmolean Museum, Oxford, England",
    "Bodleian Library, Oxford University, England",
    "British Museum, London, England",
    "The Pallant House Prints and Drawings Collection, Chichester, West Sussex, England",
    "Jiangsu Museum of Contemporary Art, China",
    "V&A Print collection London, England",
    "University of Wales Aberystwyth, Wales",
    "Winchester School of Art Library, England"
  ];
  const AWARDS_PUBLICATIONS = [
    {
      year: 2020,
      title: "Hawthorn printmaking purchase prize, RE exhibition Bankside gallery London"
    },
    {
      year: 2018,
      title: "The Artist's Eye Award by Printmaking Today Magazine on artist book RUN"
    },
    {
      year: 2018,
      title: "Hawthorn printmaking purchase prize, RE exhibition Bankside gallery London"
    },
    { year: 2012, title: "Clifford Chance purchase prize, RE London" },
    {
      year: 2011,
      title: "London Lives Printmaking prize highly commended entry"
    },
    {
      year: 2008,
      title: "Winner of the London Print Studio Prize at the RE annual exhibition"
    },
    {
      year: 2007,
      title: "Prize winning book 14th Tallinn print triennial, held at the Kumu Art Museum Estonia"
    },
    {
      year: 2005,
      title: "Grant from the Birgit Skiold foundation to fund new artist book project"
    },
    {
      year: 2004,
      title: "Winner of the 'Design a Book of Fables' competition in association with the FPBA"
    }
  ];
  const RESIDENCES = [
    "Franz Maserelle Centrum, Kasterlle, Belgium",
    "La Curtiduria Arts Centre Oaxaca, Mexico",
    "London Print Studio, London UK"
  ];
  const STUDIO_IMAGES = [
    {
      src: "/profile/cutting-line.avif",
      alt: "Cutting line process in Fernando Feijoo's studio"
    },
    {
      src: "/profile/inking-up.avif",
      alt: "Inking up the printing press"
    },
    {
      src: "/profile/polishing.avif",
      alt: "Polishing artwork in the studio"
    },
    {
      src: "/profile/rollin.avif",
      alt: "Rolling process during printmaking"
    }
  ];
  const pageDescription = "Fernando Feijoo is a multi-disciplinary artist exploring printmaking, drawing, painting, artist books and ceramics. MA in Fine Art Printmaking, Honorary member of the Royal Society of Painters & Printmakers London UK.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Profile - Fernando Feijoo", "description": pageDescription, "data-astro-cid-wwes6yjo": true }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", ' <section class="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12 md:mt-16" aria-label="Collections and Awards" data-astro-cid-wwes6yjo> <div data-astro-cid-wwes6yjo> ', ' <ul class="space-y-4 mb-8" role="list" data-astro-cid-wwes6yjo> ', " </ul> ", ' <ul class="space-y-4" role="list" data-astro-cid-wwes6yjo> ', " </ul> </div> <div data-astro-cid-wwes6yjo> ", ' <ul class="space-y-4" role="list" data-astro-cid-wwes6yjo> ', ' </ul> </div> </section> <section class="container mx-auto px-4 max-w-6xl mt-12 md:mt-16" aria-label="Studio Gallery" data-astro-cid-wwes6yjo> ', ' <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 mt-6" data-astro-cid-wwes6yjo> ', ` </div> </section>  <div id="lightbox" class="lightbox" data-astro-cid-wwes6yjo> <button id="lightbox-close" class="lightbox-close" aria-label="Close lightbox" data-astro-cid-wwes6yjo>&times;</button> <img id="lightbox-img" src="" alt="" class="lightbox-content" data-astro-cid-wwes6yjo> </div>  <script>
    const studioImages = document.querySelectorAll(".studio-image");
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxClose = document.getElementById("lightbox-close");

    const images = [
      {
        src: "/profile/cutting-line.avif",
        alt: "Cutting line process in Fernando Feijoo's studio",
      },
      {
        src: "/profile/inking-up.avif",
        alt: "Inking up the printing press",
      },
      {
        src: "/profile/polishing.avif",
        alt: "Polishing artwork in the studio",
      },
      {
        src: "/profile/rollin.avif",
        alt: "Rolling process during printmaking",
      },
    ];

    studioImages.forEach((figure) => {
      figure.addEventListener("click", () => {
        const index = parseInt(figure.getAttribute("data-index") || "0");
        const image = images[index];
        if (lightboxImg && lightbox) {
          lightboxImg.src = image.src;
          lightboxImg.alt = image.alt;
          lightbox.classList.add("active");
        }
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener("click", () => {
        if (lightbox) {
          lightbox.classList.remove("active");
        }
      });
    }

    if (lightbox) {
      lightbox.addEventListener("click", (e) => {
        if (e.target === lightbox) {
          lightbox.classList.remove("active");
        }
      });
    }

    // Close on Escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && lightbox?.classList.contains("active")) {
        lightbox.classList.remove("active");
      }
    });
  <\/script> <section class="container mx-auto px-4 max-w-6xl my-12 md:mt-16" aria-label="Artist's statement" data-astro-cid-wwes6yjo> `, ` <p class="text-base md:text-xl mt-4 mx-auto leading-relaxed" data-astro-cid-wwes6yjo>
My work has a sense of humor within it even though sometimes I make images
      which reflect the darker side of human nature. I am interested in
<em data-astro-cid-wwes6yjo>social and political issues</em> and reflect these themes within my work.
      My narrative images have hidden layers of information within them which the
      viewer can find each time they return to the work. The closer you are drawn
      into the image, the more you understand about the characters and the lives
      they lead. The process of drawing is fundamental for me. I enjoy how it translates
      through different print processes and creates alternate styles of work. I see
      myself as a journeyman: travelling around, absorbing all the variety of cultural
      differences and architectural styles when I visit a new city, exploring people's
      lives and conditions in the twenty first century. These observations are then
      reflected throughout my work as a series of sequential narrative images. I
      enjoy exploring new ways of making work through combining different media together,
      working with the interactions and juxtapositions of materials and techniques,
      which encourage fresh viewpoints and outcomes. Drawing is a powerful medium
      which allows me to push my ideas into different directions and create the fantastic.
      There are no rules to be followed: just pure experimentation and fun to be
      had.
</p> <p class="text-2xl md:text-3xl italic mt-6" data-astro-cid-wwes6yjo>Fernando Feijoo - Artist</p> </section> `, " "])), renderComponent($$result2, "SectionContainer", $$SectionContainer, { "data-astro-cid-wwes6yjo": true }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": "Profile", "data-astro-cid-wwes6yjo": true })} ${maybeRenderHead()}<div class="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" data-astro-cid-wwes6yjo> <figure class="mx-auto w-full" data-astro-cid-wwes6yjo> ${renderComponent($$result3, "SliderImg", SliderImg, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/SliderImg.vue", "client:component-export": "default", "data-astro-cid-wwes6yjo": true })} </figure> <article class="flex flex-col justify-center mx-auto text-gray-800" data-astro-cid-wwes6yjo> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Fernando Feijoo", "id": "profile", "data-astro-cid-wwes6yjo": true })} <p class="text-sm md:text-base mt-4 leading-relaxed" data-astro-cid-wwes6yjo>
Feijoo holds an MA in Fine Art Printmaking from Winchester Art School
          and a BA in Illustration from Maidstone, Kent. He solidified his
          technical expertise training as a master printer at the renowned
          Curwen Studio before transitioning into the field of Art education. <br data-astro-cid-wwes6yjo>
As a multi-disciplinary artist, Feijoo’s practice fluidly explores a
          wide range of media, creating a dialogue between printmaking, drawing,
          painting, artist books, and ceramics. He has exhibited his work
          internationally, winning many prestigious prizes and awards, with his
          pieces acquired by numerous permanent collections. Currently, he is
          also a distinguished Honorary member of the Royal Society of Painters
          & Printmakers in London.
</p> ${renderComponent($$result3, "Cta", $$Cta, { "href": "/contact", "label": "Contact me", "isDark": true, "class": "mt-6", "data-astro-cid-wwes6yjo": true })} </article> </div> ` }), renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Collections", "id": "collections", "data-astro-cid-wwes6yjo": true }), COLLECTIONS.map((collection) => renderTemplate`<li class="flex items-start gap-3" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "MapIcon", $$MapIcon, { "aria-hidden": "true", "class": "w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5", "data-astro-cid-wwes6yjo": true })} <p class="text-sm md:text-base" data-astro-cid-wwes6yjo>${collection}</p> </li>`), renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Residences", "id": "residences", "data-astro-cid-wwes6yjo": true }), RESIDENCES.map((residence) => renderTemplate`<li class="flex items-start gap-3 italic" data-astro-cid-wwes6yjo> ${renderComponent($$result2, "RightArrowIcon", $$RightArrowIcon, { "aria-hidden": "true", "class": "w-5 h-5 text-gray-600 flex-shrink-0 mt-0.5", "data-astro-cid-wwes6yjo": true })} <p class="text-sm md:text-base" data-astro-cid-wwes6yjo>${residence}</p> </li>`), renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Awards & Publications", "id": "awards", "data-astro-cid-wwes6yjo": true }), AWARDS_PUBLICATIONS.map((award) => renderTemplate`<li class="flex items-start gap-4 md:gap-6" data-astro-cid-wwes6yjo> <span class="bg-black text-white text-sm md:text-md font-semibold px-2 py-1 flex-shrink-0" data-astro-cid-wwes6yjo> ${award.year} </span> <p class="text-sm md:text-base" data-astro-cid-wwes6yjo>${award.title}</p> </li>`), renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Studio", "class": "text-left", "id": "studio", "data-astro-cid-wwes6yjo": true }), STUDIO_IMAGES.map((image, index) => renderTemplate`<figure class="relative overflow-hidden bg-gray-100 aspect-square group cursor-pointer studio-image"${addAttribute(index, "data-index")} data-astro-cid-wwes6yjo> <img${addAttribute(image.src, "src")}${addAttribute(image.alt, "alt")} class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" data-astro-cid-wwes6yjo> </figure>`), renderComponent($$result2, "TitleSection", $$TitleSection, { "title": "Artist's statement", "class": "text-left", "id": "statement", "data-astro-cid-wwes6yjo": true }), renderComponent($$result2, "ContactBanner", $$ContactBanner, { "data-astro-cid-wwes6yjo": true })) })}`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/profile.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/profile.astro";
const $$url = "/profile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Profile,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
