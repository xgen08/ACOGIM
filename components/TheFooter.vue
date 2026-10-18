<template>
  <footer class="bg-leaf text-white">
    <div class="mx-auto max-w-6xl px-6 py-14 grid gap-10 md:grid-cols-4">
      <div>
        <img
          src="/images/logo/acogim-lockup.png"
          alt="ACOGIM-CI"
          class="h-20 w-auto mb-4 bg-white rounded-md p-2 box-content"
        >
        <p class="text-sm text-white leading-relaxed">
          Agence de Construction, de Gestion Immobilières et de Maintenance
          Côte d'Ivoire.
        </p>
      </div>

      <div>
        <p class="eyebrow text-white font-semibold mb-3">Coordonnées</p>
        <ul class="text-sm space-y-1.5 text-white">
          <li>BP : 705 CIDEX 03 Abidjan</li>
          <li>Ayopoumin Ex-Mittérand, Villa n° 356</li>
          <li>Bingerville</li>
          <li>Tél : +225 27 24 45 14 22</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow text-white font-semibold mb-3">Contact projet</p>
        <ul class="text-sm space-y-1.5 text-white">
          <li>M. YEO Nandielè</li>
          <li>+225 07 07 00 02 07</li>
          <li>+225 01 05 00 01 50</li>
        </ul>
      </div>

      <div>
        <p class="eyebrow text-white font-semibold mb-3">Nos activités</p>
        <ul class="text-sm space-y-1.5 text-white">
          <li>
            <NuxtLink to="/activites/immobilier" class="group inline-flex items-center gap-1.5 hover:underline transition-colors">
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span> Immobilier
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activites/construction" class="group inline-flex items-center gap-1.5 hover:underline transition-colors">
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span> Construction
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/activites/maintenance-industrielle" class="group inline-flex items-center gap-1.5 hover:underline transition-colors">
              <span class="transition-transform duration-300 group-hover:translate-x-1">→</span> Maintenance industrielle
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="border-t border-white/25">
      <div class="mx-auto max-w-6xl px-6 py-5 text-xs text-white font-mono">
        © {{ new Date().getFullYear() }} ACOGIM-CI. Tous droits réservés.
      </div>
    </div>
  </footer>
</template>
