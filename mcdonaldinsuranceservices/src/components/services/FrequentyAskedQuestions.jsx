import { useState, useEffect } from 'react';
import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import { faqData } from '../../data/faq';
import './FrequentlyAskedQuestions.css';

const FrequentlyAskedQuestions = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Add FAQ schema markup for SEO
  useEffect(() => {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(faqSchema);
    script.id = 'faq-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('faq-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="faq">
      <PageContainer maxWidth="lg">
        <SectionHeader 
          title="Frequently Asked Questions About Insurance"
          subtitle="Find answers to common questions about our health, life, dental, and vision insurance services in Utah"
        />

        <div className="faq__list" role="list">
          {faqData.map((item, index) => (
            <div key={item.id} className="faq__item" role="listitem">
              <button
                className={`faq__question ${openIndex === index ? 'faq__question--open' : ''}`}
                onClick={() => toggleQuestion(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${item.id}`}
              >
                <span className="faq__question-text">{item.question}</span>
                <span className="faq__icon" aria-hidden="true">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div 
                id={`faq-answer-${item.id}`}
                className={`faq__answer ${openIndex === index ? 'faq__answer--open' : ''}`}
                role="region"
                aria-labelledby={`faq-question-${item.id}`}
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
