import { useParams } from "react-router-dom";
import productos from "./Productos";

const ItemDetailContainer = () => {

   const {id} = useParams()
   const detalleProducto = productos.find((producto) => producto.id === parseInt(id) )


   return (

    <div>
        <h1>{detalleProducto.nombre}</h1>
        <h2>{detalleProducto.precio}</h2>
        <h3>{detalleProducto.categoria}</h3>
        <img src={detalleProducto.imagen} alt={detalleProducto.nombre}/>
    </div>
   )


}

export default ItemDetailContainer