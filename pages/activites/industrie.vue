<script setup>
import { projets } from '~/data/projets.js'

const projetsIndustrie = projets.filter((p) => p.categorie === 'Industrie')

// Services du pôle industriel (cahier des charges, menu 3).
const services = [
  {
    num: '01',
    color: 'text-forest',
    icon: 'search',
    title: 'Études techniques et ingénierie',
    text: 'Analyse des besoins, études de faisabilité, diagnostics techniques et préparation des projets.'
  },
  {
    num: '02',
    color: 'text-orange',
    icon: 'layers',
    title: 'Réalisation de projets industriels',
    text: 'Mise en œuvre des projets selon les exigences techniques, les délais et les objectifs définis avec le client.'
  },
  {
    num: '03',
    color: 'text-forest',
    icon: 'tool',
    title: 'Maintenance industrielle',
    text: 'Maintenance préventive et corrective, diagnostic des pannes et amélioration de la fiabilité des équipements.'
  },
  {
    num: '04',
    color: 'text-orange',
    icon: 'users',
    title: 'Conseil et accompagnement',
    text: "Assistance technique, optimisation des processus et accompagnement des entreprises dans leurs projets d'amélioration."
  },
  {
    num: '05',
    color: 'text-forest',
    icon: 'book',
    title: 'Formation professionnelle',
    text: 'Formations destinées aux équipes techniques, pour renforcer les compétences et la sécurité au quotidien.'
  },
  {
    num: '06',
    color: 'text-orange',
    icon: 'award',
    title: 'Qualité et normes ISO',
    text: "Accompagnement à la mise en place de systèmes de management de la qualité, préparation aux audits et appui aux démarches de certification."
  }
]

const publics = ['Entreprises', 'Industries', 'Organismes', 'Professionnels']
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/stats-bg.jpg"
      eyebrow="Nos activités / Industrie"
      lead="Études techniques, réalisation, maintenance, conseil, formation et accompagnement qualité : des prestations pensées pour les entreprises, les industries et les organismes."
    >
      Des solutions techniques <span>au service de votre performance.</span>
    </PageHero>

    <!-- Services -->
    <section class="bg-white py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8">
        <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
          <div>
            <p v-reveal class="eyebrow mb-4">Nos prestations</p>
            <h2 v-reveal="100" class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir">
              De l'étude <span class="text-orange italic font-normal">à l'amélioration continue.</span>
            </h2>
          </div>
          <ul v-reveal="200" class="flex flex-wrap gap-2" aria-label="Pour qui">
            <li
              v-for="p in publics"
              :key="p"
              class="px-4 py-2 rounded-full bg-concrete border border-black/5 text-[13px] font-medium text-charcoal"
            >
              {{ p }}
            </li>
          </ul>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-[60px]">
          <div
            v-for="(s, i) in services"
            :key="s.title"
            v-reveal="(i % 3) * 120"
            class="flex flex-col bg-white rounded px-10 py-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] transition-shadow duration-300 hover:shadow-[0_10px_32px_rgba(0,0,0,0.08)]"
          >
            <div class="flex items-center justify-between mb-8">
              <p class="font-display text-5xl font-bold leading-none" :class="s.color">{{ s.num }}</p>
              <AppIcon :name="s.icon" class="w-10 h-10" :class="s.color" />
            </div>
            <h3 class="font-body text-[22px] font-semibold text-noir mb-4">{{ s.title }}</h3>
            <p class="text-[15px] leading-[1.8] text-muted">{{ s.text }}</p>
            <NuxtLink v-if="s.to" :to="s.to" class="btn-text mt-8 self-start">En savoir plus →</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Qualité ISO : précision sur le rôle d'ACOGIM-CI -->
    <section class="glow isolate bg-noir text-white py-[120px]">
      <img :src="asset('/images/placeholder/hero-construction.jpg')" alt="" class="absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-noir/85"></div>
      <div class="relative z-10 mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-2 items-center">
        <div v-reveal="{ from: 'left' }">
          <p class="eyebrow !text-palm mb-4">Qualité et normes ISO</p>
          <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15]">
            Vous accompagner <span class="text-orange italic font-normal">jusqu'à la certification.</span>
          </h2>
        </div>
        <div v-reveal="{ from: 'right', delay: 150 }" class="space-y-6">
          <p class="text-[17px] leading-[1.9] text-white/75">
            ACOGIM-CI vous aide à structurer votre système de management de la qualité,
            à préparer vos audits et à constituer votre dossier de certification.
          </p>
          <p class="flex gap-4 rounded bg-white/[0.08] border border-white/10 p-6 text-[15px] leading-[1.8] text-white/80">
            <AppIcon name="award" class="w-6 h-6 shrink-0 text-palm mt-0.5" />
            <span>
              Il s'agit d'un <strong class="text-white font-semibold">accompagnement à la certification ISO</strong> :
              la certification elle-même est délivrée par un organisme certificateur accrédité.
            </span>
          </p>
        </div>
      </div>
    </section>

    <!-- Projets du pôle -->
    <section v-if="projetsIndustrie.length" class="bg-concrete py-[120px]">
      <div class="mx-auto max-w-[1280px] px-8 grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-center">
        <div v-reveal="{ from: 'left' }">
          <p class="eyebrow mb-4">Sur le terrain</p>
          <h2 class="font-display font-semibold text-[clamp(28px,3.5vw,40px)] leading-[1.2] text-noir">
            Nos projets <span class="text-orange italic font-normal">industriels.</span>
          </h2>
          <NuxtLink to="/realisations" class="btn-text mt-8">Voir toutes nos réalisations →</NuxtLink>
        </div>
        <div class="grid gap-8 sm:grid-cols-2">
          <div v-for="(p, i) in projetsIndustrie" :key="p.titre" v-reveal="i * 120">
            <ProjetCard :projet="p" class="h-full" />
          </div>
        </div>
      </div>
    </section>

    <DevisSection
      subject="Industrie"
      title="Décrivez votre besoin industriel"
      activite="Industrie — études, réalisation, conseil, formation, ISO"
    >
      <template #title>Un projet <span>industriel ?</span></template>
    </DevisSection>
  </div>
</template>
