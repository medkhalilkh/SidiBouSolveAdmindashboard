import { useState } from "react";
import { Bell } from "lucide-react";
import "../styles/Navbar.css";

const notifications = [
  { id: 1, message: "Hedi Temani a rejoint la plateforme", time: "Il y a 2h" },
  { id: 2, message: "Jasser Mtir a terminé le quiz 'Histoire de la Tunisie'", time: "Il y a 4h" },
  { id: 3, message: "Houda Zainine a créé un nouveau quiz", time: "Il y a 5h" },
  { id: 4, message: "Hedi Temani a obtenu 90% au 'MATHEMATICS'", time: "Il y a 6h" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <span className="navbar-title">Sidi Bou Solve</span>

      <div className="navbar-bell-wrapper">
        <button className="navbar-bell-btn" onClick={() => setOpen(!open)}>
          <Bell size={18} fill="#f59e0b" color="#f59e0b" />
          <span className="navbar-bell-badge">{notifications.length}</span>
        </button>

        {open && (
          <>
            <div className="navbar-notif-overlay" onClick={() => setOpen(false)} />
            <div className="navbar-notif-dropdown">
              <div className="navbar-notif-header">Notifications</div>
              {notifications.map((n) => (
                <div key={n.id} className="navbar-notif-item">
                  <span className="navbar-notif-dot" />
                  <div className="navbar-notif-body">
                    <p className="navbar-notif-msg">{n.message}</p>
                    <span className="navbar-notif-time">{n.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}