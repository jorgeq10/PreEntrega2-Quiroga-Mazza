import { NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

export default function NavBar() {
    return <nav className="navbar navbar-expand-xl navbar-dark bg-ligth shadow-blur nav">
        
    <div className="container">
    <img src="/logo.png" className="logo" alt="logo"></img>
        <a className="navbar-brand" href="/">LeFramboise</a>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/productos/">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/productos/Tortas">Tortas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/productos/Tartas">Tartas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/productos/Alfajores">Alfajores</a>
                </li>
            </ul>
            <CartWidget />
        </div>
    </div>
</nav>
}