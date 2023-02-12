import { Link } from "react-router-dom"
import ItemQuantityCart from "./ItemQuantityCart"
export default function Item({ item }) {
    return ( <div className="card" >
    <img src={item.Imagen} className="card-img-top" alt={item.Nombre}/>
    <div className="card-body">
      <h5 className="card-title">{item.Nombre}</h5>
      <Link to={`/item/${item.id}`} className="btn btn-primary">Ir a detalles</Link>
    </div>
    <ItemQuantityCart item={item} />
  </div>
    )
}








