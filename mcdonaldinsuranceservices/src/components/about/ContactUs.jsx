import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import { companyInfo } from '../../data/companyInfo';
import { agents } from '../../data/agents';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <PageContainer maxWidth="lg">
        <SectionHeader 
          title="Contact Us"
          subtitle="Get in touch with our team - we're here to help you find the right insurance coverage"
        />

        <section className="contact-us__office">
          <div className="contact-us__office-card">
            <h2 className="contact-us__office-title">Main Office</h2>
            <div className="contact-us__office-details">
              <div className="contact-us__office-item">
                <span className="contact-us__label">Phone:</span>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="contact-us__phone-main"
                >
                  {companyInfo.phone}
                </a>
              </div>
              <div className="contact-us__office-item">
                <span className="contact-us__label">Email:</span>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="contact-us__email-main"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-us__agents">
          <h2 className="contact-us__agents-title">Our Agents</h2>
          <p className="contact-us__agents-subtitle">
            Reach out to any of our experienced agents directly
          </p>

          <div className="contact-us__agents-grid">
            {agents.map((agent) => (
              <div key={agent.id} className="contact-us__agent-card">
                <h3 className="contact-us__agent-name">{agent.name}</h3>
                <p className="contact-us__agent-role">{agent.role}</p>
                <div className="contact-us__agent-contact">
                  <a 
                    href={`tel:${agent.phone}`}
                    className="contact-us__agent-phone"
                  >
                    📞 {agent.phone}
                  </a>
                  <a 
                    href={`mailto:${agent.email}`}
                    className="contact-us__agent-email"
                  >
                    ✉️ {agent.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </PageContainer>
    </div>
  );
};

export default ContactUs;
