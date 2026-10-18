<template>
  <div>
    <PageHero
      image="/images/placeholder/stats-bg.jpg"
      eyebrow="Nos activités / Maintenance industrielle"
      lead="Réalisation de projets et travaux de maintenance, accompagnement au déploiement de la GMAO, et installation de systèmes de sécurité électronique."
    >
      Maintenir la performance de <span class="text-palm">vos sites industriels.</span>
    </PageHero>

    <section class="mx-auto max-w-6xl px-6 py-16 grid md:grid-cols-2 gap-6">
      <div class="bg-leaf text-white p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300">
        <svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 0 1 5.4-5.4l-2.7 2.7-2-2 2.7-2.7Z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="eyebrow text-white mb-2">Projets & travaux</p>
        <h2 class="font-display text-2xl mb-3">Maintenance en milieu industriel</h2>
        <p class="text-sm text-white leading-relaxed">
          Réalisation de projets et travaux de maintenance adaptés aux
          contraintes de production de votre site.
        </p>
      </div>
      <div class="bg-leaf text-white p-8 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300">
        <svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 13a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V19a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H5a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H11a1.7 1.7 0 0 0 1-1.5V5a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V11a1.7 1.7 0 0 0 1.5 1H19a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="eyebrow text-white mb-2">Accompagnement</p>
        <h2 class="font-display text-2xl mb-3">Déploiement GMAO</h2>
        <p class="text-sm text-white leading-relaxed">
          Mise en place et accompagnement au déploiement de services de
          maintenance et de la GMAO (Gestion de Maintenance Assistée par
          Ordinateur).
        </p>
      </div>
      <div class="bg-leaf text-white p-8 md:col-span-2 hover:-translate-y-1 hover:shadow-xl hover:shadow-charcoal/20 transition-all duration-300">
        <svg class="w-9 h-9 text-white mb-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 3 4 6v5c0 4.6 3.2 8.4 8 10 4.8-1.6 8-5.4 8-10V6l-8-3Z" stroke-linecap="round" stroke-linejoin="round" />
          <path d="m9 12 2 2 4-4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
        <p class="eyebrow text-white mb-2">Sécurité électronique</p>
        <h2 class="font-display text-2xl mb-3">Vidéosurveillance, contrôle d'accès, incendie</h2>
        <p class="text-sm text-white leading-relaxed max-w-2xl">
          Installation de systèmes de vidéosurveillance, de contrôle d'accès,
          ainsi que de détection et d'extinction automatique d'incendie, pour
          sécuriser vos sites et vos équipes.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-6 py-16">
      <DevisForm subject="Maintenance industrielle" title="Décrivez votre besoin de maintenance" />
    </section>
  </div>
</template>
