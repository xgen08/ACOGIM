<script setup>
// Bandeau d'appel adapté à chaque page. Les pages qui ont déjà un formulaire
// de devis renvoient vers la suite logique plutôt que vers un second devis.
// Une page absente de la liste reçoit le bandeau par défaut (celui de l'accueil).
const ctaParPage = {
  '/': {
    title: 'Parlons de votre projet',
    text: 'Projet immobilier ou besoin industriel : décrivez-nous votre besoin, nous revenons vers vous rapidement.',
    to: '/contact',
    label: 'Parlons de votre projet →'
  },
  '/activites/industrie': {
    title: 'Un besoin technique à étudier ?',
    text: 'Étude, réalisation, maintenance ou accompagnement ISO : découvrez nos projets sur le terrain.',
    to: '/realisations',
    label: 'Voir nos réalisations →'
  },
  '/qui-sommes-nous': {
    title: 'Deux pôles, une seule exigence.',
    text: "Découvrez les projets que nous avons livrés, ceux en cours et ceux à venir.",
    to: '/realisations',
    label: 'Voir nos réalisations →'
  },
  '/activites/immobilier': {
    title: 'Un bien en vue ?',
    text: 'Villas, terrains : parcourez les biens disponibles dans notre photothèque.',
    to: '/phototheque',
    label: 'Voir les biens disponibles →'
  },
  '/activites/construction': {
    title: 'Nos chantiers parlent pour nous.',
    text: 'Résidences livrées, projets en cours et à venir : découvrez nos réalisations.',
    to: '/realisations',
    label: 'Voir nos réalisations →'
  },
  '/realisations': {
    title: 'Votre projet pourrait être le prochain.',
    text: 'Construction, bien immobilier ou site industriel : décrivez-nous votre besoin.',
    to: '/contact',
    label: 'Parler de votre projet →'
  },
  '/phototheque': {
    title: "Besoin d'un conseil avant de choisir ?",
    text: "Découvrez l'agence, nos trois métiers et la manière dont nous suivons chaque projet.",
    to: '/qui-sommes-nous',
    label: "Découvrir l'agence →"
  },
  '/contact': {
    title: 'Pas encore tout à fait décidé ?',
    text: 'Parcourez notre photothèque de biens et services pour préciser votre besoin.',
    to: '/phototheque',
    label: 'Parcourir la photothèque →'
  }
}

const route = useRoute()
const page = computed(() => route.path.replace(/\/$/, '') || '/')
const cta = computed(() => ctaParPage[page.value] ?? {})

// Pages sans bandeau d'appel (l'accueil a déjà son bouton « Parlons de votre projet »).
const pagesSansCta = ['/']
const afficherCta = computed(() => !pagesSansCta.includes(page.value))
</script>

<template>
  <!-- Bandeau d'appel (vague) + pied de page, affichés sur toutes les pages via layouts/default.vue -->
  <CtaBanner v-if="afficherCta" v-bind="cta" />
  <!-- Sans bandeau d'appel : on garde seulement les vagues (mêmes courbes que CtaBanner). -->
  <div v-else aria-hidden="true" class="relative h-[70px] md:h-[110px] bg-gradient-to-b from-white via-palm/40 to-palm/70">
    <svg class="absolute bottom-0 left-0 w-full h-[50px] md:h-[80px]" viewBox="0 0 1440 100" preserveAspectRatio="none">
      <path d="M0 40 C 260 95, 520 95, 760 55 S 1180 0, 1440 45 L1440 100 L0 100 Z" fill="#0F0F0F" fill-opacity="0.25" />
      <path d="M0 70 C 300 20, 560 20, 820 60 S 1220 105, 1440 55 L1440 100 L0 100 Z" fill="#0F0F0F" />
    </svg>
  </div>
  <footer class="bg-noir text-white pt-10 pb-6">
    <div class="mx-auto max-w-[1280px] px-8">
      <div class="grid gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] mb-8">
        <div>
          <p class="font-display text-2xl font-bold tracking-[-0.03em] mb-6">
            <span class="text-palm">ACOGIM</span><span class="text-orange">-CI</span>
          </p>
          <p class="text-[15px] leading-[1.8] text-white/60 max-w-[300px]">
            Agence de Construction
          <br> de Gestion Immobilières et 
          <br> de Maintenance Côte d'Ivoire.
          </p>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Coordonnées</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li>Bingerville</li> 
            <li>BP : 705 CIDEX 03 Abidjan</li>
            <li>Ayopoumin Ex-Mittérand </li>
            <li>Villa n° 356</li>
          </ul>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Contact projet</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li><a href="tel:+2252724451422" class="hover:text-palm transition-colors">+225 27 24 45 14 22</a></li>
            <li><a href="tel:+2250105000150" class="hover:text-palm transition-colors">+225 01 05 00 01 50</a></li>
            <li><a href="mailto:info@acogim-ci.com" class="hover:text-palm transition-colors">infos@acogim.ci</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Navigation</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li><NuxtLink to="/activites/construction" class="hover:text-palm transition-colors">Construction</NuxtLink></li>
            <li><NuxtLink to="/activites/immobilier" class="hover:text-palm transition-colors">Immobilier</NuxtLink></li>
            <li><NuxtLink to="/activites/industrie" class="hover:text-palm transition-colors">Industrie</NuxtLink></li>
            <!-- <li><NuxtLink to="/contact" class="hover:text-palm transition-colors">Contact</NuxtLink></li> -->
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-6 flex justify-center text-center text-[13px] text-white/50">
        <p>© {{ new Date().getFullYear() }} ACOGIM-CI. Tous droits réservés.</p>
      </div>
    </div>
  </footer>
</template>
