import { _ as __nuxt_component_0 } from "./nuxt-link-BT2FnOSy.js";
import { a as asset } from "./asset-CqhL-QqR.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrGetDirectiveProps, ssrRenderSlot } from "vue/server-renderer";
import { u as useRoute, _ as _export_sfc } from "../server.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ufo/dist/index.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/defu/dist/defu.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/hookable/dist/index.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/unctx/dist/index.mjs";
import "/Users/mac/Desktop/Perso/ACOGIM/acogim-ci-site/node_modules/h3/dist/index.mjs";
import "vue-router";
const underline = "relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-palm after:transition-all after:duration-300 hover:after:w-full";
const navActive = "!text-noir after:!w-full after:!h-0.5";
const _sfc_main$3 = {
  __name: "TheHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const open = ref(false);
    const activitesOpen = ref(false);
    const scrolled = ref(false);
    const activites = [
      { label: "Immobilier", to: "/activites/immobilier" },
      { label: "Construction", to: "/activites/construction" },
      { label: "Maintenance industrielle", to: "/activites/maintenance-industrielle" }
    ];
    const navLink = `${underline} text-muted hover:text-noir`;
    const route = useRoute();
    const surActivite = computed(() => route.path.startsWith("/activites"));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5 transition-shadow duration-300", unref(scrolled) ? "shadow-[0_10px_30px_rgba(0,0,0,0.05)]" : ""]
      }, _attrs))}><div class="mx-auto max-w-[1280px] px-8"><div class="${ssrRenderClass([unref(scrolled) ? "h-16" : "h-20", "flex items-center justify-between transition-[height] duration-300"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/logo/acogim-icon.png"))} alt="ACOGIM-CI" class="${ssrRenderClass([unref(scrolled) ? "h-9" : "h-12", "w-auto transition-[height] duration-300"])}"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: ("asset" in _ctx ? _ctx.asset : unref(asset))("/images/logo/acogim-icon.png"),
                alt: "ACOGIM-CI",
                class: ["w-auto transition-[height] duration-300", unref(scrolled) ? "h-9" : "h-12"]
              }, null, 10, ["src"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-10 text-sm font-medium">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: navLink,
        "exact-active-class": navActive
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accueil`);
          } else {
            return [
              createTextVNode("Accueil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/qui-sommes-nous",
        class: navLink,
        "exact-active-class": navActive
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Qui sommes-nous`);
          } else {
            return [
              createTextVNode("Qui sommes-nous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative"><button class="${ssrRenderClass([[navLink, unref(surActivite) && navActive], "flex items-center gap-1"])}"${ssrRenderAttr("aria-expanded", unref(activitesOpen))}> Nos activités <span class="text-xs">▾</span></button><div class="absolute left-0 top-full pt-4 w-64" style="${ssrRenderStyle(unref(activitesOpen) ? null : { display: "none" })}"><ul class="bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"><!--[-->`);
      ssrRenderList(activites, (a) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: a.to,
          class: "block px-5 py-3 text-sm text-charcoal hover:bg-concrete hover:text-forest transition-colors",
          "exact-active-class": "bg-concrete !text-forest font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(a.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(a.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/realisations",
        class: navLink,
        "exact-active-class": navActive
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Réalisations`);
          } else {
            return [
              createTextVNode("Réalisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: navLink,
        "exact-active-class": navActive
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Catalogue`);
          } else {
            return [
              createTextVNode("Catalogue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: `${underline} font-semibold text-ember hover:text-orange`,
        "exact-active-class": "after:!w-full after:!h-0.5"
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
      _push(`</nav><button class="md:hidden p-2 -mr-2"${ssrRenderAttr("aria-expanded", unref(open))} aria-label="Ouvrir le menu"><span class="block w-6 h-px bg-noir mb-1.5"></span><span class="block w-6 h-px bg-noir mb-1.5"></span><span class="block w-6 h-px bg-noir"></span></button></div></div><div class="md:hidden bg-white border-t border-black/5" style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}"><nav class="flex flex-col px-8 py-5 gap-4 text-sm font-medium text-charcoal">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => open.value = false,
        "exact-active-class": "!text-forest font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Accueil`);
          } else {
            return [
              createTextVNode("Accueil")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/qui-sommes-nous",
        onClick: ($event) => open.value = false,
        "exact-active-class": "!text-forest font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Qui sommes-nous`);
          } else {
            return [
              createTextVNode("Qui sommes-nous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--[-->`);
      ssrRenderList(activites, (a) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: a.to,
          to: a.to,
          onClick: ($event) => open.value = false,
          class: "pl-4 text-muted",
          "exact-active-class": "!text-forest font-semibold"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(a.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(a.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/realisations",
        onClick: ($event) => open.value = false,
        "exact-active-class": "!text-forest font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Réalisations`);
          } else {
            return [
              createTextVNode("Réalisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        onClick: ($event) => open.value = false,
        "exact-active-class": "!text-forest font-semibold"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Catalogue`);
          } else {
            return [
              createTextVNode("Catalogue")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        onClick: ($event) => open.value = false,
        class: "font-semibold text-ember",
        "exact-active-class": "underline underline-offset-4"
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
      _push(`</nav></div></header>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = {
  __name: "CtaBanner",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "Un projet immobilier ou industriel en tête ?" },
    text: {
      type: String,
      default: "Parcourez notre catalogue de biens et services, ou décrivez-nous directement votre besoin."
    },
    to: { type: String, default: "/catalogue" },
    label: { type: String, default: "Parcourir le catalogue →" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden bg-gradient-to-b from-concrete via-palm/50 to-palm/70 text-noir pt-[100px] pb-[160px] md:pb-[190px] text-center" }, _attrs))}><div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)]"></div><div class="relative mx-auto max-w-[1280px] px-8"><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-5" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>${ssrInterpolate(__props.title)}</h2><p${ssrRenderAttrs(mergeProps({ class: "text-lg max-w-[600px] mx-auto mb-10 text-noir/80" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 120)))}>${ssrInterpolate(__props.text)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: __props.to,
        class: "btn-dark"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 240)), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.label)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.label), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><svg aria-hidden="true" class="absolute bottom-0 left-0 w-full h-[70px] md:h-[100px]" viewBox="0 0 1440 100" preserveAspectRatio="none"><path d="M0 40 C 260 95, 520 95, 760 55 S 1180 0, 1440 45 L1440 100 L0 100 Z" fill="#0F0F0F" fill-opacity="0.25"></path><path d="M0 70 C 300 20, 560 20, 820 60 S 1220 105, 1440 55 L1440 100 L0 100 Z" fill="#0F0F0F"></path></svg></section>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/CtaBanner.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {
  __name: "TheFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const ctaParPage = {
      "/qui-sommes-nous": {
        title: "Trois métiers, une seule exigence.",
        text: "Découvrez les projets que nous avons livrés, ceux en cours et ceux à venir.",
        to: "/realisations",
        label: "Voir nos réalisations →"
      },
      "/activites/immobilier": {
        title: "Un bien en vue ?",
        text: "Villas, terrains : parcourez les biens disponibles dans notre catalogue.",
        to: "/catalogue",
        label: "Voir les biens disponibles →"
      },
      "/activites/construction": {
        title: "Nos chantiers parlent pour nous.",
        text: "Résidences livrées, projets en cours et à venir : découvrez nos réalisations.",
        to: "/realisations",
        label: "Voir nos réalisations →"
      },
      "/activites/maintenance-industrielle": {
        title: "Entretenir et sécuriser votre site ?",
        text: "Contrat de maintenance, vidéosurveillance, détection incendie : toutes nos offres sont sur devis.",
        to: "/catalogue",
        label: "Voir les offres du catalogue →"
      },
      "/realisations": {
        title: "Votre projet pourrait être le prochain.",
        text: "Construction, bien immobilier ou site industriel : décrivez-nous votre besoin.",
        to: "/contact",
        label: "Parler de votre projet →"
      },
      "/catalogue": {
        title: "Besoin d'un conseil avant de choisir ?",
        text: "Découvrez l'agence, nos trois métiers et la manière dont nous suivons chaque projet.",
        to: "/qui-sommes-nous",
        label: "Découvrir l'agence →"
      },
      "/contact": {
        title: "Pas encore tout à fait décidé ?",
        text: "Parcourez notre catalogue de biens et services pour préciser votre besoin.",
        to: "/catalogue",
        label: "Parcourir le catalogue →"
      }
    };
    const route = useRoute();
    const cta = computed(() => ctaParPage[route.path.replace(/\/$/, "") || "/"] ?? {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CtaBanner = _sfc_main$2;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_CtaBanner, unref(cta), null, _parent));
      _push(`<footer class="bg-noir text-white pt-24 pb-10"><div class="mx-auto max-w-[1280px] px-8"><div class="grid gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] mb-20"><div><p class="font-display text-2xl font-bold tracking-[-0.03em] mb-6"> ACOGIM<span class="text-palm">-CI</span></p><p class="text-[15px] leading-[1.8] text-white/60 max-w-[300px]"> Agence de Construction, de Gestion Immobilières et de Maintenance Côte d&#39;Ivoire. </p></div><div><h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Coordonnées</h4><ul class="space-y-4 text-sm text-white/60"><li>BP : 705 CIDEX 03 Abidjan</li><li>Ayopoumin Ex-Mittérand, Villa n° 356</li><li>Bingerville</li><li><a href="tel:+2252724451422" class="hover:text-palm transition-colors">+225 27 24 45 14 22</a></li></ul></div><div><h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Contact projet</h4><ul class="space-y-4 text-sm text-white/60"><li>M. YEO Nandielè</li><li><a href="tel:+2250707000207" class="hover:text-palm transition-colors">+225 07 07 00 02 07</a></li><li><a href="tel:+2250105000150" class="hover:text-palm transition-colors">+225 01 05 00 01 50</a></li></ul></div><div><h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Navigation</h4><ul class="space-y-4 text-sm text-white/60"><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activites/immobilier",
        class: "hover:text-palm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Immobilier`);
          } else {
            return [
              createTextVNode("Immobilier")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activites/construction",
        class: "hover:text-palm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Construction`);
          } else {
            return [
              createTextVNode("Construction")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/activites/maintenance-industrielle",
        class: "hover:text-palm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Maintenance industrielle`);
          } else {
            return [
              createTextVNode("Maintenance industrielle")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/contact",
        class: "hover:text-palm transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li></ul></div></div><div class="border-t border-white/10 pt-10 flex flex-col md:flex-row gap-4 justify-between text-[13px] text-white/50"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ACOGIM-CI. Tous droits réservés.</p><p>Bingerville, Côte d&#39;Ivoire</p></div></div></footer><!--]-->`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = _sfc_main$3;
  const _component_TheFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_TheHeader, null, null, _parent));
  _push(`<main class="flex-1">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_TheFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-CxZ0N6Z0.js.map
