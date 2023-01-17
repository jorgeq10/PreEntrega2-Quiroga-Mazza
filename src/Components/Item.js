import { Link } from "react-router-dom"
export default function Item({ item }) {
    return <div>
        <Link to={`/item/${item.id}`}><h1>Nombre:{item.nombre}</h1></Link>
        <p>Categoria: {item.categoria}</p>
        <img src={item.imagen} alt={item.nombre} />
    </div>
}