<script setup>
const open = ref(false)
const activitesOpen = ref(false)
const scrolled = ref(false)

const activites = [
  { label: 'Immobilier', desc: 'ACHATS, GESTION, VENTES', to: '/activites/immobilier' },
  // { label: 'Construction', desc: 'Bâtiments et travaux neufs', to: '/activites/construction' },
  { label: 'Industrie', desc: 'Études, réalisation, conseil, ISO', to: '/activites/industrie' }
]

function onScroll() {
  scrolled.value = window.scrollY > 8
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})

const route = useRoute()
const surActivite = computed(() => route.path.startsWith('/activites'))

// Accordéon « Nos activités » du tiroir mobile : déplié si on est sur une page d'activité.
const mobileActivites = ref(false)

// Ferme les menus à chaque changement de page.
watch(() => route.fullPath, () => {
  open.value = false
  activitesOpen.value = false
})

// Tiroir mobile : bloque le défilement de la page derrière et ferme avec Échap.
function onKey(e) {
  if (e.key === 'Escape') open.value = false
}
watch(open, (v) => {
  if (v) mobileActivites.value = surActivite.value
  document.documentElement.style.overflow = v ? 'hidden' : ''
  if (v) window.addEventListener('keydown', onKey)
  else window.removeEventListener('keydown', onKey)
})
onUnmounted(() => {
  document.documentElement.style.overflow = ''
  window.removeEventListener('keydown', onKey)
})

const drawerLink = 'flex items-center justify-between py-4 border-b border-black/[0.08] text-[16px] font-semibold text-noir hover:text-ember transition-colors'

// Style « Invena » : liens foncés en gras (orange au survol / page en cours),
// boutons carrés gris clair et bouton d'action plein sombre.
const navLink = 'inline-flex items-center gap-1.5 py-2.5 text-noir hover:text-ember transition-colors'
const navActive = '!text-ember'
const squareBtn = 'grid place-items-center w-12 h-12 xl:w-14 xl:h-14 rounded-xl bg-black/[0.05] text-noir hover:bg-black/[0.09] transition-colors'
</script>

