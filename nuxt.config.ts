export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.dev', '.ngrok-free.app', '.ngrok.io']
    }
  },
  app: {
    head: {
      title: 'ACOGIM-CI — Construction, Immobilier & Maintenance Industrielle',
      htmlAttrs: { lang: 'fr' },
      script: [
        {
          // Active le masquage des éléments v-reveal avant le premier affichage
          // (évite le clignotement). Filet de sécurité : si le plugin ne
          // démarre pas sous 4 s, tout redevient visible.
          innerHTML:
            "if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){var d=document.documentElement;d.classList.add('reveal-ready');setTimeout(function(){if(!window.__revealStarted)d.classList.remove('reveal-ready')},4000)}",
          tagPosition: 'head'
        }
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            "ACOGIM-CI : Agence de Construction, de Gestion Immobilières et de Maintenance Côte d'Ivoire. Achat/vente de biens, construction, gestion immobilière et maintenance industrielle (GMAO, sécurité électronique)."
        }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600&display=swap'
        }
      ]
    }
  }
})
