<script setup>
const open = ref(false)
const activitesOpen = ref(false)
const scrolled = ref(false)

const activites = [
  { label: 'Immobilier', to: '/activites/immobilier' },
  { label: 'Construction', to: '/activites/construction' },
  { label: 'Maintenance industrielle', to: '/activites/maintenance-industrielle' }
]

function onScroll() {
  scrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-leaf text-white transition-shadow duration-300"
    :class="scrolled ? 'shadow-xl shadow-charcoal/30' : ''"
  >
    <div class="mx-auto max-w-6xl px-6">
      <div
        class="flex items-center justify-between transition-[height] duration-300"
        :class="scrolled ? 'h-14' : 'h-20'"
      >
        <NuxtLink to="/" class="flex items-center gap-3 font-display text-2xl tracking-wide leading-none">
          <img
            src="/images/logo/acogim-icon.png"
            alt="ACOGIM-CI"
            class="w-auto bg-white rounded-md px-2 py-1 box-content transition-[height] duration-300"
            :class="scrolled ? 'h-8' : 'h-11'"
          >
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-8 font-body text-sm">
          <NuxtLink to="/" class="hover:underline decoration-2 underline-offset-8 transition-colors">Accueil</NuxtLink>
          <NuxtLink to="/qui-sommes-nous" class="hover:underline decoration-2 underline-offset-8 transition-colors">Qui sommes-nous</NuxtLink>

          <div class="relative" @mouseenter="activitesOpen = true" @mouseleave="activitesOpen = false">
            <button class="flex items-center gap-1 hover:underline decoration-2 underline-offset-8 transition-colors" :aria-expanded="activitesOpen">
              Nos activités
              <span class="text-xs">▾</span>
            </button>
            <div
              v-show="activitesOpen"
              class="absolute left-0 top-full pt-3 w-64"
            >
              <ul class="bg-paper text-charcoal shadow-xl border-t-4 border-orange">
                <li v-for="a in activites" :key="a.to">
                  <NuxtLink :to="a.to" class="block px-5 py-3 text-sm hover:bg-concrete transition-colors">
                    {{ a.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink to="/realisations" class="hover:underline decoration-2 underline-offset-8 transition-colors">Réalisations</NuxtLink>
          <NuxtLink to="/catalogue" class="hover:underline decoration-2 underline-offset-8 transition-colors">Catalogue</NuxtLink>
          <NuxtLink
            to="/contact"
            class="group inline-flex items-center gap-2 bg-orange text-ink font-semibold px-4 py-2 hover:bg-white transition-colors"
          >
            Demander un devis
            <span class="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </NuxtLink>
        </nav>

        <!-- Mobile toggle -->
        <button class="md:hidden" @click="open = !open" :aria-expanded="open" aria-label="Ouvrir le menu">
          <span class="block w-7 h-0.5 bg-white mb-1.5"></span>
          <span class="block w-7 h-0.5 bg-white mb-1.5"></span>
          <span class="block w-7 h-0.5 bg-white"></span>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div v-show="open" class="md:hidden bg-leaf border-t border-white/25">
      <nav class="flex flex-col px-6 py-4 gap-4 font-body text-sm">
        <NuxtLink to="/" @click="open = false">Accueil</NuxtLink>
        <NuxtLink to="/qui-sommes-nous" @click="open = false">Qui sommes-nous</NuxtLink>
        <NuxtLink v-for="a in activites" :key="a.to" :to="a.to" @click="open = false" class="pl-4 text-white">
          {{ a.label }}
        </NuxtLink>
        <NuxtLink to="/realisations" @click="open = false">Réalisations</NuxtLink>
        <NuxtLink to="/catalogue" @click="open = false">Catalogue</NuxtLink>
        <NuxtLink to="/contact" @click="open = false" class="text-white font-bold underline decoration-orange decoration-2 underline-offset-4">Demander un devis</NuxtLink>
      </nav>
    </div>

  </header>
</template>
