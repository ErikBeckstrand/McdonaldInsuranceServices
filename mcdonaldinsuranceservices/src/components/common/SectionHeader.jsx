import './SectionHeader.css';

const SectionHeader = ({ 
  title, 
  subtitle, 
  align = 'center',
  className = '' 
}) => {
  const headerClass = `section-header section-header--${align} ${className}`;

  return (
    <div className={headerClass}>
      {title && <h2 className="section-header__title">{title}</h2>}
      {subtitle && <p className="section-header__subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;
