import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderSlot, r as renderTemplate } from './astro/server_Dk9GzKiC.mjs';
/* empty css                           */
import 'clsx';

const $$Astro = createAstro("https://fernando-feijoo.com");
const $$SectionContainer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SectionContainer;
  const { id } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")}${spreadAttributes(Astro2.props)} class="flex flex-col gap-28 mt-10 mb-40 px-5 max-sm:px-0 flex-1 w-full" data-astro-cid-tdne747l> ${renderSlot($$result, $$slots["default"])} </section> `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/components/SectionContainer.astro", void 0);

export { $$SectionContainer as $ };
