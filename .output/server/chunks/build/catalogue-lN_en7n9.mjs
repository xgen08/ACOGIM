import { _ as _sfc_main$1 } from './PageHero-BeNmHORi.mjs';
import { i as items, _ as _sfc_main$2 } from './catalogue-BJMx7mrz.mjs';
import { _ as _sfc_main$3 } from './DevisForm-07lP-u0E.mjs';
import { ref, withCtx, createTextVNode, createVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "catalogue",
  __ssrInlineRender: true,
  setup(__props) {
    const selected = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppIcon = _sfc_main$2;
      const _component_DevisForm = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/stats-bg.jpg",
        eyebrow: "Catalogue",
        lead: "Chaque bien ou service peut faire l'objet d'une demande de devis directe : s\xE9lectionnez un \xE9l\xE9ment et compl\xE9tez le formulaire, notre \xE9quipe revient vers vous avec une proposition adapt\xE9e. Photos g\xE9n\xE9riques \xE0 titre d'illustration."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Biens et services, <span class="text-palm"${_scopeId}>sur devis.</span>`);
          } else {
            return [
              createTextVNode(" Biens et services, "),
              createVNode("span", { class: "text-palm" }, "sur devis.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="mx-auto max-w-6xl px-6 py-16"><div class="grid md:grid-cols-2 gap-5"><!--[-->`);
      ssrRenderList(unref(items), (item) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(selected) === item.nom ? "border-petrol ring-2 ring-petrol/40" : "border-charcoal/10 hover:border-charcoal/30", "relative text-left bg-paper border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"])}">`);
        if (item.image) {
          _push(`<div class="h-36 overflow-hidden"><img${ssrRenderAttr("src", item.image)} alt="" class="w-full h-full object-cover"></div>`);
        } else {
          _push(`<div class="h-36 flex items-center justify-center bg-concrete/60 text-petrol">`);
          _push(ssrRenderComponent(_component_AppIcon, {
            name: item.icon,
            class: "w-10 h-10"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<div class="relative p-6">`);
        if (unref(selected) === item.nom) {
          _push(`<span class="absolute top-4 right-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-charcoal bg-palm px-2 py-1"> \u2713 S\xE9lectionn\xE9 </span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<span class="eyebrow">${ssrInterpolate(item.categorie)}</span><h2 class="font-display text-xl mt-2 mb-2 pr-8">${ssrInterpolate(item.nom)}</h2><p class="text-sm text-charcoal/70">${ssrInterpolate(item.detail)}</p></div></button>`);
      });
      _push(`<!--]--></div></section><section class="mx-auto max-w-6xl px-6 py-16">`);
      _push(ssrRenderComponent(_component_DevisForm, {
        subject: "Catalogue",
        title: unref(selected) ? `Devis \u2014 ${unref(selected)}` : "Demander un devis"
      }, null, _parent));
      _push(`</section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalogue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=catalogue-lN_en7n9.mjs.map
