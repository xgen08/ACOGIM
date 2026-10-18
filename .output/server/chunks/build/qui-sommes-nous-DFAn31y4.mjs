import { _ as _sfc_main$1 } from './PageHero-BeNmHORi.mjs';
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
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_PageHero, {
    image: "/images/placeholder/about-main.jpg",
    eyebrow: "Qui sommes-nous",
    lead: "Agence de Construction, de Gestion Immobili\xE8res et de Maintenance C\xF4te d'Ivoire \u2014 une SARL bas\xE9e \xE0 Bingerville, Abidjan."
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` ACOGIM-CI, une agence \xE0 taille humaine, <span class="text-palm"${_scopeId}>trois m\xE9tiers compl\xE9mentaires.</span>`);
      } else {
        return [
          createTextVNode(" ACOGIM-CI, une agence \xE0 taille humaine, "),
          createVNode("span", { class: "text-palm" }, "trois m\xE9tiers compl\xE9mentaires.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6"><div class="bg-paper border border-charcoal/10 p-7 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><span class="font-display text-3xl text-charcoal/15">01</span><h2 class="font-display text-2xl mt-2 mb-3">Nos activit\xE9s</h2><ul class="text-sm text-charcoal/75 space-y-2 leading-relaxed"><li>\u2014 Achat et vente de biens immobiliers</li><li>\u2014 Construction, gestion et vente de biens immobiliers</li><li>\u2014 Maintenance industrielle</li></ul></div><div class="bg-paper border border-charcoal/10 p-7 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><span class="font-display text-3xl text-charcoal/15">02</span><h2 class="font-display text-2xl mt-2 mb-3">Notre politique</h2><p class="text-sm text-charcoal/75 leading-relaxed"> Une gestion rigoureuse de chaque projet, de l&#39;\xE9tude \xE0 la livraison, et un accompagnement continu pour nos clients industriels via la GMAO et la s\xE9curit\xE9 \xE9lectronique. </p></div><div class="bg-paper border border-charcoal/10 p-7 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"><span class="font-display text-3xl text-charcoal/15">03</span><h2 class="font-display text-2xl mt-2 mb-3">Notre ambition</h2><p class="text-sm text-charcoal/75 leading-relaxed"> Faire conna\xEEtre ACOGIM-CI aupr\xE8s des clients potentiels et du grand public, en donnant \xE0 voir nos r\xE9alisations, nos projets en cours et nos perspectives. </p></div></section><section class="mx-auto max-w-6xl px-6 py-16"><h2 class="font-display text-3xl mb-8">Contact projet</h2><div class="bg-paper border border-charcoal/10 p-8 max-w-lg hover:shadow-xl hover:shadow-charcoal/10 transition-shadow duration-300"><p class="font-semibold text-lg mb-2">M. YEO Nandiel\xE8</p><p class="text-sm text-charcoal/70">+225 07 07 00 02 07</p><p class="text-sm text-charcoal/70">+225 01 05 00 01 50</p><p class="text-sm text-charcoal/70 mt-3">BP : 705 CIDEX 03 Abidjan</p><p class="text-sm text-charcoal/70">Ayopoumin Ex-Mitt\xE9rand, Villa n\xB0 356, Bingerville</p></div></section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/qui-sommes-nous.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const quiSommesNous = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { quiSommesNous as default };
//# sourceMappingURL=qui-sommes-nous-DFAn31y4.mjs.map
