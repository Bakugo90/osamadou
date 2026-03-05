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
              <span className="footer__status-dot"></span>
              Available for work
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
