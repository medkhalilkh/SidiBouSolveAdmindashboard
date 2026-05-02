import { FileText, BarChart2, UserPlus, FilePlus, CheckSquare, XCircle, Users } from "lucide-react";
import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";

const activityIcons = {
  completed: CheckSquare,
  created: FilePlus,
  registered: UserPlus,
  failed: XCircle,
};

// Initials + color per user
const activityMeta = {
  "Hedi Temani":   { initials: "HT", color: "#e8f0fd", textColor: "#185fa5" },
  "Jasser Mtir":   { initials: "JM", color: "#e1f5ee", textColor: "#0f6e56" },
  "Houda Zainine": { initials: "HZ", color: "#faeeda", textColor: "#854f0b" },
};

const timeAgo = ["Il y a 2h", "Il y a 4h", "Il y a 5h", "Il y a 6h"];

function extractName(message) {
  return Object.keys(activityMeta).find((name) => message.startsWith(name));
}

export default function Dashboard() {
  const stats = { users: 3, quizzes: 12, attempts: 45 };

  const activity = [
    { type: "registered", message: "Hedi Temani a rejoint la plateforme" },
    { type: "completed", message: "Jasser Mtir a terminé le quiz 'Histoire de la Tunisie'" },
    { type: "created",   message: "Houda Zainine a créé un nouveau quiz" },
    { type: "completed", message: "Hedi Temani a obtenu 90 % au 'MATHEMATICS'" },
  ];

  const popular = {
    name: "Politique",
    category: "Histoire",
    difficulty: "Moyen",
    attempts: 24,
    avgScore: 85,
    questions: 10,
  };

  return (
    <div className="dashboard">
      <div className="dashboard-stats-row">
        <StatsCard
          label="Nombre total d'utilisateurs"
          value={stats.users}
          sub="↑ +3 cette semaine"
          subPositive
          icon={Users}
          accentColor="#3b82f6"
          iconBg="#e8f0fd"
        />
        <StatsCard
          label="Nombre total de quiz"
          value={stats.quizzes}
          sub="12 publiés"
          subPositive
          icon={FileText}
          accentColor="#1d9e75"
          iconBg="#e1f5ee"
        />
        <StatsCard
          label="Nombre total de tentatives"
          value={stats.attempts}
          sub="Global"
          icon={BarChart2}
          accentColor="#ef9f27"
          iconBg="#faeeda"
        />
      </div>

      <div className="dashboard-bottom-row">
        <div className="activity-card">
          <div className="activity-card-title">
            <span>▦</span> Activité récente
          </div>
          <div className="activity-list">
            {activity.map((item, i) => {
              const name = extractName(item.message);
              const meta = name ? activityMeta[name] : null;
              return (
                <div key={i} className="activity-item">
                  {meta ? (
                    <div
                      className="activity-avatar"
                      style={{ background: meta.color, color: meta.textColor }}
                    >
                      {meta.initials}
                    </div>
                  ) : (
                    (() => { const Icon = activityIcons[item.type] || CheckSquare; return <Icon size={15} />; })()
                  )}
                  <div className="activity-item-body">
                    <span>{item.message}</span>
                    <span className="activity-time">{timeAgo[i]}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {popular && (
          <div className="popular-card">
            <div className="popular-card-title">🔥 Quiz le plus populaire</div>
            <div>
              <div className="popular-card-name">{popular.name}</div>
              <div className="popular-card-tag">
                {popular.category} · {popular.difficulty}
              </div>
            </div>
            <div className="popular-card-divider" />
            <div className="popular-card-stats">
              <div className="popular-stat">
                <span className="popular-stat-value">{popular.attempts}</span>
                <span className="popular-stat-label">Attempts</span>
              </div>
              <div className="popular-stat">
                <span className="popular-stat-value">{popular.avgScore}%</span>
                <span className="popular-stat-label">Avg Score</span>
              </div>
              <div className="popular-stat">
                <span className="popular-stat-value">{popular.questions}</span>
                <span className="popular-stat-label">Questions</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}