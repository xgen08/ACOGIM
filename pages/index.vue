<script setup>
import { items as services } from '~/data/catalogue.js'
import { projets } from '~/data/projets.js'

const pillars = [
  {
    icon: 'home',
    title: 'Immobilier',
    desc: "Achat et vente de biens immobiliers, pour particuliers et entreprises.",
    to: '/activites/immobilier',
    accent: 'text-royal'
  },
  {
    icon: 'layers',
    title: 'Construction',
    desc: "Construction, gestion et vente de biens immobiliers, du terrain à la livraison.",
    to: '/activites/construction',
    accent: 'text-brick'
  },
  {
    icon: 'settings',
    title: 'Maintenance industrielle',
    desc: "Projets et travaux de maintenance en milieu industriel, GMAO et sécurité électronique.",
    to: '/activites/maintenance-industrielle',
    accent: 'text-forest'
  }
]

const atouts = [
  {
    icon: 'tool',
    title: 'Expertise multi-métiers',
    desc: "Immobilier, construction et maintenance industrielle pilotés par une seule agence."
  },
  {
    icon: 'clipboard',
    title: 'Suivi rigoureux',
    desc: "De l'étude à la livraison, chaque projet est encadré avec la même exigence."
  },
  {
    icon: 'shield',
    title: 'Sécurité & conformité',
    desc: "GMAO et sécurité électronique intégrées à nos prestations industrielles."
  },
  {
    icon: 'eye',
    title: 'Transparence',
    desc: "Projets réalisés, en cours et à venir, présentés tels qu'ils sont."
  }
]


const filters = ['Tous', 'Immobilier', 'Construction', 'Maintenance industrielle']
const activeFilter = ref('Tous')
const filteredProjets = computed(() =>
  activeFilter.value === 'Tous' ? projets : projets.filter((p) => p.categorie === activeFilter.value)
)

