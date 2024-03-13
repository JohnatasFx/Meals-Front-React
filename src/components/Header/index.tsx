import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./style.css";
import refresh from "../../assets/refresh-icon.png";

export default function Header() {
  const handleRefresh = () => {
    window.location.reload();
  };
  return (
    <div id="header">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="src" />
      </div>

      <div className="menu-container">
        <Link to="/" onClick={handleRefresh}>
          <button>
            <img src={refresh} alt="Refresh" />
            Gerar nova refeição
          </button>
        </Link>
      </div>
    </div>
  );
}