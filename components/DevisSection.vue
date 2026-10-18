<script setup>
defineProps({
  subject: { type: String, default: '' },
  title: { type: String, default: 'Demander un devis' },
  activite: { type: String, default: '' },
  eyebrow: { type: String, default: 'Demande de devis' },
  intro: {
    type: String,
    default: 'Décrivez-nous votre besoin : nous revenons vers vous pour en discuter et vous proposer un devis.'
  },
  // Coordonnées sous le texte (inutiles quand la page les affiche déjà).
  showContacts: { type: Boolean, default: true }
})
</script>

<template>
  <!-- Section devis : texte et coordonnées à gauche, formulaire à droite. -->
  <section id="devis" class="bg-concrete py-[120px] scroll-mt-16">
    <div class="mx-auto max-w-[1280px] px-8 grid gap-12 lg:gap-20 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] items-start">
      <div v-reveal="{ from: 'left' }" class="lg:sticky lg:top-28">
        <p class="eyebrow mb-4">{{ eyebrow }}</p>
        <h2 class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] text-noir mb-6 [&_span]:text-orange [&_span]:italic [&_span]:font-normal">
          <slot name="title">Parlons de <span>votre projet.</span></slot>
        </h2>
        <p class="text-[17px] leading-[1.9] text-muted max-w-[460px]">{{ intro }}</p>

        <ul v-if="showContacts" class="mt-10 space-y-5 text-[15px]">
          <li class="flex items-center gap-4">
            <span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">
              <svg aria-hidden="true" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2" /></svg>
            </span>
            <span class="flex flex-col">
              <span class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">M. YEO Nandielè</span>
              <span>
                <a href="tel:+2250707000207" class="text-noir hover:text-ember transition-colors">+225 07 07 00 02 07</a>
                <span class="text-muted"> · </span>
                <a href="tel:+2250105000150" class="text-noir hover:text-ember transition-colors">+225 01 05 00 01 50</a>
              </span>
            </span>
          </li>
          <li class="flex items-center gap-4">
            <span class="w-10 h-10 shrink-0 rounded-full bg-palm/20 text-forest flex items-center justify-center">
              <AppIcon name="map-pin" class="w-5 h-5" />
            </span>
            <span class="flex flex-col">
              <span class="text-[11px] font-semibold uppercase tracking-[0.15em] text-muted">Agence</span>
              <a href="tel:+2252724451422" class="text-noir hover:text-ember transition-colors">+225 27 24 45 14 22</a>
            </span>
          </li>
        </ul>
      </div>

      <div v-reveal="{ from: 'right', delay: 150 }">
        <DevisForm :subject="subject" :title="title" :activite="activite" />
      </div>
    </div>
  </section>
</template>
