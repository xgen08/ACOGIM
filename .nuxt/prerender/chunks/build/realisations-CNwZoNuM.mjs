import { _ as _sfc_main$1 } from './PageHero-BM3DApsU.mjs';
import { p as projets, _ as _sfc_main$2 } from './projets-C3tr0_jm.mjs';
import { ref, computed, resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, useSSRContext } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/server-renderer/index.mjs';
import './asset-CqhL-QqR.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/h3/dist/index.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/destr/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/klona/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/scule/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unhead/dist/server.mjs';
import 'node:async_hooks';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/devalue/index.js';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unhead/dist/utils.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unhead/dist/plugins.mjs';
import 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue-router/vue-router.node.mjs';

const _sfc_main = {
  __name: "realisations",
  __ssrInlineRender: true,
  setup(__props) {
    const statuts = ["Tous", "R\xE9alis\xE9", "En cours", "\xC0 venir"];
    const actif = ref("Tous");
    const compte = (s) => s === "Tous" ? projets.length : projets.filter((p) => p.statut === s).length;
    const visibles = computed(
      () => actif.value === "Tous" ? projets : projets.filter((p) => p.statut === actif.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_ProjetCard = _sfc_main$2;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/hero-construction.jpg",
        eyebrow: "R\xE9alisations",
        lead: "Les visuels ci-dessous sont des illustrations provisoires : les photos r\xE9elles de chaque chantier viendront les remplacer au fil des livraisons."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nos projets, r\xE9alis\xE9s, <span${_scopeId}>en cours et \xE0 venir.</span>`);
          } else {
            return [
              createTextVNode(" Nos projets, r\xE9alis\xE9s, "),
              createVNode("span", null, "en cours et \xE0 venir.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-concrete py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]"><div><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Nos projets</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Pr\xE9sent\xE9s <span class="text-orange italic font-normal">tels qu&#39;ils sont.</span></h2></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-wrap gap-2",
        role: "group",
        "aria-label": "Filtrer par statut"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 200)))}><!--[-->`);
      ssrRenderList(statuts, (s) => {
        _push(`<button type="button"${ssrRenderAttr("aria-pressed", unref(actif) === s)} class="${ssrRenderClass([unref(actif) === s ? "bg-noir text-white border-noir" : "border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir", "inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"])}">${ssrInterpolate(s)} <span class="${ssrRenderClass([unref(actif) === s ? "bg-palm text-noir" : "bg-black/5", "min-w-5 h-5 px-1.5 rounded-full text-[11px] font-semibold flex items-center justify-center"])}">${ssrInterpolate(compte(s))}</span></button>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(visibles), (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.titre
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}>`);
        _push(ssrRenderComponent(_component_ProjetCard, {
          projet: p,
          class: "h-full"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section></div>`);
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
//# sourceMappingURL=realisations-CNwZoNuM.mjs.map
