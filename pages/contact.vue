<script setup>
const cartes = [
  {
    icon: 'map-pin',
    label: 'Adresse',
    lignes: ['Ayopoumin Ex-Mittérand, Villa n° 356', 'Bingerville', 'BP : 705 CIDEX 03 Abidjan']
  },
  {
    icon: 'home',
    label: 'Agence',
    tel: [{ affichage: '+225 27 24 45 14 22', lien: '+2252724451422' }]
  },
  {
    icon: 'clipboard',
    label: 'Contact projet — M. YEO Nandielè',
    tel: [
      { affichage: '+225 07 07 00 02 07', lien: '+2250707000207' },
      { affichage: '+225 01 05 00 01 50', lien: '+2250105000150' }
    ]
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/cta-bg.jpg"
      eyebrow="Contact"
      lead="Un projet immobilier, une construction ou un besoin de maintenance : écrivez-nous ou appelez-nous directement."
    >
      Parlons de <span>votre projet.</span>
    </PageHero>

    <!-- Coordonnées, à cheval sur le hero -->
    <section class="relative z-10 mx-auto max-w-[1280px] px-8 -mt-14">
      <div class="grid gap-6 md:grid-cols-3">
        <div
          v-for="(c, i) in cartes"
          :key="c.label"
          v-reveal="i * 100"
          class="bg-white rounded p-8 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
        >
          <span class="w-12 h-12 mb-6 rounded-full bg-palm/20 text-forest flex items-center justify-center">
            <AppIcon :name="c.icon" class="w-6 h-6" />
          </span>
          <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted mb-3">{{ c.label }}</p>
          <ul class="space-y-1 text-[15px] text-noir">
            <li v-for="l in c.lignes" :key="l">{{ l }}</li>
            <li v-for="t in c.tel" :key="t.lien">
              <a :href="`tel:${t.lien}`" class="text-xl font-semibold tabular-nums hover:text-ember transition-colors">{{ t.affichage }}</a>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <DevisSection
      subject="Contact"
      title="Envoyez-nous un message"
      eyebrow="Écrivez-nous"
      :show-contacts="false"
    >
      <template #title>Envoyez-nous <span>un message.</span></template>
    </DevisSection>
  </div>
</template>
