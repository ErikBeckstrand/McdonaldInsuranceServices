import PageContainer from '../common/PageContainer';
import SectionHeader from '../common/SectionHeader';
import AgentProfileCard from './AgentProfileCard';
import { agents } from '../../data/agents';
import './MeetTheTeam.css';

const MeetTheTeam = () => {
  return (
    <div className="meet-the-team">
      <PageContainer>
        <SectionHeader 
          title="Meet Our Team"
          subtitle="Get to know the experienced professionals who are here to help you find the perfect insurance coverage"
        />

        <div className="meet-the-team__list">
          {agents.map((agent) => (
            <AgentProfileCard key={agent.id} agent={agent} />
          ))}
        </div>
      </PageContainer>
    </div>
  );
};

export default MeetTheTeam;
