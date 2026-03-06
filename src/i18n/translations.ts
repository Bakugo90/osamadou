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
      badge: "Available for new opportunities",
      greeting: "Hi, I'm Samadou",
      eyebrow: "Full Stack Engineer · Backend Specialist",
      title: ["I build", "reliable systems", "that scale."],
      resumeAlert: "Resume not available yet, check back soon!",
      bio1: "I'm a full stack engineer with a specialty in backend engineering, focused on reliable APIs, data flows and infrastructure that quietly scales in the background.",
      bio2a: "While I can implement awesome UIs I prefer more working where product meets infrastructure: turning messy real\u2011world processes into services, queues and background jobs. Building backends, provisioning and orchestrating servers, and watching graphs instead of pixels makes me feel like a tiny",
      bio2b: "keeping the kitchen under control.",
      bio3: "Right now I'm Backend Engineer at OrgaAfrica, helping build the operating system for African restaurants: payments, QR ordering, queueing and analytics. Before that I worked on maritime ERP, consulting SaaS, open\u2011source tooling and mobile/payment systems. When I'm not shipping code I'm reading manga or grinding through games.",
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
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Database",
        DevOps: "DevOps",
        Testing: "Testing",
        Other: "Other",
      } as Record<string, string>,
    },
    projects: {
      sectionTitle: "Projects",
      previewUnavailable: "Preview unavailable",
      moreOn: "More on",
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
      badge: "Disponible pour de nouveaux projets",
      greeting: "Salut, je suis Samadou",
      eyebrow: "Ingénieur Full Stack · Spécialiste Backend",
      title: ["Je conçois", "des systèmes fiables", "qui scalent."],
      resumeAlert: "CV pas encore disponible, revenez plus tard !",
      bio1: "Ingénieur full stack spécialisé backend: APIs fiables, flux de données et infrastructure qui scale silencieusement en arrière-plan.",
      bio2a: "Bien que je sois capable de concevoir de belles Interfaces Utilisateurs au pixel près, j'adore là où le produit rencontre l'infra : transformer des processus réels en services, queues et jobs async. Orchestrer des serveurs plutôt que des pixels me fait me sentir comme un petit",
      bio2b: "qui tient sa cuisine.",
      bio3: "Actuellement Backend Engineer chez OrgaAfrica, je conçois la fondation (Backend) qui va bientot acceuillir plus de 100K+ utilisateurs pour ce future système d'exploitation des restaurants africains : paiements, commandes QR, files d'attente et analytics. Avant ça : ERP maritime, SaaS consulting, open-source et mobile. Quand je ne ship pas du code, je lis des mangas ou je grind.",
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
        Frontend: "Frontend",
        Backend: "Backend",
        Database: "Base de données",
        DevOps: "DevOps",
        Testing: "Tests",
        Other: "Autres",
      } as Record<string, string>,
    },
    projects: {
      sectionTitle: "Projets",
      previewUnavailable: "Aperçu indisponible",
      moreOn: "Voir sur",
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
