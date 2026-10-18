<script setup>
defineProps({
  image: { type: String, required: true },
  eyebrow: { type: String, required: true },
  lead: { type: String, default: '' },
  overlay: { type: String, default: 'bg-forest/80' }
})
</script>

<template>
  <section class="relative isolate overflow-hidden">
    <div class="absolute inset-0 -z-10">
      <img :src="image" alt="" class="w-full h-full object-cover" />
      <div class="absolute inset-0" :class="overlay"></div>
    </div>
    <div class="mx-auto max-w-6xl px-6 pt-24 pb-20 md:pt-32 md:pb-24">
      <p class="eyebrow mb-4 text-white"><slot name="eyebrow">{{ eyebrow }}</slot></p>
      <h1 class="font-display text-4xl md:text-6xl max-w-3xl leading-[0.95] text-concrete">
        <slot />
      </h1>
      <p v-if="lead" class="mt-6 max-w-2xl text-lg text-white">{{ lead }}</p>
    </div>
  </section>
</template>
