import { useState } from "react";
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
import "./Projects.css";

interface Project {
  title: string;
  description: string;
  year: string;
  category: string;
  technologies: string[];
  links: { github?: string; live?: string; ios?: string; android?: string };
  status: "Production" | "Beta" | "Development" | "Archived";
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
    title: "Orga Africa — Backend API",
    description:
      "Scalable backend for a Togolese food-ordering platform, built on NestJS (modular monolith). Handles the full order lifecycle, multi-role authentication, real-time status updates, payment processing and async background jobs via AWS Lambda — engineered to sustain high order volumes with reliable, sub-200ms API response times.",
    year: "2025",
    category: "Backend",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS"],
    links: { live: "https://api.orga-africa.com/" },
    status: "Production",
  },
  {
    title: "Yperlink Africa",
    description:
      "Networking and partnership matching platform within the Expand In Africa ecosystem, connecting African entrepreneurs, investors, and institutions to foster cross-border collaboration and business opportunities.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/yprlink" },
    status: "Production",
    preview: "/images/www.expand-in-africa.com_yprlink.png",
  },
  {
    title: "Expand In Africa — Media Tracker",
    description:
      "Media monitoring dashboard tracking press coverage and online mentions of Expand In Africa across African and global publications, providing visibility on brand reach and campaign performance.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/media-tracker" },
    status: "Production",
    preview: "/images/www.expand-in-africa.com_media-tracker.png",
  },
  {
    title: "Expand In Africa — CRM",
    description:
      "Custom CRM portal for Expand In Africa partners — manages leads, client pipelines, and onboarding workflows for the consultancy's internal teams across multiple African markets.",
    year: "2025",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "AdonisJS", "AWS"],
    links: { live: "https://expandinafricapartners.preview.softr.app/" },
    status: "Production",
    preview: "/images/expandinafricapartners.preview.softr.app__autoUser=true&show-toolbar=true.png",
  },
  {
    title: "Expand In Africa",
    description:
      "Main platform for Expand In Africa, a pan-African business expansion consultancy. Features service pages, partner directories, and marketing infrastructure supporting business development across multiple African markets.",
    year: "2024",
    category: "Full-Stack",
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Node.js", "AdonisJS", "AWS"],
    links: { live: "https://www.expand-in-africa.com/" },
    status: "Production",
    preview: "/images/www.expand-in-africa.com_.png",
  },
  {
    title: "Laravel Auto Blade",
    description:
      "Open-source Laravel package that automatically generates Blade views from Artisan commands, eliminating boilerplate when scaffolding new views and streamlining front-end setup in Laravel projects.",
    year: "2024",
    category: "Open Source",
    technologies: ["PHP", "Laravel"],
    links: { github: "https://github.com/Bakugo90/Laravel-auto-blade" },
    status: "Production",
    preview: "https://opengraph.githubassets.com/1/Bakugo90/Laravel-auto-blade",
  },
  {
    title: "Wadjo Radio",
    description:
      "Mobile radio app for Wadjo, a Togolese online radio station broadcasting the best of Togolese music and urban culture. The app was released on iOS and Android, giving listeners access to live streaming and programming from anywhere. No longer available on the official stores.",
    year: "2023",
    category: "Mobile",
    technologies: ["Flutter", "Laravel", "PHP"],
    links: {
      ios: "https://apkcombo.com/wadjo-radio/com.radio.wadjo/",
      android: "https://wadjo-radio-togo.updatestar.com/",
    },
    status: "Archived",
    previews: ["/images/wajo_radio_1.webp", "/images/wajo_radio_2.webp", "/images/waho_radio_3.webp"],
  },
  {
    title: "Cabinet YiLiM",
    description:
      "Institutional website for YiLiM, a Togolese consultancy specialised in entrepreneurship expertise and mentoring for SMEs (TPME). The site presents the cabinet's services, team, and partners, and serves as the main touchpoint for entrepreneurs seeking coaching and institutional connections across Togo.",
    year: "2023",
    category: "Web",
    technologies: ["PHP", "WordPress", "MySQL"],
    links: { live: "https://yilimtg.com/" },
    status: "Production",
    preview: "/images/yilimtg.png",
  },
];

function PreviewImage({ src, alt }: { src: string; alt: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");
  return (
    <div className="preview-img-wrap">
      {status === "loading" && <div className="preview-skeleton" />}
      {status === "error" ? (
        <div className="projects-preview__placeholder">
          <span className="projects-preview__placeholder-title">Preview unavailable</span>
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
  const active = PROJECTS[activeIndex];

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
          Projects
        </motion.h2>

        <div className="projects-layout">
          {/* LEFT — project list */}
          <div className="projects-list">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.title}
                className={`project-row${activeIndex === index ? " project-row--active" : ""}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
              >
                <div className="project-row__top">
                  <div className="project-row__meta">
                    <span className="project-row__year">{project.year}</span>
                    <span className="project-row__separator">·</span>
                    <span className="project-row__category">{project.category}</span>
                    <span
                      className={`project-row__status project-row__status--${project.status.toLowerCase()}`}
                    >
                      {project.status}
                    </span>
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
                <p className="project-row__description">{project.description}</p>

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

          {/* RIGHT — sticky preview */}
          <div className="projects-preview">
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
          More on{" "}
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
