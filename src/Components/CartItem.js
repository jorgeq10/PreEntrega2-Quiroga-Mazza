import { useContext } from "react"
import { CartContext } from "./Context/CartContextProvider"


export default function CartItem({item, index}) {

    const {removeFromCart} = useContext(CartContext)

    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            <img src={item.Imagen} className="card-img-top prodCarrito" alt={item.Nombre} />
            <h5 className="card-title">{item.Nombre}</h5>
            <p>${item.Precio}</p>
            <p>Cantidad: {item.count}</p>
            <button onClick={() => {removeFromCart(index)}}>Eliminar</button>
        </div>
    )
}