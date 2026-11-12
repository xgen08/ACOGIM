import { _ as _sfc_main$1 } from './PageHero-BM3DApsU.mjs';
import { p as projets, _ as _sfc_main$2 } from './projets-C3tr0_jm.mjs';
import { _ as _sfc_main$3 } from './DevisSection-C17l9FdL.mjs';
import { a as asset } from './asset-CqhL-QqR.mjs';
import { resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, useSSRContext } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttr } from 'file:///Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/vue/server-renderer/index.mjs';
import { i as items } from './catalogue-DLTrpJmN.mjs';
import './AppIcon-CXgA78A5.mjs';
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
  __name: "construction",
  __ssrInlineRender: true,
  setup(__props) {
    const offre = items.find((i) => i.categorie === "Construction");
    const projetsConstruction = projets.filter((p) => p.categorie === "Construction");
    const demarche = [
      {
        color: "text-forest",
        titre: "\xC9tude & conception",
        desc: "Analyse du terrain, plans, budget pr\xE9visionnel et permis de construire."
      },
      {
        color: "text-orange",
        titre: "R\xE9alisation",
        desc: "Suivi de chantier, contr\xF4le qualit\xE9 et respect des d\xE9lais convenus."
      },
      {
        color: "text-forest",
        titre: "Gestion & vente",
        desc: "Mise en location, gestion locative ou mise en vente du bien livr\xE9."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_ProjetCard = _sfc_main$2;
      const _component_DevisSection = _sfc_main$3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/construction-site.jpg",
        eyebrow: "Nos activit\xE9s / Construction",
        lead: "Du terrain \xE0 la livraison, ACOGIM-CI pilote vos projets de construction et assure la gestion locative ou la revente des biens livr\xE9s."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Construction, gestion et vente de <span${_scopeId}>biens immobiliers.</span>`);
          } else {
            return [
              createTextVNode(" Construction, gestion et vente de "),
              createVNode("span", null, "biens immobiliers.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Notre d\xE9marche</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Du terrain <span class="text-orange italic font-normal">\xE0 la livraison.</span></h2><div class="relative grid gap-8 md:grid-cols-3 mt-[60px]"><div aria-hidden="true" class="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-px bg-gradient-to-r from-palm via-orange to-palm opacity-40"></div><!--[-->`);
      ssrRenderList(demarche, (step, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: step.titre,
          class: "relative bg-white rounded px-8 pt-12 pb-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 150)))}><span class="${ssrRenderClass([step.color, "mx-auto mb-8 w-20 h-20 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center font-display text-3xl font-bold"])}">${ssrInterpolate(String(i + 1).padStart(2, "0"))}</span><h3 class="font-body text-[22px] font-semibold text-noir mb-3">${ssrInterpolate(step.titre)}</h3><p class="text-[15px] leading-[1.8] text-muted max-w-[260px] mx-auto">${ssrInterpolate(step.desc)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="glow isolate bg-noir text-white py-[120px]"><div class="relative z-10 mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow !text-palm mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Offre &amp; r\xE9alisations</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Cl\xE9 en main, <span class="text-orange italic font-normal">du permis aux cl\xE9s.</span></h2><div class="grid gap-8 lg:grid-cols-2 items-stretch">`);
      if (unref(offre)) {
        _push(`<article${ssrRenderAttrs(mergeProps({ class: "group flex flex-col bg-white/[0.08] backdrop-blur-md rounded overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" })))}><div class="h-[260px] overflow-hidden"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(unref(offre).image))} alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"></div><div class="p-8 flex flex-col flex-1"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">${ssrInterpolate(unref(offre).categorie)}</p><h3 class="font-display text-2xl font-semibold mb-3">${ssrInterpolate(unref(offre).nom)}</h3><p class="text-[15px] leading-[1.7] text-white/75 mb-8">${ssrInterpolate(unref(offre).detail)}</p><a href="#devis" class="btn-primary mt-auto self-start">Demander un devis</a></div></article>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(projetsConstruction), (p) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.titre
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 })))}>`);
        _push(ssrRenderComponent(_component_ProjetCard, {
          projet: p,
          class: "h-full"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Construction",
        title: "Parlez-nous de votre projet de construction",
        activite: "Construction"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Un terrain, <span${_scopeId}>un projet ?</span>`);
          } else {
            return [
              createTextVNode("Un terrain, "),
              createVNode("span", null, "un projet ?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activites/construction.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=construction-CM6r_7Gk.mjs.map
