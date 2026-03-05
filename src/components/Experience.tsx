import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiNodedotjs, SiNextdotjs, SiReact, SiJavascript, SiPython,
  SiPostgresql, SiMysql, SiAmazon,
  SiFlutter, SiLaravel, SiFastapi,
  SiPhp, SiTypescript, SiGithubactions,
  SiTailwindcss, SiWordpress, SiDocker,
  SiGit, SiGithub,
  SiNestjs, SiRedis, SiJest,
} from "react-icons/si";
import { ChevronRight } from "lucide-react";
import "./Experience.css";

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

const TECH_ICONS: Record<string, { icon: React.ReactElement; color: string }> = {
  "JavaScript":      { icon: <SiJavascript />,     color: "#F7DF1E" },
  "React.js":        { icon: <SiReact />,          color: "#61DAFB" },
  "FastAPI":         { icon: <SiFastapi />,        color: "#009688" },
  "PostgreSQL":      { icon: <SiPostgresql />,      color: "#4169E1" },
  "MySQL":           { icon: <SiMysql />,          color: "#4479A1" },
  "TailwindCSS":     { icon: <SiTailwindcss />,     color: "#06B6D4" },
  "Next.js":         { icon: <SiNextdotjs />,       color: "#ffffff" },
  "Node.js":         { icon: <SiNodedotjs />,       color: "#339933" },
  "AWS":             { icon: <SiAmazon />,          color: "#FF9900" },
  "TypeScript":      { icon: <SiTypescript />,      color: "#3178C6" },
  "Python":          { icon: <SiPython />,          color: "#3776AB" },
  "Flutter":         { icon: <SiFlutter />,         color: "#54C5F8" },
  "Laravel":         { icon: <SiLaravel />,         color: "#FF2D20" },
  "GitHub Actions":  { icon: <SiGithubactions />,   color: "#2088FF" },
  "PHP":             { icon: <SiPhp />,             color: "#777BB4" },
  "WordPress":       { icon: <SiWordpress />,       color: "#21759B" },
  "Docker":          { icon: <SiDocker />,          color: "#2496ED" },
  "Git":             { icon: <SiGit />,             color: "#F05032" },
  "GitHub":          { icon: <SiGithub />,          color: "#ffffff" },
  "NestJS":          { icon: <SiNestjs />,          color: "#E0234E" },
  "Redis":           { icon: <SiRedis />,           color: "#DC382D" },
  "Jest":            { icon: <SiJest />,            color: "#C21325" },
};

