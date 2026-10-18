import { _ as _sfc_main$1 } from './PageHero-BeNmHORi.mjs';
import { _ as _sfc_main$2 } from './DevisForm-07lP-u0E.mjs';
import { withCtx, createTextVNode, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = {
  __name: "construction",
  __ssrInlineRender: true,
  setup(__props) {
    const demarche = [
      {
        titre: "\xC9tude & conception",
        desc: "Analyse du terrain, plans, budget pr\xE9visionnel et permis de construire."
      },
      {
        titre: "R\xE9alisation",
        desc: "Suivi de chantier, contr\xF4le qualit\xE9 et respect des d\xE9lais convenus."
      },
      {
        titre: "Gestion & vente",
        desc: "Mise en location, gestion locative ou mise en vente du bien livr\xE9."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PageHero = _sfc_main$1;
      const _component_DevisForm = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_PageHero, {
        image: "/images/placeholder/construction-site.jpg",
        eyebrow: "Nos activit\xE9s / Construction",
        lead: "Du terrain \xE0 la livraison, ACOGIM-CI pilote vos projets de construction et assure la gestion locative ou la revente des biens livr\xE9s."
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Construction, gestion et vente de <span class="text-palm"${_scopeId}>biens immobiliers.</span>`);
          } else {
            return [
              createTextVNode(" Construction, gestion et vente de "),
              createVNode("span", { class: "text-palm" }, "biens immobiliers.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<section class="mx-auto max-w-6xl px-6 py-16"><p class="eyebrow mb-10">Notre d\xE9marche</p><div class="grid md:grid-cols-3 gap-10 md:gap-6"><!--[-->`);
      ssrRenderList(demarche, (step, i) => {
        _push(`<div class="process-line flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center"><div class="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-charcoal/20 bg-concrete flex items-center justify-center font-display text-2xl hover:border-petrol hover:text-petrol transition-colors duration-300">${ssrInterpolate(i + 1)}</div><div class="md:mt-5"><h2 class="font-display text-xl mb-2">${ssrInterpolate(step.titre)}</h2><p class="text-sm text-charcoal/70 leading-relaxed md:max-w-[220px] md:mx-auto">${ssrInterpolate(step.desc)}</p></div></div>`);
      });
      _push(`<!--]--></div></section><section class="mx-auto max-w-6xl px-6 py-16">`);
      _push(ssrRenderComponent(_component_DevisForm, {
        subject: "Construction",
        title: "Parlez-nous de votre projet de construction"
      }, null, _parent));
      _push(`</section></div>`);
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
//# sourceMappingURL=construction-lfnrDPRY.mjs.map
