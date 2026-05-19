import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import { helpfulInfoData } from '../../data/helpfulInfo';
import './HelpfulInfo.css';

const HelpfulInfo = () => {
  return (
    <div className="helpful-info">
      <PageContainer>
        <SectionHeader 
          title={helpfulInfoData.title}
          subtitle={helpfulInfoData.description}
        />

        <div className="helpful-info__categories">
          {helpfulInfoData.resources.map((category) => (
            <section key={category.id} className="helpful-info__category">
              <h2 className="helpful-info__category-title">{category.category}</h2>

              <div className="helpful-info__items">
                {category.items.map((item, index) => (
                  <div key={index} className="helpful-info__card">
                    <h3 className="helpful-info__situation">{item.situation}</h3>
                    <div className="helpful-info__details">
                      <p className="helpful-info__organization">{item.organization}</p>
                      <a 
                        href={`tel:${item.phoneNumber}`}
                        className="helpful-info__phone"
                      >
                        {item.phoneNumber}
                      </a>
                      <p className="helpful-info__description">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default HelpfulInfo;
