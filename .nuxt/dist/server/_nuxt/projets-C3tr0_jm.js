import { a as asset } from "./asset-CqhL-QqR.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = {
  __name: "ProjetCard",
  __ssrInlineRender: true,
  props: {
    projet: { type: Object, required: true }
  },
  setup(__props) {
    const badge = {
      "Réalisé": "bg-white text-noir",
      "En cours": "bg-ember text-white",
      "À venir": "bg-palm text-noir"
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<article${ssrRenderAttrs(mergeProps({ class: "group bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]" }, _attrs))}><div class="relative h-[260px] overflow-hidden bg-[#e5e5e5]"><img${ssrRenderAttr("src", ("asset" in _ctx ? _ctx.asset : unref(asset))(__props.projet.image))} alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"><div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div><span class="${ssrRenderClass([badge[__props.projet.statut], "absolute top-5 left-5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"])}">${ssrInterpolate(__props.projet.statut)}</span></div><div class="p-7"><p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">${ssrInterpolate(__props.projet.categorie)}</p><h3 class="font-body text-lg font-semibold text-noir mb-2">${ssrInterpolate(__props.projet.titre)}</h3><p class="text-sm leading-[1.6] text-muted">${ssrInterpolate(__props.projet.desc)}</p></div></article>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ProjetCard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const projets = [
  {
    statut: "Réalisé",
    categorie: "Construction",
    titre: "Résidence R+2 — Bingerville",
    desc: "Construction et livraison d'une résidence de standing, gestion locative assurée par ACOGIM-CI.",
    image: "/images/placeholder/projet-construction.jpg"
  },
  {
    statut: "En cours",
    categorie: "Maintenance industrielle",
    titre: "Maintenance industrielle — site de production",
    desc: "Déploiement GMAO et travaux de maintenance préventive pour un site industriel partenaire.",
    image: "/images/placeholder/stats-bg.jpg"
  },
  {
    statut: "À venir",
    categorie: "Immobilier",
    titre: "Programme de villas — Ayopoumin",
    desc: "Lotissement de villas avec systèmes de sécurité électronique intégrés dès la conception.",
    image: "/images/placeholder/projet-immobilier.jpg"
  }
];
export {
  _sfc_main as _,
  projets as p
};
//# sourceMappingURL=projets-C3tr0_jm.js.map
