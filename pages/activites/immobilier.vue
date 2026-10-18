<script setup>
import { items } from '~/data/catalogue.js'

const biens = items.filter((i) => i.categorie === 'Immobilier')

const accompagnement = [
  {
    num: '01',
    color: 'text-forest',
    icon: 'home',
    title: 'Pour les vendeurs',
    text: "Estimation, mise en valeur du bien, mise en relation avec des acquéreurs qualifiés et suivi jusqu'à la signature."
  },
  {
    num: '02',
    color: 'text-orange',
    icon: 'eye',
    title: 'Pour les acquéreurs',
    text: 'Sélection de biens correspondant à votre budget et à votre projet, vérification des documents et accompagnement administratif.'
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/about-main.jpg"
      eyebrow="Nos activités / Immobilier"
      lead="Terrains, villas, immeubles à usage commercial ou résidentiel : ACOGIM-CI accompagne particuliers et entreprises dans leurs transactions immobilières à Abidjan et environs."
    >
      Achat et vente de <span>biens immobiliers.</span>
    </PageHero>

    <!-- Accompagnement -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Notre accompagnement</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Vendeurs comme acquéreurs, <span class="text-orange italic font-normal">un même suivi.</span>
        </h2>
        <div class="grid gap-8 md:grid-cols-2 mt-[60px]">
          <div
            v-for="(a, i) in accompagnement"
            :key="a.title"
            v-reveal="i * 120"
            class="bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <div class="flex items-center justify-between mb-8">
              <p class="font-display text-5xl font-bold leading-none" :class="a.color">{{ a.num }}</p>
              <AppIcon :name="a.icon" class="w-10 h-10" :class="a.color" />
            </div>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-4">{{ a.title }}</h3>
            <p class="text-[15px] leading-[1.8] text-muted">{{ a.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Biens disponibles -->
    <section class="glow isolate bg-noir text-white py-[120px]">
      <div class="relative z-10 mx-auto max-w-[1280px] px-8">
        <div class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p v-reveal class="eyebrow !text-palm mb-4">Biens disponibles</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15]">
              Dans notre <span class="text-orange italic font-normal">catalogue.</span>
            </h2>
          </div>
          <NuxtLink v-reveal="200" to="/catalogue" class="btn-outline !border-white/20 self-start md:self-auto">Tout le catalogue</NuxtLink>
        </div>
        <div class="grid gap-6 md:grid-cols-2">
          <article
            v-for="(b, i) in biens"
            :key="b.nom"
            v-reveal="i * 120"
            class="group bg-white/[0.08] backdrop-blur-md rounded overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.12]"
          >
            <div class="h-[240px] overflow-hidden">
              <img :src="b.image" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-8">
              <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">{{ b.categorie }}</p>
              <h3 class="font-display text-2xl font-semibold mb-3">{{ b.nom }}</h3>
              <p class="text-[15px] leading-[1.7] text-white/75 mb-6">{{ b.detail }}</p>
              <a href="#devis" class="inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm">
                Demander un devis
                <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>

    <DevisSection subject="Immobilier" title="Décrivez votre projet immobilier" activite="Immobilier — achat / vente">
      <template #title>Un bien à vendre <span>ou à acquérir ?</span></template>
    </DevisSection>
  </div>
</template>
