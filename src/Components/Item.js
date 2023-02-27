import { Link } from "react-router-dom"
import ItemQuantityCart from "./ItemQuantityCart"
export default function Item({ item }) {
  return (
    <div className="card" >
      <img src={item.Imagen} className="h-50 card-img-top imagenProducto" alt={item.Nombre} />
      <div className="card-body">
        <h5 className="card-title">{item.Nombre}</h5>
        <p>Precio: ${item.Precio}</p>
        <Link to={`/item/${item.id}`} className="btn btn-primary detalles">Ir a detalles</Link>
      </div>
      <ItemQuantityCart item={item} />
    </div>
  )
}








