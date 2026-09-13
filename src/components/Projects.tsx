import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNodedotjs, SiPython, SiExpress,
  SiPostgresql, SiMongodb, SiRedis,
  SiDocker, SiAmazon,
  SiReact, SiTypescript, SiJavascript,
  SiGraphql, SiMysql,
  SiPhp, SiWordpress, SiFlutter, SiLaravel,
  SiNextdotjs, SiTailwindcss, SiAdonisjs, SiNestjs,
} from "react-icons/si";
import { Github, ExternalLink } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  descriptionFr?: string;
  year: string;
  category: string;
  technologies: string[];
  links: { github?: string; live?: string; ios?: string; android?: string };
  /** Featured work leads the section; everything else keeps its place below. */
  featured?: boolean;
  preview?: string;
  previews?: string[];
}

const TECH_ICONS: Record<string, { icon: React.ReactElement; color: string }> = {
  "Node.js":       { icon: <SiNodedotjs />,      color: "#339933" },
  "Express":       { icon: <SiExpress />,         color: "#8A9099" },
  "Python":        { icon: <SiPython />,          color: "#3776AB" },
  "PostgreSQL":    { icon: <SiPostgresql />,      color: "#4169E1" },
  "MongoDB":       { icon: <SiMongodb />,         color: "#47A248" },
  "MySQL":         { icon: <SiMysql />,           color: "#4479A1" },
  "Redis":         { icon: <SiRedis />,           color: "#DC382D" },
  "Docker":        { icon: <SiDocker />,          color: "#2496ED" },
  "AWS":           { icon: <SiAmazon />,          color: "#FF9900" },
  "React":         { icon: <SiReact />,           color: "#61DAFB" },
  "JavaScript":    { icon: <SiJavascript />,      color: "#F7DF1E" },
  "TypeScript":    { icon: <SiTypescript />,      color: "#3178C6" },
  "GraphQL":       { icon: <SiGraphql />,         color: "#E10098" },
  "PHP":           { icon: <SiPhp />,            color: "#777BB4" },
  "WordPress":     { icon: <SiWordpress />,       color: "#21759B" },
  "Flutter":       { icon: <SiFlutter />,         color: "#02569B" },
  "Laravel":       { icon: <SiLaravel />,         color: "#FF2D20" },
  "Next.js":       { icon: <SiNextdotjs />,       color: "#ffffff" },
  "TailwindCSS":   { icon: <SiTailwindcss />,     color: "#06B6D4" },
  "AdonisJS":      { icon: <SiAdonisjs />,         color: "#5A45FF" },
  "NestJS":        { icon: <SiNestjs />,           color: "#E0234E" },
};

