import { _ as _sfc_main$1 } from "./PageHero-BM3DApsU.js";
import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { p as projets, _ as _sfc_main$3 } from "./projets-C3tr0_jm.js";
import { _ as _sfc_main$4 } from "./DevisSection-C17l9FdL.js";
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
  __name: "maintenance-industrielle",
  __ssrInlineRender: true,
  setup(__props) {
    const offres = items.filter((i) => i.categorie === "Maintenance" || i.categorie === "Sécurité électronique");
    const projetsMaintenance = projets.filter((p) => p.categorie === "Maintenance industrielle");
    const prestations = [
      {
        num: "01",
        color: "text-forest",
        icon: "tool",
        tag: "Projets & travaux",
        title: "Maintenance en milieu industriel",
        text: "Réalisation de projets et travaux de maintenance adaptés aux contraintes de production de votre site."
      },
      {
        num: "02",
        color: "text-orange",
        icon: "settings",
        tag: "Accompagnement",
        title: "Déploiement GMAO",
        text: "Mise en place et accompagnement au déploiement de services de maintenance et de la GMAO (Gestion de Maintenance Assistée par Ordinateur)."
      },
      {
        num: "03",
        color: "text-forest",
        icon: "shield",
        tag: "Sécurité électronique",
        title: "Vidéosurveillance, contrôle d'accès, incendie",
        text: "Installation de systèmes de vidéosurveillance, de contrôle d'accès, ainsi que de détection et d'extinction automatique d'incendie, pour sécuriser vos sites et vos équipes."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppIcon = _sfc_main$2;
      const _component_ProjetCard = _sfc_main$3;
      const _component_DevisSection = _sfc_main$4;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/stats-bg.jpg",
        eyebrow: "Nos activités / Maintenance industrielle",
        lead: "Réalisation de projets et travaux de maintenance, accompagnement au déploiement de la GMAO, et installation de systèmes de sécurité électronique."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Maintenir la performance de <span${_scopeId}>vos sites industriels.</span>`);
          } else {
            return [
              createTextVNode(" Maintenir la performance de "),
              createVNode("span", null, "vos sites industriels.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Nos prestations</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> De l&#39;atelier <span class="text-orange italic font-normal">à la sécurité du site.</span></h2><div class="grid gap-8 md:grid-cols-3 mt-[60px]"><!--[-->`);
      ssrRenderList(prestations, (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.title,
          class: "flex flex-col bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><div class="flex items-center justify-between mb-8"><p class="${ssrRenderClass([p.color, "font-display text-5xl font-bold leading-none"])}">${ssrInterpolate(p.num)}</p>`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: p.icon,
          class: ["w-10 h-10", p.color]
        }, null, _parent));
        _push(`</div><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-3">${ssrInterpolate(p.tag)}</p><h3 class="font-body text-[22px] font-semibold text-noir mb-4">${ssrInterpolate(p.title)}</h3><p class="text-[15px] leading-[1.8] text-muted">${ssrInterpolate(p.text)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="glow isolate bg-noir text-white py-[120px]"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/hero-construction.jpg"))} alt="" class="absolute inset-0 -z-10 w-full h-full object-cover"><div class="absolute inset-0 -z-10 bg-noir/85"></div><div class="relative z-10 mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow !text-palm mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Offres associées</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Sur devis, <span class="text-orange italic font-normal">adaptées à votre site.</span></h2><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(offres), (o, i) => {
        _push(`<a${ssrRenderAttrs(mergeProps({
          key: o.nom,
          href: "#devis",
          class: "group flex flex-col bg-white/[0.14] backdrop-blur-md rounded px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}>`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: o.icon,
          class: "w-10 h-10 text-palm mb-6"
        }, null, _parent));
        _push(`<p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">${ssrInterpolate(o.categorie)}</p><h3 class="font-body text-lg font-semibold mb-3">${ssrInterpolate(o.nom)}</h3><p class="text-[15px] leading-[1.7] text-white/80 mb-8">${ssrInterpolate(o.detail)}</p><span class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm"> Demander un devis <span class="transition-transform duration-300 group-hover:translate-x-1">→</span></span></a>`);
      });
      _push(`<!--]--></div>`);
      if (unref(projetsMaintenance).length) {
        _push(`<div class="mt-16 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" }))}><p class="eyebrow !text-palm mb-4">Sur le terrain</p><p class="font-display text-3xl font-semibold leading-[1.2]"> Un projet <span class="text-orange italic font-normal">en cours</span> chez un partenaire industriel. </p></div><!--[-->`);
        ssrRenderList(unref(projetsMaintenance), (p) => {
          _push(`<div${ssrRenderAttrs(mergeProps({
            key: p.titre
          }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 })))}>`);
          _push(ssrRenderComponent(_component_ProjetCard, { projet: p }, null, _parent));
          _push(`</div>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Maintenance industrielle",
        title: "Décrivez votre besoin de maintenance",
        activite: "Maintenance industrielle"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Un site <span${_scopeId}>à maintenir ?</span>`);
          } else {
            return [
              createTextVNode("Un site "),
              createVNode("span", null, "à maintenir ?")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/activites/maintenance-industrielle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=maintenance-industrielle-Bz5RhmNM.js.map
