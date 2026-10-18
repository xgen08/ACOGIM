import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderSlot, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    image: { type: String, required: true },
    eyebrow: { type: String, required: true },
    lead: { type: String, default: "" },
    overlay: { type: String, default: "bg-forest/80" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative isolate overflow-hidden" }, _attrs))}><div class="absolute inset-0 -z-10"><img${ssrRenderAttr("src", __props.image)} alt="" class="w-full h-full object-cover"><div class="${ssrRenderClass([__props.overlay, "absolute inset-0"])}"></div></div><div class="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-24"><p class="eyebrow mb-4 text-white">`);
      ssrRenderSlot(_ctx.$slots, "eyebrow", {}, () => {
        _push(`${ssrInterpolate(__props.eyebrow)}`);
      }, _push, _parent);
      _push(`</p><h1 class="font-display text-4xl md:text-6xl max-w-3xl leading-[0.95] text-concrete">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h1>`);
      if (__props.lead) {
        _push(`<p class="mt-6 max-w-2xl text-lg text-white">${ssrInterpolate(__props.lead)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PageHero.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=PageHero-BeNmHORi.mjs.map
