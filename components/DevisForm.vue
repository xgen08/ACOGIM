<script setup>
defineProps({
  title: { type: String, default: 'Demander un devis' },
  subject: { type: String, default: '' }
})

const submitted = ref(false)
const form = reactive({
  nom: '',
  telephone: '',
  email: '',
  activite: '',
  message: ''
})

function handleSubmit() {
  // Intégration à brancher : API interne, e-mail transactionnel, ou CRM.
  submitted.value = true
}
</script>

<template>
  <div class="bg-paper border border-charcoal/10 p-8">
    <p class="eyebrow mb-2">{{ subject || 'Formulaire' }}</p>
    <h3 class="font-display text-2xl mb-6">{{ title }}</h3>

    <form v-if="!submitted" class="space-y-4" @submit.prevent="handleSubmit">
      <div class="grid sm:grid-cols-2 gap-4">
        <div>
          <label class="block text-xs font-mono uppercase tracking-wide mb-1" for="nom">Nom complet</label>
          <input
            id="nom"
            v-model="form.nom"
            type="text"
            required
            class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"
          />
        </div>
        <div>
          <label class="block text-xs font-mono uppercase tracking-wide mb-1" for="telephone">Téléphone</label>
          <input
            id="telephone"
            v-model="form.telephone"
            type="tel"
            required
            class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"
          />
        </div>
      </div>

      <div>
        <label class="block text-xs font-mono uppercase tracking-wide mb-1" for="email">E-mail</label>
        <input
          id="email"
          v-model="form.email"
          type="email"
          class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"
        />
      </div>

      <div>
        <label class="block text-xs font-mono uppercase tracking-wide mb-1" for="activite">Activité concernée</label>
        <select
          id="activite"
          v-model="form.activite"
          class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"
        >
          <option value="">Sélectionner...</option>
          <option>Immobilier — achat / vente</option>
          <option>Construction</option>
          <option>Maintenance industrielle</option>
          <option>Sécurité électronique (vidéosurveillance, contrôle d'accès, incendie)</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label class="block text-xs font-mono uppercase tracking-wide mb-1" for="message">Votre besoin</label>
        <textarea
          id="message"
          v-model="form.message"
          rows="4"
          required
          class="w-full border border-charcoal/20 px-3 py-2 bg-concrete focus:bg-white"
        ></textarea>
      </div>

      <button
        type="submit"
        class="bg-palm text-charcoal font-semibold px-6 py-3 hover:bg-leaf hover:text-white transition-colors"
      >
        Envoyer la demande
      </button>
    </form>

    <div v-else class="py-6">
      <p class="font-display text-xl text-forest mb-2">Demande envoyée.</p>
      <p class="text-sm text-charcoal/70">
        Un membre de l'équipe ACOGIM-CI revient vers vous sous peu au numéro ou à l'adresse indiqués.
      </p>
    </div>
  </div>
</template>
