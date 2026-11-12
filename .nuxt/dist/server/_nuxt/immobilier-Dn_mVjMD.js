import { _ as _sfc_main$1 } from "./PageHero-BM3DApsU.js";
import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BT2FnOSy.js";
import { _ as _sfc_main$3 } from "./DevisSection-C17l9FdL.js";
import { a as asset } from "./asset-CqhL-QqR.js";
import { resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import { i as items } from "./catalogue-DLTrpJmN.js";
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
  __name: "immobilier",
  __ssrInlineRender: true,
  setup(__props) {
    const biens = items.filter((i) => i.categorie === "Immobilier");
    const accompagnement = [
      {
        num: "01",
        color: "text-forest",
        icon: "home",
        title: "Pour les vendeurs",
        text: "Estimation, mise en valeur du bien, mise en relation avec des acquéreurs qualifiés et suivi jusqu'à la signature."
      },
      {
        num: "02",
        color: "text-orange",
        icon: "eye",
        title: "Pour les acquéreurs",
        text: "Sélection de biens correspondant à votre budget et à votre projet, vérification des documents et accompagnement administratif."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppIcon = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_DevisSection = _sfc_main$3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/about-main.jpg",
        eyebrow: "Nos activités / Immobilier",
        lead: "Terrains, villas, immeubles à usage commercial ou résidentiel : ACOGIM-CI accompagne particuliers et entreprises dans leurs transactions immobilières à Abidjan et environs."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Achat et vente de <span${_scopeId}>biens immobiliers.</span>`);
          } else {
            return [
              createTextVNode(" Achat et vente de "),
              createVNode("span", null, "biens immobiliers.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Notre accompagnement</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Vendeurs comme acquéreurs, <span class="text-orange italic font-normal">un même suivi.</span></h2><div class="grid gap-8 md:grid-cols-2 mt-[60px]"><!--[-->`);
      ssrRenderList(accompagnement, (a, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: a.title,
          class: "bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><div class="flex items-center justify-between mb-8"><p class="${ssrRenderClass([a.color, "font-display text-5xl font-bold leading-none"])}">${ssrInterpolate(a.num)}</p>`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: a.icon,
          class: ["w-10 h-10", a.color]
        }, null, _parent));
        _push(`</div><h3 class="font-body text-[22px] font-semibold text-noir mb-4">${ssrInterpolate(a.title)}</h3><p class="text-[15px] leading-[1.8] text-muted">${ssrInterpolate(a.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="glow isolate bg-noir text-white py-[120px]"><div class="relative z-10 mx-auto max-w-[1280px] px-8"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]"><div><p${ssrRenderAttrs(mergeProps({ class: "eyebrow !text-palm mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Biens disponibles</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Dans notre <span class="text-orange italic font-normal">catalogue.</span></h2></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: "/catalogue",
        class: "btn-outline !border-white/20 self-start md:self-auto"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 200)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Tout le catalogue`);
          } else {
            return [
              createTextVNode("Tout le catalogue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="grid gap-6 md:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(biens), (b, i) => {
        _push(`<article${ssrRenderAttrs(mergeProps({
          key: b.nom,
          class: "group bg-white/[0.08] backdrop-blur-md rounded overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.12]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><div class="h-[240px] overflow-hidden"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(b.image))} alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div><div class="p-8"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">${ssrInterpolate(b.categorie)}</p><h3 class="font-display text-2xl font-semibold mb-3">${ssrInterpolate(b.nom)}</h3><p class="text-[15px] leading-[1.7] text-white/75 mb-6">${ssrInterpolate(b.detail)}</p><a href="#devis" class="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm"> Demander un devis <span class="transition-transform duration-300 group-hover:translate-x-1">→</span></a></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Immobilier",
        title: "Décrivez votre projet immobilier",
        activite: "Immobilier — achat / vente"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Un bien à vendre <span${_scopeId}>ou à acquérir ?</span>`);
          } else {
            return [
              createTextVNode("Un bien à vendre "),
              createVNode("span", null, "ou à acquérir ?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activites/immobilier.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=immobilier-Dn_mVjMD.js.map
