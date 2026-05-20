import { useEffect } from 'react';

/**
 * SEO Component - Manages page-specific meta tags for improved search engine optimization
 * This component updates document head with title and meta description for each page
 * 
 * @param {string} title - Page title (shown in browser tab and search results)
 * @param {string} description - Page meta description (shown in search results)
 * @param {string[]} keywords - Array of keywords relevant to the page
 */
const SEO = ({ title, description, keywords = [] }) => {
  useEffect(() => {
    // Update page title
    if (title) {
      document.title = title;
    }

    // Update or create meta description
    if (description) {
      let metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      } else {
        metaDescription = document.createElement('meta');
        metaDescription.name = 'description';
        metaDescription.content = description;
        document.head.appendChild(metaDescription);
      }
    }

    // Update or create meta keywords
    if (keywords.length > 0) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      const keywordsString = keywords.join(', ');
      if (metaKeywords) {
        metaKeywords.setAttribute('content', keywordsString);
      } else {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        metaKeywords.content = keywordsString;
        document.head.appendChild(metaKeywords);
      }
    }

    // Cleanup function to restore default title if needed
    return () => {
      // Optionally restore default title when component unmounts
      // document.title = 'McDonald Insurance Services';
    };
  }, [title, description, keywords]);

  // This component doesn't render anything
  return null;
};

export default SEO;
