import { Users, FileText, BarChart2, CheckSquare, FilePlus, UserPlus, XCircle } from "lucide-react";
import StatsCard from "../components/StatsCard";
import "../styles/Dashboard.css";

const activityIcons = {
  completed: CheckSquare,
  created: FilePlus,
  registered: UserPlus,
  failed: XCircle,
};

export default function Dashboard() {
  // Static Stats Data
  const stats = { users: 3, quizzes: 12, attempts: 45 };

  // Static Activity Data with your specified users
  const activity = [
    { type: "registered", message: "Hedi Temani a rejoint la plateforme" },
    { type: "completed", message: "Jasser Mtir a terminé le quiz 'Histoire de la Tunisie'" },
    { type: "created", message: "Houda Zainine a créé un nouveau quiz" },
    { type: "completed", message: "Hedi Temani a obtenu 90 % au 'MATHEMATICS'" },
  ];

  // Static Popular Quiz Data
  const popular = {
    name: "Politique",
    category: "Histoire",
    difficulty: "Moyen",
    attempts: 24,
    avgScore: 85,
    questions: 10
  };

  return (
    <div className="dashboard">
      <div className="dashboard-stats-row">
        <StatsCard label="Nombre total d'utilisateurs" value={stats.users} sub="+ 3 cette semaine" icon={Users} />
        <StatsCard label="Nombre total de quiz" value={stats.quizzes} sub="12 publiés" icon={FileText} />
        <StatsCard label="Nombre total de tentatives" value={stats.attempts} sub="Global" icon={BarChart2} />
      </div>

      <div className="dashboard-bottom-row">
        <div className="activity-card">
          <div className="activity-card-title">
            <span>▦</span> Activité récente
          </div>
          <div className="activity-list">
            {activity.map((item, i) => {
              const Icon = activityIcons[item.type] || CheckSquare;
              return (
                <div key={i} className="activity-item">
                  <Icon size={15} />
                  <span>{item.message}</span>
                </div>
              );
            })}
          </div>
        </div>

        {popular && (
          <div className="popular-card">
            <div className="popular-card-title">🔥Quiz le plus populaire</div>
            <div>
              <div className="popular-card-name">{popular.name}</div>
              <div className="popular-card-tag">{popular.category} · {popular.difficulty}</div>
            </div>
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