import { useState } from 'react';

/**
 * AgentImage Component
 * 
 * Displays agent photo with graceful fallback to initials if image fails to load.
 * Follows Single Responsibility Principle: handles only agent image display logic.
 * 
 * @param {Object} props
 * @param {string} props.name - Agent's full name
 * @param {string} props.photo - Path to agent photo (may not exist)
 * @param {string} props.role - Agent's role/title (for accessibility)
 * @param {string} props.className - CSS class for the image wrapper
 * @param {string} props.imageClassName - CSS class for the img element
 * @param {string} props.placeholderClassName - CSS class for the placeholder div
 */
const AgentImage = ({ 
  name, 
  photo, 
  role, 
  className = '', 
  imageClassName = '',
  placeholderClassName = ''
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  /**
   * Generate initials from agent name
   * @param {string} name - Full name
   * @returns {string} Initials (e.g., "JM" for "James McDonald")
   */
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  /**
   * Handle image load error - fallback to initials
   */
  const handleImageError = () => {
    setImageError(true);
  };

  /**
   * Handle successful image load
   */
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const shouldShowImage = photo && !imageError;
  const ariaLabel = `${name} - ${role} at McDonald Insurance Services, Utah insurance specialist`;

  return (
    <div className={className}>
      {shouldShowImage ? (
        <>
          <img
            src={photo}
            alt={`${name}, ${role}`}
            className={imageClassName}
            onError={handleImageError}
            onLoad={handleImageLoad}
            style={{ display: imageLoaded ? 'block' : 'none' }}
            aria-label={ariaLabel}
          />
          {/* Show placeholder while image is loading */}
          {!imageLoaded && (
            <div 
              className={placeholderClassName}
              role="img"
              aria-label={ariaLabel}
            >
              {getInitials(name)}
            </div>
          )}
        </>
      ) : (
        // Show initials if no image or image failed to load
        <div 
          className={placeholderClassName}
          role="img"
          aria-label={ariaLabel}
        >
          {getInitials(name)}
        </div>
      )}
    </div>
  );
};

export default AgentImage;
