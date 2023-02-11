import { useParams } from "react-router-dom";
import productos from "./Productos";

const ItemDetailContainer = () => {

   const {id} = useParams()
   const detalleProducto = productos.find((producto) => producto.id === parseInt(id) )


   return (

    <div className="card">
        <img src={detalleProducto.imagen} alt={detalleProducto.nombre}/>
        <h1>{detalleProducto.nombre}</h1>
        <h2>{detalleProducto.precio}</h2>
        <h3>{detalleProducto.categoria}</h3>
        
    </div>
   )


}

export default ItemDetailContainer