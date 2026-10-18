<script setup>
import { items as services } from '~/data/catalogue.js'
import { projets } from '~/data/projets.js'

const appBaseURL = useRuntimeConfig().app.baseURL

const atouts = [
  {
    icon: 'layers',
    color: 'text-charcoal',
    title: 'Expertise multi-métiers',
    desc: "Immobilier, construction et maintenance industrielle pilotés par une seule agence."
  },
  {
    icon: 'clipboard',
    color: 'text-forest',
    title: 'Suivi rigoureux',
    desc: "De l'étude à la livraison, chaque projet est encadré avec la même exigence."
  },
  {
    icon: 'shield',
    color: 'text-orange',
    title: 'Sécurité & conformité',
    desc: "GMAO et sécurité électronique intégrées à nos prestations industrielles."
  },
  {
    icon: 'eye',
    color: 'text-forest',
    title: 'Transparence',
    desc: "Projets réalisés, en cours et à venir, présentés tels qu'ils sont."
  }
]

const activites = [
  {
    num: '01',
    num_color: 'text-forest',
    title: 'Immobilier',
    desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises.",
    to: '/activites/immobilier'
  },
  {
    num: '02',
    num_color: 'text-orange',
    title: 'Construction',
    desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison.",
    to: '/activites/construction'
  },
  {
    num: '03',
    num_color: 'text-forest',
    title: 'Maintenance industrielle',
    desc: "Projets et travaux de maintenance en milieu industriel, GMAO et sécurité électronique.",
    to: '/activites/maintenance-industrielle'
  }
]

// Services regroupés par catégorie, dans l'ordre d'affichage.
const categories = [
  {
    key: 'Immobilier',
    icon: 'home',
    desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises."
  },
  {
    key: 'Maintenance',
    icon: 'settings',
    desc: "Projets et travaux de maintenance en milieu industriel, avec accompagnement au déploiement de la GMAO."
  },
  {
    key: 'Construction',
    icon: 'layers',
    desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison."
  },
  {
    key: 'Sécurité électronique',
    icon: 'shield',
    desc: "Vidéosurveillance, contrôle d'accès, détection et extinction automatique d'incendie, pour sécuriser vos sites et vos équipes."
  }
].map((c) => ({ ...c, items: services.filter((s) => s.categorie === c.key) }))

const activeCategory = ref(0)
const currentCategory = computed(() => categories[activeCategory.value])
const servicesEl = ref(null)

// Sur grand écran, la section est épinglée sous l'en-tête réduit (64 px) et le
// défilement fait passer d'une catégorie à l'autre. Sur mobile : onglets.
const HEADER_OFFSET = 64
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

const filters = [
  { label: 'Tous', value: 'Tous' },
  { label: 'Immobilier', value: 'Immobilier' },
  { label: 'Construction', value: 'Construction' },
  { label: 'Maintenance', value: 'Maintenance industrielle' }
]
const activeFilter = ref('Tous')
const filteredProjets = computed(() =>
  activeFilter.value === 'Tous' ? projets : projets.filter((p) => p.categorie === activeFilter.value)
)

</script>

