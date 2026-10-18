<script setup>
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
  { valeur: '03', label: "Domaines d'activité" },
  { valeur: 'Bingerville', label: 'Siège, Abidjan' }
]

const piliers = [
  {
    num: '01',
    color: 'text-forest',
    title: 'Nos activités',
    items: [
      'Achat et vente de biens immobiliers',
      'Construction, gestion et vente de biens immobiliers',
      'Maintenance industrielle'
    ]
  },
  {
    num: '02',
    color: 'text-orange',
    title: 'Notre politique',
    text: "Une gestion rigoureuse de chaque projet, de l'étude à la livraison, et un accompagnement continu pour nos clients industriels via la GMAO et la sécurité électronique."
  },
  {
    num: '03',
    color: 'text-forest',
    title: 'Notre ambition',
    text: "Faire connaître ACOGIM-CI auprès des clients potentiels et du grand public, en donnant à voir nos réalisations, nos projets en cours et nos perspectives."
  }
]

const metiers = [
  {
    icon: 'home',
    title: 'Immobilier',
    desc: 'Achat et vente de biens immobiliers, pour particuliers et entreprises.',
    to: '/activites/immobilier'
  },
  {
    icon: 'layers',
    title: 'Construction',
    desc: 'Construction, gestion et vente de biens immobiliers, du terrain à la livraison.',
    to: '/activites/construction'
  },
  {
    icon: 'settings',
    title: 'Maintenance industrielle',
    desc: 'Projets et travaux de maintenance, GMAO et sécurité électronique.',
    to: '/activites/maintenance-industrielle'
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/cta-bg.jpg"
      eyebrow="Qui sommes-nous"
      lead="Agence de Construction, de Gestion Immobilières et de Maintenance Côte d'Ivoire — une SARL basée à Bingerville, Abidjan."
    >
      ACOGIM-CI, une agence à taille humaine,
      <span>trois métiers complémentaires.</span>
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

    <!-- Le nom décodé -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-16 lg:gap-[100px] lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }">
          <p class="eyebrow mb-4">Notre nom</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-10">
            Six lettres, <span class="text-orange italic font-normal">une promesse.</span>
          </h2>
          <ul class="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <li
              v-for="(a, i) in acronyme"
              :key="a.lettres"
              v-reveal="i * 80"
              class="rounded px-5 py-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
              :class="a.accent ? 'bg-palm' : 'bg-white'"
            >
              <span class="block font-display text-4xl font-bold leading-none" :class="a.accent ? 'text-noir' : 'text-forest'">{{ a.lettres }}</span>
              <span class="block mt-3 text-sm" :class="a.accent ? 'text-noir font-medium' : 'text-muted'">{{ a.mot }}</span>
            </li>
          </ul>
        </div>

        <div v-reveal="{ from: 'right', delay: 150 }" class="relative h-[420px] md:h-[500px]">
          <img
            src="/images/placeholder/about-main.jpg"
            alt=""
            class="w-[85%] h-full object-cover rounded"
          />
          <img
            src="/images/placeholder/about-overlay.jpg"
            alt=""
            class="hidden md:block absolute -bottom-10 right-0 w-[55%] h-[55%] object-cover rounded border-8 border-white shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
          />
        </div>
      </div>
    </section>

    <!-- Ce qui nous guide -->
    <section class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow mb-4">Ce qui nous guide</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
          Une même exigence, <span class="text-orange italic font-normal">de l'étude à la livraison.</span>
        </h2>
        <div class="grid gap-8 md:grid-cols-3 mt-[60px]">
          <div
            v-for="(p, i) in piliers"
            :key="p.title"
            v-reveal="i * 120"
            class="bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <p class="font-display text-5xl font-bold leading-none mb-6" :class="p.color">{{ p.num }}</p>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-4">{{ p.title }}</h3>
            <ul v-if="p.items" class="space-y-3">
              <li v-for="item in p.items" :key="item" class="flex gap-3 text-[15px] leading-[1.7] text-muted">
                <span class="mt-[11px] w-4 h-px shrink-0 bg-palm"></span>
                {{ item }}
              </li>
            </ul>
            <p v-else class="text-[15px] leading-[1.8] text-muted">{{ p.text }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Trois métiers -->
    <section class="glow isolate bg-noir text-white py-[120px]">
      <img
        src="/images/placeholder/stats-bg.jpg"
        alt=""
        class="absolute inset-0 -z-10 w-full h-full object-cover"
      />
      <div class="absolute inset-0 -z-10 bg-noir/80"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8">
        <p v-reveal class="eyebrow !text-palm mb-4">Nos métiers</p>
        <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-[60px]">
          Trois savoir-faire, <span class="text-orange italic font-normal">une seule agence.</span>
        </h2>
        <div class="grid gap-6 md:grid-cols-3">
          <NuxtLink
            v-for="(m, i) in metiers"
            :key="m.to"
            v-reveal="i * 120"
            :to="m.to"
            class="group flex flex-col bg-white/[0.14] backdrop-blur-md rounded px-8 py-10 shadow-[0_10px_40px_rgba(0,0,0,0.25)] transition-colors duration-300 hover:bg-white/[0.2]"
          >
            <AppIcon :name="m.icon" class="w-10 h-10 text-palm mb-6" />
            <h3 class="font-display text-2xl font-semibold mb-3">{{ m.title }}</h3>
            <p class="text-[15px] leading-[1.7] text-white/80 mb-8">{{ m.desc }}</p>
            <span class="mt-auto inline-flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.05em] text-palm">
              Découvrir
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Contact projet -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }">
          <p class="eyebrow mb-4">Contact projet</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6">
            Un interlocuteur <span class="text-orange italic font-normal">pour votre projet.</span>
          </h2>
          <p class="text-[17px] leading-[1.9] text-muted max-w-[480px]">
            Décrivez-nous votre besoin : nous revenons vers vous pour en
            discuter et vous proposer un devis.
          </p>
        </div>

        <div v-reveal="{ from: 'right', delay: 150 }" class="bg-white rounded p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-2">Responsable projet</p>
          <p class="font-display text-3xl font-semibold text-noir mb-8">M. YEO Nandielè</p>

          <ul class="space-y-4 text-[15px]">
            <li class="flex items-center gap-4">
              <span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">
                <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
              </span>
              <span class="flex flex-col">
                <a href="tel:+2250707000207" class="text-noir hover:text-ember transition-colors">+225 07 07 00 02 07</a>
                <a href="tel:+2250105000150" class="text-noir hover:text-ember transition-colors">+225 01 05 00 01 50</a>
              </span>
            </li>
            <li class="flex items-center gap-4">
              <span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">
                <AppIcon name="map-pin" class="w-5 h-5" />
              </span>
              <span class="text-muted">
                Ayopoumin Ex-Mittérand, Villa n° 356, Bingerville<br>
                BP : 705 CIDEX 03 Abidjan
              </span>
            </li>
          </ul>

          <NuxtLink to="/contact" class="btn-primary mt-10 w-full sm:w-auto">Demander un devis</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
