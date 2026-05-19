import { useState } from 'react';
import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../data/faq';
import './FrequentlyAskedQuestions.css';

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq">
      <PageContainer maxWidth="lg">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about our insurance services"
        />

        <div className="faq__list">
          {faqData.map((item, index) => (
            <div key={item.id} className="faq__item">
              <button
                className={`faq__question ${openIndex === index ? 'faq__question--open' : ''}`}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                className={`faq__answer ${openIndex === index ? 'faq__answer--open' : ''}`}
              >
                <p className="faq__answer-text">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default FrequentlyAskedQuestions;
