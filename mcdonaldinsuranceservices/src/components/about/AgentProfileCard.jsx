import './AgentProfileCard.css';

const AgentProfileCard = ({ agent }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="agent-profile-card">
      <div className="agent-profile-card__image-wrapper">
        <div 
          className="agent-profile-card__placeholder"
          role="img"
          aria-label={`${agent.name} - Experienced ${agent.role} at McDonald Insurance Services, Utah insurance specialist`}
        >
          {getInitials(agent.name)}
        </div>
      </div>
      <div className="agent-profile-card__content">
        <h3 className="agent-profile-card__name">{agent.name}</h3>
        <p className="agent-profile-card__role">{agent.role}</p>
        <p className="agent-profile-card__blurb">{agent.blurb}</p>
        <div className="agent-profile-card__contact">
          <a 
            href={`tel:${agent.phone}`} 
            className="agent-profile-card__contact-item"
            aria-label={`Call ${agent.name} for insurance quotes at ${agent.phone}`}
          >
            📞 {agent.phone}
          </a>
          <a 
            href={`mailto:${agent.email}`} 
            className="agent-profile-card__contact-item"
            aria-label={`Email ${agent.name} for insurance information at ${agent.email}`}
          >
            ✉️ {agent.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default AgentProfileCard;
