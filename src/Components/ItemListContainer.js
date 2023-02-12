import { useParams } from "react-router-dom"
import { collection, getDocs , query } from "firebase/firestore"
import { db } from "../firebase"
import Item from "./Item"
import { useEffect , useState } from "react"

export default function ItemListContainer() {


const [items, setItems] = useState([])

const [load , setLoad] = useState(false)

const {categoria} = useParams()


    useEffect(()=>{ 

        const itemsCollection = collection(db,'Items')
    
        const itemsFirebase = getDocs(query(itemsCollection)) 

        itemsFirebase.then((respuesta)=>{

            const docs = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            
            setItems(docs)

            setLoad(true)
            
        }).catch((error)=>{
            console.log(error)
        })

    },[])

    if (categoria) {
        
        const itemsFiltrados = items.filter((item) => item.Categoria === categoria) 

        
        return <div>
        {!load ? "Cargando productos.." :
        itemsFiltrados.map((item) =>{
            return <Item key={item.id} item={item} />
        })}
        </div>
    }

    return <div>
        {!load ? "Cargando productos.." :
            items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
    </div>
}