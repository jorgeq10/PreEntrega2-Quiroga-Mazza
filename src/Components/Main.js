import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";
import Cart from "./Cart";
import Checkout from "./Checkout";


const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="productos" element={<ItemListContainer />} />
                <Route path="productos/:categoria" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
            </Routes>
        </main>
    )
}

export default Main