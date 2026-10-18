<template>
  <!-- Bandeau d'appel final : vert lime atténué qui part du gris clair de la
       section précédente, puis vague noire vers le pied de page. -->
  <section class="relative overflow-hidden bg-gradient-to-b from-concrete via-palm/50 to-palm/70 text-noir pt-[100px] pb-[160px] md:pb-[190px] text-center">
    <div class="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_60%)]"></div>
    <div class="relative mx-auto max-w-[1280px] px-8">
      <h2 v-reveal class="font-display font-semibold text-[clamp(32px,4vw,48px)] leading-[1.15] mb-5">{{ title }}</h2>
      <p v-reveal="120" class="text-lg max-w-[600px] mx-auto mb-10 text-noir/80">{{ text }}</p>
      <NuxtLink v-reveal="240" :to="to" class="btn-dark">{{ label }}</NuxtLink>
    </div>

    <svg
      aria-hidden="true"
      class="absolute bottom-0 left-0 w-full h-[70px] md:h-[100px]"
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
    >
      <path d="M0 40 C 260 95, 520 95, 760 55 S 1180 0, 1440 45 L1440 100 L0 100 Z" fill="#0F0F0F" fill-opacity="0.25" />
      <path d="M0 70 C 300 20, 560 20, 820 60 S 1220 105, 1440 55 L1440 100 L0 100 Z" fill="#0F0F0F" />
    </svg>
  </section>
</template>

<script setup>
defineProps({
  title: { type: String, default: 'Un projet immobilier ou industriel en tête ?' },
  text: {
    type: String,
    default: 'Parcourez notre catalogue de biens et services, ou décrivez-nous directement votre besoin.'
  },
  to: { type: String, default: '/catalogue' },
  label: { type: String, default: 'Parcourir le catalogue →' }
})
</script>
