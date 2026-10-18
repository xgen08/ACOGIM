import { _ as __nuxt_component_0 } from './nuxt-link-Ba4rYKFC.mjs';
import { mergeProps, ref, unref, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { p as publicAssetsURL } from '../routes/renderer.mjs';
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
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _imports_0$1 = publicAssetsURL("/images/logo/acogim-icon.png");
const _sfc_main$2 = {
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
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: ["sticky top-0 z-50 bg-leaf text-white transition-shadow duration-300", unref(scrolled) ? "shadow-xl shadow-charcoal/30" : ""]
      }, _attrs))}><div class="mx-auto max-w-6xl px-6"><div class="${ssrRenderClass([unref(scrolled) ? "h-14" : "h-20", "flex items-center justify-between transition-[height] duration-300"])}">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-3 font-display text-2xl tracking-wide leading-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0$1)} alt="ACOGIM-CI" class="${ssrRenderClass([unref(scrolled) ? "h-8" : "h-11", "w-auto bg-white rounded-md px-2 py-1 box-content transition-[height] duration-300"])}"${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0$1,
                alt: "ACOGIM-CI",
                class: ["w-auto bg-white rounded-md px-2 py-1 box-content transition-[height] duration-300", unref(scrolled) ? "h-8" : "h-11"]
              }, null, 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden md:flex items-center gap-8 font-body text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:underline decoration-2 underline-offset-8 transition-colors"
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
        class: "hover:underline decoration-2 underline-offset-8 transition-colors"
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
      _push(`<div class="relative"><button class="flex items-center gap-1 hover:underline decoration-2 underline-offset-8 transition-colors"${ssrRenderAttr("aria-expanded", unref(activitesOpen))}> Nos activit\xE9s <span class="text-xs">\u25BE</span></button><div class="absolute left-0 top-full pt-3 w-64" style="${ssrRenderStyle(unref(activitesOpen) ? null : { display: "none" })}"><ul class="bg-paper text-charcoal shadow-xl border-t-4 border-orange"><!--[-->`);
      ssrRenderList(activites, (a) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: a.to,
          class: "block px-5 py-3 text-sm hover:bg-concrete transition-colors"
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
        class: "hover:underline decoration-2 underline-offset-8 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`R\xE9alisations`);
          } else {
            return [
              createTextVNode("R\xE9alisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        class: "hover:underline decoration-2 underline-offset-8 transition-colors"
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
        class: "group inline-flex items-center gap-2 bg-orange text-ink font-semibold px-4 py-2 hover:bg-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Demander un devis <span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span>`);
          } else {
            return [
              createTextVNode(" Demander un devis "),
              createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><button class="md:hidden"${ssrRenderAttr("aria-expanded", unref(open))} aria-label="Ouvrir le menu"><span class="block w-7 h-0.5 bg-white mb-1.5"></span><span class="block w-7 h-0.5 bg-white mb-1.5"></span><span class="block w-7 h-0.5 bg-white"></span></button></div></div><div class="md:hidden bg-leaf border-t border-white/25" style="${ssrRenderStyle(unref(open) ? null : { display: "none" })}"><nav class="flex flex-col px-6 py-4 gap-4 font-body text-sm">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => open.value = false
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
        onClick: ($event) => open.value = false
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
          class: "pl-4 text-white"
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
        onClick: ($event) => open.value = false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`R\xE9alisations`);
          } else {
            return [
              createTextVNode("R\xE9alisations")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/catalogue",
        onClick: ($event) => open.value = false
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
        class: "text-white font-bold underline decoration-orange decoration-2 underline-offset-4"
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
      _push(`</nav></div></header>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheHeader.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = publicAssetsURL("/images/logo/acogim-lockup.png");
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-leaf text-white" }, _attrs))}><div class="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4"><div><img${ssrRenderAttr("src", _imports_0)} alt="ACOGIM-CI" class="h-20 w-auto mb-4 bg-white rounded-md p-2 box-content"><p class="text-sm text-white leading-relaxed"> Agence de Construction, de Gestion Immobili\xE8res et de Maintenance C\xF4te d&#39;Ivoire. </p></div><div><p class="eyebrow text-white font-semibold mb-3">Coordonn\xE9es</p><ul class="text-sm space-y-1.5 text-white"><li>BP : 705 CIDEX 03 Abidjan</li><li>Ayopoumin Ex-Mitt\xE9rand, Villa n\xB0 356</li><li>Bingerville</li><li>T\xE9l : +225 27 24 45 14 22</li></ul></div><div><p class="eyebrow text-white font-semibold mb-3">Contact projet</p><ul class="text-sm space-y-1.5 text-white"><li>M. YEO Nandiel\xE8</li><li>+225 07 07 00 02 07</li><li>+225 01 05 00 01 50</li></ul></div><div><p class="eyebrow text-white font-semibold mb-3">Nos activit\xE9s</p><ul class="text-sm space-y-1.5 text-white"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/activites/immobilier",
    class: "group inline-flex items-center gap-1.5 hover:underline transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span> Immobilier `);
      } else {
        return [
          createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192"),
          createTextVNode(" Immobilier ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/activites/construction",
    class: "group inline-flex items-center gap-1.5 hover:underline transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span> Construction `);
      } else {
        return [
          createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192"),
          createTextVNode(" Construction ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/activites/maintenance-industrielle",
    class: "group inline-flex items-center gap-1.5 hover:underline transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="transition-transform duration-300 group-hover:translate-x-1"${_scopeId}>\u2192</span> Maintenance industrielle `);
      } else {
        return [
          createVNode("span", { class: "transition-transform duration-300 group-hover:translate-x-1" }, "\u2192"),
          createTextVNode(" Maintenance industrielle ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div></div><div class="border-t border-white/25"><div class="mx-auto max-w-6xl px-6 py-5 text-xs text-white font-mono"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} ACOGIM-CI. Tous droits r\xE9serv\xE9s. </div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TheFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_TheHeader = _sfc_main$2;
  const _component_TheFooter = __nuxt_component_1;
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

export { _default as default };
//# sourceMappingURL=default-Vi6lXark.mjs.map
