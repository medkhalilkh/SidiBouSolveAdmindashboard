import "../styles/StatsCard.css";

export default function StatsCard({ label, value, sub, icon: Icon }) {
  return (
    <div className="stats-card">
      <div className="stats-card-header">
        <span className="stats-card-label">{label}</span>
        {Icon && <Icon size={20} className="stats-card-icon" strokeWidth={1.8} />}
      </div>
      <div className="stats-card-value">{value}</div>
      {sub && <div className="stats-card-sub">{sub}</div>}
    </div>
  );
}
