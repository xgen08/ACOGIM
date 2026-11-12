import { a as asset } from "./asset-CqhL-QqR.js";
import { resolveDirective, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderSlot, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "PageHero",
  __ssrInlineRender: true,
  props: {
    eyebrow: { type: String, required: true },
    lead: { type: String, default: "" },
    // Photo de fond facultative (voile sombre + lent zoom, comme le hero de l'accueil).
    image: { type: String, default: "" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "glow isolate bg-noir text-white" }, _attrs))}>`);
      if (__props.image) {
        _push(`<!--[--><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(__props.image))} alt="" class="hero-zoom absolute inset-0 -z-10 w-full h-full object-cover"><div class="absolute inset-0 -z-10 bg-gradient-to-r from-noir via-noir/80 to-noir/30"></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="relative z-10 mx-auto max-w-[1280px] px-8 pt-28 pb-24 md:pt-36 md:pb-28"><p${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-palm before:block before:w-10 before:h-px before:bg-palm" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>`);
      ssrRenderSlot(_ctx.$slots, "eyebrow", {}, () => {
        _push(`${ssrInterpolate(__props.eyebrow)}`);
      }, _push, _parent);
      _push(`</p><h1${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-4xl md:text-6xl max-w-4xl leading-[1.05] [&>span]:text-orange [&>span]:italic [&>span]:font-normal" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 120)))}>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</h1>`);
      if (__props.lead) {
        _push(`<p${ssrRenderAttrs(mergeProps({ class: "mt-8 max-w-[600px] text-lg leading-[1.8] font-light text-white/70" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 240)))}>${ssrInterpolate(__props.lead)}</p>`);
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
export {
  _sfc_main as _
};
//# sourceMappingURL=PageHero-BM3DApsU.js.map
