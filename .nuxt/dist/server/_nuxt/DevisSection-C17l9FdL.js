import { _ as _sfc_main$2 } from "./AppIcon-CXgA78A5.js";
import { ref, reactive, mergeProps, unref, useSSRContext, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderClass, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrGetDirectiveProps, ssrRenderSlot, ssrRenderComponent } from "vue/server-renderer";
const label = "block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2";
const field = "w-full rounded bg-concrete border border-transparent px-4 py-3 text-[15px] text-noir transition-colors focus:bg-white focus:border-palm focus:outline-none focus:ring-2 focus:ring-palm/30";
const _sfc_main$1 = {
  __name: "DevisForm",
  __ssrInlineRender: true,
  props: {
    title: { type: String, default: "Demander un devis" },
    subject: { type: String, default: "" },
    // Pré-sélection de « Activité concernée » (doit correspondre à une option ci-dessous).
    activite: { type: String, default: "" }
  },
  setup(__props) {
    const props = __props;
    const submitted = ref(false);
    const form = reactive({
      nom: "",
      telephone: "",
      email: "",
      activite: props.activite,
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]" }, _attrs))}><p class="eyebrow mb-2">${ssrInterpolate(__props.subject || "Formulaire")}</p><h3 class="font-display text-2xl md:text-3xl font-semibold text-noir mb-8">${ssrInterpolate(__props.title)}</h3>`);
      if (!unref(submitted)) {
        _push(`<form class="space-y-5"><div class="grid sm:grid-cols-2 gap-5"><div><label class="${ssrRenderClass(label)}" for="nom">Nom complet</label><input id="nom"${ssrRenderAttr("value", unref(form).nom)} type="text" required autocomplete="name" class="${ssrRenderClass(field)}"></div><div><label class="${ssrRenderClass(label)}" for="telephone">Téléphone</label><input id="telephone"${ssrRenderAttr("value", unref(form).telephone)} type="tel" required autocomplete="tel" class="${ssrRenderClass(field)}"></div></div><div><label class="${ssrRenderClass(label)}" for="email">E-mail</label><input id="email"${ssrRenderAttr("value", unref(form).email)} type="email" autocomplete="email" class="${ssrRenderClass(field)}"></div><div><label class="${ssrRenderClass(label)}" for="activite">Activité concernée</label><select id="activite" class="${ssrRenderClass(field)}"><option value=""${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, "") : ssrLooseEqual(unref(form).activite, "")) ? " selected" : ""}>Sélectionner...</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Immobilier — achat / vente</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Construction</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Maintenance industrielle</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Sécurité électronique (vidéosurveillance, contrôle d&#39;accès, incendie)</option><option${ssrIncludeBooleanAttr(Array.isArray(unref(form).activite) ? ssrLooseContain(unref(form).activite, null) : ssrLooseEqual(unref(form).activite, null)) ? " selected" : ""}>Autre</option></select></div><div><label class="${ssrRenderClass(label)}" for="message">Votre besoin</label><textarea id="message" rows="5" required class="${ssrRenderClass(field)}">${ssrInterpolate(unref(form).message)}</textarea></div><button type="submit" class="btn-primary w-full sm:w-auto">Envoyer la demande</button></form>`);
      } else {
        _push(`<div class="py-6 flex gap-5 items-start"><span class="w-12 h-12 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center"><svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5"></path></svg></span><div><p class="font-display text-2xl font-semibold text-noir mb-2">Demande envoyée.</p><p class="text-[15px] leading-[1.7] text-muted"> Un membre de l&#39;équipe ACOGIM-CI revient vers vous sous peu au numéro ou à l&#39;adresse indiqués. </p></div></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DevisForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "DevisSection",
  __ssrInlineRender: true,
  props: {
    subject: { type: String, default: "" },
    title: { type: String, default: "Demander un devis" },
    activite: { type: String, default: "" },
    eyebrow: { type: String, default: "Demande de devis" },
    intro: {
      type: String,
      default: "Décrivez-nous votre besoin : nous revenons vers vous pour en discuter et vous proposer un devis."
    },
    // Coordonnées sous le texte (inutiles quand la page les affiche déjà).
    showContacts: { type: Boolean, default: true }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_AppIcon = _sfc_main$2;
      const _component_DevisForm = _sfc_main$1;
      const _directive_reveal = resolveDirective("reveal");
      _push(`<section${ssrRenderAttrs(mergeProps({
        id: "devis",
        class: "bg-concrete py-[120px] scroll-mt-16"
      }, _attrs))}><div class="mx-auto max-w-[1280px] px-8 grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start"><div${ssrRenderAttrs(mergeProps({ class: "lg:sticky lg:top-28" }, ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "left" })))}><p class="eyebrow mb-4">${ssrInterpolate(__props.eyebrow)}</p><h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6 [&amp;_span]:text-orange [&amp;_span]:italic [&amp;_span]:font-normal">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, () => {
        _push(`Parlons de <span>votre projet.</span>`);
      }, _push, _parent);
      _push(`</h2><p class="text-[17px] leading-[1.9] text-muted max-w-[460px]">${ssrInterpolate(__props.intro)}</p>`);
      if (__props.showContacts) {
        _push(`<ul class="mt-10 space-y-5 text-[15px]"><li class="flex items-center gap-4"><span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center"><svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2"></path></svg></span><span class="flex flex-col"><span class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">M. YEO Nandielè</span><span><a href="tel:+2250707000207" class="text-noir hover:text-ember transition-colors">+225 07 07 00 02 07</a><span class="text-muted"> · </span><a href="tel:+2250105000150" class="text-noir hover:text-ember transition-colors">+225 01 05 00 01 50</a></span></span></li><li class="flex items-center gap-4"><span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">`);
        _push(ssrRenderComponent(_component_AppIcon, {
          name: "map-pin",
          class: "w-5 h-5"
        }, null, _parent));
        _push(`</span><span class="flex flex-col"><span class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Agence</span><a href="tel:+2252724451422" class="text-noir hover:text-ember transition-colors">+225 27 24 45 14 22</a></span></li></ul>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div${ssrRenderAttrs(ssrGetDirectiveProps(_ctx, _directive_reveal, { from: "right", delay: 150 }))}>`);
      _push(ssrRenderComponent(_component_DevisForm, {
        subject: __props.subject,
        title: __props.title,
        activite: __props.activite
      }, null, _parent));
      _push(`</div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DevisSection.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=DevisSection-C17l9FdL.js.map
