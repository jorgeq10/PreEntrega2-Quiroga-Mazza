import { useParams } from "react-router-dom"
import { collection, getDocs, query } from "firebase/firestore"
import { db } from "../firebase"
import Item from "./Item"
import { useEffect, useState } from "react"
import { toast } from "react-toastify"


export default function ItemListContainer() {


    const [items, setItems] = useState([])

    const [load, setLoad] = useState(false)

    const { categoria } = useParams()


    useEffect(() => {


        const itemsCollection = collection(db, 'Items')

        const itemsFirebase = getDocs(query(itemsCollection))

        itemsFirebase.then((respuesta) => {
            toast.info("cargando productos..", {
                autoClose: 100,
            })


            const docs = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))



            setItems(docs)

            setLoad(true)
            toast.success("Productos Cargados!",
                {
                    position: "bottom-right",
                    hideProgressBar: true,
                    theme: "dark",
                    autoClose: 600,
                    delay: 500,
                }
            )





        }).catch((error) => {
            toast.error("Ocurrio un error al cargar los productos")
        })

    }, [])


    if (categoria) {

        const itemsFiltrados = items.filter((item) => item.Categoria === categoria)

        return <div className="d-flex flex-wrap justify-content-center align-items-center gap-5">
            {!load ? null :
                itemsFiltrados.map((item) => {
                    return <Item key={item.id} item={item} />

                })}
        </div>

    }



    return <div className="d-flex flex-wrap justify-content-center align-items-center gap-5" >
        {!load ? null :
            items.map((item) => {
                return <Item key={item.id} item={item} />
            })}
    </div>

}
