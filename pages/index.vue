<script setup>
import { projets } from '~/data/projets.js'
import { annonces } from '~/data/annonces.js'
import { chiffres, dateChiffres } from '~/data/chiffres.js'

// Ordre des sections : cahier des charges docs/AGOCIM_2.md, menu 1 (Accueil).

// Pôles d'activité (immobilier et industrie).
const poles = [
  {
    key: 'immobilier',
    num: '01',
    accent: 'text-forest',
    bar: 'bg-palm',
    icon: 'home',
    titre: 'Pôle immobilier',
    image: '/images/placeholder/projet-immobilier.jpg',
    texte: "Terrains, biens immobiliers, projets de construction : nous accompagnons particuliers, entreprises et investisseurs à chaque étape.",
    services: [
      'Acquisition de terrains et de biens immobiliers',
      'Construction civile et industrielle',
      'Gestion immobilière',
      'Vente de biens immobiliers'
    ],
    bouton: 'Découvrir nos services immobiliers',
    to: '/activites/immobilier'
  },
  {
    key: 'industrie',
    num: '02',
    accent: 'text-orange',
    bar: 'bg-orange',
    icon: 'settings',
    titre: 'Pôle industriel',
    image: '/images/placeholder/stats-bg.jpg',
    texte: "Des prestations techniques pour les entreprises, les industries et les organismes, de l'étude à l'amélioration continue.",
    services: [
      'Études techniques et ingénierie',
      'Réalisation de projets industriels',
      'Maintenance industrielle',
      'Conseil et accompagnement',
      'Formation professionnelle',
      'Accompagnement à la certification ISO'
    ],
    bouton: 'Découvrir nos services industriels',
    to: '/activites/industrie'
  }
]

// Engagements (qualité, sécurité, satisfaction client).
const engagements = [
  {
    icon: 'award',
    color: 'text-forest',
    title: 'Qualité',
    desc: 'Des solutions fiables, durables et performantes, suivies avec rigueur de l’étude à la livraison.'
  },
  {
    icon: 'shield',
    color: 'text-orange',
    title: 'Sécurité',
    desc: 'La sécurité des personnes, des sites et des équipements est intégrée à chacune de nos interventions.'
  },
  {
    icon: 'users',
    color: 'text-forest',
    title: 'Satisfaction client',
    desc: "L'écoute de vos besoins guide nos propositions, avec un interlocuteur dédié tout au long du projet."
  },
  // {
  //   icon: 'check',
  //   color: 'text-orange',
  //   title: 'Professionnalisme',
  //   desc: 'Maîtrise technique, transparence et recherche constante de l’excellence.'
  // }
]

// Réalisations : filtre par pôle.
const poleDe = (p) => (p.categorie === 'Industrie' ? 'Industrie' : 'Immobilier')
const filters = ['Immobilier', 'Industrie']
const activeFilter = ref('Tous')
const filteredProjets = computed(() =>
  activeFilter.value === 'Tous' ? projets : projets.filter((p) => poleDe(p) === activeFilter.value)
)

// Carrousel des réalisations : défilement horizontal, une carte à la fois avec les flèches.
const rail = ref(null)
const peutReculer = ref(false)
const peutAvancer = ref(false)

function majFleches() {
  const el = rail.value
  if (!el) return
  peutReculer.value = el.scrollLeft > 4
  peutAvancer.value = el.scrollLeft + el.clientWidth < el.scrollWidth - 4
}

function defiler(sens) {
  const el = rail.value
  if (!el) return
  const carte = el.firstElementChild
  const pas = carte ? carte.getBoundingClientRect().width + 32 : el.clientWidth // 32 px = gap-8
  el.scrollBy({ left: sens * pas, behavior: 'smooth' })
}

// Changement de filtre : retour au début du carrousel.
watch(filteredProjets, async () => {
  await nextTick()
  if (rail.value) rail.value.scrollLeft = 0
  majFleches()
})

onMounted(() => {
  majFleches()
  window.addEventListener('resize', majFleches)
})
onUnmounted(() => window.removeEventListener('resize', majFleches))

const formatDate = (iso) =>
  new Date(iso).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })

