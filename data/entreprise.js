// Contenus de la page « Qui sommes-nous ».
//
// ⚠️ CONTENU PROVISOIRE : l'histoire et l'équipe ci-dessous sont des valeurs
// d'attente. Remplacez-les par les vraies informations, puis passez
// `provisoire` à false (la mention « Contenu provisoire » disparaît alors).
// Rappel du cahier des charges : ne présenter que des diplômes, certifications
// et références justifiables.

// Notre histoire : étapes clés, de la plus ancienne à la plus récente.
export const histoire = {
  provisoire: true,
  etapes: [
    {
      annee: 'Création',
      titre: "Naissance d'ACOGIM-CI SARL",
      texte: "Création de la société à Bingerville, avec l'ambition d'apporter des solutions fiables dans l'immobilier et l'industrie."
    },
    {
      annee: 'Développement',
      titre: 'Structuration du pôle immobilier',
      texte: 'Acquisition de terrains, construction, gestion et vente de biens immobiliers pour particuliers et entreprises.'
    },
    {
      annee: 'Diversification',
      titre: 'Lancement du pôle industriel',
      texte: 'Études techniques, maintenance, conseil, formation et accompagnement à la certification ISO.'
    },
    {
      annee: "Aujourd'hui",
      titre: 'Deux pôles, une même exigence',
      texte: 'ACOGIM-CI accompagne ses clients de l’étude à la livraison, avec un interlocuteur dédié.'
    }
  ]
}

// Notre équipe : direction, responsables des pôles et experts techniques.
// `photo` : chemin d'une image dans public/ (laisser vide pour afficher les initiales).
export const equipe = {
  provisoire: true,
  membres: [
    {
      nom: 'M. YEO Nandielè',
      fonction: 'Responsable projet',
      expertise: 'Suivi des projets clients',
      photo: ''
    },
    {
      nom: 'À compléter',
      fonction: 'Responsable du pôle immobilier',
      expertise: 'Acquisition, construction, gestion et vente',
      photo: ''
    },
    {
      nom: 'À compléter',
      fonction: 'Responsable du pôle industriel',
      expertise: 'Études, maintenance, conseil et qualité ISO',
      photo: ''
    }
  ]
}
