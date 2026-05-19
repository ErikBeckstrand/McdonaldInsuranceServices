import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import MissionStatement from './MissionStatement';
import Statistics from './Statistics';
import AgentPreviewList from './AgentPreviewList';
import { companyInfo } from '../../data/companyInfo';
import { agents } from '../../data/agents';
import textLogo from '../../assets/TextLogo.png';
import './HomePage.css';

function HomePage() {
  return (
    <PageContainer>
      <div className="home-page">
        <section className="home-page__hero">
          <img 
            src={textLogo} 
            alt={companyInfo.name} 
            className="home-page__logo"
          />
          <p className="home-page__slogan">{companyInfo.slogan}</p>
        </section>

        <MissionStatement mission={companyInfo.mission} />

        <Statistics statistics={companyInfo.statistics} />

        <section className="home-page__why-choose">
          <SectionHeader 
            title="Why Choose Us?" 
            subtitle="We are committed to providing the best insurance solutions tailored to your needs."
          />
          <ul className="home-page__benefits">
            {companyInfo.whyChooseUs.map((benefit, index) => (
              <li key={index} className="home-page__benefit-item">
                <span className="home-page__benefit-icon">✓</span>
                <span className="home-page__benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-page__team-preview">
          <SectionHeader 
            title="Meet Our Team" 
            subtitle="Our experienced agents are here to help you find the perfect insurance coverage."
          />
          <AgentPreviewList agents={agents} />
        </section>
      </div>
    </PageContainer>
  );
}

export default HomePage;