import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate } from './astro/server_Dk9GzKiC.mjs';
import 'clsx';

const $$Astro = createAstro("https://fernando-feijoo.com");
const $$MapIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$MapIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color="#fff" fill="none"> <path d="M15.5 11C15.5 12.933 13.933 14.5 12 14.5C10.067 14.5 8.5 12.933 8.5 11C8.5 9.067 10.067 7.5 12 7.5C13.933 7.5 15.5 9.067 15.5 11Z" stroke="currentColor" stroke-width="1.5"></path> <path d="M12 2C16.8706 2 21 6.03298 21 10.9258C21 15.8965 16.8033 19.3847 12.927 21.7567C12.6445 21.9162 12.325 22 12 22C11.675 22 11.3555 21.9162 11.073 21.7567C7.2039 19.3616 3 15.9137 3 10.9258C3 6.03298 7.12944 2 12 2Z" stroke="currentColor" stroke-width="1.5"></path> </svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/map-icon.astro", void 0);

export { $$MapIcon as $ };
