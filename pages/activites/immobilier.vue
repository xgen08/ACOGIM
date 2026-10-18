<template>
  <div>
    <PageHero
      image="/images/placeholder/building-1.jpg"
      eyebrow="Nos activités / Immobilier"
      lead="Terrains, villas, immeubles à usage commercial ou résidentiel : ACOGIM-CI accompagne particuliers et entreprises dans leurs transactions immobilières à Abidjan et environs."
    >
      Achat et vente de <span class="text-palm">biens immobiliers.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
      <div class="group bg-paper border border-charcoal/10 p-8 hover:border-forest hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300">
        <svg class="w-9 h-9 text-forest mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 11.5 12 4l9 7.5" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <h2 class="font-display text-2xl mb-3">Pour les vendeurs</h2>
        <p class="text-sm text-charcoal/70 leading-relaxed">
          Estimation, mise en valeur du bien, mise en relation avec des
          acquéreurs qualifiés et suivi jusqu'à la signature.
        </p>
      </div>
      <div class="group bg-paper border border-charcoal/10 p-8 hover:border-forest hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/10 transition-all duration-300">
        <svg class="w-9 h-9 text-forest mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="10" cy="10" r="6" />
          <path d="m20 20-4.5-4.5" stroke-linecap="round" />
        </svg>
        <h2 class="font-display text-2xl mb-3">Pour les acquéreurs</h2>
        <p class="text-sm text-charcoal/70 leading-relaxed">
          Sélection de biens correspondant à votre budget et à votre projet,
          vérification des documents et accompagnement administratif.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <DevisForm subject="Immobilier" title="Décrivez votre projet immobilier" />
    </section>
  </div>
</template>
