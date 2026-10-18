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
    image: "/images/placeholder/stats-bg.jpg",
    eyebrow: "Nos activit\xE9s / Maintenance industrielle",
    lead: "R\xE9alisation de projets et travaux de maintenance, accompagnement au d\xE9ploiement de la GMAO, et installation de syst\xE8mes de s\xE9curit\xE9 \xE9lectronique."
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Maintenir la performance de <span class="text-palm"${_scopeId}>vos sites industriels.</span>`);
      } else {
        return [
          createTextVNode(" Maintenir la performance de "),
          createVNode("span", { class: "text-palm" }, "vos sites industriels.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6"><div class="bg-leaf text-white p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300"><svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="eyebrow text-white mb-2">Projets &amp; travaux</p><h2 class="font-display text-2xl mb-3">Maintenance en milieu industriel</h2><p class="text-sm text-white leading-relaxed"> R\xE9alisation de projets et travaux de maintenance adapt\xE9s aux contraintes de production de votre site. </p></div><div class="bg-leaf text-white p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300"><svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H11a1.7 1.7 0 0 0 1-1.5V5a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V11a1.7 1.7 0 0 0 1.5 1H19a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="eyebrow text-white mb-2">Accompagnement</p><h2 class="font-display text-2xl mb-3">D\xE9ploiement GMAO</h2><p class="text-sm text-white leading-relaxed"> Mise en place et accompagnement au d\xE9ploiement de services de maintenance et de la GMAO (Gestion de Maintenance Assist\xE9e par Ordinateur). </p></div><div class="bg-leaf text-white p-8 md:col-span-2 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300"><svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 3 4 6v5c0 4.6 3.2 8.4 8 10 4.8-1.6 8-5.4 8-10V6l-8-3Z" stroke-linecap="round" stroke-linejoin="round"></path><path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round"></path></svg><p class="eyebrow text-white mb-2">S\xE9curit\xE9 \xE9lectronique</p><h2 class="font-display text-2xl mb-3">Vid\xE9osurveillance, contr\xF4le d&#39;acc\xE8s, incendie</h2><p class="text-sm text-white leading-relaxed max-w-2xl"> Installation de syst\xE8mes de vid\xE9osurveillance, de contr\xF4le d&#39;acc\xE8s, ainsi que de d\xE9tection et d&#39;extinction automatique d&#39;incendie, pour s\xE9curiser vos sites et vos \xE9quipes. </p></div></section><section class="mx-auto max-w-6xl px-6 py-16">`);
  _push(ssrRenderComponent(_component_DevisForm, {
    subject: "Maintenance industrielle",
    title: "D\xE9crivez votre besoin de maintenance"
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activites/maintenance-industrielle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const maintenanceIndustrielle = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { maintenanceIndustrielle as default };
//# sourceMappingURL=maintenance-industrielle-C7wnGTRI.mjs.map