const PROJECTS: Project[] = [
  {
    title: "Orga Africa: Backend API",
    description:
      "Backend for a Togolese food-ordering platform, built as a modular monolith in NestJS: seven domain modules kept isolated so each could evolve on its own, without paying the operational cost of microservices for a team this size. Orders run through a state machine with idempotency keys and optimistic locking, so a retried request can't double-charge or oversell stock. Redis absorbs rate limiting, distributed locks and read caching; notifications, reports and invoices are pushed off the request path onto AWS Lambda.",
    descriptionFr:
      "Backend d'une plateforme togolaise de commande de nourriture, en monolithe modulaire NestJS : sept modules de domaine isolés pour évoluer chacun de leur côté, sans payer le coût opérationnel des microservices pour une équipe de cette taille. Les commandes passent par une machine à états avec clés d'idempotence et verrouillage optimiste : une requête rejouée ne peut ni débiter deux fois ni survendre du stock. Redis absorbe le rate limiting, les verrous distribués et le cache lecture ; notifications, rapports et factures sortent du chemin de requête vers AWS Lambda.",
    year: "2025",
    category: "Backend",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    links: { live: "https://api.orga-africa.com/" },
    featured: true,
  },
  {
    title: "Marine Intelligence & Trade: ERP",
    description:
      "End-to-end ERP for maritime agency operations: vessel tracking, port calls (arrivals, berthing, rendered services), cargo unloading, invoicing, quotations, service orders and monthly reports in one platform. Built on Laravel with the maritime domain modelled explicitly — vessels, port calls, interventions, cargo — so business workflows and automation rules sit on real entities rather than ad-hoc tables. Live monitoring runs on optimised polling instead of a full realtime stack, which matched the update frequency the agency actually needed.",
    descriptionFr:
      "ERP de bout en bout pour les opérations d'une agence maritime : suivi de navires, escales (arrivées, accostage, services), déchargement, facturation, devis, ordres de service et rapports mensuels dans une seule plateforme. Bâti sur Laravel avec le domaine maritime modélisé explicitement — navires, escales, interventions, cargaison — pour que les workflows métier et les règles d'automatisation reposent sur de vraies entités plutôt que sur des tables improvisées. Le monitoring live tourne en polling optimisé plutôt qu'en stack temps réel complète, ce qui correspondait à la fréquence de mise à jour réellement utile à l'agence.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "TailwindCSS", "Docker"],
    links: { live: "https://marineintelligency-gestion.com/" },
    featured: true,
    preview: "/images/marineintelligency-gestion.com_login.png",
  },
  {
    title: "Yperlink Africa",
    description:
      "Networking and partnership matching platform within the Expand In Africa ecosystem, connecting African entrepreneurs, investors, and institutions to foster cross-border collaboration and business opportunities.",
    descriptionFr:
      "Plateforme de mise en réseau et de matching au sein de l'écosystème Expand In Africa, connectant entrepreneurs africains, investisseurs et institutions pour favoriser la collaboration et les opportunités transfrontalières.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/yprlink" },
    preview: "/images/www.expand-in-africa.com_yprlink.png",
  },
  {
    title: "Expand In Africa: Media Tracker",
    description:
      "Media monitoring dashboard tracking press coverage and online mentions of Expand In Africa across African and global publications, providing visibility on brand reach and campaign performance.",
    descriptionFr:
      "Dashboard de veille médiatique suivant la couverture presse et les mentions d'Expand In Africa, offrant une visibilité sur la portée de la marque et les performances des campagnes.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/media-tracker" },
    preview: "/images/www.expand-in-africa.com_media-tracker.png",
  },
  {
    title: "Expand In Africa: CRM",
    description:
      "CRM portal for Expand In Africa's consulting teams: leads, client pipelines and onboarding workflows across several African markets. Backed by AdonisJS with RBAC and per-organisation scoping enforced server-side, and REST APIs over 50,000+ Airtable records — pagination, caching and transformation had to live in the API layer, since the upstream source rate-limits and can't be queried directly at that volume.",
    descriptionFr:
      "Portail CRM pour les équipes de consulting d'Expand In Africa : leads, pipelines clients et workflows d'onboarding sur plusieurs marchés africains. Backend AdonisJS avec RBAC et cloisonnement par organisation appliqué côté serveur, et APIs REST sur 50 000+ enregistrements Airtable — pagination, cache et transformation devaient vivre dans la couche API, la source amont étant rate-limitée et non interrogeable directement à ce volume.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AdonisJS", "AWS"],
    links: { live: "https://expandinafricapartners.preview.softr.app/" },
    featured: true,
    preview: "/images/expandinafricapartners.preview.softr.app__autoUser=true&show-toolbar=true.png",
  },
  /* temporarily hidden
  {
    title: "Expand In Africa",
    description:
      "Main platform for Expand In Africa, a pan-African business expansion consultancy. Features service pages, partner directories, and marketing infrastructure supporting business development across multiple African markets.",
    year: "2024",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/" },
    preview: "/images/www.expand-in-africa.com_.png",
  },
  */
  /* temporarily hidden
  {
    title: "Laravel Auto Blade",
    description:
      "Open-source Laravel package that automatically generates Blade views from Artisan commands, eliminating boilerplate when scaffolding new views and streamlining front-end setup in Laravel projects.",
    year: "2024",
    category: "Open Source",
    technologies: ["PHP", "Laravel"],
    links: { github: "https://github.com/Bakugo90/Laravel-auto-blade" },
    preview: "https://opengraph.githubassets.com/1/Bakugo90/Laravel-auto-blade",
  },
  */
  {
    title: "Wadjo Radio",
    description:
      "Mobile radio app for Wadjo, a Togolese online radio station broadcasting the best of Togolese music and urban culture. The app was released on iOS and Android, giving listeners access to live streaming and programming from anywhere. No longer available on the official stores.",
    descriptionFr:
      "Application radio mobile pour Wadjo, une station togolaise diffusant le meilleur de la musique et de la culture urbaine. Disponible sur iOS et Android, n'est plus sur les stores officiels.",
    year: "2023",
    category: "Mobile",
    technologies: ["Flutter", "Laravel", "PHP"],
    links: {
      ios: "https://apkcombo.com/wadjo-radio/com.radio.wadjo/",
      android: "https://wadjo-radio-togo.updatestar.com/",
    },
    previews: ["/images/wajo_radio_1.webp", "/images/wajo_radio_2.webp", "/images/waho_radio_3.webp"],
  },
  /* temporarily hidden
  {
    title: "Cabinet YiLiM",
    description:
      "Institutional website for YiLiM, a Togolese consultancy specialised in entrepreneurship expertise and mentoring for SMEs (TPME). The site presents the cabinet's services, team, and partners, and serves as the main touchpoint for entrepreneurs seeking coaching and institutional connections across Togo.",
    year: "2023",
    category: "Web",
    technologies: ["PHP", "WordPress", "MySQL"],
    links: { live: "https://yilimtg.com/" },
    preview: "/images/yilimtg.png",
  },
  */
];

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  const { t } = useLanguage();
  return (
    <div className="preview-img-wrap">
      {status === "loading" && <div className="preview-skeleton" />}
      {status === "error" ? (
        <div className="projects-preview__placeholder">
          <span className="projects-preview__placeholder-title">{t("projects.previewUnavailable")}</span>
        </div>
      ) : (
        <img
          src={src}
          alt={alt}
          className="projects-preview__img"
          style={{ opacity: status === "loaded" ? 1 : 0, transition: "opacity 0.4s ease" }}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </div>
  );
}

function PreviewGallery({ images, alt }: { images: string[]; alt: string }) {
  return (
    <div className="preview-gallery">
      {images.map((src, i) => (
        <PreviewImage key={i} src={src} alt={`${alt} ${i + 1}`} />
      ))}
    </div>
  );
}

export function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const previewRef = useRef<HTMLDivElement>(null);
  const active = PROJECTS[activeIndex];
  const { lang, t } = useLanguage();

  // Keep the flat index — the preview pane addresses PROJECTS directly.
  const indexed = PROJECTS.map((project, index) => ({ project, index }));
  const groups = [
    { key: "featured", label: t("projects.featured"), items: indexed.filter((x) => x.project.featured) },
    { key: "other", label: t("projects.other"), items: indexed.filter((x) => !x.project.featured) },
  ].filter((group) => group.items.length > 0);

  return (
    <section id="work" className="section projects-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("projects.sectionTitle")}
        </motion.h2>

        <div className="projects-layout">
          {/* LEFT — project list */}
          <div className="projects-list">
            {groups.map((group) => (
              <div key={group.key} className="projects-group">
                <h3 className="projects-group__label">{group.label}</h3>
            {group.items.map(({ project, index }) => (
              <motion.div
                key={project.title}
                className={`project-row${activeIndex === index ? " project-row--active" : ""}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={(e) => {
                  // Let link clicks through without triggering scroll
                  if ((e.target as HTMLElement).closest("a")) return;
                  setActiveIndex(index);
                  if (window.innerWidth <= 900 && previewRef.current) {
                    const top = previewRef.current.getBoundingClientRect().top + window.scrollY - 100;
                    window.scrollTo({ top, behavior: "smooth" });
                  }
                }}
              >
                <div className="project-row__top">
                  <div className="project-row__meta">
                    <span className="project-row__year">{project.year}</span>
                    <span className="project-row__separator">·</span>
                    <span className="project-row__category">{project.category}</span>
                  </div>
                  <div className="project-row__actions">
                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row__icon-link"
                        whileHover={{ y: -2 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                      </motion.a>
                    )}
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row__icon-link"
                        whileHover={{ y: -2 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                    {project.links.ios && (
                      <motion.a
                        href={project.links.ios}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row__icon-link"
                        title="iOS"
                        whileHover={{ y: -2 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                    {project.links.android && (
                      <motion.a
                        href={project.links.android}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-row__icon-link"
                        title="Android"
                        whileHover={{ y: -2 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                      </motion.a>
                    )}
                  </div>
                </div>

                <h3 className="project-row__title">{project.title}</h3>
                <p className="project-row__description">
                  {lang === "fr" && project.descriptionFr ? project.descriptionFr : project.description}
                </p>

                <div className="project-row__techs">
                  {project.technologies.map((tech) => {
                    const t = TECH_ICONS[tech];
                    return (
                      <span key={tech} className="project-tech">
                        {t && <span className="project-tech__icon" style={{ color: t.color }}>{t.icon}</span>}
                        <span className="project-tech__name">{tech}</span>
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            ))}
              </div>
            ))}
          </div>

          {/* RIGHT — sticky preview */}
          <div className="projects-preview" ref={previewRef}>
            <div className="projects-preview__frame">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.title}
                  className="projects-preview__inner"
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {active.previews ? (
                    <PreviewGallery images={active.previews} alt={active.title} />
                  ) : active.preview ? (
                    <PreviewImage src={active.preview} alt={`${active.title} preview`} />
                  ) : (
                    <div className="projects-preview__placeholder">
                      <span className="projects-preview__placeholder-title">{active.title}</span>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <motion.p
          className="projects-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {t("projects.moreOn")}{" "}
          <motion.a
            href="https://github.com/Bakugo90"
            target="_blank"
            rel="noopener noreferrer"
            className="projects-footer__link"
            whileHover={{ x: 4 }}
          >
            GitHub →
          </motion.a>
        </motion.p>
      </div>
    </section>
  );
}
