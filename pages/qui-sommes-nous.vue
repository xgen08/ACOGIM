<script setup>
import { histoire, equipe } from '~/data/entreprise.js'

// Structure : cahier des charges docs/AGOCIM_2.md, menu 2 (six sous-rubriques).
const rubriques = [
  { id: 'presentation', label: 'Présentation' },
  { id: 'histoire', label: 'Notre histoire' },
  { id: 'vision', label: 'Vision & mission' },
  { id: 'valeurs', label: 'Nos valeurs' },
  { id: 'equipe', label: 'Notre équipe' },
  { id: 'poles', label: 'Nos pôles' }
]

// Le nom ACOGIM-CI, lettre par lettre.
const acronyme = [
  { lettres: 'A', mot: 'Agence' },
  { lettres: 'CO', mot: 'de Construction' },
  { lettres: 'G', mot: 'de Gestion' },
  { lettres: 'I', mot: 'Immobilières' },
  { lettres: 'M', mot: 'et de Maintenance' },
  { lettres: 'CI', mot: "Côte d'Ivoire", accent: true }
]

const fiche = [
  { valeur: 'SARL', label: 'Forme juridique' },
  { valeur: '02', label: "Pôles d'activité" },
  { valeur: 'Bingerville', label: 'Siège, Abidjan' }
]

const valeurs = [
  { icon: 'check', color: 'text-forest', title: 'Professionnalisme', desc: 'Maîtrise technique et rigueur dans chaque intervention.' },
  { icon: 'shield', color: 'text-orange', title: 'Intégrité', desc: 'Transparence avec nos clients, nos partenaires et nos équipes.' },
  { icon: 'award', color: 'text-forest', title: 'Qualité', desc: 'Des solutions fiables, durables et performantes.' },
  { icon: 'layers', color: 'text-orange', title: 'Innovation', desc: 'La recherche constante de meilleures façons de faire.' },
  { icon: 'eye', color: 'text-forest', title: 'Sécurité', desc: 'La protection des personnes, des sites et des équipements.' }
]

const poles = [
  {
    icon: 'home',
    title: 'Pôle immobilier',
    desc: 'Acquisition de terrains et de biens, construction civile et industrielle, gestion et vente de biens immobiliers.',
    to: '/activites/immobilier'
  },
  {
    icon: 'settings',
    title: 'Pôle industriel',
    desc: 'Études techniques, réalisation, maintenance, conseil, formation et accompagnement à la certification ISO.',
    to: '/activites/industrie'
  }
]

