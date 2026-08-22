import type { Dict } from "@/lib/i18n";

const en: Dict = {
  meta: {
    siteName: "Chouaib Bouhouch",
    titleHome: "Chouaib Bouhouch — software developer",
    description:
      "Computer science student in Metz and co-founder of Aleth. Case studies: SaaS in production, RAG, graph algorithms.",
  },
  header: {
    name: "Chouaib Bouhouch",
    skip: "Skip to content",
    navHome: "Case studies",
    navAbout: "About",
    navContact: "Contact",
    switchLang: "Version française",
    switchShort: "FR",
  },
  home: {
    accroche: "I design, build and maintain systems that run in production.",
    sousAccroche:
      "Final-year computer science student (BUT Informatique) at the IUT of Metz and co-founder of Aleth, a French B2B SaaS company. Looking for a software development internship from February to June 2027.",
    registreTitre: "Case studies",
    registreIntro:
      "Four projects, one shared structure: the problem, the constraints, the decisions made — and what went wrong.",
    lire: "Read the case study",
  },
  etude: {
    sommaire: "Contents",
    stack: "Stack",
    periode: "Period",
    statut: "Status",
    retour: "← All case studies",
  },
  decision: {
    label: "Decision",
    statutLabel: "status",
    contexte: "Context",
    retenu: "Chosen",
    ecarte: "Rejected",
  },
  todoLabel: "TO BE COMPLETED",
  apropos: {
    titre: "About",
    paragraphs: [
      "I am in the third and final year of a BUT Informatique (three-year computer science degree) at the IUT of Metz, France, on the application development track. Alongside my studies, I am the co-founder and technical lead of Aleth, a French B2B SaaS company — a product in production, with real customers, that I maintain daily.",
      "What interests me: systems that actually run — integrations between services, data, and the unglamorous work that keeps a product reliable over time.",
      "Next steps: a software development internship from February to June 2027, then a master's application abroad — Canada, Ireland or the Nordic countries.",
    ],
    todos: [
      "personalise the second paragraph: what genuinely interests you, in your own words",
      "add a photo to public/photo.jpg and write its alt text",
    ],
    photoAlt: "Portrait of Chouaib Bouhouch",
  },
  contact: {
    titre: "Contact",
    intro:
      "For an internship, an application or a technical question — quick reply by email.",
    items: [
      { label: "Email", todo: "public email address" },
      { label: "LinkedIn", todo: "LinkedIn profile URL" },
      { label: "GitHub", todo: "GitHub profile URL" },
      { label: "Résumé — French", todo: "drop the PDF at public/cv/cv-fr.pdf" },
      { label: "Résumé — English", todo: "drop the PDF at public/cv/cv-en.pdf" },
    ],
  },
  footer: {
    note: "Static site — no cookies, no analytics.",
  },
};

export default en;