// Bannière : carrousel de photos (fondu enchaîné toutes les 6 s), dans un ordre aléatoire.
// `position` cadre la photo (sujet à droite, hors du texte) ;
// `miroir` retourne l'image horizontalement (uniquement pour des photos sans texte).
const slides = [
  { src: '/images/hero/industrie-plan-technique.webp', position: 'object-[80%_50%]', alt: 'Plan technique d’une pièce mécanique' },
  { src: '/images/hero/immobilier-plans-villa.avif', position: 'object-[70%_50%]', alt: 'Plans et façades d’une villa' },
  { src: '/images/hero/immobilier-plan-rdc.jpg', position: 'object-[70%_50%]', alt: 'Plan du rez-de-chaussée d’une maison' },
  { src: '/images/hero/immobilier-plan-maison.webp', position: 'object-[70%_50%]', alt: 'Plan d’une maison de plain-pied' },
  { src: '/images/hero/chantier-villa.webp', position: 'object-[60%_50%]', alt: 'Construction d’une villa R+1' },
  { src: '/images/hero/industrie-tablette.avif', position: 'object-[75%_35%]', alt: 'Technicien contrôlant une installation industrielle sur tablette' },
  { src: '/images/hero/chantier-grues.avif', position: 'object-[50%_60%]', alt: 'Chantier de plusieurs immeubles avec grues' },
  { src: '/images/hero/industrie-maintenance-ligne.webp', position: 'object-[65%_50%]', alt: 'Technicien en maintenance sur une ligne de production' },
  { src: '/images/hero/chantier-coffrage.jpeg', position: 'object-center', alt: 'Coffrage d’une dalle sur un chantier' },
  { src: '/images/hero/industrie-courroie.jpeg', position: 'object-[30%_35%]', miroir: true, alt: 'Technicien réglant la courroie d’une machine' }
]
const slideActive = ref(0)
// La photo n'apparaît qu'une fois la page chargée : la première est tirée au sort côté
// navigateur, sans afficher d'abord une autre photo.
const carrouselPret = ref(false)
let slideTimer = null
let fileAttente = []

// Ordre aléatoire : chaque photo passe une fois par tour, sans répéter la photo affichée.
function melanger(liste) {
  const l = [...liste]
  for (let i = l.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[l[i], l[j]] = [l[j], l[i]]
  }
  return l
}

function photoSuivante() {
  if (!fileAttente.length) {
    fileAttente = melanger(slides.map((_, i) => i).filter((i) => i !== slideActive.value))
  }
  slideActive.value = fileAttente.shift()
}

function allerA(i) {
  slideActive.value = i
  fileAttente = []
  demarrerCarrousel()
}

function demarrerCarrousel() {
  clearInterval(slideTimer)
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
  slideTimer = setInterval(photoSuivante, 6000)
}

onMounted(() => {
  slideActive.value = Math.floor(Math.random() * slides.length)
  carrouselPret.value = true
  demarrerCarrousel()
})
onUnmounted(() => clearInterval(slideTimer))

// Section à défilement « Nos engagements » : un engagement à la fois.
// Reprend les engagements (icône, titre, texte) et les détaille en deux points chacun.
const pointsEngagements = {
  'Qualité': [
    { nom: 'De l’étude à la livraison', detail: 'Chaque projet est suivi avec la même rigueur, à chaque étape.' },
    { nom: 'Des solutions durables', detail: 'Des réalisations fiables et performantes, pensées pour durer.' }
  ],
  'Sécurité': [
    { nom: 'Les personnes d’abord', detail: 'La sécurité des équipes et des usagers guide chaque intervention.' },
    { nom: 'Sites et équipements', detail: 'Protection des sites, des installations et des équipements.' }
  ],
  'Satisfaction client': [
    { nom: 'Un interlocuteur dédié', detail: 'Un contact unique pour suivre votre projet du début à la fin.' },
    { nom: 'À l’écoute de vos besoins', detail: 'Des propositions adaptées à vos attentes et à votre secteur.' }
  ],
  // 'Professionnalisme': [
  //   { nom: 'Maîtrise technique', detail: 'Des compétences éprouvées en immobilier comme en industrie.' },
  //   { nom: 'Transparence', detail: 'Des échanges clairs et une recherche constante de l’excellence.' }
  // ]
}
const categories = engagements.map((e) => ({
  key: e.title,
  icon: e.icon,
  desc: e.desc,
  items: pointsEngagements[e.title] ?? []
}))

