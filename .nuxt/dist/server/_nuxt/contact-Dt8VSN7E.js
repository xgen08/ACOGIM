import { _ as _sfc_main$1 } from "./PageHero-BM3DApsU.js";
import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { _ as _sfc_main$3 } from "./DevisSection-C17l9FdL.js";
import { resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./asset-CqhL-QqR.js";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/defu/dist/defu.mjs";
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    const cartes = [
      {
        icon: "map-pin",
        label: "Adresse",
        lignes: ["Ayopoumin Ex-Mittérand, Villa n° 356", "Bingerville", "BP : 705 CIDEX 03 Abidjan"]
      },
      {
        icon: "home",
        label: "Agence",
        tel: [{ affichage: "+225 27 24 45 14 22", lien: "+2252724451422" }]
      },
      {
        icon: "clipboard",
        label: "Contact projet — M. YEO Nandielè",
        tel: [
          { affichage: "+225 07 07 00 02 07", lien: "+2250707000207" },
          { affichage: "+225 01 05 00 01 50", lien: "+2250105000150" }
        ]
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppIcon = _sfc_main$2;
      const _component_DevisSection = _sfc_main$3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/cta-bg.jpg",
        eyebrow: "Contact",
        lead: "Un projet immobilier, une construction ou un besoin de maintenance : écrivez-nous ou appelez-nous directement."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Parlons de <span${_scopeId}>votre projet.</span>`);
          } else {
            return [
              createTextVNode(" Parlons de "),
              createVNode("span", null, "votre projet.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="relative z-10 mx-auto max-w-[1280px] px-8 -mt-14"><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(cartes, (c, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: c.label,
          class: "bg-white rounded p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 100)))}><span class="w-12 h-12 mb-6 rounded-full bg-palm/20 text-forest flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: c.icon,
          class: "w-6 h-6"
        }, null, _parent));
        _push(`</span><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-3">${ssrInterpolate(c.label)}</p><ul class="space-y-1 text-[15px] text-noir"><!--[-->`);
        ssrRenderList(c.lignes, (l) => {
          _push(`<li>${ssrInterpolate(l)}</li>`);
        });
        _push(`<!--]--><!--[-->`);
        ssrRenderList(c.tel, (t) => {
          _push(`<li><a${ssrRenderAttr("href", `tel:${t.lien}`)} class="text-xl font-semibold tabular-nums hover:text-ember transition-colors">${ssrInterpolate(t.affichage)}</a></li>`);
        });
        _push(`<!--]--></ul></div>`);
      });
      _push(`<!--]--></div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Contact",
        title: "Envoyez-nous un message",
        eyebrow: "Écrivez-nous",
        "show-contacts": false
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Envoyez-nous <span${_scopeId}>un message.</span>`);
          } else {
            return [
              createTextVNode("Envoyez-nous "),
              createVNode("span", null, "un message.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-Dt8VSN7E.js.map