const statusColor = {
  'Réalisé': 'bg-forest',
  'En cours': 'bg-royal',
  'À venir': 'bg-palm text-charcoal'
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative isolate overflow-hidden">
      <div class="absolute inset-0 -z-10">
        <img
          src="/images/placeholder/hero-construction.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-forest/80"></div>
      </div>
      <div class="mx-auto max-w-6xl px-6 pt-28 pb-40 md:pt-36 md:pb-52">
        <p class="eyebrow mb-4 text-white">ACOGIM-CI — Bingerville, Côte d'Ivoire</p>
        <h1 class="font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl text-concrete">
          Construire, gérer et
          <span class="text-palm">maintenir</span>
          ce qui fait tenir vos activités.
        </h1>
        <p class="mt-6 max-w-2xl text-lg text-white">
          Trois métiers, une même exigence : l'immobilier, la construction et la
          maintenance industrielle, pilotés par une seule agence à Abidjan.
        </p>
        <div class="mt-8 flex flex-wrap gap-4">
          <NuxtLink to="/catalogue" class="bg-palm text-charcoal px-6 py-3 font-semibold hover:bg-white transition-colors">
            Voir le catalogue
          </NuxtLink>
          <NuxtLink to="/contact" class="border-2 border-concrete text-concrete px-6 py-3 font-semibold hover:bg-concrete hover:text-charcoal transition-colors">
            Demander un devis
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Atouts (overlapping card) -->
    <section id="atouts" class="mx-auto max-w-6xl px-6 -mt-24 md:-mt-20 relative z-10">
      <div class="bg-paper shadow-2xl shadow-charcoal/20 grid sm:grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 divide-x-0 md:divide-x divide-charcoal/10">
        <div v-for="a in atouts" :key="a.title" class="p-6">
          <AppIcon :name="a.icon" class="w-8 h-8 text-petrol mb-3" />
          <h3 class="font-display text-lg mb-1">{{ a.title }}</h3>
          <p class="text-sm text-charcoal/70 leading-relaxed">{{ a.desc }}</p>
        </div>
      </div>
    </section>

    <!-- About -->
    <section class="mx-auto max-w-6xl px-6 pt-24 md:pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <img src="/images/placeholder/about-main.jpg" alt="" class="w-full object-cover" />
        <img
          src="/images/placeholder/about-overlay.jpg"
          alt=""
          class="hidden md:block absolute -bottom-8 -right-8 w-2/3 border-8 border-paper shadow-xl"
        />
      </div>
      <div>
        <p class="eyebrow mb-3">À propos d'ACOGIM-CI</p>
        <h2 class="font-display text-3xl md:text-4xl mb-5">
          Une agence à taille humaine, trois métiers complémentaires.
        </h2>
        <p class="text-charcoal/75 leading-relaxed mb-4">
          Agence de Construction, de Gestion Immobilières et de Maintenance
          Côte d'Ivoire — une SARL basée à Bingerville, Abidjan.
        </p>
        <p class="text-charcoal/75 leading-relaxed mb-6">
          Une gestion rigoureuse de chaque projet, de l'étude à la livraison,
          et un accompagnement continu pour nos clients industriels via la
          GMAO et la sécurité électronique.
        </p>
        <NuxtLink to="/qui-sommes-nous" class="group inline-flex items-center gap-2 bg-leaf text-white px-6 py-3 font-semibold hover:bg-palm hover:text-charcoal transition-colors">
          En savoir plus
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>

    <!-- Trois pôles -->
    <section id="activites" class="mx-auto max-w-6xl px-6 py-20">
      <p class="eyebrow mb-3">Nos activités</p>
      <h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl">
        Une SARL, trois domaines d'expertise.
      </h2>
      <div class="grid md:grid-cols-3 gap-6">
        <NuxtLink
          v-for="p in pillars"
          :key="p.title"
          :to="p.to"
          class="group bg-paper border border-charcoal/10 p-7 hover:border-petrol hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300"
        >
          <div class="w-12 h-12 flex items-center justify-center bg-charcoal/5 group-hover:bg-palm group-hover:text-charcoal transition-colors duration-300" :class="p.accent">
            <AppIcon :name="p.icon" class="w-6 h-6" />
          </div>
          <h3 class="font-display text-2xl mt-4 mb-3 group-hover:text-petrol transition-colors">{{ p.title }}</h3>
          <p class="text-sm text-charcoal/70 leading-relaxed">{{ p.desc }}</p>
          <span class="inline-flex items-center gap-2 mt-5 font-mono text-xs uppercase tracking-wide text-forest">
            En savoir plus
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </span>
        </NuxtLink>
      </div>
    </section>

    <!-- Services -->
    <section id="services" class="bg-paper">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <p class="eyebrow mb-3">Nos services</p>
        <h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl">
          Un catalogue de biens et prestations, sur devis.
        </h2>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="s in services"
            :key="s.nom"
            class="text-center bg-concrete/60 p-8 hover:bg-leaf hover:text-white transition-colors duration-300 group"
          >
            <div class="w-14 h-14 mx-auto flex items-center justify-center bg-paper text-petrol group-hover:bg-palm group-hover:text-charcoal transition-colors duration-300">
              <AppIcon :name="s.icon" class="w-7 h-7" />
            </div>
            <p class="eyebrow mt-5 group-hover:text-white transition-colors">{{ s.categorie }}</p>
            <h3 class="font-display text-lg mt-1 mb-2">{{ s.nom }}</h3>
            <p class="text-sm text-charcoal/70 group-hover:text-white transition-colors leading-relaxed">{{ s.detail }}</p>
          </div>
        </div>
        <div class="mt-10 text-center">
          <NuxtLink to="/catalogue" class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-forest hover:text-petrol transition-colors">
            Voir le catalogue complet
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section id="projets" class="bg-concrete">
      <div class="mx-auto max-w-6xl px-6 py-20">
        <p class="eyebrow mb-3">Nos projets</p>
        <h2 class="font-display text-3xl md:text-4xl mb-10 max-w-xl">
          Réalisés, en cours et à venir.
        </h2>

        <div class="flex flex-wrap gap-3 mb-10">
          <button
            v-for="f in filters"
            :key="f"
            type="button"
            @click="activeFilter = f"
            class="font-mono text-xs uppercase tracking-wide px-4 py-2 border transition-colors duration-300"
            :class="activeFilter === f
              ? 'bg-leaf text-white border-leaf'
              : 'border-charcoal/20 text-charcoal/75 hover:border-leaf hover:text-forest'"
          >
            {{ f }}
          </button>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <article
            v-for="p in filteredProjets"
            :key="p.titre"
            class="group relative overflow-hidden border border-charcoal/10 hover:border-leaf transition-colors duration-300"
          >
            <div class="relative h-56 overflow-hidden">
              <img
                :src="p.image"
                alt=""
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent"></div>
              <span
                class="absolute top-4 left-4 font-mono text-xs uppercase tracking-wide px-3 py-1 text-white"
                :class="statusColor[p.statut]"
              >
                {{ p.statut }}
              </span>
            </div>
            <div class="p-6 bg-white text-charcoal">
              <h3 class="font-display text-xl mb-2">{{ p.titre }}</h3>
              <p class="text-sm text-charcoal/75 leading-relaxed">{{ p.desc }}</p>
            </div>
          </article>
        </div>

        <div class="mt-10 text-center">
          <NuxtLink to="/realisations" class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-forest hover:text-leaf transition-colors">
            Voir toutes les réalisations
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </div>
      </div>
    </section>


    <!-- CTA final -->
    <section class="relative isolate">
      <div class="absolute inset-0 -z-10">
        <img src="/images/placeholder/cta-bg.jpg" alt="" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-forest/80"></div>
      </div>
      <div class="mx-auto max-w-6xl px-6 py-20 text-center text-concrete">
        <h2 class="font-display text-3xl md:text-4xl mb-4">Un projet immobilier ou industriel en tête ?</h2>
        <p class="text-white max-w-xl mx-auto mb-8">
          Parcourez notre catalogue de biens et services, ou décrivez-nous
          directement votre besoin.
        </p>
        <NuxtLink to="/catalogue" class="group inline-flex items-center gap-2 bg-palm text-charcoal px-8 py-3 font-semibold hover:bg-white transition-colors">
          Parcourir le catalogue
          <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
