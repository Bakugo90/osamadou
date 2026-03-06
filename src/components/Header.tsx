import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import "./Header.css";

const FlagGB = () => (
  <svg width="18" height="12" viewBox="0 0 60 40" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
    <rect width="60" height="40" fill="#012169" />
    <path d="M0,0 L60,40 M60,0 L0,40" stroke="#fff" strokeWidth="8" />
    <path d="M34,0 L60,17 M26,0 L0,17 M0,23 L26,40 M34,40 L60,23" stroke="#C8102E" strokeWidth="5" />
    <path d="M0,20 H60 M30,0 V40" stroke="#fff" strokeWidth="12" />
    <path d="M0,20 H60 M30,0 V40" stroke="#C8102E" strokeWidth="8" />
  </svg>
);

const FlagFR = () => (
  <svg width="18" height="12" viewBox="0 0 30 20" xmlns="http://www.w3.org/2000/svg" style={{ borderRadius: 2, flexShrink: 0 }}>
    <rect width="10" height="20" fill="#002395" />
    <rect x="10" width="10" height="20" fill="#fff" />
    <rect x="20" width="10" height="20" fill="#ED2939" />
  </svg>
);

export const Header = () => {
  const { lang, setLang, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = ["skills", "work", "experience", "blog", "contact"];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#work", label: t("nav.projects") },
    { href: "#experience", label: t("nav.experience") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#blog", label: t("nav.writing") },
    { href: "#contact", label: t("nav.contact") },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className={`header ${isScrolled ? "header--scrolled" : ""}`}
      style={{ x: "-50%" }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <nav className="header__nav">
        {navLinks.map((link, index) => (
          <motion.a
            key={link.href}
            href={link.href}
            className={`header__nav-item ${
              activeSection === link.href.substring(1)
                ? "header__nav-item--active"
                : ""
            }`}
            onClick={(e) => handleNavClick(e, link.href)}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
          >
            {link.label}
          </motion.a>
        ))}
      </nav>

      <div className="lang-toggle">
        <button
          className={`lang-toggle__btn${lang === "en" ? " lang-toggle__btn--active" : ""}`}
          onClick={() => setLang("en")}
          aria-label="Switch to English"
        >
          <FlagGB /> EN
        </button>
        <button
          className={`lang-toggle__btn${lang === "fr" ? " lang-toggle__btn--active" : ""}`}
          onClick={() => setLang("fr")}
          aria-label="Passer en français"
        >
          <FlagFR /> FR
        </button>
      </div>
    </motion.header>
  );
};
