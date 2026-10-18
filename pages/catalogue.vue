<script setup>
import { items } from '~/data/catalogue.js'

const selected = ref(null)
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/stats-bg.jpg"
      eyebrow="Catalogue"
      lead="Chaque bien ou service peut faire l'objet d'une demande de devis directe : sélectionnez un élément et complétez le formulaire, notre équipe revient vers vous avec une proposition adaptée. Photos génériques à titre d'illustration."
    >
      Biens et services, <span class="text-palm">sur devis.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <div class="grid md:grid-cols-2 gap-5">
        <button
          v-for="item in items"
          :key="item.nom"
          type="button"
          @click="selected = item.nom"
          class="relative text-left bg-paper border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10"
          :class="selected === item.nom ? 'border-petrol ring-2 ring-petrol/40' : 'border-charcoal/10 hover:border-charcoal/30'"
        >
          <div v-if="item.image" class="h-36 overflow-hidden">
            <img :src="item.image" alt="" class="w-full h-full object-cover" />
          </div>
          <div v-else class="h-36 flex items-center justify-center bg-concrete/60 text-petrol">
            <AppIcon :name="item.icon" class="w-10 h-10" />
          </div>
          <div class="relative p-6">
            <span
              v-if="selected === item.nom"
              class="absolute top-4 right-4 inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-charcoal bg-palm px-2 py-1"
            >
              ✓ Sélectionné
            </span>
            <span class="eyebrow">{{ item.categorie }}</span>
            <h2 class="font-display text-xl mt-2 mb-2 pr-8">{{ item.nom }}</h2>
            <p class="text-sm text-charcoal/70">{{ item.detail }}</p>
          </div>
        </button>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <DevisForm
        subject="Catalogue"
        :title="selected ? `Devis — ${selected}` : 'Demander un devis'"
      />
    </section>
  </div>
</template>
