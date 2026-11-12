import { _ as _sfc_main$1 } from "./PageHero-BM3DApsU.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-BT2FnOSy.js";
import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { a as asset } from "./asset-CqhL-QqR.js";
import { resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrGetDirectiveProps, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
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
  __name: "qui-sommes-nous",
  __ssrInlineRender: true,
  setup(__props) {
    const acronyme = [
      { lettres: "A", mot: "Agence" },
      { lettres: "CO", mot: "de Construction" },
      { lettres: "G", mot: "de Gestion" },
      { lettres: "I", mot: "Immobilières" },
      { lettres: "M", mot: "et de Maintenance" },
      { lettres: "CI", mot: "Côte d'Ivoire", accent: true }
    ];
    const fiche = [
      { valeur: "SARL", label: "Forme juridique" },
      { valeur: "03", label: "Domaines d'activité" },
      { valeur: "Bingerville", label: "Siège, Abidjan" }
    ];
    const piliers = [
      {
        num: "01",
        color: "text-forest",
        title: "Nos activités",
        items: [
          "Achat et vente de biens immobiliers",
          "Construction, gestion et vente de biens immobiliers",
          "Maintenance industrielle"
        ]
      },
      {
        num: "02",
        color: "text-orange",
        title: "Notre politique",
        text: "Une gestion rigoureuse de chaque projet, de l'étude à la livraison, et un accompagnement continu pour nos clients industriels via la GMAO et la sécurité électronique."
      },
      {
        num: "03",
        color: "text-forest",
        title: "Notre ambition",
        text: "Faire connaître ACOGIM-CI auprès des clients potentiels et du grand public, en donnant à voir nos réalisations, nos projets en cours et nos perspectives."
      }
    ];
    const metiers = [
      {
        icon: "home",
        title: "Immobilier",
        desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises.",
        to: "/activites/immobilier"
      },
      {
        icon: "layers",
        title: "Construction",
        desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison.",
        to: "/activites/construction"
      },
      {
        icon: "settings",
        title: "Maintenance industrielle",
        desc: "Projets et travaux de maintenance, GMAO et sécurité électronique.",
        to: "/activites/maintenance-industrielle"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppIcon = _sfc_main$2;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/cta-bg.jpg",
        eyebrow: "Qui sommes-nous",
        lead: "Agence de Construction, de Gestion Immobilières et de Maintenance Côte d'Ivoire — une SARL basée à Bingerville, Abidjan."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ACOGIM-CI, une agence à taille humaine, <span${_scopeId}>trois métiers complémentaires.</span>`);
          } else {
            return [
              createTextVNode(" ACOGIM-CI, une agence à taille humaine, "),
              createVNode("span", null, "trois métiers complémentaires.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="relative z-10 mx-auto max-w-[1280px] px-8 -mt-14"><div class="grid sm:grid-cols-3 bg-white rounded shadow-[0_10px_40px_rgba(0,0,0,0.08)]"><!--[-->`);
      ssrRenderList(fiche, (f, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: f.label,
          class: "px-8 py-8 text-center sm:border-l first:border-l-0 border-black/5 max-sm:border-t max-sm:first:border-t-0"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 100)))}><p class="font-display text-3xl md:text-4xl font-semibold text-noir">${ssrInterpolate(f.valeur)}</p><p class="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">${ssrInterpolate(f.label)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" }))}><p class="eyebrow mb-4">Notre nom</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-10"> Six lettres, <span class="text-orange italic font-normal">une promesse.</span></h2><ul class="grid grid-cols-2 sm:grid-cols-3 gap-4"><!--[-->`);
      ssrRenderList(acronyme, (a, i) => {
        _push(`<li${ssrRenderAttrs(mergeProps({
          key: a.lettres,
          class: ["rounded px-5 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]", a.accent ? "bg-palm" : "bg-white"]
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 80)))}><span class="${ssrRenderClass([a.accent ? "text-noir" : "text-forest", "block font-display text-4xl font-bold leading-none"])}">${ssrInterpolate(a.lettres)}</span><span class="${ssrRenderClass([a.accent ? "text-noir font-medium" : "text-muted", "block mt-3 text-sm"])}">${ssrInterpolate(a.mot)}</span></li>`);
      });
      _push(`<!--]--></ul></div><div${ssrRenderAttrs(mergeProps({ class: "relative h-[420px] md:h-[500px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 })))}><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/about-main.jpg"))} alt="" class="w-[85%] h-full object-cover rounded"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/about-overlay.jpg"))} alt="" class="hidden md:block absolute -bottom-10 right-0 w-[55%] h-[55%] object-cover rounded border-8 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"></div></div></section><section class="bg-concrete py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Ce qui nous guide</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Une même exigence, <span class="text-orange italic font-normal">de l&#39;étude à la livraison.</span></h2><div class="grid gap-8 md:grid-cols-3 mt-[60px]"><!--[-->`);
      ssrRenderList(piliers, (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.title,
          class: "bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><p class="${ssrRenderClass([p.color, "font-display text-5xl font-bold leading-none mb-6"])}">${ssrInterpolate(p.num)}</p><h3 class="font-body text-[22px] font-semibold text-noir mb-4">${ssrInterpolate(p.title)}</h3>`);
        if (p.items) {
          _push(`<ul class="space-y-3"><!--[-->`);
          ssrRenderList(p.items, (item) => {
            _push(`<li class="flex gap-3 text-[15px] leading-[1.7] text-muted"><span class="mt-[11px] w-4 h-px shrink-0 bg-palm"></span> ${ssrInterpolate(item)}</li>`);
          });
          _push(`<!--]--></ul>`);
        } else {
          _push(`<p class="text-[15px] leading-[1.8] text-muted">${ssrInterpolate(p.text)}</p>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section class="glow isolate bg-noir text-white py-[120px]"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/stats-bg.jpg"))} alt="" class="absolute inset-0 -z-10 w-full h-full object-cover"><div class="absolute inset-0 -z-10 bg-noir/80"></div><div class="relative z-10 mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow !text-palm mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Nos métiers</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Trois savoir-faire, <span class="text-orange italic font-normal">une seule agence.</span></h2><div class="grid gap-6 md:grid-cols-3"><!--[-->`);
      ssrRenderList(metiers, (m, i) => {
        _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
          key: m.to,
          to: m.to,
          class: "group flex flex-col bg-white/[0.14] backdrop-blur-md rounded px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)), {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_AppIcon, {
                name: m.icon,
                class: "w-10 h-10 text-palm mb-6"
              }, null, _parent2, _scopeId));
              _push2(`<h3 class="font-display text-2xl font-semibold mb-3"${_scopeId}>${ssrInterpolate(m.title)}</h3><p class="text-[15px] leading-[1.7] text-white/80 mb-8"${_scopeId}>${ssrInterpolate(m.desc)}</p><span class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm"${_scopeId}> Découvrir <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>→</span></span>`);
            } else {
              return [
                createVNode(_component_AppIcon, {
                  name: m.icon,
                  class: "w-10 h-10 text-palm mb-6"
                }, null, 8, ["name"]),
                createVNode("h3", { class: "font-display text-2xl font-semibold mb-3" }, toDisplayString(m.title), 1),
                createVNode("p", { class: "text-[15px] leading-[1.7] text-white/80 mb-8" }, toDisplayString(m.desc), 1),
                createVNode("span", { class: "mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm" }, [
                  createTextVNode(" Découvrir "),
                  createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "→")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></section><section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-2 items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" }))}><p class="eyebrow mb-4">Contact projet</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6"> Un interlocuteur <span class="text-orange italic font-normal">pour votre projet.</span></h2><p class="text-[17px] leading-[1.9] text-muted max-w-[480px]"> Décrivez-nous votre besoin : nous revenons vers vous pour en discuter et vous proposer un devis. </p></div><div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 })))}><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2">Responsable projet</p><p class="font-display text-3xl font-semibold text-noir mb-8">M. YEO Nandielè</p><ul class="space-y-4 text-[15px]"><li class="flex items-center gap-4"><span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center"><svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg></span><span class="flex flex-col"><a href="tel:+2250707000207" class="text-noir hover:text-ember transition-colors">+225 07 07 00 02 07</a><a href="tel:+2250105000150" class="text-noir hover:text-ember transition-colors">+225 01 05 00 01 50</a></span></li><li class="flex items-center gap-4"><span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: "map-pin",
        class: "w-5 h-5"
      }, null, _parent));
      _push(`</span><span class="text-muted"> Ayopoumin Ex-Mittérand, Villa n° 356, Bingerville<br> BP : 705 CIDEX 03 Abidjan </span></li></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-primary mt-10 w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Demander un devis`);
          } else {
            return [
              createTextVNode("Demander un devis")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/qui-sommes-nous.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=qui-sommes-nous-Cd_ipQLI.js.map
