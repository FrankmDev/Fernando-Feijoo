import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, d as renderSlot, r as renderTemplate } from './astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                           */

const $$Astro = createAstro("https://fernando-feijoo.com");
const $$Cta = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Cta;
  const {
    href,
    class: className = "",
    label = "Contact me",
    isDark = false
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} rel="noopener noreferrer"${addAttribute([
    "inline-block w-fit px-4 py-2 sm:px-6 sm:py-3 rounded-xl mt-6 transition duration-300 ease-in-out",
    {
      "bg-black text-white hover:bg-white hover:text-black hover:outline hover:outline-[1px]": isDark,
      "bg-white text-black hover:bg-black hover:text-white hover:outline hover:outline-[1px]": !isDark
    },
    className
  ], "class:list")}${addAttribute(label, "aria-label")} data-astro-cid-i344ymn4> ${renderSlot($$result, $$slots["default"], renderTemplate`${label}`)} </a> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/Cta.astro", void 0);

export { $$Cta as $ };
