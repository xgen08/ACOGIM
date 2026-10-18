import { _ as _sfc_main$1 } from './PageHero-BeNmHORi.mjs';
import { withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { p as projets } from './projets-CHRkWDUN.mjs';

const _sfc_main = {
  __name: "realisations",
  __ssrInlineRender: true,
  setup(__props) {
    const statusColor = {
      "R\xE9alis\xE9": "bg-forest",
      "En cours": "bg-royal",
      "\xC0 venir": "bg-palm text-charcoal"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/construction-site.jpg",
        eyebrow: "R\xE9alisations",
        lead: "Les visuels ci-dessous sont des illustrations provisoires : les photos r\xE9elles de chaque chantier viendront les remplacer au fil des livraisons."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nos projets, r\xE9alis\xE9s, <span class="text-palm"${_scopeId}>en cours et \xE0 venir.</span>`);
          } else {
            return [
              createTextVNode(" Nos projets, r\xE9alis\xE9s, "),
              createVNode("span", { class: "text-palm" }, "en cours et \xE0 venir.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(projets), (p) => {
        _push(`<article class="group relative overflow-hidden bg-paper border border-charcoal/10 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><div class="relative h-48 overflow-hidden"><img${ssrRenderAttr("src", p.image)} alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><span class="${ssrRenderClass([statusColor[p.statut], "absolute top-4 left-4 font-mono text-xs uppercase tracking-wide px-3 py-1 text-white"])}">${ssrInterpolate(p.statut)}</span></div><div class="p-7"><h2 class="font-display text-xl mb-2">${ssrInterpolate(p.titre)}</h2><p class="text-sm text-charcoal/70 leading-relaxed">${ssrInterpolate(p.desc)}</p></div></article>`);
      });
      _push(`<!--]--></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/realisations.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=realisations-D64e93r3.mjs.map
