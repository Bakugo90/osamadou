import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Header.css";

export const Header = () => {
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
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#blog", label: "Writing" },
    { href: "#contact", label: "Contact" },
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
    </motion.header>
  );
};
