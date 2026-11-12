// Opportunités immobilières affichées sur l'accueil.
//
// ⚠️ DONNÉES D'EXEMPLE : ces annonces sont fictives, en attendant les vraies.
// Pour publier une vraie annonce, remplacez une entrée et passez `exemple` à false
// (le badge « Annonce d'exemple » disparaît alors de la carte).
export const annonces = [
  {
    exemple: true,
    type: 'Vente',
    titre: 'Villa duplex 5 pièces',
    lieu: 'Bingerville',
    details: ['Terrain de 450 m²', '4 chambres', 'Garage 2 véhicules'],
    prix: 'Prix sur demande',
    date: '2026-11-12',
    image: '/images/placeholder/building-1.jpg'
  },
  {
    exemple: true,
    type: 'Vente',
    titre: 'Terrain titré (ACD)',
    lieu: 'Ayopoumin, Bingerville',
    details: ['600 m²', 'Viabilisé', 'Idéal pour une villa'],
    prix: 'Prix sur demande',
    date: '2026-11-12',
    image: '/images/placeholder/projet-immobilier.jpg'
  },
  {
    exemple: true,
    type: 'Location',
    titre: 'Appartement 3 pièces',
    lieu: 'Abidjan',
    details: ['85 m²', '2 chambres', 'Résidence sécurisée'],
    prix: 'Loyer sur demande',
    date: '2026-11-12',
    image: '/images/placeholder/building-2.jpg'
  }
]
