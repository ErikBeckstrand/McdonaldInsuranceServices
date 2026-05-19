import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import { servicesData } from '../../data/services';
import './Services.css';

const Services = () => {
  return (
    <div className="services">
      <PageContainer>
        <SectionHeader 
          title="Our Services"
          subtitle={servicesData.intro}
        />

        <section className="services__section">
          <h2 className="services__section-title">{servicesData.servicesOffered.title}</h2>
          <p className="services__section-description">{servicesData.servicesOffered.description}</p>

          <div className="services__grid">
            {servicesData.servicesOffered.services.map((service, index) => (
              <div key={index} className="services__card">
                <h3 className="services__card-title">{service.name}</h3>
                <p className="services__card-description">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="services__section">
          <h2 className="services__section-title">{servicesData.servicesNotOffered.title}</h2>
          <p className="services__section-description">{servicesData.servicesNotOffered.description}</p>

          <div className="services__referrals">
            {servicesData.servicesNotOffered.services.map((service, index) => (
              <div key={index} className="services__referral">
                <h3 className="services__referral-title">{service.name}</h3>
                <p className="services__referral-description">{service.description}</p>
                <div className="services__referral-contact">
                  <strong>{service.referralName}</strong>
                  <a 
                    href={`tel:${service.referralNumber}`}
                    className="services__referral-number"
                  >
                    {service.referralNumber}
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

export default Services;
