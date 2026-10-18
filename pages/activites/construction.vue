<script setup>
const demarche = [
  {
    titre: 'Étude & conception',
    desc: 'Analyse du terrain, plans, budget prévisionnel et permis de construire.'
  },
  {
    titre: 'Réalisation',
    desc: 'Suivi de chantier, contrôle qualité et respect des délais convenus.'
  },
  {
    titre: 'Gestion & vente',
    desc: 'Mise en location, gestion locative ou mise en vente du bien livré.'
  }
]
</script>

<template>
  <div>
    <PageHero
      image="/images/placeholder/construction-site.jpg"
      eyebrow="Nos activités / Construction"
      lead="Du terrain à la livraison, ACOGIM-CI pilote vos projets de construction et assure la gestion locative ou la revente des biens livrés."
    >
      Construction, gestion et vente de <span class="text-palm">biens immobiliers.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <p class="eyebrow mb-10">Notre démarche</p>
      <div class="grid md:grid-cols-3 gap-10 md:gap-6">
        <div
          v-for="(step, i) in demarche"
          :key="step.titre"
          class="process-line flex md:flex-col items-start md:items-center gap-5 md:gap-0 md:text-center"
        >
          <div
            class="relative z-10 flex-shrink-0 w-16 h-16 rounded-full border-2 border-charcoal/20 bg-concrete flex items-center justify-center font-display text-2xl hover:border-petrol hover:text-petrol transition-colors duration-300"
          >
            {{ i + 1 }}
          </div>
          <div class="md:mt-5">
            <h2 class="font-display text-xl mb-2">{{ step.titre }}</h2>
            <p class="text-sm text-charcoal/70 leading-relaxed md:max-w-[220px] md:mx-auto">{{ step.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <DevisForm subject="Construction" title="Parlez-nous de votre projet de construction" />
    </section>
  </div>
</template>
