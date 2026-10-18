<script setup>
import { projets } from '~/data/projets.js'

const statusColor = {
  'Réalisé': 'bg-forest',
  'En cours': 'bg-royal',
  'À venir': 'bg-palm text-charcoal'
}
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/construction-site.jpg"
      eyebrow="Réalisations"
      lead="Les visuels ci-dessous sont des illustrations provisoires : les photos réelles de chaque chantier viendront les remplacer au fil des livraisons."
    >
      Nos projets, réalisés, <span class="text-palm">en cours et à venir.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-3 gap-6">
      <article
        v-for="p in projets"
        :key="p.titre"
        class="group relative overflow-hidden bg-paper border border-charcoal/10 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"
      >
        <div class="relative h-48 overflow-hidden">
          <img
            :src="p.image"
            alt=""
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <span
            class="absolute top-4 left-4 font-mono text-xs uppercase tracking-wide px-3 py-1 text-white"
            :class="statusColor[p.statut]"
          >
            {{ p.statut }}
          </span>
        </div>
        <div class="p-7">
          <h2 class="font-display text-xl mb-2">{{ p.titre }}</h2>
          <p class="text-sm text-charcoal/70 leading-relaxed">{{ p.desc }}</p>
        </div>
      </article>
    </section>
  </div>
</template>
