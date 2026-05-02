import React from 'react';
import { NavLink } from "react-router-dom";
import {
  Trophy,
  User,
  Info,
  Settings,
  LogOut,
  Menu
} from "lucide-react";
import "../styles/Sidebar.css";

const navItems = [
  { to: "/", label: "Dashboard", icon: Trophy },
  { to: "/users", label: "Users", icon: User },
  { to: "/quizzes", label: "Quizzes", icon: Info },
  { to: "/Category", label: "Category", icon: Settings },
];

export default function Sidebar({ isCollapsed, setIsCollapsed }) {
  return (
    <aside className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="sidebar-logo" onClick={() => setIsCollapsed(!isCollapsed)} style={{ cursor: "pointer" }}>
  <div className="logo-group">
    <img src="/logo.svg" alt="Sidi Bou Solve" className="sidebar-logo-img" />
  </div>
</div>

      <nav className="sidebar-nav">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => "sidebar-nav-item" + (isActive ? " active" : "")}
          >
            <Icon size={22} strokeWidth={1.5} />
            <span className="nav-label">{label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        {/* Container removed: sidebar-user-container */}
        <div className="sidebar-user">
          <img
            src="/ahmedavatar.png"
            alt="User"
            className="user-avatar-img"
          />
          {!isCollapsed && <span className="sidebar-username">Ahmed Etounsi</span>}
        </div>

        {!isCollapsed && (
          <button className="sidebar-logout-btn">
            <LogOut size={20} />
          </button>
        )}

        {isCollapsed && (
          <div className="collapsed-logout-icon">
            <LogOut size={20} />
          </div>
        )}
      </div>
    </aside>
  );
}