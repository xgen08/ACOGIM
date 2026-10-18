/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      // Palette de la maquette template/Qwen_html_20261018_lcjzv4rgn.html
      colors: {
        noir: '#0F0F0F',
        charcoal: '#1A1A1A',
        muted: '#6B7280',
        concrete: '#FAFAFA',
        paper: '#FFFFFF',
        // Vert lime : fonds, bordures et texte sur fond sombre
        palm: '#9ED400',
        // Vert lime assombri : texte sur fond clair (le lime pur y est illisible)
        forest: '#4D7A00',
        orange: '#E85A1B',
        // Orange assombri : fond des boutons à texte blanc et texte orange sur fond clair
        ember: '#C44A14',
        petrol: '#0F0F0F'
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        body: ['Inter', 'sans-serif'],
        // La maquette n'a pas de police mono : les libellés passent en Inter
        mono: ['Inter', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '2px'
      }
    }
  },
  plugins: []
}
