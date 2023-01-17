import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return <nav className="navbar navbar-expand-lg bg-info text-white">
        <ul className="container-fluid">
            <li class="nav-item">
                <NavLink class="nav-link" to="/">Inicio</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/productos/" >Productos</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/productos/Tortas" >Tortas</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/productos/Tartas" >Tartas</NavLink>
            </li>
            <li class="nav-item">
                <NavLink class="nav-link" to="/productos/Alfajores" >Alfajores</NavLink>
            </li>
            <CartWidget />
        </ul>
    </nav>
}