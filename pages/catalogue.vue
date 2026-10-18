<script setup>
import { items } from '~/data/catalogue.js'

const categories = ['Tous', ...new Set(items.map((i) => i.categorie))]
const filtre = ref('Tous')
const selected = ref(null)

const visibles = computed(() =>
  filtre.value === 'Tous' ? items : items.filter((i) => i.categorie === filtre.value)
)

function toggle(nom) {
  selected.value = selected.value === nom ? null : nom
}
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/construction-site.jpg"
      eyebrow="Catalogue"
      lead="Chaque bien ou service peut faire l'objet d'une demande de devis directe : sélectionnez un élément et complétez le formulaire, notre équipe revient vers vous avec une proposition adaptée. Photos génériques à titre d'illustration."
    >
      Biens et services, <span>sur devis.</span>
    </PageHero>

    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p v-reveal class="eyebrow mb-4">Le catalogue</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Sélectionnez, <span class="text-orange italic font-normal">nous chiffrons.</span>
            </h2>
          </div>
          <div v-reveal="200" class="flex flex-wrap gap-2" role="group" aria-label="Filtrer par catégorie">
            <button
              v-for="c in categories"
              :key="c"
              type="button"
              :aria-pressed="filtre === c"
              @click="filtre = c"
              class="px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"
              :class="filtre === c
                ? 'bg-noir text-white border-noir'
                : 'border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir'"
            >
              {{ c }}
            </button>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <button
            v-for="(item, i) in visibles"
            :key="item.nom"
            v-reveal="i * 100"
            type="button"
            :aria-pressed="selected === item.nom"
            @click="toggle(item.nom)"
            class="group relative flex flex-col text-left bg-white rounded overflow-hidden transition-all duration-300 hover:-translate-y-2"
            :class="selected === item.nom
              ? 'ring-2 ring-palm shadow-[0_20px_60px_rgba(158,212,0,0.25)]'
              : 'shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]'"
          >
            <div class="relative h-[220px] overflow-hidden">
              <img v-if="item.image" :src="item.image" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div v-else class="glow w-full h-full bg-noir flex items-center justify-center">
                <AppIcon :name="item.icon" class="relative w-14 h-14 text-palm" />
              </div>
              <span
                class="absolute top-5 right-5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em] transition-all duration-300"
                :class="selected === item.nom ? 'bg-palm text-noir opacity-100 scale-100' : 'opacity-0 scale-90'"
              >
                ✓ Sélectionné
              </span>
            </div>
            <div class="p-7 flex flex-col flex-1">
              <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">{{ item.categorie }}</p>
              <h3 class="font-body text-lg font-semibold text-noir mb-2">{{ item.nom }}</h3>
              <p class="text-sm leading-[1.6] text-muted mb-6">{{ item.detail }}</p>
              <span
                class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] transition-colors"
                :class="selected === item.nom ? 'text-forest' : 'text-noir group-hover:text-ember'"
              >
                {{ selected === item.nom ? 'Retirer la sélection' : 'Sélectionner' }}
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>

    <DevisSection
      subject="Catalogue"
      :title="selected ? `Devis — ${selected}` : 'Demander un devis'"
    >
      <template #title>Recevez <span>une proposition adaptée.</span></template>
    </DevisSection>

    <!-- Barre de sélection flottante -->
    <Transition
      enter-active-class="transition duration-300 ease-out"
      enter-from-class="opacity-0 translate-y-6"
      leave-active-class="transition duration-200 ease-in"
      leave-to-class="opacity-0 translate-y-6"
    >
      <div
        v-if="selected"
        class="fixed bottom-6 inset-x-4 sm:inset-x-auto sm:left-1/2 sm:-translate-x-1/2 z-40 flex items-center gap-4 bg-noir text-white rounded-full pl-6 pr-2 py-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)]"
      >
        <span class="text-sm truncate"><span class="text-white/60">Sélection :</span> {{ selected }}</span>
        <a href="#devis" class="shrink-0 rounded-full bg-palm text-noir px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.05em] hover:bg-white transition-colors">Devis →</a>
        <button type="button" aria-label="Retirer la sélection" @click="selected = null" class="shrink-0 w-9 h-9 rounded-full text-white/60 hover:text-white hover:bg-white/10 transition-colors">✕</button>
      </div>
    </Transition>
  </div>
</template>
