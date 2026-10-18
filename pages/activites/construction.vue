<script setup>
import { items } from '~/data/catalogue.js'
import { projets } from '~/data/projets.js'

const offre = items.find((i) => i.categorie === 'Construction')
const projetsConstruction = projets.filter((p) => p.categorie === 'Construction')

const demarche = [
  {
    color: 'text-forest',
    titre: 'Étude & conception',
    desc: 'Analyse du terrain, plans, budget prévisionnel et permis de construire.'
  },
  {
    color: 'text-orange',
    titre: 'Réalisation',
    desc: 'Suivi de chantier, contrôle qualité et respect des délais convenus.'
  },
  {
    color: 'text-forest',
    titre: 'Gestion & vente',
    desc: 'Mise en location, gestion locative ou mise en vente du bien livré.'
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/construction-site.jpg"
      eyebrow="Nos activités / Construction"
      lead="Du terrain à la livraison, ACOGIM-CI pilote vos projets de construction et assure la gestion locative ou la revente des biens livrés."
    >
      Construction, gestion et vente de <span>biens immobiliers.</span>
    </PageHero>

    <!-- Démarche -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Notre démarche</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Du terrain <span class="text-orange italic font-normal">à la livraison.</span>
        </h2>

        <div class="relative grid gap-8 md:grid-cols-3 mt-[60px]">
          <!-- Fil reliant les étapes (grand écran) -->
          <div aria-hidden="true" class="hidden md:block absolute top-[88px] left-[16%] right-[16%] h-px bg-gradient-to-r from-palm via-orange to-palm opacity-40"></div>
          <div
            v-for="(step, i) in demarche"
            :key="step.titre"
            v-reveal="i * 150"
            class="relative bg-white rounded px-8 pt-12 pb-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <span
              class="mx-auto mb-8 w-20 h-20 rounded-full bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] flex items-center justify-center font-display text-3xl font-bold"
              :class="step.color"
            >
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-3">{{ step.titre }}</h3>
            <p class="text-[15px] leading-[1.8] text-muted max-w-[260px] mx-auto">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Offre & projet -->
    <section class="glow isolate bg-noir text-white py-[120px]">
      <div class="relative z-10 mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow !text-palm mb-4">Offre & réalisations</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]">
          Clé en main, <span class="text-orange italic font-normal">du permis aux clés.</span>
        </h2>
        <div class="grid gap-8 lg:grid-cols-2 items-stretch">
          <article
            v-if="offre"
            v-reveal="{ from: 'left' }"
            class="group flex flex-col bg-white/[0.08] backdrop-blur-md rounded overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.25)]"
          >
            <div class="h-[260px] overflow-hidden">
              <img :src="offre.image" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div class="p-8 flex flex-col flex-1">
              <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">{{ offre.categorie }}</p>
              <h3 class="font-display text-2xl font-semibold mb-3">{{ offre.nom }}</h3>
              <p class="text-[15px] leading-[1.7] text-white/75 mb-8">{{ offre.detail }}</p>
              <a href="#devis" class="btn-primary mt-auto self-start">Demander un devis</a>
            </div>
          </article>
          <div v-for="p in projetsConstruction" :key="p.titre" v-reveal="{ from: 'right', delay: 150 }">
            <ProjetCard :projet="p" class="h-full" />
          </div>
        </div>
      </div>
    </section>

    <DevisSection subject="Construction" title="Parlez-nous de votre projet de construction" activite="Construction">
      <template #title>Un terrain, <span>un projet ?</span></template>
    </DevisSection>
  </div>
</template>
