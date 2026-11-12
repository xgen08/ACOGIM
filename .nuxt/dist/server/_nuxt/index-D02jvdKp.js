import { _ as __nuxt_component_0 } from "./nuxt-link-BT2FnOSy.js";
import { _ as _sfc_main$1 } from "./AppIcon-CXgA78A5.js";
import { p as projets, _ as _sfc_main$2 } from "./projets-C3tr0_jm.js";
import { a as asset } from "./asset-CqhL-QqR.js";
import { ref, computed, resolveDirective, unref, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrGetDirectiveProps, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const atouts = [
      {
        icon: "layers",
        color: "text-charcoal",
        title: "Expertise multi-métiers",
        desc: "Immobilier, construction et maintenance industrielle pilotés par une seule agence."
      },
      {
        icon: "clipboard",
        color: "text-forest",
        title: "Suivi rigoureux",
        desc: "De l'étude à la livraison, chaque projet est encadré avec la même exigence."
      },
      {
        icon: "shield",
        color: "text-orange",
        title: "Sécurité & conformité",
        desc: "GMAO et sécurité électronique intégrées à nos prestations industrielles."
      },
      {
        icon: "eye",
        color: "text-forest",
        title: "Transparence",
        desc: "Projets réalisés, en cours et à venir, présentés tels qu'ils sont."
      }
    ];
    const activites = [
      {
        num: "01",
        num_color: "text-forest",
        title: "Immobilier",
        desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises.",
        to: "/activites/immobilier"
      },
      {
        num: "02",
        num_color: "text-orange",
        title: "Construction",
        desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison.",
        to: "/activites/construction"
      },
      {
        num: "03",
        num_color: "text-forest",
        title: "Maintenance industrielle",
        desc: "Projets et travaux de maintenance en milieu industriel, GMAO et sécurité électronique.",
        to: "/activites/maintenance-industrielle"
      }
    ];
    const categories = [
      {
        key: "Immobilier",
        icon: "home",
        desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises."
      },
      {
        key: "Maintenance",
        icon: "settings",
        desc: "Projets et travaux de maintenance en milieu industriel, avec accompagnement au déploiement de la GMAO."
      },
      {
        key: "Construction",
        icon: "layers",
        desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison."
      },
      {
        key: "Sécurité électronique",
        icon: "shield",
        desc: "Vidéosurveillance, contrôle d'accès, détection et extinction automatique d'incendie, pour sécuriser vos sites et vos équipes."
      }
    ].map((c) => ({ ...c, items: items.filter((s) => s.categorie === c.key) }));
    const activeCategory = ref(0);
    const currentCategory = computed(() => categories[activeCategory.value]);
    ref(null);
    const filters = [
      { label: "Tous", value: "Tous" },
      { label: "Immobilier", value: "Immobilier" },
      { label: "Construction", value: "Construction" },
      { label: "Maintenance", value: "Maintenance industrielle" }
    ];
    const activeFilter = ref("Tous");
    const filteredProjets = computed(
      () => activeFilter.value === "Tous" ? projets : projets.filter((p) => p.categorie === activeFilter.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppIcon = _sfc_main$1;
      const _component_ProjetCard = _sfc_main$2;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="glow isolate bg-noir text-white"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/hero-construction.jpg"))} alt="" class="hero-zoom absolute inset-0 -z-10 w-full h-full object-cover object-[70%_30%]"><div class="absolute inset-0 -z-10 bg-gradient-to-r from-noir via-noir/85 to-noir/40"></div><div class="relative z-10 mx-auto max-w-[1280px] px-8 pt-32 pb-28 md:pt-40 md:pb-36"><div class="max-w-[900px]"><p${ssrRenderAttrs(mergeProps({ class: "flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-palm before:block before:w-10 before:h-px before:bg-palm" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}> Bingerville, Côte d&#39;Ivoire </p><h1${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(40px,6vw,72px)] leading-[1.05] mb-8" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 120)))}> Construire, gérer et <span class="text-orange italic font-normal">maintenir</span> ce qui fait tenir vos activités. </h1><p${ssrRenderAttrs(mergeProps({ class: "text-lg leading-[1.8] font-light text-white/70 max-w-[600px] mb-12" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 240)))}> Trois métiers, une même exigence : l&#39;immobilier, la construction et la maintenance industrielle, pilotés par une seule agence à Abidjan. </p><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col sm:flex-row gap-5" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 360)))}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir le catalogue`);
          } else {
            return [
              createTextVNode("Voir le catalogue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "btn-outline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Nous contacter`);
          } else {
            return [
              createTextVNode("Nous contacter")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section class="bg-white py-[100px] border-b border-black/5"><div class="mx-auto max-w-[1280px] px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"><!--[-->`);
      ssrRenderList(atouts, (a, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: a.title,
          class: "p-8 bg-white rounded shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 100)))}>`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: a.icon,
          class: ["w-10 h-10 mb-6", a.color]
        }, null, _parent));
        _push(`<h3 class="font-body text-base font-semibold text-noir mb-3">${ssrInterpolate(a.title)}</h3><p class="text-sm leading-[1.7] text-muted">${ssrInterpolate(a.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="bg-concrete py-[120px]"><div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center"><div${ssrRenderAttrs(mergeProps({ class: "relative h-[420px] md:h-[500px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" })))}><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/about-main.jpg"))} alt="" class="w-[85%] h-full object-cover rounded"><div class="absolute -bottom-10 right-0 w-[240px] md:w-[280px] h-[170px] md:h-[200px] bg-palm rounded flex flex-col items-center justify-center text-noir shadow-[0_20px_60px_rgba(158,212,0,0.3)]"><span class="font-display text-5xl font-bold leading-none">03</span><span class="mt-2 text-xs font-semibold uppercase tracking-[0.15em]">Domaines d&#39;expertise</span></div></div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 }))}><p class="eyebrow mb-4">À propos d&#39;ACOGIM-CI</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6"> Une agence à taille humaine, <span class="text-orange italic font-normal">trois métiers complémentaires.</span></h2><p class="text-[17px] leading-[1.9] text-muted mb-6"> Agence de Construction, de Gestion Immobilières et de Maintenance Côte d&#39;Ivoire — une SARL basée à Bingerville, Abidjan. </p><p class="text-[17px] leading-[1.9] text-muted mb-8"> Une gestion rigoureuse de chaque projet, de l&#39;étude à la livraison, et un accompagnement continu pour nos clients industriels via la GMAO et la sécurité électronique. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/qui-sommes-nous",
        class: "btn-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Découvrir notre histoire →`);
          } else {
            return [
              createTextVNode("Découvrir notre histoire →")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="activites" class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Nos activités</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Une SARL, <span class="text-orange italic font-normal">trois domaines d&#39;expertise.</span></h2><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[60px]"><!--[-->`);
      ssrRenderList(activites, (a, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: a.title,
          class: "bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}><p class="${ssrRenderClass([a.num_color, "font-display text-5xl font-bold leading-none mb-6"])}">${ssrInterpolate(a.num)}</p><h3 class="font-body text-[22px] font-semibold text-noir mb-4">${ssrInterpolate(a.title)}</h3><p class="text-[15px] leading-[1.8] text-muted mb-8">${ssrInterpolate(a.desc)}</p>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: a.to,
          class: "btn-text"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`En savoir plus →`);
            } else {
              return [
                createTextVNode("En savoir plus →")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div></div></section><section id="services" class="relative bg-noir text-white lg:h-[400vh]"><div class="glow isolate flex items-center py-[100px] lg:py-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/placeholder/construction-site.jpg"))} alt="" class="absolute inset-0 -z-10 w-full h-full object-cover"><div class="absolute inset-0 -z-10 bg-noir/80"></div><div class="relative z-10 w-full mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center"><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" }))}><p class="eyebrow !text-palm mb-4">Nos services</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-8"> Un catalogue de <span class="text-orange italic font-normal">biens et prestations.</span></h2><div role="tablist" aria-label="Catégories de services" class="flex flex-wrap gap-2 lg:flex-col lg:gap-1"><!--[-->`);
      ssrRenderList(unref(categories), (c, i) => {
        _push(`<button type="button" role="tab"${ssrRenderAttr("aria-selected", i === unref(activeCategory))} class="${ssrRenderClass([i === unref(activeCategory) ? "text-white max-lg:bg-palm max-lg:text-noir" : "text-white/50 hover:text-white/80 max-lg:bg-white/10", "flex items-center gap-4 text-left transition-colors duration-300 max-lg:px-4 max-lg:py-2 max-lg:rounded-full max-lg:text-sm lg:py-2"])}"><span class="${ssrRenderClass([i === unref(activeCategory) ? "w-12 bg-palm" : "w-6 bg-white/30", "hidden lg:block h-px transition-all duration-300"])}"></span><span class="lg:font-display lg:text-2xl">${ssrInterpolate(c.key)}</span></button>`);
      });
      _push(`<!--]--></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "btn-outline !border-white/20 mt-10 hidden lg:inline-flex"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir le catalogue complet`);
          } else {
            return [
              createTextVNode("Voir le catalogue complet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div${ssrRenderAttrs(mergeProps({ class: "min-h-[380px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 })))}><div role="tabpanel"><div class="flex items-center gap-4 mb-5">`);
      _push(ssrRenderComponent(_component_AppIcon, {
        name: unref(currentCategory).icon,
        class: "w-10 h-10 text-palm"
      }, null, _parent));
      _push(`<span class="text-sm font-medium tracking-[0.15em] text-white/60">${ssrInterpolate(String(unref(activeCategory) + 1).padStart(2, "0"))} / ${ssrInterpolate(String(unref(categories).length).padStart(2, "0"))}</span></div><h3 class="font-display font-semibold text-3xl md:text-4xl mb-4">${ssrInterpolate(unref(currentCategory).key)}</h3><p class="text-[17px] leading-[1.8] text-white/75 max-w-[560px] mb-8">${ssrInterpolate(unref(currentCategory).desc)}</p><div class="grid gap-5 sm:grid-cols-2"><!--[-->`);
      ssrRenderList(unref(currentCategory).items, (s) => {
        _push(`<div class="bg-white/[0.14] backdrop-blur-md rounded px-7 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"><h4 class="font-body text-lg font-semibold text-white mb-2">${ssrInterpolate(s.nom)}</h4><p class="text-[15px] leading-[1.7] text-white/80">${ssrInterpolate(s.detail)}</p></div>`);
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "btn-outline !border-white/20 mt-10 lg:hidden"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir le catalogue complet`);
          } else {
            return [
              createTextVNode("Voir le catalogue complet")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></section><section id="projets" class="bg-concrete py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><div${ssrRenderAttrs(mergeProps({ class: "flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}><div><p class="eyebrow mb-4">Nos projets</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir"> Réalisés, <span class="text-orange italic font-normal">en cours et à venir.</span></h2></div><div class="flex flex-wrap gap-2"><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(activeFilter) === f.value ? "bg-noir text-white border-noir" : "border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir", "px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"])}">${ssrInterpolate(f.label)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(filteredProjets), (p, i) => {
        _push(`<div${ssrRenderAttrs(mergeProps({
          key: p.titre
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 120)))}>`);
        _push(ssrRenderComponent(_component_ProjetCard, {
          projet: p,
          class: "h-full"
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="text-center mt-[60px]">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/realisations",
        class: "btn-text"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Voir toutes les réalisations →`);
          } else {
            return [
              createTextVNode("Voir toutes les réalisations →")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-D02jvdKp.js.map
