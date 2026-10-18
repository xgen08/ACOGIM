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
    image: "/images/placeholder/building-2.jpg",
    eyebrow: "Contact"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` Parlons de <span class="text-palm"${_scopeId}>votre projet.</span>`);
      } else {
        return [
          createTextVNode(" Parlons de "),
          createVNode("span", { class: "text-palm" }, "votre projet.")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10"><div class="bg-paper border border-charcoal/10 p-8 hover:shadow-xl hover:shadow-charcoal/10 transition-shadow duration-300"><p class="eyebrow mb-2">Nos coordonn\xE9es</p><h2 class="font-display text-2xl mb-4">ACOGIM-CI</h2><ul class="text-sm text-charcoal/75 space-y-1.5"><li>BP : 705 CIDEX 03 Abidjan</li><li>Ayopoumin Ex-Mitt\xE9rand, Villa n\xB0 356</li><li>Bingerville</li><li>T\xE9l : +225 27 24 45 14 22</li></ul><p class="eyebrow mt-6 mb-2">Contact projet</p><ul class="text-sm text-charcoal/75 space-y-1.5"><li>M. YEO Nandiel\xE8</li><li>+225 07 07 00 02 07</li><li>+225 01 05 00 01 50</li></ul></div>`);
  _push(ssrRenderComponent(_component_DevisForm, {
    subject: "Contact",
    title: "Envoyez-nous un message"
  }, null, _parent));
  _push(`</section></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { contact as default };
//# sourceMappingURL=contact-BUw4N18v.mjs.map
