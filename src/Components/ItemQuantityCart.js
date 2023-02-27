import { useContext, useState } from "react";
import { CartContext } from "./Context/CartContextProvider";



export default function ItemQuantityCart({ item }) {

    const { addItemToCart } = useContext(CartContext)

    const [count, setCount] = useState(1)


    const handleAdd = () => {
        setCount(count + 1)
    }

    const handleSubtract = () => {
        count === 1 ? setCount(1) : setCount(count - 1)
    }

    const handleSet = () => {
        setCount(1)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        item.count = count
        addItemToCart(item)
        setCount(1)
        
    }

    return (
        <div>
            <button onClick={handleSet}>Reset</button>
            <button onClick={handleSubtract}>-</button>
            <input className="cantidadProducto" type="number" readOnly value={count} />
            <button onClick={handleAdd}>+</button>
            <button type="submit" onClick={handleSubmit}>Agregar al Carrito</button>

        </div>
    )


}

