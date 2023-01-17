import CartWidget from "./CartWidget";

export default function NavBar() {
    return <nav className="navbar navbar-expand-lg bg-info text-white">
        <ul className="container-fluid">
            <li class="nav-item">
                <a class="nav-link" href="#">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Nosotros</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Productos</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Contacto</a>
            </li>
            <CartWidget />
        </ul>
    </nav>
}