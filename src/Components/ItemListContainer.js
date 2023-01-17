import { useParams } from "react-router-dom"
import Item from "./Item"
import productos from "./Productos"

export default function ItemListContainer() {

const {categoria} = useParams()
    if (categoria) {
        
        const productosFiltrados = productos.filter((producto) => producto.categoria === categoria) 
        
        return <div>
        {productosFiltrados.map((item) =>{
            return <Item key={item.id} item={item} />
        })}
        </div>
    }

    return <div>
        {productos.map((item) => {
                return <Item key={item.id} item={item} />
            })}
    </div>
}