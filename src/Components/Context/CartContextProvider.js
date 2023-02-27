
import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';


export const CartContext = createContext()

export default function CartContextProvider(props) {


    const [cartItems, setCartItems] = useState([])
    const storedCartItems = localStorage.getItem("carrito")
    const parseItems = JSON.parse(storedCartItems)

    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (item.Precio * item.count)
    }, 0)

    useEffect(() => {
        if (parseItems) {
            setCartItems(parseItems)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(cartItems))
    }, [cartItems])

    const addItemToCart = (item) => {

        const itemIndex = cartItems.findIndex((product) => item.id === product.id);

        if (itemIndex >= 0) {
           
            const updatedCart = [...cartItems];
            updatedCart[itemIndex].count += item.count;

            setCartItems(updatedCart)
        } else {
    
            setCartItems([...cartItems, item]);
        
        }

        toast.success('Producto agregado al carrito!', {
            position: "bottom-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    };

    const removeFromCart = (index) => {

        setCartItems([...cartItems.slice(0, index), ...cartItems.slice(index + 1)])
    };

    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, setCartItems, addItemToCart, removeFromCart, clearCart , totalPrice }}>
            {props.children}
        </CartContext.Provider>
    );
}