import './AgentPreviewCard.css';

const AgentPreviewCard = ({ agent }) => {
  const getInitials = (name) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase();
  };

  return (
    <div className="agent-preview-card">
      <div className="agent-preview-card__image-wrapper">
        <div className="agent-preview-card__placeholder">
          {getInitials(agent.name)}
        </div>
      </div>
      <div className="agent-preview-card__info">
        <h3 className="agent-preview-card__name">{agent.name}</h3>
        <p className="agent-preview-card__role">{agent.role}</p>
      </div>
    </div>
  );
};

export default AgentPreviewCard;
