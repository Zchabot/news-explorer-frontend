import { Link } from "react-router-dom";
import "./Footer.css";
import { scrollToTop } from "../../utils/scrollToTop";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__copyright">© 2024 Zachary Chabot</p>
        <div className="footer__nav">
          <div className="footer__site-links">
            <Link
              to="/"
              type="button"
              className="footer__home"
              onClick={() => scrollToTop("smooth")}
            >
              Home
            </Link>
            <a
              href="/Zachary_Chabot_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__resume"
            >
              Resume
            </a>
          </div>
          <div className="footer__social-links">
            <a
              href="https://github.com/Zchabot"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__github"
              aria-label="GitHub"
            />
            <a
              href="https://www.linkedin.com/in/zachary-chabot"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__linkedin"
              aria-label="LinkedIn"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
