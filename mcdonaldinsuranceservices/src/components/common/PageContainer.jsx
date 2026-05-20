import Breadcrumbs from './Breadcrumbs';
import './PageContainer.css';

const PageContainer = ({ 
  children, 
  className = '',
  maxWidth = 'xl',
  showBreadcrumbs = true
}) => {
  const containerClass = `page-container page-container--${maxWidth} ${className}`;

  return (
    <div className={containerClass}>
      {showBreadcrumbs && <Breadcrumbs />}
      {children}
    </div>
  );
};

export default PageContainer;
