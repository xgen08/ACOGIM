import { withBase } from 'ufo'

// Préfixe un fichier de public/ avec le baseURL de l'app.
// En local : '/images/x.jpg' → '/images/x.jpg'
// Sur GitHub Pages (baseURL '/ACOGIM/') : → '/ACOGIM/images/x.jpg'
export function asset(path) {
  if (!path) return path
  return withBase(path, useRuntimeConfig().app.baseURL)
}
