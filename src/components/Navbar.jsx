import { useNavigate } from "react-router-dom";
import "../styles/Navbar.css";

export default function Navbar({ title = "Sidi bou solve - apprendre en jouant,progresser en s'amusant" }) {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <span className="navbar-slogan">{title}</span>

    </div>
  );
}
