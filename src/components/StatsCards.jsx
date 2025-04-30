import '../styles/StatsCards.css';

function StatCard({ title, value, subtext, trend }) {
  const isPositive = trend?.includes('+');

  return (
    <div className="stat-card">
      <div className="stat-title">{title}</div>
      <div className="stat-value">{value}</div>
      {subtext && (
        <div className={`stat-sub ${isPositive ? 'positive' : 'negative'}`}>
          {trend} {subtext}
        </div>
      )}
    </div>
  );
}

export default function StatsCards({ data }) {
  return (
    <div className="stat-card-grid">
      {data.map((card, idx) => (
        <StatCard
          key={idx}
          title={card.title}
          value={card.value}
          subtext={card.subtext}
          trend={card.trend}
        />
      ))}
    </div>
  );
}
