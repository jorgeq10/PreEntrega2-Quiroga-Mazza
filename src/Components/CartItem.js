import { useContext } from "react"
import { CartContext } from "./Context/CartContextProvider"


export default function CartItem({ item, index }) {

    const { removeFromCart } = useContext(CartContext)

    return (
        <div className="card cartItem">
            <img src={item.Imagen} className="h-50 card-img-top " alt={item.Nombre} />
            <h5 className="card-title">{item.Nombre}</h5>
            <p className="precioCart">${item.Precio}</p>
            <p className="cantidadCart">Cantidad: {item.count}</p>
            <button className="eliminar" onClick={() => { removeFromCart(index) }}>Eliminar</button>
        </div>
    )
}