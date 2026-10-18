<script setup>
defineProps({
  projet: { type: Object, required: true }
})

const badge = {
  'Réalisé': 'bg-white text-noir',
  'En cours': 'bg-ember text-white',
  'À venir': 'bg-palm text-noir'
}
</script>

<template>
  <article class="group bg-white rounded overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
    <div class="relative h-[260px] overflow-hidden bg-[#e5e5e5]">
      <img :src="projet.image" alt="" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div class="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <span
        class="absolute top-5 left-5 px-3.5 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.1em]"
        :class="badge[projet.statut]"
      >
        {{ projet.statut }}
      </span>
    </div>
    <div class="p-7">
      <p class="text-[11px] font-semibold uppercase tracking-[0.15em] text-forest mb-2">{{ projet.categorie }}</p>
      <h3 class="font-body text-lg font-semibold text-noir mb-2">{{ projet.titre }}</h3>
      <p class="text-sm leading-[1.6] text-muted">{{ projet.desc }}</p>
    </div>
  </article>
</template>
