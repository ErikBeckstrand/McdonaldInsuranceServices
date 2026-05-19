import AgentPreviewCard from './AgentPreviewCard';
import './AgentPreviewList.css';

const AgentPreviewList = ({ agents }) => {
  return (
    <section className="agent-preview-list">
      <div className="agent-preview-list__grid">
        {agents.map((agent) => (
          <AgentPreviewCard key={agent.id} agent={agent} />
        ))}
      </div>
    </section>
  );
};

export default AgentPreviewList;
