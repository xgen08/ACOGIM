<template>
  <div>
    <PageHero image="/images/placeholder/building-2.jpg" eyebrow="Contact">
      Parlons de <span class="text-palm">votre projet.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-10">
      <div class="bg-paper border border-charcoal/10 p-8 hover:shadow-xl hover:shadow-charcoal/10 transition-shadow duration-300">
        <p class="eyebrow mb-2">Nos coordonnées</p>
        <h2 class="font-display text-2xl mb-4">ACOGIM-CI</h2>
        <ul class="text-sm text-charcoal/75 space-y-1.5">
          <li>BP : 705 CIDEX 03 Abidjan</li>
          <li>Ayopoumin Ex-Mittérand, Villa n° 356</li>
          <li>Bingerville</li>
          <li>Tél : +225 27 24 45 14 22</li>
        </ul>
        <p class="eyebrow mt-6 mb-2">Contact projet</p>
        <ul class="text-sm text-charcoal/75 space-y-1.5">
          <li>M. YEO Nandielè</li>
          <li>+225 07 07 00 02 07</li>
          <li>+225 01 05 00 01 50</li>
        </ul>
      </div>

      <DevisForm subject="Contact" title="Envoyez-nous un message" />
    </section>
  </div>
</template>
