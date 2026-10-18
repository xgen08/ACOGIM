import { ref, reactive, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';

const _sfc_main = {
  __name: "DevisForm",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "Demander un devis" },
    subject: { type: String, default: "" }
  },
  setup(__props) {
    const submitted = ref(false);
    const form = reactive({
      nom: "",
      telephone: "",
      email: "",
      activite: "",
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-paper border border-charcoal/10 p-8" }, _attrs))}><p class="eyebrow mb-2">${ssrInterpolate(__props.subject || "Formulaire")}</p><h3 class="font-display text-2xl mb-6">${ssrInterpolate(__props.title)}</h3>`);
      if (!unref(submitted)) {
        _push(`<form class="space-y-4"><div class="grid sm:grid-cols-2 gap-4"><div><label class="block text-xs font-mono uppercase tracking-wide mb-1" for="nom">Nom complet</label><input id="nom"${ssrRenderAttr("value", unref(form).nom)} type="text" required class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"></div><div><label class="block text-xs font-mono uppercase tracking-wide mb-1" for="telephone">T\xE9l\xE9phone</label><input id="telephone"${ssrRenderAttr("value", unref(form).telephone)} type="tel" required class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"></div></div><div><label class="block text-xs font-mono uppercase tracking-wide mb-1" for="email">E-mail</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"></div><div><label class="block text-xs font-mono uppercase tracking-wide mb-1" for="activite">Activit\xE9 concern\xE9e</label><select id="activite" class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, "") : ssrLooseEqual(unref(form).activite, "")) ? " selected" : ""}>S\xE9lectionner...</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Immobilier \u2014 achat / vente</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Construction</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Maintenance industrielle</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>S\xE9curit\xE9 \xE9lectronique (vid\xE9osurveillance, contr\xF4le d&#39;acc\xE8s, incendie)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Autre</option></select></div><div><label class="block text-xs font-mono uppercase tracking-wide mb-1" for="message">Votre besoin</label><textarea id="message" rows="4" required class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="bg-palm text-charcoal font-semibold px-6 py-3 hover:bg-leaf hover:text-white transition-colors"> Envoyer la demande </button></form>`);
      } else {
        _push(`<div class="py-6"><p class="font-display text-xl text-forest mb-2">Demande envoy\xE9e.</p><p class="text-sm text-charcoal/70"> Un membre de l&#39;\xE9quipe ACOGIM-CI revient vers vous sous peu au num\xE9ro ou \xE0 l&#39;adresse indiqu\xE9s. </p></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DevisForm.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=DevisForm-07lP-u0E.mjs.map
