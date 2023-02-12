import { useState } from "react";

export default function ItemQuantityCart({item}) {

const [count, setCount] = useState(1)


    const handleAdd = () => {
    setCount(count + 1)
}

    const handleSubtract = () => {
    setCount(count - 1)
}

    const handleSet = () => {
    setCount(1)
}

    const handleSubmit = (e) => {
    e.preventDefault()

    item.count = count  

    localStorage.setItem(item.Nombre , item)
} 

return (
    <div>
        <button onClick={handleSet}>Set</button>
        <button onClick={handleSubtract}>-</button>
        <input type="number" readOnly value={count}/>
        <button onClick={handleAdd}>+</button>
        <button type="submit" onClick={handleSubmit}>Agregar al Carrito</button>

    </div>
)


}

