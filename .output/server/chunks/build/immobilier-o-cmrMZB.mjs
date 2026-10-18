import { _ as _sfc_main$1 } from './PageHero-BeNmHORi.mjs';
import { _ as _sfc_main$2 } from './DevisForm-07lP-u0E.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_PageHero = _sfc_main$1;
  const _component_DevisForm = _sfc_main$2;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHero, {
    image: "/images/placeholder/building-1.jpg",
    eyebrow: "Nos activit\xE9s / Immobilier",
    lead: "Terrains, villas, immeubles \xE0 usage commercial ou r\xE9sidentiel : ACOGIM-CI accompagne particuliers et entreprises dans leurs transactions immobili\xE8res \xE0 Abidjan et environs."
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Achat et vente de <span class="text-palm"${_scopeId}>biens immobiliers.</span>`);
      } else {
        return [
          createTextVNode(" Achat et vente de "),
          createVNode("span", { class: "text-palm" }, "biens immobiliers.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6"><div class="group bg-paper border border-charcoal/10 p-8 hover:border-forest hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><svg class="w-9 h-9 text-forest mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 11.5 12 4l9 7.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" stroke-linecap="round" stroke-linejoin="round"></path></svg><h2 class="font-display text-2xl mb-3">Pour les vendeurs</h2><p class="text-sm text-charcoal/70 leading-relaxed"> Estimation, mise en valeur du bien, mise en relation avec des acqu\xE9reurs qualifi\xE9s et suivi jusqu&#39;\xE0 la signature. </p></div><div class="group bg-paper border border-charcoal/10 p-8 hover:border-forest hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><svg class="w-9 h-9 text-forest mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="10" cy="10" r="6"></circle><path d="m20 20-4.5-4.5" stroke-linecap="round"></path></svg><h2 class="font-display text-2xl mb-3">Pour les acqu\xE9reurs</h2><p class="text-sm text-charcoal/70 leading-relaxed"> S\xE9lection de biens correspondant \xE0 votre budget et \xE0 votre projet, v\xE9rification des documents et accompagnement administratif. </p></div></section><section class="mx-auto max-w-6xl px-6 py-16">`);
  _push(ssrRenderComponent(_component_DevisForm, {
    subject: "Immobilier",
    title: "D\xE9crivez votre projet immobilier"
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activites/immobilier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const immobilier = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { immobilier as default };
//# sourceMappingURL=immobilier-o-cmrMZB.mjs.map
