export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      writing: "Writing",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm Samadou",
      eyebrow: "Fintech Software Engineer · Lomé, Togo",
      title: ["I build", "reliable systems", "that scale."],
      resumeAlert: "Resume not available yet, check back soon!",
      bio1: "Backend engineer by specialisation, full\u2011stack when the work calls for it. What holds my attention is reliable APIs, clean data flows, asynchronous processing and infrastructure that holds quietly under load.",
      bio2a: "I like working where product meets infrastructure: turning messy real\u2011world processes into services, queues and background jobs. Provisioning and orchestrating servers, and watching graphs instead of pixels, makes me feel like a tiny",
      bio2b: "keeping the kitchen under control.",
      bio3: "Right now that means WhatsApp Banking at Semoa Group: conversational banking for West African banks, where a customer moves money from a chat thread and a dropped connection must never become a double debit. Payments, mobile money and core banking integrations, for a market where the phone is the branch. When I'm not shipping code I'm reading manga or grinding through games.",
      chef: "chef",
    },
    contact: {
      sectionTitle: "Contact",
      heading: ["Let's work", "together."],
    },
    skills: {
      sectionTitle: "Skills",
      learning: "Always evolving, currently diving into",
      learningAnd: "and",
      categories: {
        Backend: "Backend",
        Data: "Data",
        Infrastructure: "Infrastructure",
        Systems: "Systems",
        Testing: "Testing",
        Frontend: "Frontend",
        Other: "Other",
      } as Record<string, string>,
    },
    projects: {
      sectionTitle: "Projects",
      previewUnavailable: "Preview unavailable",
      moreOn: "More on",
      featured: "Featured engineering work",
      other: "Other work",
    },
    experience: {
      sectionTitle: "Work Experience",
    },
    blog: {
      sectionTitle: "Writing",
      emptyState:
        "I'm working on writing about backend engineering, infrastructure and things I learn along the way. Check back later, or follow me on Hashnode to get notified.",
    },
    footer: {
      rights: "All rights reserved",
      builtWith: "Built with",
      by: "by",
    },
  },
  fr: {
    nav: {
      projects: "Projets",
      experience: "Expérience",
      skills: "Compétences",
      writing: "Articles",
      contact: "Contact",
    },
    hero: {
      greeting: "Salut, je suis Samadou",
      eyebrow: "Ingénieur Logiciel Fintech · Lomé, Togo",
      title: ["Je conçois", "des systèmes fiables", "qui scalent."],
      resumeAlert: "CV pas encore disponible, revenez plus tard !",
      bio1: "Ingénieur backend par spécialisation, full stack quand le travail l'exige. Ce qui me tient : des APIs fiables, des flux de données propres, du traitement asynchrone et une infrastructure qui tient sans bruit sous la charge.",
      bio2a: "J'aime travailler là où le produit rencontre l'infra : transformer des processus métier réels en services, queues et jobs asynchrones. Provisionner et orchestrer des serveurs, surveiller des graphes plutôt que des pixels, ça me donne l'impression d'être un petit",
      bio2b: "qui tient sa cuisine.",
      bio3: "En ce moment, c'est le WhatsApp Banking chez Semoa Group : du banking conversationnel pour des banques ouest-africaines, où un client déplace de l'argent depuis une conversation et où une connexion coupée ne doit jamais devenir un double débit. Paiements, mobile money et intégrations core banking, pour un marché où le téléphone est l'agence. Quand je ne ship pas du code, je lis des mangas ou je grind.",
      chef: "chef",
    },
    contact: {
      sectionTitle: "Contact",
      heading: ["Travaillons", "ensemble."],
    },
    skills: {
      sectionTitle: "Compétences",
      learning: "En constante évolution. Je suis actuellement entrain d'apprendre",
      learningAnd: "et",
      categories: {
        Backend: "Backend",
        Data: "Données",
        Infrastructure: "Infrastructure",
        Systems: "Systèmes",
        Testing: "Tests",
        Frontend: "Frontend",
        Other: "Autres",
      } as Record<string, string>,
    },
    projects: {
      sectionTitle: "Projets",
      previewUnavailable: "Aperçu indisponible",
      moreOn: "Voir sur",
      featured: "Travaux d'ingénierie principaux",
      other: "Autres réalisations",
    },
    experience: {
      sectionTitle: "Expériences",
    },
    blog: {
      sectionTitle: "Articles",
      emptyState:
        "Je travaille sur des articles autour du backend, de l'infra et de ce que j'apprends en chemin. Revenez plus tard, ou suivez-moi sur Hashnode.",
    },
    footer: {
      rights: "Tous droits réservés",
      builtWith: "Fait avec",
      by: "par",
    },
  },
};
