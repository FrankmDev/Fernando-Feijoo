import { a as createComponent, e as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_B9C6rjhV.mjs';
export { renderers } from '../renderers.mjs';

const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Page Not Found" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "not-found" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center"> <div class="text-center"> <h1 class="text-6xl font-bold mb-4">404</h1> <h2 class="text-2xl mb-4">Page Not Found</h2> <p class="text-gray-600 mb-8">The page you're looking for doesn't exist.</p> <a href="/" class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
Go Home
</a> </div> </main> ` })} ` })}`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/404.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
