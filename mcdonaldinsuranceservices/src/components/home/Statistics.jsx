import './Statistics.css';

const Statistics = ({ statistics }) => {
  return (
    <section className="statistics">
      <div className="statistics__grid">
        {statistics.map((stat, index) => (
          <div key={index} className="statistics__item">
            <div className="statistics__value">{stat.value}</div>
            <div className="statistics__label">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
