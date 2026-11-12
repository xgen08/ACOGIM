import { _ as _sfc_main$1 } from './PageHero-BM3DApsU.mjs';
import { _ as _sfc_main$2 } from './AppIcon-CXgA78A5.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-BT2FnOSy.mjs';
import { _ as _sfc_main$3 } from './DevisSection-C17l9FdL.mjs';
import { a as asset } from './asset-CqhL-QqR.mjs';
import { resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, useSSRContext } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/server-renderer/index.mjs';
import { i as items } from './catalogue-DLTrpJmN.mjs';
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
        text: "Estimation, mise en valeur du bien, mise en relation avec des acqu\xE9reurs qualifi\xE9s et suivi jusqu'\xE0 la signature."
      },
      {
        num: "02",
        color: "text-orange",
        icon: "eye",
        title: "Pour les acqu\xE9reurs",
        text: "S\xE9lection de biens correspondant \xE0 votre budget et \xE0 votre projet, v\xE9rification des documents et accompagnement administratif."
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
        eyebrow: "Nos activit\xE9s / Immobilier",
        lead: "Terrains, villas, immeubles \xE0 usage commercial ou r\xE9sidentiel : ACOGIM-CI accompagne particuliers et entreprises dans leurs transactions immobili\xE8res \xE0 Abidjan et environs."
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
      _push(`<section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Notre accompagnement</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Vendeurs comme acqu\xE9reurs, <span class="text-orange italic font-normal">un m\xEAme suivi.</span></h2><div class="grid gap-8 md:grid-cols-2 mt-[60px]"><!--[-->`);
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
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><div class="h-[240px] overflow-hidden"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(b.image))} alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div><div class="p-8"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">${ssrInterpolate(b.categorie)}</p><h3 class="font-display text-2xl font-semibold mb-3">${ssrInterpolate(b.nom)}</h3><p class="text-[15px] leading-[1.7] text-white/75 mb-6">${ssrInterpolate(b.detail)}</p><a href="#devis" class="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm"> Demander un devis <span class="transition-transform duration-300 group-hover:translate-x-1">\u2192</span></a></div></article>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Immobilier",
        title: "D\xE9crivez votre projet immobilier",
        activite: "Immobilier \u2014 achat / vente"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Un bien \xE0 vendre <span${_scopeId}>ou \xE0 acqu\xE9rir ?</span>`);
          } else {
            return [
              createTextVNode("Un bien \xE0 vendre "),
              createVNode("span", null, "ou \xE0 acqu\xE9rir ?")
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

export { _sfc_main as default };
//# sourceMappingURL=immobilier-Dn_mVjMD.mjs.map
