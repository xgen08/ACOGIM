import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "AppIcon",
  __ssrInlineRender: true,
  props: {
    name: { type: String, required: true }
  },
  setup(__props) {
    const paths = {
      tool: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94z"/>',
      clipboard: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>',
      shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
      eye: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>',
      home: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
      layers: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>',
      settings: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>',
      camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
      flame: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
      "map-pin": '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<svg${ssrRenderAttrs(mergeProps({
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.8",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      }, _attrs))}>${(_a = paths[__props.name]) != null ? _a : ""}</svg>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/AppIcon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const items = [
  {
    categorie: "Immobilier",
    nom: "Villa 4 pi\xE8ces \u2014 Bingerville",
    detail: "Villa neuve, terrain clos, disponible \xE0 la vente.",
    icon: "home",
    image: "/images/placeholder/building-1.jpg"
  },
  {
    categorie: "Immobilier",
    nom: "Terrain nu \u2014 Ayopoumin",
    detail: "Lot titr\xE9, viabilis\xE9, id\xE9al pour projet r\xE9sidentiel.",
    icon: "map-pin",
    image: "/images/placeholder/building-2.jpg"
  },
  {
    categorie: "Construction",
    nom: "Offre construction cl\xE9 en main",
    detail: "\xC9tude, permis, suivi de chantier et livraison.",
    icon: "layers",
    image: "/images/placeholder/projet-construction.jpg"
  },
  {
    categorie: "Maintenance",
    nom: "Contrat de maintenance pr\xE9ventive",
    detail: "Intervention planifi\xE9e et d\xE9ploiement GMAO pour site industriel.",
    icon: "settings",
    image: "/images/placeholder/stats-bg.jpg"
  },
  {
    categorie: "S\xE9curit\xE9 \xE9lectronique",
    nom: "Pack vid\xE9osurveillance + contr\xF4le d'acc\xE8s",
    detail: "Installation et param\xE9trage pour site commercial ou industriel.",
    icon: "camera"
  },
  {
    categorie: "S\xE9curit\xE9 \xE9lectronique",
    nom: "D\xE9tection & extinction incendie",
    detail: "Syst\xE8me automatique adapt\xE9 aux normes de votre secteur d'activit\xE9.",
    icon: "flame"
  }
];

export { _sfc_main as _, items as i };
//# sourceMappingURL=catalogue-BJMx7mrz.mjs.map