const initiales = (nom) =>
  nom === 'À compléter'
    ? '?'
    : nom.replace(/^M(me|lle)?\.\s*/, '').split(/\s+/).map((m) => m[0]).slice(0, 2).join('').toUpperCase()
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/cta-bg.jpg"
      eyebrow="Qui sommes-nous"
      lead="ACOGIM-CI SARL accompagne particuliers, entreprises et partenaires institutionnels dans leurs projets immobiliers et industriels."
    >
      Une entreprise, <span>deux pôles d'expertise.</span>
    </PageHero>

    <!-- Fiche d'identité, à cheval sur le hero -->
    <section class="relative z-10 mx-auto max-w-[1280px] px-8 -mt-14">
      <div class="grid sm:grid-cols-3 bg-white rounded shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
        <div
          v-for="(f, i) in fiche"
          :key="f.label"
          v-reveal="i * 100"
          class="px-8 py-8 text-center sm:border-l first:border-l-0 border-black/5 max-sm:border-t max-sm:first:border-t-0"
        >
          <p class="font-display text-3xl md:text-4xl font-semibold text-noir">{{ f.valeur }}</p>
          <p class="mt-2 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">{{ f.label }}</p>
        </div>
      </div>
    </section>

    <!-- Sommaire des sous-rubriques, collé sous le header -->
    <nav aria-label="Sommaire" class="sticky top-24 lg:top-28 z-30 mt-16 bg-white/90 backdrop-blur-md border-y border-black/5">
      <ul class="mx-auto max-w-[1280px] px-8 flex gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
        <li v-for="r in rubriques" :key="r.id" class="shrink-0">
          <a :href="`#${r.id}`" class="block px-4 py-2 rounded-full text-sm font-medium text-charcoal hover:bg-black/[0.05] hover:text-ember transition-colors">
            {{ r.label }}
          </a>
        </li>
      </ul>
    </nav>

    <!-- 1. Présentation générale -->
    <section id="presentation" class="bg-white py-[110px] scroll-mt-44">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }">
          <p class="eyebrow mb-4">Présentation générale</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6">
            ACOGIM-CI SARL, <span class="text-orange italic font-normal">immobilier et industrie.</span>
          </h2>
          <p class="text-[17px] leading-[1.9] text-muted mb-5">
            ACOGIM-CI est une société à responsabilité limitée (SARL) dont le siège est à
            Bingerville, Abidjan. Elle est spécialisée dans deux domaines d'activités stratégiques :
            l'immobilier et l'industrie.
          </p>
          <p class="text-[17px] leading-[1.9] text-muted mb-10">
            Elle accompagne les particuliers, les entreprises et les partenaires institutionnels
            en proposant des solutions adaptées à leurs besoins et aux exigences de leur secteur.
          </p>
          <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-4">Notre nom</p>
          <ul class="grid grid-cols-3 gap-3">
            <li
              v-for="(a, i) in acronyme"
              :key="a.lettres"
              v-reveal="i * 80"
              class="rounded px-4 py-4 shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
              :class="a.accent ? 'bg-palm' : 'bg-white'"
            >
              <span class="block font-display text-3xl font-bold leading-none" :class="a.accent ? 'text-noir' : 'text-forest'">{{ a.lettres }}</span>
              <span class="block mt-2 text-xs" :class="a.accent ? 'text-noir font-medium' : 'text-muted'">{{ a.mot }}</span>
            </li>
          </ul>
        </div>

        <div v-reveal="{ from: 'right', delay: 150 }" class="relative h-[420px] md:h-[520px]">
          <img :src="asset('/images/placeholder/about-main.jpg')" alt="" class="w-[85%] h-full object-cover rounded" />
          <img
            :src="asset('/images/placeholder/about-overlay.jpg')"
            alt=""
            class="hidden md:block absolute -bottom-10 right-0 w-[55%] h-[55%] object-cover rounded border-8 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>

    <!-- 2. Notre histoire (contenu provisoire : data/entreprise.js) -->
    <section id="histoire" class="bg-concrete py-[110px] scroll-mt-44">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p v-reveal class="eyebrow mb-4">Notre histoire</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Les étapes <span class="text-orange italic font-normal">qui nous ont construits.</span>
            </h2>
          </div>
          <span v-if="histoire.provisoire" class="px-3 py-1.5 rounded-full bg-noir/[0.06] text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            Contenu provisoire
          </span>
        </div>

        <ol class="relative mt-[60px] grid gap-10 md:grid-cols-4 md:gap-6">
          <span aria-hidden="true" class="hidden md:block absolute top-[11px] left-0 right-0 h-px bg-black/10"></span>
          <li v-for="(e, i) in histoire.etapes" :key="e.titre" v-reveal="i * 120" class="relative pl-10 md:pl-0">
            <span aria-hidden="true" class="absolute left-0 top-0 md:static block w-6 h-6 rounded-full border-4 border-concrete bg-palm ring-1 ring-palm/40 md:mb-8"></span>
            <p class="text-[12px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">{{ e.annee }}</p>
            <h3 class="font-body text-lg font-semibold text-noir mb-2">{{ e.titre }}</h3>
            <p class="text-[15px] leading-[1.7] text-muted">{{ e.texte }}</p>
          </li>
        </ol>
      </div>
    </section>

    <!-- 3 & 4. Vision et mission -->
    <section id="vision" class="glow isolate bg-noir text-white py-[110px] scroll-mt-44">
      <img :src="asset('/images/placeholder/stats-bg.jpg')" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-noir/85"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8 grid gap-6 md:grid-cols-2">
        <div v-reveal="{ from: 'left' }" class="rounded bg-white/[0.08] border border-white/10 backdrop-blur-md p-10 md:p-12">
          <AppIcon name="eye" class="w-10 h-10 text-palm mb-6" />
          <p class="eyebrow !text-palm mb-4">Notre vision</p>
          <h2 class="font-display text-3xl font-semibold leading-[1.2] mb-5">
            Devenir un <span class="text-orange italic font-normal">partenaire de référence.</span>
          </h2>
          <p class="text-[16px] leading-[1.9] text-white/75">
            ACOGIM-CI ambitionne de devenir un partenaire de référence dans l'immobilier et
            l'industrie, en apportant des solutions fiables, durables et performantes, et en
            contribuant durablement au développement de ses clients et de ses partenaires.
          </p>
        </div>
        <div v-reveal="{ from: 'right', delay: 150 }" class="rounded bg-white/[0.08] border border-white/10 backdrop-blur-md p-10 md:p-12">
          <AppIcon name="clipboard" class="w-10 h-10 text-palm mb-6" />
          <p class="eyebrow !text-palm mb-4">Notre mission</p>
          <h2 class="font-display text-3xl font-semibold leading-[1.2] mb-5">
            Des solutions <span class="text-orange italic font-normal">adaptées à chaque projet.</span>
          </h2>
          <p class="text-[16px] leading-[1.9] text-white/75">
            Accompagner les particuliers, les entreprises et les partenaires institutionnels
            dans la réalisation de leurs projets, avec des solutions adaptées à leurs besoins
            et aux exigences de leur secteur, fondées sur l'écoute et la maîtrise technique.
          </p>
        </div>
      </div>
    </section>

    <!-- 5. Nos valeurs -->
    <section id="valeurs" class="bg-white py-[110px] scroll-mt-44">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Nos valeurs</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Ce qui guide <span class="text-orange italic font-normal">chacune de nos actions.</span>
        </h2>
        <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 mt-[60px]">
          <div
            v-for="(v, i) in valeurs"
            :key="v.title"
            v-reveal="i * 100"
            class="p-8 bg-white rounded shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <AppIcon :name="v.icon" class="w-9 h-9 mb-5" :class="v.color" />
            <h3 class="font-body text-lg font-semibold text-noir mb-2">{{ v.title }}</h3>
            <p class="text-sm leading-[1.7] text-muted">{{ v.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 6. Notre équipe (contenu provisoire : data/entreprise.js) -->
    <section id="equipe" class="bg-concrete py-[110px] scroll-mt-44">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p v-reveal class="eyebrow mb-4">Notre équipe</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              Les femmes et les hommes <span class="text-orange italic font-normal">d'ACOGIM-CI.</span>
            </h2>
          </div>
          <span v-if="equipe.provisoire" class="px-3 py-1.5 rounded-full bg-noir/[0.06] text-[11px] font-semibold uppercase tracking-[0.08em] text-muted">
            Contenu provisoire
          </span>
        </div>

        <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 mt-[60px]">
          <article
            v-for="(m, i) in equipe.membres"
            :key="m.fonction"
            v-reveal="i * 120"
            class="bg-white rounded overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.05)]"
          >
            <div class="aspect-[4/3] bg-gradient-to-br from-palm/25 via-concrete to-orange/15 grid place-items-center">
              <img v-if="m.photo" :src="asset(m.photo)" :alt="m.nom" class="w-full h-full object-cover" />
              <span v-else class="grid place-items-center w-24 h-24 rounded-full bg-white text-forest font-display text-3xl font-bold shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
                {{ initiales(m.nom) }}
              </span>
            </div>
            <div class="p-7">
              <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">{{ m.fonction }}</p>
              <h3 class="font-body text-lg font-semibold mb-1" :class="m.nom === 'À compléter' ? 'text-muted italic' : 'text-noir'">{{ m.nom }}</h3>
              <p class="text-sm text-muted">{{ m.expertise }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Nos deux pôles (résumé avec liens) -->
    <section id="poles" class="glow isolate bg-noir text-white py-[110px] scroll-mt-44">
      <img :src="asset('/images/placeholder/construction-site.jpg')" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-noir/80"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow !text-palm mb-4">Nos domaines d'activité</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]">
          Deux pôles, <span class="text-orange italic font-normal">une seule exigence.</span>
        </h2>
        <div class="grid gap-6 md:grid-cols-2">
          <NuxtLink
            v-for="(p, i) in poles"
            :key="p.to"
            v-reveal="i * 120"
            :to="p.to"
            class="group flex flex-col bg-white/[0.14] backdrop-blur-md rounded px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
          >
            <AppIcon :name="p.icon" class="w-10 h-10 text-palm mb-6" />
            <h3 class="font-display text-2xl font-semibold mb-3">{{ p.title }}</h3>
            <p class="text-[15px] leading-[1.7] text-white/80 mb-8">{{ p.desc }}</p>
            <span class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm">
              Découvrir
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
