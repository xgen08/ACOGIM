import { _ as __nuxt_component_0 } from './nuxt-link-Ba4rYKFC.mjs';
import { _ as _sfc_main$1, i as items } from './catalogue-BJMx7mrz.mjs';
import { ref, computed, withCtx, createTextVNode, createVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
import { p as projets } from './projets-CHRkWDUN.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import 'vue-router';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';

const _imports_0 = publicAssetsURL("/images/placeholder/hero-construction.jpg");
const _imports_1 = publicAssetsURL("/images/placeholder/about-main.jpg");
const _imports_2 = publicAssetsURL("/images/placeholder/about-overlay.jpg");
const _imports_3 = publicAssetsURL("/images/placeholder/cta-bg.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const pillars = [
      {
        icon: "home",
        title: "Immobilier",
        desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises.",
        to: "/activites/immobilier",
        accent: "text-royal"
      },
      {
        icon: "layers",
        title: "Construction",
        desc: "Construction, gestion et vente de biens immobiliers, du terrain \xE0 la livraison.",
        to: "/activites/construction",
        accent: "text-brick"
      },
      {
        icon: "settings",
        title: "Maintenance industrielle",
        desc: "Projets et travaux de maintenance en milieu industriel, GMAO et s\xE9curit\xE9 \xE9lectronique.",
        to: "/activites/maintenance-industrielle",
        accent: "text-forest"
      }
    ];
    const atouts = [
      {
        icon: "tool",
        title: "Expertise multi-m\xE9tiers",
        desc: "Immobilier, construction et maintenance industrielle pilot\xE9s par une seule agence."
      },
      {
        icon: "clipboard",
        title: "Suivi rigoureux",
        desc: "De l'\xE9tude \xE0 la livraison, chaque projet est encadr\xE9 avec la m\xEAme exigence."
      },
      {
        icon: "shield",
        title: "S\xE9curit\xE9 & conformit\xE9",
        desc: "GMAO et s\xE9curit\xE9 \xE9lectronique int\xE9gr\xE9es \xE0 nos prestations industrielles."
      },
      {
        icon: "eye",
        title: "Transparence",
        desc: "Projets r\xE9alis\xE9s, en cours et \xE0 venir, pr\xE9sent\xE9s tels qu'ils sont."
      }
    ];
    const filters = ["Tous", "Immobilier", "Construction", "Maintenance industrielle"];
    const activeFilter = ref("Tous");
    const filteredProjets = computed(
      () => activeFilter.value === "Tous" ? projets : projets.filter((p) => p.categorie === activeFilter.value)
    );
    const statusColor = {
      "R\xE9alis\xE9": "bg-forest",
      "En cours": "bg-royal",
      "\xC0 venir": "bg-palm text-charcoal"
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_AppIcon = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative isolate overflow-hidden"><div class="absolute inset-0 -z-10"><img${ssrRenderAttr("src", _imports_0)} alt="" class="w-full h-full object-cover"><div class="absolute inset-0 bg-forest/80"></div></div><div class="mx-auto max-w-6xl px-6 pt-28 pb-40 md:pt-36 md:pb-52"><p class="eyebrow mb-4 text-white">ACOGIM-CI \u2014 Bingerville, C\xF4te d&#39;Ivoire</p><h1 class="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl text-concrete"> Construire, g\xE9rer et <span class="text-palm">maintenir</span> ce qui fait tenir vos activit\xE9s. </h1><p class="mt-6 max-w-2xl text-lg text-white"> Trois m\xE9tiers, une m\xEAme exigence : l&#39;immobilier, la construction et la maintenance industrielle, pilot\xE9s par une seule agence \xE0 Abidjan. </p><div class="mt-8 flex flex-wrap gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "bg-palm text-charcoal px-6 py-3 font-semibold hover:bg-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir le catalogue `);
          } else {
            return [
              createTextVNode(" Voir le catalogue ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "border-2 border-concrete text-concrete px-6 py-3 font-semibold hover:bg-concrete hover:text-charcoal transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Demander un devis `);
          } else {
            return [
              createTextVNode(" Demander un devis ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="atouts" class="mx-auto max-w-6xl px-6 -mt-24 md:-mt-20 relative z-10"><div class="bg-paper shadow-2xl shadow-charcoal/20 grid sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 md:divide-x divide-charcoal/10"><!--[-->`);
      ssrRenderList(atouts, (a) => {
        _push(`<div class="p-6">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: a.icon,
          class: "w-8 h-8 text-petrol mb-3"
        }, null, _parent));
        _push(`<h3 class="font-display text-lg mb-1">${ssrInterpolate(a.title)}</h3><p class="text-sm text-charcoal/70 leading-relaxed">${ssrInterpolate(a.desc)}</p></div>`);
      });
      _push(`<!--]--></div></section><section class="mx-auto max-w-6xl px-6 pt-24 md:pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center"><div class="relative"><img${ssrRenderAttr("src", _imports_1)} alt="" class="w-full object-cover"><img${ssrRenderAttr("src", _imports_2)} alt="" class="hidden md:block absolute -bottom-8 -right-8 w-2/3 border-8 border-paper shadow-xl"></div><div><p class="eyebrow mb-3">\xC0 propos d&#39;ACOGIM-CI</p><h2 class="font-display text-3xl md:text-4xl mb-5"> Une agence \xE0 taille humaine, trois m\xE9tiers compl\xE9mentaires. </h2><p class="text-charcoal/75 leading-relaxed mb-4"> Agence de Construction, de Gestion Immobili\xE8res et de Maintenance C\xF4te d&#39;Ivoire \u2014 une SARL bas\xE9e \xE0 Bingerville, Abidjan. </p><p class="text-charcoal/75 leading-relaxed mb-6"> Une gestion rigoureuse de chaque projet, de l&#39;\xE9tude \xE0 la livraison, et un accompagnement continu pour nos clients industriels via la GMAO et la s\xE9curit\xE9 \xE9lectronique. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/qui-sommes-nous",
        class: "group inline-flex items-center gap-2 bg-leaf text-white px-6 py-3 font-semibold hover:bg-palm hover:text-charcoal transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` En savoir plus <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" En savoir plus "),
              createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section id="activites" class="mx-auto max-w-6xl px-6 py-20"><p class="eyebrow mb-3">Nos activit\xE9s</p><h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl"> Une SARL, trois domaines d&#39;expertise. </h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(pillars, (p) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: p.title,
          to: p.to,
          class: "group bg-paper border border-charcoal/10 p-7 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([p.accent, "w-12 h-12 flex items-center justify-center bg-charcoal/5 group-hover:bg-palm group-hover:text-charcoal transition-colors duration-300"])}"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_AppIcon, {
                name: p.icon,
                class: "w-6 h-6"
              }, null, _parent2, _scopeId));
              _push2(`</div><h3 class="font-display text-2xl mt-4 mb-3 group-hover:text-petrol transition-colors"${_scopeId}>${ssrInterpolate(p.title)}</h3><p class="text-sm text-charcoal/70 leading-relaxed"${_scopeId}>${ssrInterpolate(p.desc)}</p><span class="inline-flex items-center gap-2 mt-5 font-mono text-xs uppercase tracking-wide text-forest"${_scopeId}> En savoir plus <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span></span>`);
            } else {
              return [
                createVNode("div", {
                  class: ["w-12 h-12 flex items-center justify-center bg-charcoal/5 group-hover:bg-palm group-hover:text-charcoal transition-colors duration-300", p.accent]
                }, [
                  createVNode(_component_AppIcon, {
                    name: p.icon,
                    class: "w-6 h-6"
                  }, null, 8, ["name"])
                ], 2),
                createVNode("h3", { class: "font-display text-2xl mt-4 mb-3 group-hover:text-petrol transition-colors" }, toDisplayString(p.title), 1),
                createVNode("p", { class: "text-sm text-charcoal/70 leading-relaxed" }, toDisplayString(p.desc), 1),
                createVNode("span", { class: "inline-flex items-center gap-2 mt-5 font-mono text-xs uppercase tracking-wide text-forest" }, [
                  createTextVNode(" En savoir plus "),
                  createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section><section id="services" class="bg-paper"><div class="mx-auto max-w-6xl px-6 py-20"><p class="eyebrow mb-3">Nos services</p><h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl"> Un catalogue de biens et prestations, sur devis. </h2><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(items), (s) => {
        _push(`<div class="text-center bg-concrete/60 p-8 hover:bg-leaf hover:text-white transition-colors duration-300 group"><div class="w-14 h-14 mx-auto flex items-center justify-center bg-paper text-petrol group-hover:bg-palm group-hover:text-charcoal transition-colors duration-300">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: s.icon,
          class: "w-7 h-7"
        }, null, _parent));
        _push(`</div><p class="eyebrow mt-5 group-hover:text-white transition-colors">${ssrInterpolate(s.categorie)}</p><h3 class="font-display text-lg mt-1 mb-2">${ssrInterpolate(s.nom)}</h3><p class="text-sm text-charcoal/70 group-hover:text-white transition-colors leading-relaxed">${ssrInterpolate(s.detail)}</p></div>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-forest hover:text-petrol transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir le catalogue complet <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Voir le catalogue complet "),
              createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section id="projets" class="bg-concrete"><div class="mx-auto max-w-6xl px-6 py-20"><p class="eyebrow mb-3">Nos projets</p><h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl"> R\xE9alis\xE9s, en cours et \xE0 venir. </h2><div class="flex flex-wrap gap-3 mb-10"><!--[-->`);
      ssrRenderList(filters, (f) => {
        _push(`<button type="button" class="${ssrRenderClass([unref(activeFilter) === f ? "bg-leaf text-white border-leaf" : "border-charcoal/20 text-charcoal/75 hover:border-leaf hover:text-forest", "font-mono text-xs uppercase tracking-wide px-4 py-2 border transition-colors duration-300"])}">${ssrInterpolate(f)}</button>`);
      });
      _push(`<!--]--></div><div class="grid md:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(unref(filteredProjets), (p) => {
        _push(`<article class="group relative overflow-hidden border border-charcoal/10 hover:border-leaf transition-colors duration-300"><div class="relative h-56 overflow-hidden"><img${ssrRenderAttr("src", p.image)} alt="" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"><div class="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"></div><span class="${ssrRenderClass([statusColor[p.statut], "absolute top-4 left-4 font-mono text-xs uppercase tracking-wide px-3 py-1 text-white"])}">${ssrInterpolate(p.statut)}</span></div><div class="p-6 bg-white text-charcoal"><h3 class="font-display text-xl mb-2">${ssrInterpolate(p.titre)}</h3><p class="text-sm text-charcoal/75 leading-relaxed">${ssrInterpolate(p.desc)}</p></div></article>`);
      });
      _push(`<!--]--></div><div class="mt-10 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/realisations",
        class: "group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-forest hover:text-leaf transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Voir toutes les r\xE9alisations <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Voir toutes les r\xE9alisations "),
              createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="relative isolate"><div class="absolute inset-0 -z-10"><img${ssrRenderAttr("src", _imports_3)} alt="" class="w-full h-full object-cover"><div class="absolute inset-0 bg-forest/80"></div></div><div class="mx-auto max-w-6xl px-6 py-20 text-center text-concrete"><h2 class="font-display text-3xl md:text-4xl mb-4">Un projet immobilier ou industriel en t\xEAte ?</h2><p class="text-white max-w-xl mx-auto mb-8"> Parcourez notre catalogue de biens et services, ou d\xE9crivez-nous directement votre besoin. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "group inline-flex items-center gap-2 bg-palm text-charcoal px-8 py-3 font-semibold hover:bg-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Parcourir le catalogue <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Parcourir le catalogue "),
              createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-jFKedDYI.mjs.map