<template>
  <header
    class="sticky top-0 z-50 bg-white transition-shadow duration-300"
    :class="scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.06),0_6px_20px_rgba(0,0,0,0.04)]' : ''"
  >
    <div class="mx-auto max-w-[1320px] px-5 sm:px-8">
      <div class="flex h-24 lg:h-28 items-center justify-between gap-6">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center shrink-0" aria-label="ACOGIM-CI, retour à l'accueil">
          <img
            :src="asset('/images/logo/acogim-lockup.png')"
            alt="ACOGIM-CI"
            class="h-[76px] lg:h-[80px] xl:h-[92px] w-auto"
          >
        </NuxtLink>

        <!-- Desktop nav -->
        <nav class="hidden lg:flex items-center gap-5 xl:gap-9 text-[15px] xl:text-[16px] font-semibold whitespace-nowrap">
          <NuxtLink to="/" :class="navLink" :exact-active-class="navActive">Accueil</NuxtLink>
          <NuxtLink to="/qui-sommes-nous" :class="navLink" :exact-active-class="navActive">Qui sommes-nous</NuxtLink>

          <div class="relative" @mouseenter="activitesOpen = true" @mouseleave="activitesOpen = false">
            <button
              :class="[navLink, (surActivite || activitesOpen) && navActive]"
              :aria-expanded="activitesOpen"
              @click="activitesOpen = !activitesOpen"
            >
              Nos activités
              <svg class="w-3.5 h-3.5 transition-transform duration-200" :class="activitesOpen && 'rotate-180'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>
            </button>
            <Transition
              enter-active-class="transition duration-150 ease-out"
              enter-from-class="opacity-0 translate-y-1"
              leave-active-class="transition duration-100 ease-in"
              leave-to-class="opacity-0 translate-y-1"
            >
              <div v-show="activitesOpen" class="absolute left-0 top-full pt-2 w-72">
                <ul class="rounded-xl bg-white p-2 ring-1 ring-black/5 shadow-[0_16px_40px_rgba(0,0,0,0.1)]">
                  <li v-for="a in activites" :key="a.to">
                    <NuxtLink
                      :to="a.to"
                      class="block rounded-lg px-4 py-3 hover:bg-black/[0.04] transition-colors"
                      exact-active-class="bg-black/[0.05]"
                    >
                      <span class="block text-sm font-semibold text-noir">{{ a.label }}</span>
                      <span class="block text-xs text-muted mt-0.5">{{ a.desc }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </Transition>
          </div>

          <NuxtLink to="/realisations" :class="navLink" :exact-active-class="navActive">Réalisations</NuxtLink>
          <NuxtLink to="/phototheque" :class="navLink" :exact-active-class="navActive">Photothèque</NuxtLink>
        </nav>

        <!-- Actions -->
        <div class="flex items-center gap-2 xl:gap-3">
          <a
            href="tel:+2250707000207"
            :class="squareBtn" class="hidden lg:grid"
            aria-label="Appeler le +225 07 07 00 02 07"
            title="+225 07 07 00 02 07"
          >
            <svg class="w-[22px] h-[22px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          </a>
          <NuxtLink
            to="/contact"
            class="hidden lg:inline-flex items-center h-12 xl:h-14 px-6 xl:px-8 whitespace-nowrap rounded-xl bg-ember text-[15px] xl:text-[16px] font-semibold text-white hover:bg-orange transition-colors"
          >
            Nous contacter
          </NuxtLink>
          <!-- Menu (tiroir latéral), sur mobile comme sur ordinateur -->
          <button
            :class="squareBtn"
            :aria-expanded="open"
            aria-controls="menu-mobile"
            aria-label="Ouvrir le menu"
            @click="open = true"
          >
            <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 7h14M5 12h9M5 17h14"/></svg>
          </button>
        </div>

      </div>
    </div>

    <!-- Tiroir mobile : glisse depuis la droite sur un voile sombre -->
    <div class="fixed inset-0 z-[60] overflow-hidden" :class="open ? 'visible' : 'invisible pointer-events-none'" :aria-hidden="!open">
      <!-- Voile -->
      <div
        class="absolute inset-0 bg-noir/60 transition-opacity duration-300"
        :class="open ? 'opacity-100' : 'opacity-0'"
        @click="open = false"
      ></div>

      <aside
        id="menu-mobile"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        class="absolute inset-y-0 right-0 w-[82%] max-w-[360px] bg-white shadow-[-20px_0_60px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out"
        :class="open ? 'translate-x-0' : 'translate-x-full'"
      >
        <!-- Bouton fermer, accroché au bord gauche du tiroir -->
        <button
          class="absolute top-0 -left-12 grid place-items-center w-12 h-12 bg-noir text-white hover:bg-ember transition-colors"
          aria-label="Fermer le menu"
          :tabindex="open ? 0 : -1"
          @click="open = false"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>
        </button>

        <div class="h-full overflow-y-auto px-8 pt-14 pb-10">
          <NuxtLink to="/" class="block w-fit mx-auto" aria-label="ACOGIM-CI, retour à l'accueil" :tabindex="open ? 0 : -1">
            <img :src="asset('/images/logo/acogim-lockup.png')" alt="ACOGIM-CI" class="h-24 w-auto">
          </NuxtLink>

          <nav class="mt-10 flex flex-col">
            <NuxtLink to="/" :class="drawerLink" exact-active-class="!text-ember" :tabindex="open ? 0 : -1">Accueil</NuxtLink>
            <NuxtLink to="/qui-sommes-nous" :class="drawerLink" exact-active-class="!text-ember" :tabindex="open ? 0 : -1">Qui sommes-nous</NuxtLink>

            <div class="border-b border-black/[0.08]">
              <button
                class="w-full flex items-center justify-between py-4 text-[16px] font-semibold transition-colors"
                :class="surActivite ? 'text-ember' : 'text-noir hover:text-ember'"
                :aria-expanded="mobileActivites"
                :tabindex="open ? 0 : -1"
                @click="mobileActivites = !mobileActivites"
              >
                Nos activités
                <svg class="w-4 h-4 transition-transform duration-200" :class="mobileActivites && 'rotate-180'" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 6 4 4 4-4"/></svg>
              </button>
              <div class="grid transition-[grid-template-rows] duration-300" :class="mobileActivites ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
                <ul class="overflow-hidden">
                  <li v-for="a in activites" :key="a.to">
                    <NuxtLink
                      :to="a.to"
                      class="block pl-4 py-2.5 text-[15px] text-noir/70 border-l-2 border-black/[0.08] hover:text-ember transition-colors"
                      exact-active-class="!text-ember !border-ember font-medium"
                      :tabindex="open && mobileActivites ? 0 : -1"
                    >
                      {{ a.label }}
                    </NuxtLink>
                  </li>
                  <li class="h-3"></li>
                </ul>
              </div>
            </div>

            <NuxtLink to="/realisations" :class="drawerLink" exact-active-class="!text-ember" :tabindex="open ? 0 : -1">Réalisations</NuxtLink>
            <NuxtLink to="/phototheque" :class="drawerLink" exact-active-class="!text-ember" :tabindex="open ? 0 : -1">Photothèque</NuxtLink>
            <NuxtLink to="/contact" :class="drawerLink" exact-active-class="!text-ember" :tabindex="open ? 0 : -1">Contact</NuxtLink>
          </nav>

          <div class="mt-8 flex flex-col gap-3">
            <NuxtLink to="/contact" class="inline-flex items-center justify-center gap-2 rounded-lg bg-ember py-3.5 text-[15px] font-medium text-white hover:bg-orange transition-colors" :tabindex="open ? 0 : -1">
              Nous contacter
            </NuxtLink>
            <a href="tel:+2250707000207" class="inline-flex items-center justify-center gap-2 rounded-lg ring-1 ring-black/10 py-3.5 text-[15px] font-medium text-noir hover:ring-ember hover:text-ember transition-colors" :tabindex="open ? 0 : -1">
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              07 07 00 02 07
            </a>
          </div>
        </div>
      </aside>
    </div>
  </header>
</template>
