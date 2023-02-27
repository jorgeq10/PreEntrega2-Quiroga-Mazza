import { useContext } from "react";
import CartItem from "./CartItem";
import { CartContext } from "./Context/CartContextProvider";


export default function Cart() {
    const { cartItems, clearCart, totalPrice } = useContext(CartContext);



    return (
        <div class="container text-center">
            <h3 className="tituloCarrito">Carrito</h3>
            <button className="eliminarTodo" onClick={clearCart}>Eliminar Todo</button>
            {cartItems.length === 0 ? (
                <p className="carritoVacio">El carrito esta vacio.</p>
            ) :
                <div className="contenedorCarrito">
                    <div className=" productoCart">
                        {cartItems.map((item, index) => {
                            return (<div className="productoIndividual">
                                <CartItem item={item} index={index} key={index} />
                            </div>
                            )

                        })}
                    </div>
                    <p className="total">Total: $ {totalPrice}</p>
                    <a href="/checkout" className="compra" >
                        Realizar Compra
                    </a>
                </div>
            }


        </div>
    )


}