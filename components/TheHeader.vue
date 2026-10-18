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

// Lien de navigation : gris, soulignement vert qui se déploie au survol.
const underline = "relative transition-colors after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-palm after:transition-all after:duration-300 hover:after:w-full"
const navLink = `${underline} text-muted hover:text-noir`
// Page en cours : texte noir et soulignement plein (classe posée par NuxtLink).
const navActive = '!text-noir after:!w-full after:!h-0.5'

const route = useRoute()
const surActivite = computed(() => route.path.startsWith('/activites'))
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white/85 backdrop-blur-md border-b border-black/5 transition-shadow duration-300"
    :class="scrolled ? 'shadow-[0_10px_30px_rgba(0,0,0,0.05)]' : ''"
  >
    <div class="mx-auto max-w-[1280px] px-8">
      <div
        class="flex items-center justify-between transition-[height] duration-300"
        :class="scrolled ? 'h-16' : 'h-20'"
      >
        <NuxtLink to="/" class="flex items-center">
          <img
            src="/images/logo/acogim-icon.png"
            alt="ACOGIM-CI"
            class="w-auto transition-[height] duration-300"
            :class="scrolled ? 'h-9' : 'h-12'"
          >
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-10 text-sm font-medium">
          <NuxtLink to="/" :class="navLink" :exact-active-class="navActive">Accueil</NuxtLink>
          <NuxtLink to="/qui-sommes-nous" :class="navLink" :exact-active-class="navActive">Qui sommes-nous</NuxtLink>

          <div class="relative" @mouseenter="activitesOpen = true" @mouseleave="activitesOpen = false">
            <button class="flex items-center gap-1" :class="[navLink, surActivite && navActive]" :aria-expanded="activitesOpen">
              Nos activités
              <span class="text-xs">▾</span>
            </button>
            <div
              v-show="activitesOpen"
              class="absolute left-0 top-full pt-4 w-64"
            >
              <ul class="bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
                <li v-for="a in activites" :key="a.to">
                  <NuxtLink :to="a.to" class="block px-5 py-3 text-sm text-charcoal hover:bg-concrete hover:text-forest transition-colors" exact-active-class="bg-concrete !text-forest font-semibold">
                    {{ a.label }}
                  </NuxtLink>
                </li>
              </ul>
            </div>
          </div>

          <NuxtLink to="/realisations" :class="navLink" :exact-active-class="navActive">Réalisations</NuxtLink>
          <NuxtLink to="/catalogue" :class="navLink" :exact-active-class="navActive">Catalogue</NuxtLink>
          <NuxtLink to="/contact" :class="`${underline} font-semibold text-ember hover:text-orange`" exact-active-class="after:!w-full after:!h-0.5">Nous contacter</NuxtLink>
        </nav>

        <!-- Mobile toggle -->
        <button class="md:hidden p-2 -mr-2" @click="open = !open" :aria-expanded="open" aria-label="Ouvrir le menu">
          <span class="block w-6 h-px bg-noir mb-1.5"></span>
          <span class="block w-6 h-px bg-noir mb-1.5"></span>
          <span class="block w-6 h-px bg-noir"></span>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div v-show="open" class="md:hidden bg-white border-t border-black/5">
      <nav class="flex flex-col px-8 py-5 gap-4 text-sm font-medium text-charcoal">
        <NuxtLink to="/" @click="open = false" exact-active-class="!text-forest font-semibold">Accueil</NuxtLink>
        <NuxtLink to="/qui-sommes-nous" @click="open = false" exact-active-class="!text-forest font-semibold">Qui sommes-nous</NuxtLink>
        <NuxtLink v-for="a in activites" :key="a.to" :to="a.to" @click="open = false" class="pl-4 text-muted" exact-active-class="!text-forest font-semibold">
          {{ a.label }}
        </NuxtLink>
        <NuxtLink to="/realisations" @click="open = false" exact-active-class="!text-forest font-semibold">Réalisations</NuxtLink>
        <NuxtLink to="/catalogue" @click="open = false" exact-active-class="!text-forest font-semibold">Catalogue</NuxtLink>
        <NuxtLink to="/contact" @click="open = false" class="font-semibold text-ember" exact-active-class="underline underline-offset-4">Nous contacter</NuxtLink>
      </nav>
    </div>
  </header>
</template>
