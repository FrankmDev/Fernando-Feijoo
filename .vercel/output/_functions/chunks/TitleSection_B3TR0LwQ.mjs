import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent, d as renderSlot } from './astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
import './index_BRwviSIQ.mjs';
import { $ as $$Image } from './_astro_assets_DkIJtz7k.mjs';
/* empty css                           */

const BannerImg = new Proxy({"src":"/_astro/ceramic-header.DDbw5s9c.avif","width":1600,"height":900,"format":"avif"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/pacom/PROJECTS/Fernando-Feijoo/public/profile/ceramic-header.avif";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://fernando-feijoo.com");
const $$PageBanner = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageBanner;
  const { title, subtitle, backgroundImage } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="relative w-full h-[400px] flex justify-center items-center" role="region"${addAttribute(title, "aria-label")}> ${backgroundImage ? renderTemplate`<img${addAttribute(backgroundImage, "src")}${addAttribute(title, "alt")} aria-hidden="true" class="absolute inset-0 w-full h-full object-cover" loading="lazy">` : renderTemplate`${renderComponent($$result, "Image", $$Image, { "src": BannerImg, "alt": "Hands working on a ceramic", "aria-hidden": "true", "class": "absolute inset-0 w-full h-full object-cover", "loading": "lazy" })}`} <div class="absolute inset-0 bg-black/60" aria-hidden="true"></div> <div class="relative z-10 text-white text-center px-4"> <h2 class="text-4xl md:text-5xl font-bold" role="heading" aria-level="1"> ${title} </h2> ${subtitle && renderTemplate`<p class="text-xl md:text-2xl mt-2 text-gray-200">${subtitle}</p>`} </div> </section>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/PageBanner.astro", void 0);

const $$Astro = createAstro("https://fernando-feijoo.com");
const $$TitleSection = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TitleSection;
  const {
    title,
    subtitle,
    class: className = "",
    id,
    level = 2,
    align = "left",
    size = "lg"
  } = Astro2.props;
  const HeadingTag = `h${level}`;
  const sizeClasses = {
    sm: "text-lg sm:text-xl md:text-2xl",
    md: "text-xl sm:text-2xl md:text-3xl",
    lg: "text-2xl sm:text-3xl md:text-5xl",
    xl: "text-3xl sm:text-4xl md:text-6xl"
  };
  const alignClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right"
  };
  const headingClasses = [
    "font-bold tracking-tight text-zinc-900 mb-6",
    sizeClasses[size],
    alignClasses[align],
    className
  ].filter(Boolean).join(" ");
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(alignClasses[align], "class")} data-astro-cid-wvqd5tb7> ${renderComponent($$result, "HeadingTag", HeadingTag, { "class": headingClasses, "id": id, "data-astro-cid-wvqd5tb7": true }, { "default": ($$result2) => renderTemplate` ${renderSlot($$result2, $$slots["default"], renderTemplate`${title}`)} ` })} ${subtitle && renderTemplate`<p${addAttribute(`text-base md:text-lg text-gray-600 mt-2 max-w-3xl ${align === "center" ? "mx-auto" : ""}`, "class")} data-astro-cid-wvqd5tb7> ${subtitle} </p>`} </header> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/TitleSection.astro", void 0);

export { $$PageBanner as $, $$TitleSection as a };
