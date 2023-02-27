
import { useContext } from 'react'
import { CartContext } from './Context/CartContextProvider'
import cartIcon from './Util/carrito.png'

export default function CartWidget() {

    const { cartItems } = useContext(CartContext)

    return <div >
        <a href='/cart' className='carrito-container'>
            <img src={cartIcon} width="40px" height="40px" alt="Carrito" />
        </a>
        {cartItems.length > 0 &&
            <span className='badge'>{cartItems.length}</span>
        }

    </div>
}


