import { Heart } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} {t('footer.rights')}
          </p>
          <div className="footer__meta">
            <span className="footer__status">
              {t('footer.builtWith')}{" "}
              <Heart size={13} className="footer__heart" />{" "}
              {t('footer.by')}{" "}
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
