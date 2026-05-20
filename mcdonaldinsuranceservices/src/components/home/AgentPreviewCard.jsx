import AgentImage from '../common/AgentImage';
import './AgentPreviewCard.css';

const AgentPreviewCard = ({ agent }) => {
  return (
    <div className="agent-preview-card">
      <AgentImage
        name={agent.name}
        photo={agent.photo}
        role={agent.role}
        className="agent-preview-card__image-wrapper"
        imageClassName="agent-preview-card__image"
        placeholderClassName="agent-preview-card__placeholder"
      />
      <div className="agent-preview-card__info">
        <h3 className="agent-preview-card__name">{agent.name}</h3>
        <p className="agent-preview-card__role">{agent.role}</p>
      </div>
    </div>
  );
};

export default AgentPreviewCard;
