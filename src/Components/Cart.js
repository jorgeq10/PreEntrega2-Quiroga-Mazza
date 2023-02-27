import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Context/CartContextProvider";


export default function Cart() {
    const { cartItems, clearCart, totalPrice } = useContext(CartContext);



    return (
        <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            <h3>Carrito</h3>
            <button onClick={clearCart}>Vaciar</button>
            {cartItems.length === 0 ? (
                <p>El carrito esta vacio.</p>
            ) :
                <div className="d-flex flex-wrap justify-content-center align-items-center cardCarrito">
                    <div className="d-flex flex-wrap justify-content-center align-items-center">
                        {cartItems.map((item, index) => {
                            return (
                                <CartItem item={item} index={index} key={index} />
                            )

                        })}
                    </div>
                    <p>Total: $ {totalPrice}</p>
                    <a href="/checkout" >
                        Realizar Compra
                    </a>
                </div>
            }


        </div>
    )


}