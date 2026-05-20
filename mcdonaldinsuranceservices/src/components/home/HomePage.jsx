import { useEffect } from 'react';
import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import MissionStatement from './MissionStatement';
import Statistics from './Statistics';
import AgentPreviewList from './AgentPreviewList';
import { companyInfo } from '../../data/companyInfo';
import { agents } from '../../data/agents';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    document.title = 'McDonald Insurance Services - Utah Health, Life, Dental & Vision Insurance | Affordable Insurance Quotes';
  }, []);
  return (
    <PageContainer>
      <div className="home-page">
        {/* Hero Section with SEO-optimized heading */}
        <section className="home-page__hero" role="banner" aria-label="Welcome to McDonald Insurance Services">
          <div className="home-page__logo-wrapper">
            <img 
              src="/TextLogo.png" 
              alt="McDonald Insurance Services - Utah Health, Life, Dental, and Vision Insurance Agent" 
              className="home-page__logo"
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            <h1 className="home-page__logo-fallback">
              {companyInfo.name} - Your Trusted Utah Insurance Agent
            </h1>
          </div>
          <p className="home-page__slogan">{companyInfo.slogan}</p>

          {/* Hidden SEO content - not visible to users but crawled by search engines */}
          <div className="visually-hidden" aria-hidden="true">
            <h2>Affordable Health Insurance, Life Insurance, Dental Insurance, and Vision Insurance in Utah</h2>
            <p>
              Looking for {companyInfo.seo.primaryKeywords.join(', ')}? 
              We're a trusted insurance broker serving Utah families and businesses with personalized service. 
              Get free insurance quotes today from experienced insurance agents near you.
            </p>
            <ul>
              <li>Health insurance plans including Medicare, Obamacare, and marketplace insurance</li>
              <li>Term life insurance and whole life insurance for families and seniors</li>
              <li>Affordable dental insurance and vision insurance coverage</li>
              <li>Expert insurance agents available for consultation</li>
            </ul>
          </div>
        </section>

        <MissionStatement mission={companyInfo.mission} />

        <Statistics statistics={companyInfo.statistics} />

        <section className="home-page__why-choose" aria-labelledby="why-choose-heading">
          <SectionHeader 
            title="Why Choose Us?" 
            subtitle="We are committed to providing the best insurance solutions tailored to your needs."
          />
          <ul className="home-page__benefits">
            {companyInfo.whyChooseUs.map((benefit, index) => (
              <li key={index} className="home-page__benefit-item">
                <span className="home-page__benefit-icon" aria-hidden="true">✓</span>
                <span className="home-page__benefit-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="home-page__team-preview" aria-labelledby="team-preview-heading">
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