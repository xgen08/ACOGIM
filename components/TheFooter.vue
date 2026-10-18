<script setup>
// Bandeau d'appel adapté à chaque page. Les pages qui ont déjà un formulaire
// de devis renvoient vers la suite logique plutôt que vers un second devis.
// Une page absente de la liste reçoit le bandeau par défaut (celui de l'accueil).
const ctaParPage = {
  '/qui-sommes-nous': {
    title: 'Trois métiers, une seule exigence.',
    text: "Découvrez les projets que nous avons livrés, ceux en cours et ceux à venir.",
    to: '/realisations',
    label: 'Voir nos réalisations →'
  },
  '/activites/immobilier': {
    title: 'Un bien en vue ?',
    text: 'Villas, terrains : parcourez les biens disponibles dans notre catalogue.',
    to: '/catalogue',
    label: 'Voir les biens disponibles →'
  },
  '/activites/construction': {
    title: 'Nos chantiers parlent pour nous.',
    text: 'Résidences livrées, projets en cours et à venir : découvrez nos réalisations.',
    to: '/realisations',
    label: 'Voir nos réalisations →'
  },
  '/activites/maintenance-industrielle': {
    title: 'Entretenir et sécuriser votre site ?',
    text: 'Contrat de maintenance, vidéosurveillance, détection incendie : toutes nos offres sont sur devis.',
    to: '/catalogue',
    label: 'Voir les offres du catalogue →'
  },
  '/realisations': {
    title: 'Votre projet pourrait être le prochain.',
    text: 'Construction, bien immobilier ou site industriel : décrivez-nous votre besoin.',
    to: '/contact',
    label: 'Parler de votre projet →'
  },
  '/catalogue': {
    title: "Besoin d'un conseil avant de choisir ?",
    text: "Découvrez l'agence, nos trois métiers et la manière dont nous suivons chaque projet.",
    to: '/qui-sommes-nous',
    label: "Découvrir l'agence →"
  },
  '/contact': {
    title: 'Pas encore tout à fait décidé ?',
    text: 'Parcourez notre catalogue de biens et services pour préciser votre besoin.',
    to: '/catalogue',
    label: 'Parcourir le catalogue →'
  }
}

const route = useRoute()
const cta = computed(() => ctaParPage[route.path.replace(/\/$/, '') || '/'] ?? {})
</script>

<template>
  <!-- Bandeau d'appel (vague) + pied de page, affichés sur toutes les pages via layouts/default.vue -->
  <CtaBanner v-bind="cta" />
  <footer class="bg-noir text-white pt-24 pb-10">
    <div class="mx-auto max-w-[1280px] px-8">
      <div class="grid gap-14 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] mb-20">
        <div>
          <p class="font-display text-2xl font-bold tracking-[-0.03em] mb-6">
            ACOGIM<span class="text-palm">-CI</span>
          </p>
          <p class="text-[15px] leading-[1.8] text-white/60 max-w-[300px]">
            Agence de Construction, de Gestion Immobilières et de Maintenance
            Côte d'Ivoire.
          </p>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Coordonnées</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li>BP : 705 CIDEX 03 Abidjan</li>
            <li>Ayopoumin Ex-Mittérand, Villa n° 356</li>
            <li>Bingerville</li>
            <li><a href="tel:+2252724451422" class="hover:text-palm transition-colors">+225 27 24 45 14 22</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Contact projet</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li>M. YEO Nandielè</li>
            <li><a href="tel:+2250707000207" class="hover:text-palm transition-colors">+225 07 07 00 02 07</a></li>
            <li><a href="tel:+2250105000150" class="hover:text-palm transition-colors">+225 01 05 00 01 50</a></li>
          </ul>
        </div>

        <div>
          <h4 class="font-body text-xs font-semibold uppercase tracking-[0.15em] mb-7">Navigation</h4>
          <ul class="space-y-4 text-sm text-white/60">
            <li><NuxtLink to="/activites/immobilier" class="hover:text-palm transition-colors">Immobilier</NuxtLink></li>
            <li><NuxtLink to="/activites/construction" class="hover:text-palm transition-colors">Construction</NuxtLink></li>
            <li><NuxtLink to="/activites/maintenance-industrielle" class="hover:text-palm transition-colors">Maintenance industrielle</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-palm transition-colors">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="border-t border-white/10 pt-10 flex flex-col md:flex-row gap-4 justify-between text-[13px] text-white/50">
        <p>© {{ new Date().getFullYear() }} ACOGIM-CI. Tous droits réservés.</p>
        <p>Bingerville, Côte d'Ivoire</p>
      </div>
    </div>
  </footer>
</template>
