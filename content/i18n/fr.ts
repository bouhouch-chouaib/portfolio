const fr = {
  meta: {
    siteName: "Chouaib Bouhouch",
    titleHome: "Chouaib Bouhouch — développeur",
    description:
      "Étudiant en BUT Informatique à Metz et cofondateur d'Aleth. Études de cas : SaaS en production, RAG, algorithmes de graphes.",
  },
  header: {
    name: "Chouaib Bouhouch",
    skip: "Aller au contenu",
    navHome: "Études de cas",
    navAbout: "À propos",
    navContact: "Contact",
    switchLang: "English version",
    switchShort: "EN",
  },
  home: {
    accroche: "Je conçois, construis et maintiens des systèmes en production.",
    sousAccroche:
      "Étudiant en dernière année de BUT Informatique à l'IUT de Metz et cofondateur d'Aleth, un éditeur SaaS B2B français. Je cherche un stage de développement de février à juin 2027.",
    registreTitre: "Études de cas",
    registreIntro:
      "Quatre projets, une même trame : le problème, les contraintes, les décisions prises — et ce qui a raté.",
    lire: "Lire l'étude de cas",
  },
  etude: {
    sommaire: "Sommaire",
    stack: "Stack",
    periode: "Période",
    statut: "Statut",
    retour: "← Toutes les études de cas",
  },
  decision: {
    label: "Décision",
    statutLabel: "statut",
    contexte: "Contexte",
    retenu: "Retenu",
    ecarte: "Écarté",
  },
  todoLabel: "À COMPLÉTER",
  apropos: {
    titre: "À propos",
    paragraphs: [
      "Je suis en troisième et dernière année de BUT Informatique à l'IUT de Metz, parcours Réalisation d'Applications. En parallèle de mes études, je suis cofondateur et responsable technique d'Aleth, un éditeur SaaS B2B français — un produit en production, avec de vrais clients, que je maintiens au quotidien.",
      "Ce qui m'intéresse : les systèmes qui tournent réellement — intégrations entre services, données, et le travail peu spectaculaire qui rend un produit fiable dans la durée.",
      "La suite : un stage de développement de février à juin 2027, puis une candidature en master à l'étranger — Canada, Irlande ou pays nordiques.",
    ],
    todos: [
      "personnaliser le deuxième paragraphe : ce qui t'intéresse techniquement, avec tes mots",
      "ajouter une photo dans public/photo.jpg et renseigner son texte alternatif",
    ],
    photoAlt: "Portrait de Chouaib Bouhouch",
  },
  contact: {
    titre: "Contact",
    intro:
      "Pour un stage, une candidature ou une question technique — réponse rapide par email.",
    items: [
      { label: "Email", todo: "adresse email publique" },
      { label: "LinkedIn", todo: "URL du profil LinkedIn" },
      { label: "GitHub", todo: "URL du profil GitHub" },
      { label: "CV — français", todo: "déposer le PDF dans public/cv/cv-fr.pdf" },
      { label: "CV — anglais", todo: "déposer le PDF dans public/cv/cv-en.pdf" },
    ] as { label: string; value?: string; href?: string; todo?: string }[],
  },
  footer: {
    note: "Site statique — aucun cookie, aucune mesure d'audience.",
  },
};

export default fr;
