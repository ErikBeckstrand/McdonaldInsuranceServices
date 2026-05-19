import './PageContainer.css';

const PageContainer = ({ 
  children, 
  className = '',
  maxWidth = 'xl' 
}) => {
  const containerClass = `page-container page-container--${maxWidth} ${className}`;

  return (
    <div className={containerClass}>
      {children}
    </div>
  );
};

export default PageContainer;