const activeCategory = ref(0)
const currentCategory = computed(() => categories[activeCategory.value])
const servicesEl = ref(null)

// Sur grand écran, la section est épinglée sous l'en-tête (112 px) et le
// défilement fait passer d'une catégorie à l'autre. Sur mobile : onglets.
const HEADER_OFFSET = 112
const isDesktop = () => window.matchMedia('(min-width: 1024px)').matches

function servicesScrollRange() {
  const el = servicesEl.value
  const start = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
  const range = el.offsetHeight - window.innerHeight + HEADER_OFFSET
  return { start, range }
}

function onServicesScroll() {
  if (!servicesEl.value || !isDesktop()) return
  const { start, range } = servicesScrollRange()
  const progress = Math.min(Math.max((window.scrollY - start) / range, 0), 0.9999)
  activeCategory.value = Math.floor(progress * categories.length)
}

function selectCategory(i) {
  if (!isDesktop()) {
    activeCategory.value = i
    return
  }
  const { start, range } = servicesScrollRange()
  window.scrollTo({ top: start + ((i + 0.5) / categories.length) * range, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onServicesScroll, { passive: true })
  window.addEventListener('resize', onServicesScroll)
  onServicesScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onServicesScroll)
  window.removeEventListener('resize', onServicesScroll)
})

// Sections masquées en attendant les vraies informations (voir docs/A_COMPLETER.md).
// Passer à true pour les réafficher.
const afficherRealisations = true
const afficherOpportunites = false
const afficherChiffres = false
</script>

