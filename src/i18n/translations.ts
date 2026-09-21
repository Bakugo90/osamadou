export type Lang = "en" | "fr";

export const translations = {
  en: {
    nav: {
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
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
      bio3: "Right now, I'm working on WhatsApp Banking at Semoa Group as a Software Engineer, building payment and banking services for West African institutions. The work naturally puts me around problems I enjoy most: transaction reliability, resilient backend services, and understanding how systems behave when things go wrong. I'm gradually specialising in backend and cloud architecture, with a growing interest in distributed systems and financial infrastructure.",
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
      bio3: "J'évolue actuellement au sein de l'équipe WhatsApp Banking chez Semoa Group, où je construis des services de paiement et des intégrations bancaires pour des institutions ouest-africaines. On y résout des problèmes critiques au quotien : la fiabilité transactionnelle, la conception de services backend résilients, et la compréhension du comportement des systèmes en cas de défaillance. Je me spécialise progressivement en architecture cloud, avec un intérêt grandissant pour les systèmes distribués et l'infrastructure financière.",
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
    footer: {
      rights: "Tous droits réservés",
      builtWith: "Fait avec",
      by: "par",
    },
  },
};
