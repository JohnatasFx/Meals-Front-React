import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';
import './style.css';
import refresh from '../../assets/refresh-icon.png';

export default function Header() {
  return (
    <div id="header">
      <div className="logo-container">
        <img src={logo} alt="" className="src" />
      </div>
      
      <div className="menu-container">
        <Link to="/"><img src={refresh} alt="" />Gerar nova refeição</Link>
      </div>
    </div>
  );
}