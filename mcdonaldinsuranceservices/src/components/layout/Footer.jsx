import { Link } from 'react-router-dom';
import { companyInfo } from '../../data/companyInfo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__grid">
          <div className="footer__section">
            <h3 className="footer__heading">About Us</h3>
            <p className="footer__text">
              {companyInfo.name} has been serving our community for over 30 years, 
              providing personalized insurance solutions for individuals and families.
            </p>
            <p className="footer__slogan">{companyInfo.slogan}</p>
          </div>

          <div className="footer__section">
            <h3 className="footer__heading">Quick Links</h3>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">Home</Link>
              </li>
              <li>
                <Link to="/meet-the-team" className="footer__link">Meet the Team</Link>
              </li>
              <li>
                <Link to="/services" className="footer__link">Services</Link>
              </li>
              <li>
                <Link to="/faq" className="footer__link">Frequently Asked Questions</Link>
              </li>
              <li>
                <Link to="/helpful-info" className="footer__link">Helpful Info</Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer__section">
            <h3 className="footer__heading">Contact Information</h3>
            <ul className="footer__contact">
              <li>
                <strong>Phone:</strong>{' '}
                <a href={`tel:${companyInfo.phone}`} className="footer__link">
                  {companyInfo.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{' '}
                <a href={`mailto:${companyInfo.email}`} className="footer__link">
                  {companyInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
