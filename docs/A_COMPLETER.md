# ACOGIM-CI — Informations à compléter

Liste des contenus provisoires du site, à remplacer dès que les vraies informations
sont disponibles. Mise à jour au fil des modifications.

Dernière mise à jour : 12 novembre 2026

Légende : ☐ à faire · ☑ fait

---

## Général (toutes les pages)

- ☐ **Photos et vidéos réelles** : le site utilise des photos d'illustration
  (`public/images/placeholder/`). À remplacer par des photos des bâtiments, chantiers,
  installations industrielles et équipes d'ACOGIM-CI.
- ☐ **Adresse e-mail professionnelle** : absente du site (footer, contact).
- ☐ **Horaires d'ouverture** : absents du site.
- ☐ **Numéro WhatsApp professionnel** : nécessaire pour le bouton WhatsApp demandé
  sur toutes les pages (cahier des charges, menu 7).

---

## Menu 1 — Accueil (`pages/index.vue`)

- ☐ **Bannière (carrousel)** : 10 images dans `public/images/hero/` (3 chantiers,
  3 industrie, 1 plan technique, 3 plans d'architecture), affichées dans un **ordre
  aléatoire**, réglées dans
  `slides` en haut de `pages/index.vue`.
  - ⚠️ `image 8.jpg` et `image 9.jpg` (dans `a_utiliser/`) **n'ont pas été utilisées** :
    ce sont des plans de la société OMNIFAB (logo, adresse, mention « propriété
    d'OMNIFAB, usage non autorisé interdit »). Ne pas les publier sans leur accord ;
    les remplacer par des plans d'ACOGIM-CI.
  - Vérifier qu'il s'agit de photos d'ACOGIM-CI ou libres de droits.
  - Photos trop petites, floues sur grand écran (à remplacer par des versions d'au
    moins 1920 px de large) :
    - `chantier-coffrage.jpeg` (739 × 415 px) ;
    - `industrie-tablette.avif` (740 × 416 px) ;
    - `immobilier-plans-villa.avif` (740 × 461 px) ;
    - `industrie-courroie.jpeg` (678 × 452 px) — affichée **en miroir** pour placer le
      technicien à droite (`miroir: true`).
  - Les originaux sont dans `public/images/a_utiliser/` (à supprimer une fois validé).
  - Possibilité d'ajouter une courte vidéo à la place (cahier des charges).
- ☐ **Présentation** : photo réelle de l'entreprise (actuellement `about-main.jpg`).
- ☐ **Pôles immobilier et industriel** : une photo réelle par pôle (actuellement
  `projet-immobilier.jpg` et `stats-bg.jpg`).
- ☐ **Réalisations** — section **affichée** sur l'accueil avec des projets d'exemple
  (masquer : `afficherRealisations = false` dans `pages/index.vue`).
  Fichier `data/projets.js` : les 5 projets sont des exemples (dont « Villa duplex
  R+1 — Bingerville » et « Résidence de plain-pied — Abidjan », illustrés avec les
  photos de chantier de la bannière).
  Pour chaque vrai projet, prévoir :
  - nom et type du projet ;
  - domaine (Immobilier ou Industrie) ;
  - lieu et période de réalisation ;
  - besoin initial du client ;
  - prestations réalisées ;
  - photos ou vidéo ;
  - résultats obtenus, si disponibles.
- ☐ **Chiffres clés** — 🙈 **section masquée sur l'accueil** en attendant des chiffres
  vérifiables (réafficher : `afficherChiffres = true` dans `pages/index.vue`).
  Fichier `data/chiffres.js` :
  - `Année de référence` : actuellement **2026** (date du jour), à remplacer
    (ex. année de création) ;
  - `Projets présentés` : actuellement **3** (exemples), à remplacer par le vrai nombre
    de projets ;
  - autres chiffres vérifiables à ajouter si souhaité (années d'expérience, clients, etc.) ;
  - mettre à jour `dateChiffres` (date à laquelle les chiffres sont arrêtés).
  - Les entrées à remplacer sont marquées `provisoire: true`.
- ☐ **Opportunités immobilières** — 🙈 **section masquée sur l'accueil** en attendant
  les vraies annonces (réafficher : `afficherOpportunites = true` dans `pages/index.vue`).
  Fichier `data/annonces.js` : les 3 annonces sont
  **fictives** (villa à Bingerville, terrain à Ayopoumin, appartement à Abidjan).
  Pour chaque vraie annonce : type (vente / location), titre, lieu, caractéristiques,
  prix ou « sur demande », date, photo. Passer `exemple: false` pour retirer le badge
  « Annonce d'exemple ».

---

## Menu 2 — Qui sommes-nous (`pages/qui-sommes-nous.vue`)

- ☐ **Notre histoire** — fichier `data/entreprise.js` (`histoire`) : la frise contient
  4 étapes génériques sans dates. À remplacer par l'origine de l'entreprise, les étapes
  importantes et leurs dates. Passer `provisoire: false` pour retirer la mention
  « Contenu provisoire ».
- ☐ **Notre équipe** — fichier `data/entreprise.js` (`equipe`) :
  - M. YEO Nandielè (Responsable projet) : ajouter sa photo professionnelle ;
  - Responsable du pôle immobilier : nom, photo ;
  - Responsable du pôle industriel : nom, photo ;
  - ajouter la direction et les experts techniques ;
  - passer `provisoire: false` une fois complété.
  - ⚠️ Ne présenter que des diplômes et certifications justifiables.
- ☐ **Photos** de la page (actuellement `about-main.jpg`, `about-overlay.jpg`,
  `cta-bg.jpg`).

---

## Menu 3 — Activités

### Immobilier (`pages/activites/immobilier.vue`)

- ☐ Biens disponibles : photos, localisation, caractéristiques, prix (à traiter avec
  le menu 3).

### Industrie (`pages/activites/industrie.vue`)

- ☐ **Confirmer les services réellement proposés** : études techniques, réalisation,
  maintenance, conseil, **formation professionnelle** (texte générique, à préciser),
  accompagnement ISO.
- ☐ **Projets industriels réels** (actuellement 1 projet d'exemple).
- ☐ **Photos** du pôle industriel.

### Construction (`pages/activites/construction.vue`)

- ☐ **Décision** : la page existe mais n'est plus liée dans le menu. Le cahier des
  charges la range dans le pôle Immobilier (à traiter avec le menu 3).

---

## Photothèque (`pages/phototheque.vue`)

- ☐ Photos réelles des biens et prestations (la page indique « Photos génériques à
  titre d'illustration »).

---

## Divers

- ☐ **Ancienne adresse `/catalogue`** : renommée `/phototheque`. Ajouter une redirection
  si l'ancien lien a déjà été partagé.
