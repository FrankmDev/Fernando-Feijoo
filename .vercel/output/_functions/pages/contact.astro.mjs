import { c as createAstro, a as createComponent, m as maybeRenderHead, s as spreadAttributes, r as renderTemplate, b as addAttribute, e as renderComponent } from '../chunks/astro/server_Dk9GzKiC.mjs';
import 'kleur/colors';
/* empty css                                   */
import { $ as $$Layout, a as $$Socials } from '../chunks/Layout_pwlqf5jp.mjs';
import { $ as $$SectionContainer } from '../chunks/SectionContainer_B9C6rjhV.mjs';
import { $ as $$PageBanner, a as $$TitleSection } from '../chunks/TitleSection_B3TR0LwQ.mjs';
import { defineComponent, useSSRContext, reactive, ref, computed, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr } from 'vue/server-renderer';
/* empty css                                   */
import { _ as _export_sfc } from '../chunks/_plugin-vue_export-helper_pcqpp-6-.mjs';
import 'clsx';
import { $ as $$MapIcon } from '../chunks/map-icon_CLqn08pQ.mjs';
import { $ as $$Cta } from '../chunks/Cta_DtZwO9-v.mjs';
export { renderers } from '../renderers.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Form",
  setup(__props, { expose: __expose }) {
    __expose();
    const form = reactive({
      name: "",
      email: "",
      message: ""
    });
    const isSubmitting = ref(false);
    const statusMessage = ref("");
    const isSuccess = ref(false);
    const statusClasses = computed(() => ({
      "border border-green-500 bg-green-50 text-green-700": isSuccess.value,
      "border border-red-500 bg-red-50 text-red-700": !isSuccess.value && statusMessage.value
    }));
    const resetForm = () => {
      form.name = "";
      form.email = "";
      form.message = "";
    };
    const showMessage = (message, success = false) => {
      statusMessage.value = message;
      isSuccess.value = success;
      setTimeout(() => {
        statusMessage.value = "";
        isSuccess.value = false;
      }, 5e3);
    };
    const submitForm = async () => {
      if (isSubmitting.value) return;
      try {
        isSubmitting.value = true;
        statusMessage.value = "";
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
          showMessage("All fields are required");
          return;
        }
        console.log("\u{1F4E4} Sending form data to /api/contact");
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            name: form.name.trim(),
            email: form.email.trim(),
            message: form.message.trim()
          })
        });
        console.log("\u{1F4E5} Response status:", response.status);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("\u{1F4C4} Response data:", result);
        if (result.success) {
          showMessage(result.message, true);
          resetForm();
        } else {
          showMessage(result.error || "Failed to send message");
        }
      } catch (error) {
        console.error("\u274C Error submitting form:", error);
        if (error instanceof Error) {
          showMessage(`Error: ${error.message}`);
        } else {
          showMessage("Connection error. Please try again.");
        }
      } finally {
        isSubmitting.value = false;
      }
    };
    const __returned__ = { form, isSubmitting, statusMessage, isSuccess, statusClasses, resetForm, showMessage, submitForm };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-2xl mx-auto" }, _attrs))} data-v-6352b4d4><h2 class="text-3xl font-light text-center mb-12" data-v-6352b4d4>Send a Message</h2>`);
  if ($setup.statusMessage) {
    _push(`<div class="${ssrRenderClass([$setup.statusClasses, "mb-6 p-4 text-center"])}" data-v-6352b4d4>${ssrInterpolate($setup.statusMessage)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<form class="space-y-6" data-v-6352b4d4><div data-v-6352b4d4><label for="name" class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide" data-v-6352b4d4> Name </label><input type="text" id="name"${ssrRenderAttr("value", $setup.form.name)} required${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50" placeholder="Your name" data-v-6352b4d4></div><div data-v-6352b4d4><label for="email" class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide" data-v-6352b4d4> Email </label><input type="email" id="email"${ssrRenderAttr("value", $setup.form.email)} required${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50" placeholder="Your email" data-v-6352b4d4></div><div data-v-6352b4d4><label for="message" class="block text-sm font-medium text-gray-700 mb-2 uppercase tracking-wide" data-v-6352b4d4> Message </label><textarea id="message" rows="6" required${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} class="w-full px-0 py-3 border-0 border-b border-black bg-transparent text-black resize-none focus:outline-none focus:border-gray-600 transition-colors duration-300 disabled:opacity-50" placeholder="Your message" data-v-6352b4d4>${ssrInterpolate($setup.form.message)}</textarea></div><div class="text-center pt-4" data-v-6352b4d4><button type="submit"${ssrIncludeBooleanAttr($setup.isSubmitting) ? " disabled" : ""} class="px-8 py-3 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-all duration-300 uppercase tracking-wide font-medium disabled:opacity-50 disabled:cursor-not-allowed" data-v-6352b4d4>${ssrInterpolate($setup.isSubmitting ? "SENDING..." : "SEND MESSAGE")}</button></div></form></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Form.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Form = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-6352b4d4"]]);

const $$Astro$1 = createAstro("https://fernando-feijoo.com");
const $$MailIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MailIcon;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(Astro2.props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="21" height="21" color="#fff" fill="none"> <path d="M2 6L8.91302 9.91697C11.4616 11.361 12.5384 11.361 15.087 9.91697L22 6" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path> <path d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"></path> </svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/mail-icon.astro", void 0);

const $$Astro = createAstro("https://fernando-feijoo.com");
const $$PhoneIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$PhoneIcon;
  const { class: className } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" color="#fff" width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${addAttribute(className, "class")} aria-hidden="true" focusable="false"> <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path> </svg>`;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/icons/phone-icon.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const contactData = [
    {
      icon: $$MailIcon,
      text: "info@fernando-feijoo.com",
      href: "mailto:info@fernando-feijoo.com",
      ariaLabel: "Send email to Fernando Feijoo",
      label: "EMAIL",
      itemprop: "email"
    },
    {
      icon: $$MapIcon,
      text: "Cambridge",
      href: "https://www.google.com/maps/place/Cambridge,+UK",
      ariaLabel: "View location in Cambridge, UK",
      label: "LOCATION",
      itemprop: "address"
    },
    {
      icon: $$PhoneIcon,
      text: "+44 1223 123456",
      href: "tel:+441223123456",
      ariaLabel: "Call Fernando Feijoo",
      label: "PHONE",
      itemprop: "telephone"
    }
  ];
  const pageDescription = "Get in touch with Fernando Feijoo. Contact information, location in Cambridge, UK, and inquiry form for commissions, exhibitions, and collaborations.";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact - Fernando Feijoo", "description": pageDescription, "data-astro-cid-uw5kdbxl": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "SectionContainer", $$SectionContainer, { "id": "contact", "data-astro-cid-uw5kdbxl": true }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<main data-astro-cid-uw5kdbxl> ${renderComponent($$result3, "PageBanner", $$PageBanner, { "title": "Contact", "data-astro-cid-uw5kdbxl": true })} <blockquote class="text-4xl px-10 text-center italic my-20" lang="en" data-astro-cid-uw5kdbxl>
"The world is full of conflict and confusion. In my work I try to
        interpret the chaos in positive, humorous and imaginative ways."
</blockquote> <section class="container mx-auto px-4 max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-center" aria-labelledby="contact-heading" itemscope itemtype="https://schema.org/ContactPoint" data-astro-cid-uw5kdbxl> <!-- Left side: Static Image --> <figure class="w-full order-2 md:order-1" role="figure" aria-label="Fernando Feijoo working with Columbian printing press" data-astro-cid-uw5kdbxl> <img src="/profile/columbian.avif" alt="Fernando Feijoo working with a Columbian printing press in his studio" class="w-full max-h-[450px] object-cover object-top rounded-lg shadow-lg md:max-h-[700px]" loading="eager" fetchpriority="high" decoding="async" width="600" height="700" data-astro-cid-uw5kdbxl> </figure> <!-- Right side: Contact Information --> <div class="flex flex-col items-start justify-center gap-6 order-1 md:order-2" data-astro-cid-uw5kdbxl> <div data-astro-cid-uw5kdbxl> ${renderComponent($$result3, "TitleSection", $$TitleSection, { "title": "Get in Touch", "data-astro-cid-uw5kdbxl": true })} <p class="text-lg text-gray-700 leading-relaxed" data-astro-cid-uw5kdbxl>
I'd love to hear from you. Whether you're interested in
              commissioning a piece, discussing a collaboration, or simply want
              to learn more about my work, please don't hesitate to reach out.
</p> </div> <!-- Contact Details --> <div class="flex flex-col gap-6 w-full" data-astro-cid-uw5kdbxl> ${contactData.map(
    ({ icon: Icon, text, href, ariaLabel, label, itemprop }) => renderTemplate`<address class="flex gap-4 items-center group not-italic" data-astro-cid-uw5kdbxl> <figure class="bg-black border-2 border-black rounded-full p-3 group-hover:bg-white transition duration-300 ease-in-out flex-shrink-0" role="img"${addAttribute(`${label} icon`, "aria-label")} data-astro-cid-uw5kdbxl> ${renderComponent($$result3, "Icon", Icon, { "class": "group-hover:text-black transition duration-300 ease-in-out", "data-astro-cid-uw5kdbxl": true })} </figure> <div class="flex flex-col" data-astro-cid-uw5kdbxl> <span class="text-sm font-medium text-gray-600 tracking-wider uppercase mb-1" data-astro-cid-uw5kdbxl> ${label} </span> <a${addAttribute(href, "href")} class="text-xl md:text-2xl relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"${addAttribute(ariaLabel, "aria-label")}${addAttribute(
      href.startsWith("mailto:") || href.startsWith("tel:") ? "nofollow" : "nofollow noopener noreferrer",
      "rel"
    )}${addAttribute(href.startsWith("http") ? "_blank" : void 0, "target")}${addAttribute(itemprop, "itemprop")} data-astro-cid-uw5kdbxl> ${text} </a> </div> </address>`
  )} </div> ${renderComponent($$result3, "Cta", $$Cta, { "href": "#", "label": "Explore my CV", "isDark": true, "data-astro-cid-uw5kdbxl": true })} <!-- Social Links --> <div class="mt-4" data-astro-cid-uw5kdbxl> <h3 class="text-sm font-medium text-gray-600 tracking-wider uppercase mb-4" data-astro-cid-uw5kdbxl>
Follow Me
</h3> ${renderComponent($$result3, "Socials", $$Socials, { "data-astro-cid-uw5kdbxl": true })} </div> </div> </section> <!-- Contact Form Section --> <section class="container mx-auto px-4 max-w-6xl py-16" aria-labelledby="form-heading" data-astro-cid-uw5kdbxl> <h3 id="form-heading" class="sr-only" data-astro-cid-uw5kdbxl>Contact Form</h3> ${renderComponent($$result3, "Form", Form, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@components/Form.vue", "client:component-export": "default", "data-astro-cid-uw5kdbxl": true })} </section> </main> ` })} ` })} `;
}, "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/contact.astro", void 0);

const $$file = "C:/Users/pacom/PROJECTS/Fernando-Feijoo/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
