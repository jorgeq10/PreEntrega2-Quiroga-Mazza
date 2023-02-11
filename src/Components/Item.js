import { Link } from "react-router-dom"
export default function Item({ item }) {
    return ( <div className="card" >
    <img src={item.imagen} className="card-img-top" alt={item.nombre}/>
    <div className="card-body">
      <h5 className="card-title">{item.nombre}</h5>
      <Link to={`/item/${item.id}`} className="btn btn-primary">Ir a detalles</Link>
    </div>
  </div>
    )
}