const EXPERIENCES: Experience[] = [
  {
    role: "Backend Engineer",
    company: "Orga Africa",
    period: "Nov 2025 – Present",
    location: "Lomé, Togo",
    type: "Part-time",
    description: [
      "Building the backend of Orga Africa's food-ordering platform in NestJS — 7 isolated domain modules (orders, restaurants, menus, payments, notifications, delivery, auth) sharing infrastructure while enabling independent iteration per domain.",
      "Engineered the full order lifecycle: atomic stock reservation, 5-state status machine and refund flows — using idempotency keys and optimistic locking to eliminate double-submissions under peak load.",
      "Secured REST APIs with JWT + refresh-token auth and RBAC across 3 roles — reducing unauthorised access incidents to zero since launch.",
      "Redis for rate limiting, distributed locking and read caching — cutting direct DB load by ~40% on hot paths; <200ms p95 response times under peak load.",
      "Offloaded async workloads (notifications, reports, invoices) to AWS Lambda; containerised with Docker across dev/staging/prod on AWS (RDS, ElastiCache, S3, CloudWatch).",
      ">80% test coverage with Jest: unit, integration and contract tests preventing regressions before each deploy.",
    ],
    technologies: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "Redis", "Docker", "AWS", "Jest"],
  },
  {
    role: "Full Stack Engineer",
    company: "Marine Intelligence & Trade (MIT)",
    period: "Jul – Sep 2025",
    location: "Lomé, Togo",
    type: "Freelance",
    description: [
      "Designed and developed a large-scale ERP to fully digitalise maritime agency operations: real-time vessel tracking, port call management (arrivals, berthing, rendered services), cargo unloading, invoicing, quotations, service orders, and monthly operational & financial reports.",
      "Backend with Laravel + Eloquent ORM: full domain modelling of maritime operations (vessels, port calls, services, interventions, cargo), structured and secure APIs, complex business workflows with automation rules, and a multi-role permission system for operations, accounting and management teams.",
      "Real-time monitoring via optimised polling + occasional broadcasting: instant vessel status updates, active port-call visualisation, ongoing-intervention tracking, and automatic alerts on delays or anomalies.",
      "Front-end with TailwindCSS, SCSS, Webpack and Vanilla JS: modern responsive interfaces, interactive filterable tables with PDF/Excel export, and management dashboards (KPIs, workload, port-call durations).",
      "Business document automation: dynamic generation of quotations, invoices and PDF reports from MySQL data. MySQL performance tuned with indexing, optimised queries and clean Eloquent relationships.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "JavaScript", "TailwindCSS", "REST APIs", "PHPUnit"],
  },
  {
    role: "Full Stack Engineer",
    company: "possible.africa",
    period: "Aug 2024 – Jul 2025",
    location: "Remote",
    type: "Full-time",
    description: [
      "Built an interactive geospatial map in React.js visualising 63,000+ African organisations by region, sector and country — enabling sales teams to perform rapid multi-sector strategic analysis and identify high-value markets.",
      "Designed advanced filters, clustering and dynamic loading to keep the UI smooth and performant despite large datasets.",
      "Developed the official Hyperlink Africa Challenge website, including event pages, project showcases and engagement features, improving visibility and participation.",
      "Created a portfolio platform for top candidates, highlighting their skills, achievements and innovative projects — strengthening the talent ecosystem across Africa.",
    ],
    technologies: ["React.js", "JavaScript", "TailwindCSS", "REST APIs", "Git", "GitHub"],
  },
  {
    role: "Full Stack Engineer",
    company: "Expand In Africa",
    period: "Jul 2024 – Jul 2025",
    location: "France — Remote",
    type: "Full-time",
    description: [
      "Architected and developed a large-scale, production-ready SaaS platform for business consulting teams — combining CRM, sales pipelines, lead generation, lead scoring and task management into a single unified product.",
      "Built responsive and dynamic interfaces using Next.js (React + SSR), improving user experience and reducing load times across devices.",
      "Developed a secure and scalable backend with Node.js (AdonisJS), including RBAC enforcement and hardened access rules — leading to –25% unauthorised access attempts thanks to improved security logic.",
      "Implemented high-performance REST APIs managing 50,000+ Airtable records, including optimised pagination, caching and data transformation workflows.",
      "Designed and deployed a media library module with reliable file uploads to Amazon S3, ensuring fast access, versioning and secure storage.",
      "Leveraged AWS services, CI/CD pipelines, environment isolation and cloud-native practices to ensure maintainability and scalability.",
      "Collaborated with stakeholders to refine business requirements and translate them into scalable technical architectures.",
    ],
    technologies: ["Next.js", "Node.js", "TailwindCSS", "AWS", "TypeScript", "Docker", "Git", "GitHub"],
  },
  {
    role: "Open Source Developer",
    company: "Tublian",
    period: "Dec 2023 – Feb 2024",
    location: "Columbus, OHIO — Remote",
    type: "Internship",
    description: [
      "Improved Ansible's official documentation around the check_mode feature, enhancing clarity and usability for contributors and users — PR #82536.",
      "Refactored and optimised parts of the RISC-V OCaml codebase in the Sail architecture model, increasing maintainability, readability and computational robustness while preserving functional correctness — PR #8.",
      "Collaborated within the open-source community by participating in reviews, discussions and iterative improvements across multiple repositories.",
    ],
    technologies: ["Python", "Git", "GitHub"],
  },
  {
    role: "Full Stack Engineer",
    company: "Acmedias",
    period: "Jun – Dec 2023",
    location: "Lomé, Togo",
    type: "Freelance",
    description: [
      "Designed and developed end-to-end mobile experiences for 3 Android/iOS applications, including UI implementation in Flutter and backend API development using Laravel.",
      "Integrated multiple African payment gateways (including mobile money solutions), improving transaction success rate to 98% through better error handling, webhook processing and retry logic.",
      "Built secure REST APIs, optimised database queries and implemented robust authentication / authorisation flows.",
      "Set up and maintained CI/CD pipelines (GitHub Actions / GitLab CI) enabling weekly deployments and faster delivery cycles.",
    ],
    technologies: ["Flutter", "Laravel", "PHP", "MySQL", "GitHub Actions", "Docker", "Git", "GitHub"],
  },
  {
    role: "PHP & WordPress Developer",
    company: "YiLiM",
    period: "Jan – Apr 2023",
    location: "Lomé, Togo",
    type: "Freelance",
    description: [
      "Led the full redevelopment and hardening of YiLiM's WordPress website using PHP, with a strong focus on performance, security and SEO.",
      "Crafted and executed a tailored SEO strategy — technical optimisation, targeted content and internal linking — delivering over 60% growth in organic traffic within three months.",
      "Achieved first-page rankings on Google for several high-value keywords relevant to YiLiM's business, directly boosting online visibility and inbound traffic.",
    ],
    technologies: ["PHP", "WordPress", "MySQL", "Git", "GitHub"],
  },
];

export function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Work Experience
        </motion.h2>

        <div className="exp-list">
          {EXPERIENCES.map((exp, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={exp.company + exp.role}
                className={`exp-row ${isOpen ? "exp-row--open" : ""}`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: index * 0.07 }}
              >
                {/* Clickable header */}
                <button
                  className="exp-row__header"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <div className="exp-row__left">
                    <motion.span
                      className="exp-row__chevron"
                      animate={{ rotate: isOpen ? 90 : 0 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                      <ChevronRight size={14} />
                    </motion.span>
                    <span className="exp-row__meta">
                      <span className="exp-row__period">{exp.period}</span>
                      <span className="exp-row__sep">·</span>
                      <span className="exp-row__type">{exp.type}</span>
                    </span>
                  </div>
                  <div className="exp-row__right">
                    <span className="exp-row__role">{exp.role}</span>
                    <span className="exp-row__company">@ {exp.company}</span>
                    <span className="exp-row__location">{exp.location}</span>
                  </div>
                </button>

                {/* Accordion body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="body"
                      className="exp-row__body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                      <div className="exp-row__body-inner">
                        <ul className="exp-row__bullets">
                          {exp.description.map((line, i) => (
                            <li key={i} className="exp-row__bullet">
                              {line}
                            </li>
                          ))}
                        </ul>
                        <div className="exp-row__techs">
                          {exp.technologies.map((tech) => {
                            const t = TECH_ICONS[tech];
                            return (
                              <span key={tech} className="exp-tech">
                                {t && (
                                  <span className="exp-tech__icon" style={{ color: t.color }}>
                                    {t.icon}
                                  </span>
                                )}
                                <span className="exp-tech__name">{tech}</span>
                              </span>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
