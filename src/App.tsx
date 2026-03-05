import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChefHat } from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Blog } from "./components/Blog";
import { CursorTorch } from "./components/CursorTorch";
import "./App.css";

function App() {
  return (
    <>
      <CursorTorch />
      <Header />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero__container">
            {/* Available badge — centered above grid */}
            <motion.div
              className="hero__available-wrap"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <span className="hero__badge">
                <span className="hero__badge-dot" />
                Available for new opportunities
              </span>
            </motion.div>

            <div className="hero__grid">

              {/* LEFT — greeting, title, links */}
              <motion.div
                className="hero__left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
              >
                <motion.p
                  className="hero__greeting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >
                  Hi, I'm Samadou <span className="hero__wave">👋</span>
                </motion.p>

                <motion.span
                  className="hero__eyebrow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  Full Stack Engineer · Backend Specialist
                </motion.span>

                <motion.h1
                  className="hero__title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  I build
                  <br />
                  reliable systems
                  <br />
                  that scale.
                </motion.h1>

                <motion.div
                  className="hero__links"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <motion.a
                    href="https://github.com/Bakugo90"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__link"
                    whileHover={{ x: 4 }}
                  >
                    <Github size={15} /> GitHub
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/samadou-ouro-agorouko/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hero__link"
                    whileHover={{ x: 4 }}
                  >
                    <Linkedin size={15} /> LinkedIn
                  </motion.a>
                  <motion.a
                    href="mailto:souroagorouko@gmail.com"
                    className="hero__link"
                    whileHover={{ x: 4 }}
                  >
                    <Mail size={15} /> Email
                  </motion.a>
                  <motion.button
                    onClick={() => alert("Resume not available yet — check back soon!")}
                    className="hero__link hero__link--resume"
                    whileHover={{ x: 4 }}
                  >
                    <Download size={15} /> Resume
                  </motion.button>
                </motion.div>
              </motion.div>

              {/* RIGHT — bio paragraphs */}
              <motion.div
                className="hero__right"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.9 }}
              >
                <p className="hero__bio">
                  I'm a full stack engineer with a specialty in backend engineering,
                  focused on reliable APIs, data flows and infrastructure that quietly
                  scales in the background.
                </p>
                <p className="hero__bio">
                  While I can implement awesome UIs I prefer more working where product meets infrastructure: turning messy
                  real‑world processes into services, queues and background jobs.
                  Building backends, provisioning and orchestrating servers, and
                  watching graphs instead of pixels makes me feel like a tiny
                  {" "}
                  <span className="hero__chef">
                    chef
                    <span className="hero__chef-icon">
                      <ChefHat size={14} />
                    </span>
                  </span>
                  {" "}
                  keeping the kitchen under control.
                </p>
                <p className="hero__bio">
                  Right now I'm Backend Engineer at OrgaAfrica, helping build the
                  operating system for African restaurants: payments, QR ordering,
                  queueing and analytics. Before that I worked on maritime ERP,
                  consulting SaaS, open‑source tooling and mobile/payment systems. When
                  I'm not shipping code I'm reading manga or grinding through games.
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience />

        {/* Skills Section */}
        <Skills />

        {/* Blog Section */}
        <Blog />

        {/* Contact Section */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <motion.div
              className="contact-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.h2
                className="section-title"
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                Contact
              </motion.h2>
              <h2 className="contact-title">
                Let's work
                <br />
                together.
              </h2>
              <div className="contact-links">
                <motion.a
                  href="mailto:souroagorouko@gmail.com"
                  className="contact-link"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  souroagorouko@gmail.com →
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  LinkedIn →
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
