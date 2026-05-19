import './MissionStatement.css';

const MissionStatement = ({ mission }) => {
  return (
    <section className="mission-statement">
      <div className="mission-statement__content">
        <p className="mission-statement__text">{mission}</p>
      </div>
    </section>
  );
};

export default MissionStatement;
