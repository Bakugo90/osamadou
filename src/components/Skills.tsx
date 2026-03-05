import { motion } from "framer-motion";
import {
  SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiFlutter, SiRedux,
  SiNodedotjs, SiNestjs, SiPhp, SiLaravel,
  SiPython, SiFastapi,
  SiPostgresql, SiRedis, SiMysql, SiMongodb,
  SiDocker, SiGithubactions, SiAmazon,
  SiJest, SiCypress, SiGraphql,
  SiGit, SiGithub,
} from "react-icons/si";
import "./Skills.css";

interface Tech {
  name: string;
  icon?: React.ReactElement;
  color: string;
}

const STACK: { label: string; techs: Tech[] }[] = [
  {
    label: "Frontend",
    techs: [
      { name: "JavaScript",    icon: <SiJavascript />,  color: "#F7DF1E" },
      { name: "TypeScript",    icon: <SiTypescript />,  color: "#3178C6" },
      { name: "React.js",      icon: <SiReact />,       color: "#61DAFB" },
      { name: "Next.js",       icon: <SiNextdotjs />,   color: "#ffffff" },
      { name: "Flutter",       icon: <SiFlutter />,     color: "#54C5F8" },
      { name: "Redux Toolkit", icon: <SiRedux />,       color: "#764ABC" },
    ],
  },
  {
    label: "Backend",
    techs: [
      { name: "Node.js",   icon: <SiNodedotjs />, color: "#339933" },
      { name: "NestJS",    icon: <SiNestjs />,    color: "#E0234E" },
      { name: "AdonisJS",  color: "#5A45FF" },
      // { name: "Express",   icon: <SiExpress />,   color: "#8A9099" },
      { name: "PHP",       icon: <SiPhp />,       color: "#777BB4" },
      { name: "Laravel",   icon: <SiLaravel />,   color: "#FF2D20" },
      { name: "Python",    icon: <SiPython />,    color: "#3776AB" },
      // { name: "Django",    icon: <SiDjango />,    color: "#092E20" },
      { name: "FastAPI",   icon: <SiFastapi />,   color: "#009688" },
      // { name: "Flask",     icon: <SiFlask />,     color: "#8A9099" },
    ],
  },
  {
    label: "Database",
    techs: [
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
      { name: "Redis",      icon: <SiRedis />,      color: "#DC382D" },
      { name: "MySQL",      icon: <SiMysql />,      color: "#4479A1" },
      { name: "MongoDB",    icon: <SiMongodb />,    color: "#47A248" },
    ],
  },
  {
    label: "DevOps",
    techs: [
      { name: "Docker",          icon: <SiDocker />,          color: "#2496ED" },
      { name: "GitHub Actions",  icon: <SiGithubactions />,   color: "#2088FF" },
      { name: "Azure",           color: "#0078D4" },
      { name: "AWS",             icon: <SiAmazon />,          color: "#FF9900" },
      { name: "Render",          color: "#46E3B7" },
    ],
  },
  {
    label: "Testing",
    techs: [
      { name: "Pytest",   color: "#3776AB" },
      { name: "PHPUnit",  color: "#777BB4" },
      { name: "Jest",     icon: <SiJest />,    color: "#C21325" },
      { name: "Cypress",  icon: <SiCypress />, color: "#17202C" },
    ],
  },
  {
    label: "Other",
    techs: [
      { name: "REST APIs",  color: "#8A9099" },
      { name: "GraphQL",    icon: <SiGraphql />, color: "#E10098" },
      { name: "SOAP",       color: "#8A9099" },
      { name: "Git",        icon: <SiGit />,    color: "#F05032" },
      { name: "GitHub",     icon: <SiGithub />, color: "#ffffff" },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          Skills
        </motion.h2>

        <div className="stack-table">
          {STACK.map((row, rowIndex) => (
            <motion.div
              key={row.label}
              className="stack-row"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: rowIndex * 0.08 }}
            >
              <span className="stack-row__label">{row.label}</span>
              <div className="stack-row__techs">
                {row.techs.map((tech, i) => (
                  <motion.span
                    key={tech.name}
                    className="stack-tech"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: rowIndex * 0.08 + i * 0.04 }}
                    whileHover={{ y: -2 }}
                  >
                    <span
                      className={
                        "stack-tech__icon" + (tech.icon ? "" : " stack-tech__icon--placeholder")
                      }
                      style={{ color: tech.color }}
                    >
                      {tech.icon ?? null}
                    </span>
                    <span className="stack-tech__name">{tech.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          className="skills-learning"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Always evolving — currently diving into{" "}
          <span className="skills-learning__highlight">Kubernetes</span> and{" "}
          <span className="skills-learning__highlight">cloud-native technologies</span>.
        </motion.p>
      </div>
    </section>
  );
}
