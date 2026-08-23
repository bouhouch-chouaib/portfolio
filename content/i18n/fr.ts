const fr = {
  meta: {
    siteName: "Chouaib Bouhouch",
    titleHome: "Chouaib Bouhouch — développeur",
    description:
      "Étudiant en BUT Informatique à Metz et cofondateur d'Aleth. Études de cas : SaaS en production, CAG, refonte de base de données, cartographie.",
  },
  header: {
    name: "Chouaib Bouhouch",
    skip: "Aller au contenu",
    navHome: "Études de cas",
    navManifeste: "Manifeste",
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
    manifesteTitre: "Le manifeste",
    manifesteAccroche:
      "J'ai écrit ce texte pendant mon stage de deuxième année, en découvrant de l'intérieur comment fonctionnent les systèmes que tout le monde utilise sans les comprendre. Il parle d'une fracture qui se creuse entre ceux qui dirigent ces outils et ceux qui les subissent, et de ce que ça fait à une génération d'étudiants.",
    manifesteLire: "Lire le manifeste",
  },
  etude: {
    sommaire: "Sommaire",
    stack: "Stack",
    periode: "Période",
    statut: "Statut",
    role: "Rôle",
    retour: "← Toutes les études de cas",
  },
  decision: {
    label: "Décision",
    statutLabel: "statut",
    contexte: "Contexte",
    retenu: "Retenu",
    ecarte: "Écarté",
  },
  manifeste: {
    etiquette: "Essai",
    acte: "Acte",
    duManifeste: "du manifeste",
    preface: "Préface",
    methode: "Note de méthode",
    sommaire: "Les six actes",
    actesCount: "{n} actes",
    lecture: "{n} minutes de lecture",
    pdf: "Version PDF",
  },
  todoLabel: "À COMPLÉTER",
  apropos: {
    titre: "À propos",
    paragraphs: [
      "Je suis en troisième et dernière année de BUT Informatique à l'IUT de Metz, parcours Réalisation d'Applications.",
      "En parallèle de mes études, je suis cofondateur et responsable technique d'Aleth, un éditeur SaaS B2B français. C'est un produit en production, avec de vrais clients, dont je porte le développement de bout en bout — du backend aux intégrations, jusqu'au déploiement et à l'exploitation.",
      "Ce qui m'intéresse, ce sont les systèmes qui tournent pour de bon : les intégrations entre services qui ne se parlaient pas, les données qu'il faut normaliser avant de pouvoir en tirer quoi que ce soit, et le travail peu spectaculaire qui fait qu'un produit reste fiable au bout de six mois. J'ai découvert en construisant Aleth que la partie difficile n'est presque jamais celle qu'on croit : ce n'est pas d'écrire la fonctionnalité, c'est de savoir ce qui se passe quand elle échoue.",
      "Je m'applique une règle depuis : je ne garde pas une ligne de code que je ne peux pas expliquer à voix haute. Elle m'a considérablement ralenti au début. Elle est aussi la raison pour laquelle je comprends aujourd'hui ce que je livre.",
      "La suite : un stage de développement de février à juin 2027, puis une candidature en master à l'étranger — Canada, Irlande ou pays nordiques.",
    ],
    photoAlt: "Portrait de Chouaib Bouhouch",
  },
  contact: {
    titre: "Contact",
    intro: "Pour un stage, une candidature ou une question technique.",
    items: [
      {
        label: "Email",
        value: "bouhouch.chouaib.57@gmail.com",
        href: "mailto:bouhouch.chouaib.57@gmail.com",
      },
      {
        label: "LinkedIn",
        value: "linkedin.com/in/chouaib-bouhouch",
        href: "https://www.linkedin.com/in/chouaib-bouhouch",
      },
      {
        label: "GitHub",
        value: "github.com/bouhouch-chouaib",
        href: "https://github.com/bouhouch-chouaib",
      },
      { label: "CV — français", value: "Télécharger le PDF", file: "/cv/cv-fr.pdf" },
      { label: "CV — anglais", value: "Download the PDF", file: "/cv/cv-en.pdf" },
    ] as {
      label: string;
      value?: string;
      href?: string;
      file?: string;
      todo?: string;
    }[],
  },
  footer: {
    note: "Site statique — aucun cookie, aucune mesure d'audience.",
  },
};

export default fr;
