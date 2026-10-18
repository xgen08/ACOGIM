<script setup>
import { items } from '~/data/catalogue.js'
import { projets } from '~/data/projets.js'

const offres = items.filter((i) => i.categorie === 'Maintenance' || i.categorie === 'Sécurité électronique')
const projetsMaintenance = projets.filter((p) => p.categorie === 'Maintenance industrielle')

const prestations = [
  {
    num: '01',
    color: 'text-forest',
    icon: 'tool',
    tag: 'Projets & travaux',
    title: 'Maintenance en milieu industriel',
    text: 'Réalisation de projets et travaux de maintenance adaptés aux contraintes de production de votre site.'
  },
  {
    num: '02',
    color: 'text-orange',
    icon: 'settings',
    tag: 'Accompagnement',
    title: 'Déploiement GMAO',
    text: 'Mise en place et accompagnement au déploiement de services de maintenance et de la GMAO (Gestion de Maintenance Assistée par Ordinateur).'
  },
  {
    num: '03',
    color: 'text-forest',
    icon: 'shield',
    tag: 'Sécurité électronique',
    title: "Vidéosurveillance, contrôle d'accès, incendie",
    text: "Installation de systèmes de vidéosurveillance, de contrôle d'accès, ainsi que de détection et d'extinction automatique d'incendie, pour sécuriser vos sites et vos équipes."
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/stats-bg.jpg"
      eyebrow="Nos activités / Maintenance industrielle"
      lead="Réalisation de projets et travaux de maintenance, accompagnement au déploiement de la GMAO, et installation de systèmes de sécurité électronique."
    >
      Maintenir la performance de <span>vos sites industriels.</span>
    </PageHero>

    <!-- Prestations -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Nos prestations</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          De l'atelier <span class="text-orange italic font-normal">à la sécurité du site.</span>
        </h2>
        <div class="grid gap-8 md:grid-cols-3 mt-[60px]">
          <div
            v-for="(p, i) in prestations"
            :key="p.title"
            v-reveal="i * 120"
            class="flex flex-col bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <div class="flex items-center justify-between mb-8">
              <p class="font-display text-5xl font-bold leading-none" :class="p.color">{{ p.num }}</p>
              <AppIcon :name="p.icon" class="w-10 h-10" :class="p.color" />
            </div>
            <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-3">{{ p.tag }}</p>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-4">{{ p.title }}</h3>
            <p class="text-[15px] leading-[1.8] text-muted">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Offres & projet -->
    <section class="glow isolate bg-noir text-white py-[120px]">
      <img src="/images/placeholder/hero-construction.jpg" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-noir/85"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow !text-palm mb-4">Offres associées</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]">
          Sur devis, <span class="text-orange italic font-normal">adaptées à votre site.</span>
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <a
            v-for="(o, i) in offres"
            :key="o.nom"
            v-reveal="i * 120"
            href="#devis"
            class="group flex flex-col bg-white/[0.14] backdrop-blur-md rounded px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
          >
            <AppIcon :name="o.icon" class="w-10 h-10 text-palm mb-6" />
            <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-palm mb-3">{{ o.categorie }}</p>
            <h3 class="font-body text-lg font-semibold mb-3">{{ o.nom }}</h3>
            <p class="text-[15px] leading-[1.7] text-white/80 mb-8">{{ o.detail }}</p>
            <span class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm">
              Demander un devis
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </a>
        </div>

        <div v-if="projetsMaintenance.length" class="mt-16 grid gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center">
          <div v-reveal="{ from: 'left' }">
            <p class="eyebrow !text-palm mb-4">Sur le terrain</p>
            <p class="font-display text-3xl font-semibold leading-[1.2]">
              Un projet <span class="text-orange italic font-normal">en cours</span> chez un partenaire industriel.
            </p>
          </div>
          <div v-for="p in projetsMaintenance" :key="p.titre" v-reveal="{ from: 'right', delay: 150 }">
            <ProjetCard :projet="p" />
          </div>
        </div>
      </div>
    </section>

    <DevisSection subject="Maintenance industrielle" title="Décrivez votre besoin de maintenance" activite="Maintenance industrielle">
      <template #title>Un site <span>à maintenir ?</span></template>
    </DevisSection>
  </div>
</template>
