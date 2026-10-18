<script setup>
defineProps({
  eyebrow: { type: String, required: true },
  lead: { type: String, default: '' },
  // Photo de fond facultative (voile sombre + lent zoom, comme le hero de l'accueil).
  image: { type: String, default: '' }
})

const config = useRuntimeConfig()

function resolveImage(path) {
  if (!path) return ''
  if (/^(https?:)?\/\//.test(path)) return path
  return `${config.app.baseURL}${path.replace(/^\/+/, '')}`
}
</script>

<template>
  <section class="glow isolate bg-noir text-white">
    <template v-if="image">
      <img :src="resolveImage(image)" alt="" class="hero-zoom absolute inset-0 -z-10 w-full h-full object-cover" />
      <div class="absolute inset-0 -z-10 bg-gradient-to-r from-noir via-noir/80 to-noir/30"></div>
    </template>
    <div class="relative z-10 mx-auto max-w-[1280px] px-8 pt-28 pb-24 md:pt-36 md:pb-28">
      <p v-reveal class="flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-palm before:block before:w-10 before:h-px before:bg-palm">
        <slot name="eyebrow">{{ eyebrow }}</slot>
      </p>
      <!-- Le mot mis en avant (span) passe en orange italique, comme sur la maquette. -->
      <h1 v-reveal="120" class="font-display font-semibold text-4xl md:text-6xl max-w-4xl leading-[1.05] [&>span]:text-orange [&>span]:italic [&>span]:font-normal">
        <slot />
      </h1>
      <p v-if="lead" v-reveal="240" class="mt-8 max-w-[600px] text-lg leading-[1.8] font-light text-white/70">{{ lead }}</p>
    </div>
  </section>
</template>
