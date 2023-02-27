import React, { useContext, useState } from "react";
import { CartContext } from "./Context/CartContextProvider";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"
import { toast } from "react-toastify";



const Checkout = () => {

    const { cartItems, setCartItems, totalPrice } = useContext(CartContext)
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        paymentMethod: "",
    });
    const [formErrors, setFormErrors] = useState({
        name: "",
        address: "",
        paymentMethod: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        let errors = {};

        if (!formData.name) {
            errors.name = "El nombre es obligatorio";
        }

        if (!formData.address) {
            errors.address = "La dirección es obligatoria";
        }

        if (!formData.paymentMethod) {
            errors.paymentMethod = "El método de pago es obligatorio";
        }

        if (Object.keys(errors).length) {
            setFormErrors(errors);
        } else {


            const docRef = await addDoc(collection(db, "Ventas"), {
                Nombre: formData.name,
                Dirección: formData.address,
                MetodoDePago: formData.paymentMethod,
                Productos: cartItems,
                Total: totalPrice,
            });


            toast.info("¡Gracias por tu compra! Tu id de compra es " + docRef.id);

            setCartItems([])

            setFormData({
                name: "",
                address: "",
                paymentMethod: "",
            });
        }
    };

    return (
        <div class="container text-center pagoDatos">
            <h2 className="tituloCheckout">Datos y metodo de pago</h2>
            <form onSubmit={handleFormSubmit}>
                <div>
                    <label className="nombreCheckout" htmlFor="name">Nombre:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                    />
                    {formErrors.name && <span>{formErrors.name}</span>}
                </div>

                <div>
                    <label className="direccionCheckout" htmlFor="address">Dirección:</label>
                    <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                    />
                    {formErrors.address && <span>{formErrors.address}</span>}
                </div>

                <div>
                    <label className="pagoCheckout" htmlFor="paymentMethod">Método de pago:</label>
                    <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={formData.paymentMethod}
                        onChange={handleInputChange}
                    >
                        <option value="">--Selecciona un método de pago--</option>
                        <option value="tarjeta">Tarjeta de crédito</option>
                        <option value="paypal">PayPal</option>
                        <option value="transferencia">Transferencia bancaria</option>
                    </select>
                    {formErrors.paymentMethod && <span>{formErrors.paymentMethod}</span>}
                </div>

                <button className="comprarCheckout" type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
