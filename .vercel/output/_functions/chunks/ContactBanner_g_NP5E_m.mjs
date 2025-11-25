import { a as createComponent, m as maybeRenderHead, e as renderComponent, r as renderTemplate } from './astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
import './index_BRwviSIQ.mjs';
import { $ as $$Image } from './_astro_assets_DkIJtz7k.mjs';
import { $ as $$Cta } from './Cta_DtZwO9-v.mjs';
/* empty css                           */

const BannerImg = new Proxy({"src":"/_astro/bannerimg.D4F45Jl5.jpg","width":1600,"height":900,"format":"jpg","orientation":1}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pacom/PROJECTS/Fernando-Feijoo/public/bannerimg.jpg";
							}
							
							return target[name];
						}
					});

const $$ContactBanner = createComponent(($$result, $$props, $$slots) => {
  const sectionTitle = "Get In Touch";
  const sectionDescription = "Ready to discuss your next project? Let's create something extraordinary together. Contact Fernando Feijoo to explore custom artworks, commissions, or inquire about existing pieces.";
  return renderTemplate`${maybeRenderHead()}<section class="my-6 mx-auto max-w-7xl" aria-label="Contact and introduction" role="region" data-astro-cid-7ksmxkwl> <div class="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-0 overflow-hidden" data-astro-cid-7ksmxkwl> <!-- Content Section --> <article class="bg-black text-white p-8 md:p-12 flex flex-col justify-center order-2 md:order-1" data-astro-cid-7ksmxkwl> <header class="mb-6" data-astro-cid-7ksmxkwl> <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight" data-astro-cid-7ksmxkwl> ${sectionTitle} </h2> <p class="text-base md:text-lg leading-relaxed text-gray-100" data-astro-cid-7ksmxkwl> ${sectionDescription} </p> </header> <div class="mt-auto pt-6" data-astro-cid-7ksmxkwl> ${renderComponent($$result, "Cta", $$Cta, { "href": "/contact", "label": "Contact Fernando", "isDark": false, "data-astro-cid-7ksmxkwl": true })} </div> </article> <!-- Image Section --> <figure class="relative aspect-[4/3] md:aspect-auto order-1 md:order-2" data-astro-cid-7ksmxkwl> ${renderComponent($$result, "Image", $$Image, { "src": BannerImg, "alt": "Fernando Feijoo working in his studio, hands crafting ceramic artwork", "width": 800, "height": 600, "class": "w-full h-full object-cover", "loading": "lazy", "decoding": "async", "quality": 85, "format": "webp", "data-astro-cid-7ksmxkwl": true })} <!-- Subtle overlay for better text readability on mobile --> <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent md:hidden" aria-hidden="true" data-astro-cid-7ksmxkwl></div> </figure> </div> </section> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/Hero/ContactBanner.astro", void 0);

export { $$ContactBanner as $ };
