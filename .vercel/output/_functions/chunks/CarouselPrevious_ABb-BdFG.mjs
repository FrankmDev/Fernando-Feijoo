import { defineComponent, useSSRContext, mergeProps, ref, onMounted, h, Comment, cloneVNode, Fragment, toRefs, getCurrentInstance, reactive, watch, watchEffect, markRaw, nextTick, computed, onUnmounted, effectScope, inject, provide, unref, withCtx, renderSlot } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper_pcqpp-6-.mjs';
import { ArrowRight, ArrowLeft } from 'lucide-vue-next';
import { cva } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import emblaCarouselVue from 'embla-carousel-vue';
import { createInjectionState } from '@vueuse/shared';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Card",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $setup.cn(" text-card-foreground ", $setup.props.class)
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/Card.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const Card = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["ssrRender", _sfc_ssrRender$5]]);

const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $setup.cn("p-6 pt-0", $setup.props.class)
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/CardContent.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const CardContent = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$4]]);

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/CardDescription.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};

const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/CardFooter.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};

const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/CardHeader.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};

const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/card/CardTitle.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};

const [useProvideCarousel, useInjectCarousel] = createInjectionState(
  ({
    opts,
    orientation,
    plugins
  }, emits) => {
    const [emblaNode, emblaApi] = emblaCarouselVue({
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    }, plugins);
    function scrollPrev() {
      emblaApi.value?.scrollPrev();
    }
    function scrollNext() {
      emblaApi.value?.scrollNext();
    }
    const canScrollNext = ref(false);
    const canScrollPrev = ref(false);
    function onSelect(api) {
      canScrollNext.value = api?.canScrollNext() || false;
      canScrollPrev.value = api?.canScrollPrev() || false;
    }
    onMounted(() => {
      if (!emblaApi.value)
        return;
      emblaApi.value?.on("init", onSelect);
      emblaApi.value?.on("reInit", onSelect);
      emblaApi.value?.on("select", onSelect);
      emits("init-api", emblaApi.value);
    });
    return { carouselRef: emblaNode, carouselApi: emblaApi, canScrollPrev, canScrollNext, scrollPrev, scrollNext, orientation };
  }
);
function useCarousel() {
  const carouselState = useInjectCarousel();
  if (!carouselState)
    throw new Error("useCarousel must be used within a <Carousel />");
  return carouselState;
}

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Carousel",
  props: {
    opts: {},
    plugins: {},
    orientation: { default: "horizontal" },
    class: {}
  },
  emits: ["init-api"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits);
    __expose({
      canScrollNext,
      canScrollPrev,
      carouselApi,
      carouselRef,
      orientation,
      scrollNext,
      scrollPrev
    });
    function onKeyDown(event) {
      const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft";
      const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight";
      if (event.key === prevKey) {
        event.preventDefault();
        scrollPrev();
        return;
      }
      if (event.key === nextKey) {
        event.preventDefault();
        scrollNext();
      }
    }
    const __returned__ = { props, emits, canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev, onKeyDown, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: $setup.cn("relative", $setup.props.class),
    role: "region",
    "aria-roledescription": "carousel",
    tabindex: "0"
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {
    canScrollNext: $setup.canScrollNext,
    canScrollPrev: $setup.canScrollPrev,
    carouselApi: $setup.carouselApi,
    carouselRef: $setup.carouselRef,
    orientation: $setup.orientation,
    scrollNext: $setup.scrollNext,
    scrollPrev: $setup.scrollPrev
  }, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/carousel/Carousel.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const Carousel = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "CarouselContent",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { carouselRef, orientation } = useCarousel();
    const __returned__ = { props, carouselRef, orientation, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    ref: "carouselRef",
    class: "overflow-hidden h-full"
  }, _attrs))}><div${ssrRenderAttrs(mergeProps({
    class: $setup.cn(
      "flex",
      $setup.orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
      $setup.props.class
    )
  }, _ctx.$attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div></div>`);
}
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/carousel/CarouselContent.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const CarouselContent = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["ssrRender", _sfc_ssrRender$2]]);

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "CarouselItem",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { orientation } = useCarousel();
    const __returned__ = { props, orientation, get cn() {
      return cn;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    role: "group",
    "aria-roledescription": "slide",
    class: $setup.cn(
      "min-w-0 shrink-0 grow-0 basis-full",
      $setup.orientation === "horizontal" ? "pl-4" : "pt-4",
      $setup.props.class
    )
  }, _attrs))}>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/carousel/CarouselItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const CarouselItem = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);

function te(a, t) {
  const e = typeof a == "string" && !t ? `${a}Context` : t, n = Symbol(e);
  return [(r) => {
    const i = inject(n, r);
    if (i || i === null)
      return i;
    throw new Error(
      `Injection \`${n.toString()}\` not found. Component must be used within ${Array.isArray(a) ? `one of the following components: ${a.join(
        ", "
      )}` : `\`${a}\``}`
    );
  }, (r) => (provide(n, r), r)];
}
function li(a) {
  let t = false, e;
  const n = effectScope(true);
  return (...l) => (t || (e = n.run(() => a(...l)), t = true), e);
}
function je(a) {
  return typeof a == "function" ? a() : unref(a);
}
const Je = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function $e(a) {
  var t;
  const e = je(a);
  return (t = e == null ? void 0 : e.$el) != null ? t : e;
}
const Rt = Je ? window : void 0;
function qa(a) {
  return a ? a.flatMap((t) => t.type === Fragment ? qa(t.children) : [t]) : [];
}
function zl(a, t) {
  const e = ref(a);
  function n(s) {
    return t[e.value][s] ?? e.value;
  }
  return {
    state: e,
    dispatch: (s) => {
      e.value = n(s);
    }
  };
}
const Jn = defineComponent({
  name: "PrimitiveSlot",
  inheritAttrs: false,
  setup(a, { attrs: t, slots: e }) {
    return () => {
      var u, d;
      if (!e.default)
        return null;
      const n = qa(e.default()), l = n.findIndex((c) => c.type !== Comment);
      if (l === -1)
        return n;
      const s = n[l];
      (u = s.props) == null || delete u.ref;
      const r = s.props ? mergeProps(t, s.props) : t;
      t.class && ((d = s.props) != null && d.class) && delete s.props.class;
      const i = cloneVNode(s, r);
      for (const c in r)
        c.startsWith("on") && (i.props || (i.props = {}), i.props[c] = r[c]);
      return n.length === 1 ? i : (n[l] = i, n);
    };
  }
}), O = defineComponent({
  name: "Primitive",
  inheritAttrs: false,
  props: {
    asChild: {
      type: Boolean,
      default: false
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(a, { attrs: t, slots: e }) {
    const n = a.asChild ? "template" : a.as;
    return typeof n == "string" && ["area", "img", "input"].includes(n) ? () => h(n, t) : n !== "template" ? () => h(a.as, t, { default: e.default }) : () => h(Jn, t, { default: e.default });
  }
});
function Re() {
  const a = ref(), t = computed(() => {
    var e, n;
    return ["#text", "#comment"].includes((e = a.value) == null ? void 0 : e.$el.nodeName) ? (n = a.value) == null ? void 0 : n.$el.nextElementSibling : $e(a);
  });
  return {
    primitiveElement: a,
    currentElement: t
  };
}
function Xi(a, t) {
  var _;
  const e = ref({}), n = ref("none"), l = ref(a), s = a.value ? "mounted" : "unmounted";
  let r;
  const i = ((_ = t.value) == null ? void 0 : _.ownerDocument.defaultView) ?? Rt, { state: u, dispatch: d } = zl(s, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  }), c = (C) => {
    var $;
    if (Je) {
      const h = new CustomEvent(C, { bubbles: false, cancelable: false });
      ($ = t.value) == null || $.dispatchEvent(h);
    }
  };
  watch(
    a,
    async (C, $) => {
      var E;
      const h = $ !== C;
      if (await nextTick(), h) {
        const P = n.value, D = Ia(t.value);
        C ? (d("MOUNT"), c("enter"), D === "none" && c("after-enter")) : D === "none" || ((E = e.value) == null ? void 0 : E.display) === "none" ? (d("UNMOUNT"), c("leave"), c("after-leave")) : $ && P !== D ? (d("ANIMATION_OUT"), c("leave")) : (d("UNMOUNT"), c("after-leave"));
      }
    },
    { immediate: true }
  );
  const f = (C) => {
    const $ = Ia(t.value), h = $.includes(
      C.animationName
    ), E = u.value === "mounted" ? "enter" : "leave";
    if (C.target === t.value && h && (c(`after-${E}`), d("ANIMATION_END"), !l.value)) {
      const P = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", r = i == null ? void 0 : i.setTimeout(() => {
        var D;
        ((D = t.value) == null ? void 0 : D.style.animationFillMode) === "forwards" && (t.value.style.animationFillMode = P);
      });
    }
    C.target === t.value && $ === "none" && d("ANIMATION_END");
  }, v = (C) => {
    C.target === t.value && (n.value = Ia(t.value));
  }, p = watch(
    t,
    (C, $) => {
      C ? (e.value = getComputedStyle(C), C.addEventListener("animationstart", v), C.addEventListener("animationcancel", f), C.addEventListener("animationend", f)) : (d("ANIMATION_END"), r !== void 0 && (i == null || i.clearTimeout(r)), $ == null || $.removeEventListener("animationstart", v), $ == null || $.removeEventListener("animationcancel", f), $ == null || $.removeEventListener("animationend", f));
    },
    { immediate: true }
  ), g = watch(u, () => {
    const C = Ia(t.value);
    n.value = u.value === "mounted" ? C : "none";
  });
  return onUnmounted(() => {
    p(), g();
  }), {
    isPresent: computed(
      () => ["mounted", "unmountSuspended"].includes(u.value)
    )
  };
}
function Ia(a) {
  return a && getComputedStyle(a).animationName || "none";
}
defineComponent({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: true
    },
    forceMount: {
      type: Boolean
    }
  },
  slots: {},
  setup(a, { slots: t, expose: e }) {
    var d;
    const { present: n, forceMount: l } = toRefs(a), s = ref(), { isPresent: r } = Xi(n, s);
    e({ present: r });
    let i = t.default({ present: r });
    i = qa(i || []);
    const u = getCurrentInstance();
    if (i && (i == null ? void 0 : i.length) > 1) {
      const c = (d = u == null ? void 0 : u.parent) != null && d.type.name ? `<${u.parent.type.name} />` : "component";
      throw new Error(
        [
          `Detected an invalid children for \`${c}\` for  \`Presence\` component.`,
          "",
          "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
          "You can apply a few solutions:",
          [
            "Provide a single child element so that `presence` directive attach correctly.",
            "Ensure the first child is an actual element instead of a raw text node or comment node."
          ].map((f) => `  - ${f}`).join(`
`)
        ].join(`
`)
      );
    }
    return () => l.value || n.value || r.value ? h(t.default({ present: r })[0], {
      ref: (c) => {
        const f = $e(c);
        return typeof (f == null ? void 0 : f.hasAttribute) > "u" || (f != null && f.hasAttribute("data-radix-popper-content-wrapper") ? s.value = f.firstElementChild : s.value = f), f;
      }
    }) : null;
  }
});
reactive({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
});
li(() => ref([]));
const [oo, pd] = te("CollectionProvider");
defineComponent({
  name: "CollectionSlot",
  setup(a, { slots: t }) {
    const e = oo(), { primitiveElement: n, currentElement: l } = Re();
    return watch(l, () => {
      e.collectionRef.value = l.value;
    }), () => h(Jn, { ref: n }, t);
  }
}); defineComponent({
  name: "CollectionItem",
  inheritAttrs: false,
  props: {
    value: {
      // It accepts any value
      validator: () => true
    }
  },
  setup(a, { slots: t, attrs: e }) {
    const n = oo(), { primitiveElement: l, currentElement: s } = Re();
    return watchEffect((r) => {
      if (s.value) {
        const i = markRaw(s.value);
        n.itemMap.value.set(i, { ref: s.value, value: a.value }), r(() => n.itemMap.value.delete(i));
      }
    }), () => h(Jn, { ...e, [n.attrName]: "", ref: l }, t);
  }
});
function xp() {
  if (typeof matchMedia == "function")
    return matchMedia("(pointer:coarse)").matches ? "coarse" : "fine";
}
xp() === "coarse";

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const __returned__ = { props, get cn() {
      return cn;
    }, get Primitive() {
      return O;
    }, get buttonVariants() {
      return buttonVariants;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(ssrRenderComponent($setup["Primitive"], mergeProps({
    as: $props.as,
    "as-child": $props.asChild,
    class: $setup.cn($setup.buttonVariants({ variant: $props.variant, size: $props.size }), $setup.props.class)
  }, _attrs), {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
      } else {
        return [
          renderSlot(_ctx.$slots, "default")
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/button/Button.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const Button = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CarouselNext",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { orientation, canScrollNext, scrollNext } = useCarousel();
    const __returned__ = { props, orientation, canScrollNext, scrollNext, get Button() {
      return Button;
    }, get cn() {
      return cn;
    }, get ArrowRight() {
      return ArrowRight;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/carousel/CarouselNext.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CarouselPrevious",
  props: {
    class: {}
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const { orientation, canScrollPrev, scrollPrev } = useCarousel();
    const __returned__ = { props, orientation, canScrollPrev, scrollPrev, get Button() {
      return Button;
    }, get cn() {
      return cn;
    }, get ArrowLeft() {
      return ArrowLeft;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/ui/carousel/CarouselPrevious.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { CarouselItem as C, CarouselContent as a, Carousel as b, CardContent as c, Card as d };
