import ItemListContainer from "./ItemListContainer";
import { Route,Routes } from "react-router-dom";
import ItemDetailContainer from "./ItemDetailContainer";
import Home from "./Home";

const Main = () => {
    return (
        <main>
            <Routes> 
                <Route path="/" element={<Home/>} />
                <Route path="productos" element={<ItemListContainer/>} />
                <Route path="productos/:categoria" element={<ItemListContainer/>} />
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    )
}

export default Main