<template>
  <div>
    <!-- 1. Bannière -->
    <section class="glow isolate bg-noir text-white">
      <div class="absolute inset-0 -z-10 overflow-hidden">
        <img
          v-for="(sl, i) in slides"
          :key="sl.src"
          :src="asset(sl.src)"
          :alt="sl.alt"
          :aria-hidden="i !== slideActive"
          class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[1200ms] ease-in-out"
          :class="[sl.position, carrouselPret && i === slideActive ? 'opacity-100 hero-zoom' : 'opacity-0']"
          :style="sl.miroir ? { scale: '-1 1' } : undefined"
          loading="eager"
        />
      </div>
      <!-- Voile : opaque à gauche pour la lisibilité du texte, la photo ressort à droite. -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-noir via-noir/85 to-noir/40"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8 pt-32 pb-28 md:pt-40 md:pb-36">
        <div class="max-w-[900px]">
          <p v-reveal class="flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-palm before:block before:w-10 before:h-px before:bg-palm">
            ACOGIM-CI · Bingerville, Côte d'Ivoire
          </p>
          <h1 v-reveal="120" class="font-display font-semibold text-[clamp(23px,4.4vw,48px)] leading-[1.15] mb-8">
            <span class="md:whitespace-nowrap">Des solutions intégrées pour vos projets</span><br>
            <span class="text-orange italic font-normal whitespace-nowrap">immobiliers et industriels.</span>
          </h1>
          <p v-reveal="240" class="text-lg leading-[1.8] font-light text-white/70 max-w-[620px] mb-12">
            Immobilier et industrie : deux pôles une même exigence de qualité,
            <br> de professionnalisme et de satisfaction client.
          </p>
          <div v-reveal="360" class="flex flex-col sm:flex-row gap-5">
            <NuxtLink to="/contact" class="btn-primary">Parlons de votre projet</NuxtLink>
            <a href="#poles" class="btn-outline">Nos deux pôles</a>
          </div>
        </div>
      </div>

      <!-- Indicateurs du carrousel -->
      <div class="absolute z-10 bottom-8 inset-x-0 mx-auto max-w-[1280px] px-8 flex items-center gap-3" role="group" aria-label="Photos de la bannière">
        <button
          v-for="(sl, i) in slides"
          :key="sl.src"
          type="button"
          class="group py-3"
          :aria-label="`Photo ${i + 1} sur ${slides.length}`"
          :aria-current="i === slideActive"
          @click="allerA(i)"
        >
          <span
            class="block h-1 rounded-full transition-all duration-500"
            :class="i === slideActive ? 'w-10 bg-orange' : 'w-5 bg-white/40 group-hover:bg-white/70'"
          ></span>
        </button>
      </div>
    </section>

    <!-- 2. Présentation -->
    <section class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }" class="relative h-[420px] md:h-[520px]">
          <img
            :src="asset('/images/placeholder/about-main.jpg')"
            alt=""
            class="w-[85%] h-full object-cover rounded"
          />
          <div class="absolute -bottom-10 right-0 w-[240px] md:w-[280px] h-[170px] md:h-[200px] bg-palm rounded flex flex-col items-center justify-center text-noir shadow-[0_20px_60px_rgba(158,212,0,0.3)]">
            <span class="font-display text-5xl font-bold leading-none">02</span>
            <span class="mt-2 text-xs font-semibold uppercase tracking-[0.15em]">Pôles d'activité</span>
          </div>
        </div>
        <div v-reveal="{ from: 'right', delay: 150 }">
          <p class="eyebrow mb-4">Présentation d'ACOGIM-CI SARL</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6">
            Bâtir l'avenir, <span class="text-orange italic font-normal">optimiser la performance.</span>
          </h2>
          <p class="text-[17px] leading-[1.9] text-muted mb-5">
            ACOGIM-CI SARL est une société à responsabilité limitée spécialisée dans deux
            domaines d'activités stratégiques : <strong class="font-semibold text-charcoal">l'immobilier</strong>
            et <strong class="font-semibold text-charcoal">l'industrie</strong>. Elle accompagne les particuliers,
            les entreprises et les partenaires institutionnels dans la réalisation de leurs projets.
          </p>
          <p class="text-[17px] leading-[1.9] text-muted mb-8">
            Guidée par la qualité, le professionnalisme, l'innovation et la satisfaction client,
            ACOGIM-CI ambitionne de devenir un partenaire de référence, en apportant des solutions
            fiables, durables et performantes.
          </p>
          <NuxtLink to="/qui-sommes-nous" class="btn-dark">Découvrir ACOGIM-CI</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 3 & 4. Pôles immobilier et industriel -->
    <section id="poles" class="bg-white py-[120px] scroll-mt-28">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Nos activités</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Deux pôles, <span class="text-orange italic font-normal">une même exigence.</span>
        </h2>

        <div class="grid gap-8 lg:grid-cols-2 mt-[60px]">
          <article
            v-for="(p, i) in poles"
            :key="p.key"
            v-reveal="i * 150"
            class="group flex flex-col bg-white rounded overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] transition-shadow duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.1)]"
          >
            <div class="relative h-[240px] overflow-hidden">
              <img :src="asset(p.image)" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div class="absolute inset-0 bg-gradient-to-t from-noir/70 via-noir/10 to-transparent"></div>
              <div class="absolute left-8 bottom-6 flex items-center gap-4 text-white">
                <span class="grid place-items-center w-12 h-12 rounded-full bg-white/15 backdrop-blur-md">
                  <AppIcon :name="p.icon" class="w-6 h-6" />
                </span>
                <span class="font-display text-4xl font-bold leading-none">{{ p.num }}</span>
              </div>
            </div>
            <div class="flex flex-col flex-1 px-8 md:px-10 py-10">
              <span class="block w-12 h-1 rounded-full mb-6" :class="p.bar"></span>
              <h3 class="font-display text-[28px] font-semibold text-noir mb-4">{{ p.titre }}</h3>
              <p class="text-[15px] leading-[1.8] text-muted mb-6">{{ p.texte }}</p>
              <ul class="grid gap-3 sm:grid-cols-2 mb-10">
                <li v-for="s in p.services" :key="s" class="flex gap-3 text-[15px] leading-[1.5] text-charcoal">
                  <AppIcon name="check" class="w-5 h-5 shrink-0 mt-px" :class="p.accent" />
                  {{ s }}
                </li>
              </ul>
              <NuxtLink :to="p.to" class="btn-text mt-auto self-start">{{ p.bouton }} →</NuxtLink>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Services : une catégorie à la fois (Immobilier par défaut) -->
    <section id="services" ref="servicesEl" class="relative bg-noir text-white lg:h-[400vh]">
      <div class="glow isolate flex items-center py-[100px] lg:py-0 lg:sticky lg:top-28 lg:h-[calc(100vh-7rem)]">
        <img
          :src="asset('/images/placeholder/construction-site.jpg')"
          alt=""
          class="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-noir/80"></div>

        <div class="relative z-10 w-full mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div v-reveal="{ from: 'left' }">
            <p class="eyebrow !text-palm mb-4">Nos engagements</p>
            <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-8">
              Qualité, sécurité <span class="text-orange italic font-normal"> satisfaction client.</span>
            </h2>

            <div role="tablist" aria-label="Nos engagements" class="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
              <button
                v-for="(c, i) in categories"
                :key="c.key"
                type="button"
                role="tab"
                :aria-selected="i === activeCategory"
                @click="selectCategory(i)"
                class="flex items-center gap-4 text-left transition-colors duration-300 max-lg:px-4 max-lg:py-2 max-lg:rounded-full max-lg:text-sm lg:py-2"
                :class="i === activeCategory
                  ? 'text-white max-lg:bg-palm max-lg:text-noir'
                  : 'text-white/50 hover:text-white/80 max-lg:bg-white/10'"
              >
                <span
                  class="hidden lg:block h-px transition-all duration-300"
                  :class="i === activeCategory ? 'w-12 bg-palm' : 'w-6 bg-white/30'"
                ></span>
                <span class="lg:font-display lg:text-2xl">{{ c.key }}</span>
              </button>
            </div>

            <NuxtLink to="/qui-sommes-nous" class="btn-outline !border-white/20 mt-10 hidden lg:inline-flex">Découvrir ACOGIM-CI</NuxtLink>
          </div>

          <div v-reveal="{ from: 'right', delay: 150 }" class="min-h-[380px]">
            <Transition
              mode="out-in"
              enter-active-class="transition duration-300 ease-out"
              enter-from-class="opacity-0 translate-y-4"
              leave-active-class="transition duration-200 ease-in"
              leave-to-class="opacity-0 -translate-y-4"
            >
              <div :key="currentCategory.key" role="tabpanel">
                <div class="flex items-center gap-4 mb-5">
                  <AppIcon :name="currentCategory.icon" class="w-10 h-10 text-palm" />
                  <span class="text-sm font-medium tracking-[0.15em] text-white/60">
                    {{ String(activeCategory + 1).padStart(2, '0') }} / {{ String(categories.length).padStart(2, '0') }}
                  </span>
                </div>
                <h3 class="font-display font-semibold text-3xl md:text-4xl mb-4">{{ currentCategory.key }}</h3>
                <p class="text-[17px] leading-[1.8] text-white/75 max-w-[560px] mb-8">{{ currentCategory.desc }}</p>
                <div class="grid gap-5 sm:grid-cols-2">
                  <div
                    v-for="s in currentCategory.items"
                    :key="s.nom"
                    class="bg-white/[0.14] backdrop-blur-md rounded px-7 py-8 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
                  >
                    <h4 class="font-body text-lg font-semibold text-white mb-2">{{ s.nom }}</h4>
                    <p class="text-[15px] leading-[1.7] text-white/80">{{ s.detail }}</p>
                  </div>
                </div>
              </div>
            </Transition>

            <NuxtLink to="/qui-sommes-nous" class="btn-outline !border-white/20 mt-10 lg:hidden">Découvrir ACOGIM-CI</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- 5. Réalisations et références -->
    <section v-if="afficherRealisations" id="projets" class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p class="eyebrow mb-4">Réalisations et références</p>
            <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Nos projets <span class="text-orange italic font-normal">sur le terrain.</span>
            </h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="f in filters"
              :key="f"
              type="button"
              @click="activeFilter = f"
              class="px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"
              :class="activeFilter === f
                ? 'bg-noir text-white border-noir'
                : 'border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir'"
            >
              {{ f }}
            </button>
          </div>
        </div>

        <!-- Carrousel : glissement au doigt sur mobile, flèches de part et d'autre des cartes -->
        <div class="relative">
          <div
            ref="rail"
            class="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth scroll-px-4 -mx-4 px-4 py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Nos réalisations"
            @scroll.passive="majFleches"
          >
            <div
              v-for="p in filteredProjets"
              :key="p.titre"
              class="snap-start shrink-0 w-[85%] sm:w-[calc((100%-2rem)/2)] lg:w-[calc((100%-4rem)/3)]"
            >
              <ProjetCard :projet="p" class="h-full" />
            </div>
          </div>

          <!-- Flèches : centrées sur la hauteur des photos (260 px + 16 px de marge), à cheval sur le bord des cartes -->
          <button
            type="button"
            class="absolute top-[146px] -translate-y-1/2 left-0 -translate-x-1/3 xl:-translate-x-1/2 z-10 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-noir shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-ember hover:text-white transition-all duration-300"
            :class="peutReculer ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            :disabled="!peutReculer"
            aria-label="Réalisation précédente"
            @click="defiler(-1)"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button
            type="button"
            class="absolute top-[146px] -translate-y-1/2 right-0 translate-x-1/3 xl:translate-x-1/2 z-10 grid place-items-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-white text-noir shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:bg-ember hover:text-white transition-all duration-300"
            :class="peutAvancer ? 'opacity-100' : 'opacity-0 pointer-events-none'"
            :disabled="!peutAvancer"
            aria-label="Réalisation suivante"
            @click="defiler(1)"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>

        <div class="text-center mt-12">
          <NuxtLink to="/realisations" class="btn-dark">Voir toutes nos réalisations</NuxtLink>
        </div>
      </div>
    </section>

    <!-- 6. Chiffres clés (à mettre à jour dans data/chiffres.js) -->
    <section v-if="afficherChiffres" aria-label="Chiffres clés" class="bg-noir text-white py-12">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-y-8">
          <div
            v-for="(c, i) in chiffres"
            :key="c.label"
            v-reveal="i * 80"
            class="px-4 text-center lg:border-l first:border-l-0 border-white/10"
          >
            <p class="font-display text-4xl md:text-5xl font-bold leading-none text-palm">{{ c.valeur }}</p>
            <p class="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-white/70">{{ c.label }}</p>
          </div>
        </div>
        <p class="mt-8 text-center text-xs text-white/40">Chiffres au {{ formatDate(dateChiffres) }}</p>
      </div>
    </section>

    <!-- 8. Actualités et opportunités immobilières (données d'exemple : data/annonces.js) -->
    <section v-if="afficherOpportunites" id="opportunites" class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p class="eyebrow mb-4">Actualités et opportunités</p>
            <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Les opportunités <span class="text-orange italic font-normal">immobilières du moment.</span>
            </h2>
          </div>
          <NuxtLink to="/activites/immobilier" class="btn-text self-start md:self-auto">Tous nos services immobiliers →</NuxtLink>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article
            v-for="(a, i) in annonces"
            :key="a.titre"
            v-reveal="i * 120"
            class="group flex flex-col bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
          >
            <div class="relative h-[220px] overflow-hidden bg-[#e5e5e5]">
              <img :src="asset(a.image)" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <span class="absolute top-5 left-5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]" :class="a.type === 'Vente' ? 'bg-ember text-white' : 'bg-palm text-noir'">
                {{ a.type }}
              </span>
              <span v-if="a.exemple" class="absolute top-5 right-5 px-3 py-1.5 rounded-full bg-noir/70 backdrop-blur-sm text-[10px] font-semibold uppercase tracking-[0.08em] text-white">
                Annonce d'exemple
              </span>
            </div>
            <div class="flex flex-col flex-1 p-7">
              <p class="flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.12em] text-forest mb-2">
                <AppIcon name="map-pin" class="w-3.5 h-3.5" />
                {{ a.lieu }}
              </p>
              <h3 class="font-body text-lg font-semibold text-noir mb-3">{{ a.titre }}</h3>
              <ul class="flex flex-wrap gap-2 mb-6">
                <li v-for="d in a.details" :key="d" class="px-3 py-1 rounded-full bg-concrete text-xs text-charcoal">{{ d }}</li>
              </ul>
              <div class="mt-auto flex items-center justify-between gap-4 pt-5 border-t border-black/5">
                <span class="text-sm font-semibold text-noir">{{ a.prix }}</span>
                <NuxtLink to="/contact" class="text-[13px] font-semibold text-ember hover:text-orange transition-colors">Se renseigner →</NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- 9. Appel à l'action « Parlons de votre projet » : bandeau du pied de page (TheFooter.vue). -->
  </div>
</template>
