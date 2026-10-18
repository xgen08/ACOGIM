<script setup>
const props = defineProps({
  title: { type: String, default: 'Demander un devis' },
  subject: { type: String, default: '' },
  // Pré-sélection de « Activité concernée » (doit correspondre à une option ci-dessous).
  activite: { type: String, default: '' }
})

const submitted = ref(false)
const form = reactive({
  nom: '',
  telephone: '',
  email: '',
  activite: props.activite,
  message: ''
})

function handleSubmit() {
  // Intégration à brancher : API interne, e-mail transactionnel, ou CRM.
  submitted.value = true
}

const label = 'block text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2'
const field = 'w-full rounded bg-concrete border border-transparent px-4 py-3 text-[15px] text-noir transition-colors focus:bg-white focus:border-palm focus:outline-none focus:ring-2 focus:ring-palm/30'
</script>

<template>
  <div class="bg-white rounded p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
    <p class="eyebrow mb-2">{{ subject || 'Formulaire' }}</p>
    <h3 class="font-display text-2xl md:text-3xl font-semibold text-noir mb-8">{{ title }}</h3>

    <form v-if="!submitted" class="space-y-5" @submit.prevent="handleSubmit">
      <div class="grid sm:grid-cols-2 gap-5">
        <div>
          <label :class="label" for="nom">Nom complet</label>
          <input id="nom" v-model="form.nom" type="text" required autocomplete="name" :class="field" />
        </div>
        <div>
          <label :class="label" for="telephone">Téléphone</label>
          <input id="telephone" v-model="form.telephone" type="tel" required autocomplete="tel" :class="field" />
        </div>
      </div>

      <div>
        <label :class="label" for="email">E-mail</label>
        <input id="email" v-model="form.email" type="email" autocomplete="email" :class="field" />
      </div>

      <div>
        <label :class="label" for="activite">Activité concernée</label>
        <select id="activite" v-model="form.activite" :class="field">
          <option value="">Sélectionner...</option>
          <option>Immobilier — achat / vente</option>
          <option>Construction</option>
          <option>Maintenance industrielle</option>
          <option>Sécurité électronique (vidéosurveillance, contrôle d'accès, incendie)</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label :class="label" for="message">Votre besoin</label>
        <textarea id="message" v-model="form.message" rows="5" required :class="field"></textarea>
      </div>

      <button type="submit" class="btn-primary w-full sm:w-auto">Envoyer la demande</button>
    </form>

    <div v-else class="py-6 flex gap-5 items-start">
      <span class="w-12 h-12 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">
        <svg aria-hidden="true" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4.5 4.5L19 7.5" /></svg>
      </span>
      <div>
        <p class="font-display text-2xl font-semibold text-noir mb-2">Demande envoyée.</p>
        <p class="text-[15px] leading-[1.7] text-muted">
          Un membre de l'équipe ACOGIM-CI revient vers vous sous peu au numéro ou à l'adresse indiqués.
        </p>
      </div>
    </div>
  </div>
</template>
