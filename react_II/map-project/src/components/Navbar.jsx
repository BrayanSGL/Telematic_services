import { Link } from "react-router-dom";
import './Navbar.css'

export const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar__title">Gestor de Mapas</h1>
            <Link to="/" className="navbar__link">Inicio</Link>
            <Link to="/administration" className="navbar__link">Administración</Link>
            <Link to="/display" className="navbar__link">Visualización</Link>
        </nav>
    )
}
