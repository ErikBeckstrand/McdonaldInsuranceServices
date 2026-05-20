import AgentImage from '../common/AgentImage';
import './AgentProfileCard.css';

const AgentProfileCard = ({ agent }) => {
  return (
    <div className="agent-profile-card">
      <AgentImage
        name={agent.name}
        photo={agent.photo}
        role={agent.role}
        className="agent-profile-card__image-wrapper"
        imageClassName="agent-profile-card__image"
        placeholderClassName="agent-profile-card__placeholder"
      />
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
