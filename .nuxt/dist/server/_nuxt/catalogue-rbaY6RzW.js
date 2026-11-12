import { _ as _sfc_main$1 } from "./PageHero-BM3DApsU.js";
import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { _ as _sfc_main$3 } from "./DevisSection-C17l9FdL.js";
import { a as asset } from "./asset-CqhL-QqR.js";
import { ref, computed, resolveDirective, withCtx, createTextVNode, createVNode, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
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
  __name: "catalogue",
  __ssrInlineRender: true,
  setup(__props) {
    const categories = ["Tous", ...new Set(items.map((i) => i.categorie))];
    const filtre = ref("Tous");
    const selected = ref(null);
    const visibles = computed(
      () => filtre.value === "Tous" ? items : items.filter((i) => i.categorie === filtre.value)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_AppIcon = _sfc_main$2;
      const _component_DevisSection = _sfc_main$3;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/construction-site.jpg",
        eyebrow: "Catalogue",
        lead: "Chaque bien ou service peut faire l'objet d'une demande de devis directe : sélectionnez un élément et complétez le formulaire, notre équipe revient vers vous avec une proposition adaptée. Photos génériques à titre d'illustration."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Biens et services, <span${_scopeId}>sur devis.</span>`);
          } else {
            return [
              createTextVNode(" Biens et services, "),
              createVNode("span", null, "sur devis.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="bg-white py-[120px]"><div class="mx-auto max-w-[1280px] px-8"><div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]"><div><p${ssrRenderAttrs(mergeProps({ class: "eyebrow mb-4" }, ssrGetDirectiveProps(_ctx, _directive_reveal)))}>Le catalogue</p><h2${ssrRenderAttrs(mergeProps({ class: "font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir" }, ssrGetDirectiveProps(_ctx, _directive_reveal, 100)))}> Sélectionnez, <span class="text-orange italic font-normal">nous chiffrons.</span></h2></div><div${ssrRenderAttrs(mergeProps({
        class: "flex flex-wrap gap-2",
        role: "group",
        "aria-label": "Filtrer par catégorie"
      }, ssrGetDirectiveProps(_ctx, _directive_reveal, 200)))}><!--[-->`);
      ssrRenderList(categories, (c) => {
        _push(`<button type="button"${ssrRenderAttr("aria-pressed", unref(filtre) === c)} class="${ssrRenderClass([unref(filtre) === c ? "bg-noir text-white border-noir" : "border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir", "px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"])}">${ssrInterpolate(c)}</button>`);
      });
      _push(`<!--]--></div></div><div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3"><!--[-->`);
      ssrRenderList(unref(visibles), (item, i) => {
        _push(`<button${ssrRenderAttrs(mergeProps({
          key: item.nom,
          type: "button",
          "aria-pressed": unref(selected) === item.nom,
          class: ["group relative flex flex-col text-left bg-white rounded overflow-hidden transition-all duration-300 hover:-translate-y-2", unref(selected) === item.nom ? "ring-2 ring-palm shadow-[0_20px_60px_rgba(158,212,0,0.25)]" : "shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"]
        }, ssrGetDirectiveProps(_ctx, _directive_reveal, i * 100)))}><div class="relative h-[220px] overflow-hidden">`);
        if (item.image) {
          _push(`<img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(item.image))} alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">`);
        } else {
          _push(`<div class="glow w-full h-full bg-noir flex items-center justify-center">`);
          _push(ssrRenderComponent(_component_AppIcon, {
            name: item.icon,
            class: "relative w-14 h-14 text-palm"
          }, null, _parent));
          _push(`</div>`);
        }
        _push(`<span class="${ssrRenderClass([unref(selected) === item.nom ? "bg-palm text-noir opacity-100 scale-100" : "opacity-0 scale-90", "absolute top-5 right-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300"])}"> ✓ Sélectionné </span></div><div class="p-7 flex flex-col flex-1"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">${ssrInterpolate(item.categorie)}</p><h3 class="font-body text-lg font-semibold text-noir mb-2">${ssrInterpolate(item.nom)}</h3><p class="text-sm leading-[1.6] text-muted mb-6">${ssrInterpolate(item.detail)}</p><span class="${ssrRenderClass([unref(selected) === item.nom ? "text-forest" : "text-noir group-hover:text-ember", "mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] transition-colors"])}">${ssrInterpolate(unref(selected) === item.nom ? "Retirer la sélection" : "Sélectionner")}</span></div></button>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_DevisSection, {
        subject: "Catalogue",
        title: unref(selected) ? `Devis — ${unref(selected)}` : "Demander un devis"
      }, {
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Recevez <span${_scopeId}>une proposition adaptée.</span>`);
          } else {
            return [
              createTextVNode("Recevez "),
              createVNode("span", null, "une proposition adaptée.")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(selected)) {
        _push(`<div class="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 flex items-center gap-4 bg-noir text-white rounded-full pl-6 pr-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"><span class="text-sm truncate"><span class="text-white/60">Sélection :</span> ${ssrInterpolate(unref(selected))}</span><a href="#devis" class="shrink-0 rounded-full bg-palm text-noir px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.05em] hover:bg-white transition-colors">Devis →</a><button type="button" aria-label="Retirer la sélection" class="shrink-0 w-9 h-9 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">✕</button></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/catalogue.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=catalogue-rbaY6RzW.js.map
