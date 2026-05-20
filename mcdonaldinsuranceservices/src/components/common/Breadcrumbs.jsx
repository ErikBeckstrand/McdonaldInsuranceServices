import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Breadcrumbs.css';

/**
 * Breadcrumbs Component - Provides navigation path and SEO schema markup
 * Automatically generates breadcrumbs based on current route
 */
const Breadcrumbs = () => {
  const location = useLocation();

  // Map of paths to human-readable names
  const pathNames = {
    '': 'Home',
    'meet-the-team': 'Meet the Team',
    'services': 'Services',
    'faq': 'FAQ',
    'helpful-info': 'Helpful Info',
    'contact': 'Contact Us'
  };

  // Generate breadcrumb items from current path
  const pathSegments = location.pathname.split('/').filter(segment => segment);

  const breadcrumbItems = [
    { name: 'Home', path: '/' },
    ...pathSegments.map((segment, index) => ({
      name: pathNames[segment] || segment,
      path: '/' + pathSegments.slice(0, index + 1).join('/')
    }))
  ];

  // Don't show breadcrumbs on home page
  if (location.pathname === '/') {
    return null;
  }

  // Add breadcrumb schema markup for SEO
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `https://mcdinserv.com${item.path}`
      }))
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(breadcrumbSchema);
    script.id = 'breadcrumb-schema';
    document.head.appendChild(script);

    return () => {
      const existingScript = document.getElementById('breadcrumb-schema');
      if (existingScript) {
        document.head.removeChild(existingScript);
      }
    };
  }, [location.pathname]);

  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb navigation">
      <ol className="breadcrumbs__list">
        {breadcrumbItems.map((item, index) => (
          <li key={item.path} className="breadcrumbs__item">
            {index < breadcrumbItems.length - 1 ? (
              <>
                <Link to={item.path} className="breadcrumbs__link">
                  {item.name}
                </Link>
                <span className="breadcrumbs__separator" aria-hidden="true"> / </span>
              </>
            ) : (
              <span className="breadcrumbs__current" aria-current="page">
                {item.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