<template>
  <div>
    <!-- Hero -->
    <section class="glow isolate bg-noir text-white">
      <img
        :src="`${appBaseURL}images/placeholder/hero-construction.jpg`"
        alt=""
        class="hero-zoom absolute inset-0 -z-10 w-full h-full object-cover object-[70%_30%]"
      />
      <!-- Voile : opaque à gauche pour la lisibilité du texte, la photo ressort à droite. -->
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-noir via-noir/85 to-noir/40"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8 pt-32 pb-28 md:pt-40 md:pb-36">
        <div class="max-w-[900px]">
          <p v-reveal class="flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-palm before:block before:w-10 before:h-px before:bg-palm">
            Bingerville, Côte d'Ivoire
          </p>
          <h1 v-reveal="120" class="font-display font-semibold text-[clamp(40px,6vw,72px)] leading-[1.05] mb-8">
            Construire, gérer et <span class="text-orange italic font-normal">maintenir</span> ce qui fait tenir vos activités.
          </h1>
          <p v-reveal="240" class="text-lg leading-[1.8] font-light text-white/70 max-w-[600px] mb-12">
            Trois métiers, une même exigence : l'immobilier, la construction et la
            maintenance industrielle, pilotés par une seule agence à Abidjan.
          </p>
          <div v-reveal="360" class="flex flex-col sm:flex-row gap-5">
            <NuxtLink to="/catalogue" class="btn-primary">Voir le catalogue</NuxtLink>
            <NuxtLink to="/contact" class="btn-outline">Nous contacter</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Atouts -->
    <section class="bg-white py-[100px] border-b border-black/5">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="(a, i) in atouts"
          :key="a.title"
          v-reveal="i * 100"
          class="p-8 bg-white rounded shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
        >
          <AppIcon :name="a.icon" class="w-10 h-10 mb-6" :class="a.color" />
          <h3 class="font-body text-base font-semibold text-noir mb-3">{{ a.title }}</h3>
          <p class="text-sm leading-[1.7] text-muted">{{ a.desc }}</p>
        </div>
      </div>
    </section>

    <!-- À propos -->
    <section class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }" class="relative h-[420px] md:h-[500px]">
          <img
            :src="`${appBaseURL}images/placeholder/about-main.jpg`"
            alt=""
            class="w-[85%] h-full object-cover rounded"
          />
          <div class="absolute -bottom-10 right-0 w-[240px] md:w-[280px] h-[170px] md:h-[200px] bg-palm rounded flex flex-col items-center justify-center text-noir shadow-[0_20px_60px_rgba(158,212,0,0.3)]">
            <span class="font-display text-5xl font-bold leading-none">03</span>
            <span class="mt-2 text-xs font-semibold uppercase tracking-[0.15em]">Domaines d'expertise</span>
          </div>
        </div>
        <div v-reveal="{ from: 'right', delay: 150 }">
          <p class="eyebrow mb-4">À propos d'ACOGIM-CI</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6">
            Une agence à taille humaine, <span class="text-orange italic font-normal">trois métiers complémentaires.</span>
          </h2>
          <p class="text-[17px] leading-[1.9] text-muted mb-6">
            Agence de Construction, de Gestion Immobilières et de Maintenance
            Côte d'Ivoire — une SARL basée à Bingerville, Abidjan.
          </p>
          <p class="text-[17px] leading-[1.9] text-muted mb-8">
            Une gestion rigoureuse de chaque projet, de l'étude à la livraison,
            et un accompagnement continu pour nos clients industriels via la
            GMAO et la sécurité électronique.
          </p>
          <NuxtLink to="/qui-sommes-nous" class="btn-text">Découvrir notre histoire →</NuxtLink>
        </div>
      </div>
    </section>

    <!-- Activités -->
    <section id="activites" class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Nos activités</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Une SARL, <span class="text-orange italic font-normal">trois domaines d'expertise.</span>
        </h2>
        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[60px]">
          <div
            v-for="(a, i) in activites"
            :key="a.title"
            v-reveal="i * 120"
            class="bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <p class="font-display text-5xl font-bold leading-none mb-6" :class="a.num_color">{{ a.num }}</p>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-4">{{ a.title }}</h3>
            <p class="text-[15px] leading-[1.8] text-muted mb-8">{{ a.desc }}</p>
            <NuxtLink :to="a.to" class="btn-text">En savoir plus →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Services : une catégorie à la fois (Immobilier par défaut) -->
    <section id="services" ref="servicesEl" class="relative bg-noir text-white lg:h-[400vh]">
      <div class="glow isolate flex items-center py-[100px] lg:py-0 lg:sticky lg:top-16 lg:h-[calc(100vh-4rem)]">
        <img
          :src="`${appBaseURL}images/placeholder/construction-site.jpg`"
          alt=""
          class="absolute inset-0 -z-10 w-full h-full object-cover"
        />
        <div class="absolute inset-0 -z-10 bg-noir/80"></div>

        <div class="relative z-10 w-full mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:items-center">
          <div v-reveal="{ from: 'left' }">
            <p class="eyebrow !text-palm mb-4">Nos services</p>
            <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-8">
              Un catalogue de <span class="text-orange italic font-normal">biens et prestations.</span>
            </h2>

            <div role="tablist" aria-label="Catégories de services" class="flex flex-wrap gap-2 lg:flex-col lg:gap-1">
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

            <NuxtLink to="/catalogue" class="btn-outline !border-white/20 mt-10 hidden lg:inline-flex">Voir le catalogue complet</NuxtLink>
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

            <NuxtLink to="/catalogue" class="btn-outline !border-white/20 mt-10 lg:hidden">Voir le catalogue complet</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section id="projets" class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div v-reveal class="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-[60px]">
          <div>
            <p class="eyebrow mb-4">Nos projets</p>
            <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Réalisés, <span class="text-orange italic font-normal">en cours et à venir.</span>
            </h2>
          </div>
          <div class="flex flex-wrap gap-2">
            <button
              v-for="f in filters"
              :key="f.value"
              type="button"
              @click="activeFilter = f.value"
              class="px-5 py-2.5 rounded-full border text-[13px] font-medium transition-colors duration-300"
              :class="activeFilter === f.value
                ? 'bg-noir text-white border-noir'
                : 'border-black/10 text-muted hover:bg-noir hover:text-white hover:border-noir'"
            >
              {{ f.label }}
            </button>
          </div>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div v-for="(p, i) in filteredProjets" :key="p.titre" v-reveal="i * 120">
            <ProjetCard :projet="p" class="h-full" />
          </div>
        </div>

        <div class="text-center mt-[60px]">
          <NuxtLink to="/realisations" class="btn-text">Voir toutes les réalisations →</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>
