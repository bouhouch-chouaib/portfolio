import type { Dict } from "@/lib/i18n";

const en: Dict = {
  meta: {
    siteName: "Chouaib Bouhouch",
    titleHome: "Chouaib Bouhouch — software developer",
    description:
      "Computer science student in Metz and co-founder of Aleth. Case studies: SaaS in production, CAG, database rebuild, mapping.",
  },
  header: {
    name: "Chouaib Bouhouch",
    skip: "Skip to content",
    navHome: "Case studies",
    navManifeste: "Manifesto",
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
    manifesteTitre: "The manifesto",
    manifesteAccroche:
      "I wrote this text during my second-year internship, discovering from the inside how the systems everyone uses without understanding them actually work. It is about a gap widening between those who direct these tools and those who are subjected to them, and about what that does to a generation of students.",
    manifesteLire: "Read the manifesto",
  },
  etude: {
    sommaire: "Contents",
    stack: "Stack",
    periode: "Period",
    statut: "Status",
    role: "Role",
    retour: "← All case studies",
  },
  decision: {
    label: "Decision",
    statutLabel: "status",
    contexte: "Context",
    retenu: "Chosen",
    ecarte: "Rejected",
  },
  manifeste: {
    etiquette: "Essay",
    acte: "Act",
    duManifeste: "of the manifesto",
    preface: "Preface",
    methode: "Method note",
    sommaire: "The six acts",
    actesCount: "{n} acts",
    lecture: "{n} minutes read",
    pdf: "PDF version (French)",
  },
  todoLabel: "TO BE COMPLETED",
  apropos: {
    titre: "About",
    paragraphs: [
      "I am in the third and final year of a BUT Informatique (three-year computer science degree) at the IUT of Metz, France, on the application development track.",
      "Alongside my studies, I am the co-founder and technical lead of Aleth, a French B2B SaaS company. It is a product in production, with real customers, whose development I carry end to end — from the backend to the integrations, through to deployment and operations.",
      "What interests me are systems that genuinely run: integrations between services that were not talking to each other, data that has to be normalised before anything can be drawn from it, and the unglamorous work that keeps a product reliable six months in. Building Aleth taught me that the hard part is almost never the one you expect: it is not writing the feature, it is knowing what happens when it fails.",
      "I have applied one rule ever since: I do not keep a line of code I cannot explain out loud. It slowed me down considerably at first. It is also the reason I understand what I ship today.",
      "Next steps: a software development internship from February to June 2027, then a master's application abroad — Canada, Ireland or the Nordic countries.",
    ],
    photoAlt: "Portrait of Chouaib Bouhouch",
  },
  contact: {
    titre: "Contact",
    intro: "For an internship, an application or a technical question.",
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
      { label: "Résumé — English", value: "Download the PDF", file: "/cv/cv-en.pdf" },
      { label: "Résumé — French", value: "Télécharger le PDF", file: "/cv/cv-fr.pdf" },
    ],
  },
  footer: {
    note: "Static site — no cookies, no analytics.",
  },
};

export default en;
