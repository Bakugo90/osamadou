import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} All rights reserved
          </p>
          <div className="footer__meta">
            <span className="footer__status">
              Built with love by{" "}
              <a
                href="https://github.com/Bakugo90"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__github-link"
              >
                Bakugo90
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
