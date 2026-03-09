import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ChefHat } from "lucide-react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Blog } from "./components/Blog";
import { CursorTorch } from "./components/CursorTorch";
import { useLanguage } from "./i18n/LanguageContext";
import "./App.css";

function App() {
  const { t, tArr, lang } = useLanguage();
  const [heroT1, heroT2, heroT3] = tArr("hero.title");
  const [contactL1, contactL2] = tArr("contact.heading");
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
                {t("hero.badge")}
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
                  {t("hero.greeting")} <span className="hero__wave">👋</span>
                </motion.p>

                <motion.span
                  className="hero__eyebrow"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                >
                  {t("hero.eyebrow")}
                </motion.span>

                <motion.h1
                  className="hero__title"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
                >
                  {heroT1}
                  <br />
                  {heroT2}
                  <br />
                  {heroT3}
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
                  <motion.a
                    href={lang === "fr" ? "/resume/samadou-fullstack-backend-fr.pdf" : "/resume/samadou-fullstack-backend-en.pdf"}
                    download
                    className="hero__link hero__link--resume"
                    whileHover={{ x: 4 }}
                  >
                    <Download size={15} /> Resume
                  </motion.a>
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
                  {t("hero.bio1")}
                </p>
                <p className="hero__bio">
                  {t("hero.bio2a")}
                  {" "}
                  <span className="hero__chef">
                    {t("hero.chef")}
                    <span className="hero__chef-icon">
                      <ChefHat size={14} />
                    </span>
                  </span>
                  {" "}
                  {t("hero.bio2b")}
                </p>
                <p className="hero__bio">
                  {t("hero.bio3")}
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
                {t("contact.sectionTitle")}
              </motion.h2>
              <h2 className="contact-title">
                {contactL1}
                <br />
                {contactL2}
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
                  href="https://www.linkedin.com/in/samadou-ouro-agorouko"
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
