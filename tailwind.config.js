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
      colors: {
        // Dominante verte (ruban du logo)
        concrete: '#F1F4F0',
        paper: '#FFFFFF',
        charcoal: '#13231C',
        petrol: '#15455A',
        palm: '#8ABC26',
        forest: '#0F6A26',
        leaf: '#308714',
        // Couleurs secondaires extraites du logo (métiers et accents)
        navy: '#0C2D64',
        royal: '#0066B3',
        sky: '#4FC3F5',
        steel: '#B5B5B5',
        orange: '#F2500A',
        brick: '#D8430C',
        ink: '#1A1A1A'
      },
      fontFamily: {
        display: ['"Big Shoulders Display"', 'sans-serif'],
        body: ['"Work Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      }
    }
  },
  plugins: []
}
