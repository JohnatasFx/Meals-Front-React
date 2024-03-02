import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import './style.css'

export default function Header() {
  return (
    <div id="header">
      <div className="logo-container">
        <img src={logo} alt="" className="src" />
      </div>
      
      <div className="menu-container">
        <Link to="/">Gerar nova refeição</Link>
      </div>
    </div>
  );
}