import { Bell } from "lucide-react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <span className="navbar-title">Sidi Bou Solve</span>
      <button className="navbar-bell-btn">
        <Bell size={18} fill="#f59e0b" color="#f59e0b" />
      </button>
    </div>
  );
}