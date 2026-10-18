<script setup>
import { projets } from '~/data/projets.js'

const statuts = ['Tous', 'Réalisé', 'En cours', 'À venir']
const actif = ref('Tous')

const compte = (s) => (s === 'Tous' ? projets.length : projets.filter((p) => p.statut === s).length)
const visibles = computed(() =>
  actif.value === 'Tous' ? projets : projets.filter((p) => p.statut === actif.value)
)
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/hero-construction.jpg"
      eyebrow="Réalisations"
      lead="Les visuels ci-dessous sont des illustrations provisoires : les photos réelles de chaque chantier viendront les remplacer au fil des livraisons."
    >
      Nos projets, réalisés, <span>en cours et à venir.</span>
    </PageHero>

    <section class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p v-reveal class="eyebrow mb-4">Nos projets</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Présentés <span class="text-orange italic font-normal">tels qu'ils sont.</span>
            </h2>
          </div>
          <div v-reveal="200" class="flex flex-wrap gap-2" role="group" aria-label="Filtrer par statut">
            <button
              v-for="s in statuts"
              :key="s"
              type="button"
              :aria-pressed="actif === s"
              @click="actif = s"
              class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"
              :class="actif === s
                ? 'bg-noir text-white border-noir'
                : 'border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir'"
            >
              {{ s }}
              <span
                class="min-w-5 h-5 px-1.5 rounded-full text-[11px] font-semibold flex items-center justify-center"
                :class="actif === s ? 'bg-palm text-noir' : 'bg-black/5'"
              >{{ compte(s) }}</span>
            </button>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(p, i) in visibles" :key="p.titre" v-reveal="i * 120">
            <ProjetCard :projet="p" class="h-full" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
