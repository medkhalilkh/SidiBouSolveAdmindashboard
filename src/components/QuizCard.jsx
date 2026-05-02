import "../styles/QuizCard.css";

const QuizCard = ({ title, status, difficulty, qs, time, tries, iconUrl }) => {
  return (
    <div className="state-card-premium">
      <div className="card-top-icon">
        <img src={iconUrl} alt={title} className="p-icon-img" />
      </div>

      <div className="card-main-info">
        <h3>{title}</h3>
        <div className="badge-wrapper">
          <span className={`p-badge status-${status.toLowerCase()}`}>{status}</span>
          <span className={`p-badge diff-${difficulty.toLowerCase()}`}>{difficulty}</span>
        </div>
      </div>

      <div className="premium-stats-grid">
        <div className="p-stat"><span className="p-val">{qs}</span><span className="p-lab">Qs</span></div>
        <div className="p-stat"><span className="p-val">{time}</span><span className="p-lab">Durée</span></div>
        <div className="p-stat"><span className="p-val">{tries}</span><span className="p-lab">Tentatives</span></div>
      </div>

      <div className="premium-footer-actions">
        <button className="p-act-btn">👁️</button>
        <button className="p-act-btn">✏️</button>
        <button className="p-act-btn">🔒</button>
        <button className="p-act-btn del">🗑️</button>
      </div>
    </div>
  );
};

export default QuizCard;