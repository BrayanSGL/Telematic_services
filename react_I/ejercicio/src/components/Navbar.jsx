import { Link } from "react-router-dom";
import "./style.css";

export const Navbar = () => {
  return (
    <nav>
      <h1 className="nav-title">Navbar</h1>
      <ul>
        <li>
          <Link to="/" className="link">Inicio</Link>
        </li>
        <li>
          <Link to="/formulario" className="link">Formulario</Link>
        </li>
      </ul>
    </nav>
  );
};
