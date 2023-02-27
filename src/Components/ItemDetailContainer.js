import { useParams } from "react-router-dom";
import { getDoc , doc } from "firebase/firestore"
import { db } from "../firebase";
import { useEffect, useState } from "react";
import ItemQuantityCart from "./ItemQuantityCart"
import { toast } from "react-toastify";

const ItemDetailContainer = () => {

const [item , setItem] = useState({})

const [load , setLoad] = useState(false) 

   const {id} = useParams()
   
    useEffect(()=>{
        
        

        const itemCollection = doc(db,"Items",id)
       

        const itemFirebase = getDoc(itemCollection)

        itemFirebase.then((respuesta)=>{

            const doc = respuesta
            return doc
        }).then((item)=>{
            if(item.exists()){

                setItem({
                    id:item.id,
                    Nombre:item.get("Nombre"),
                    Precio:item.get("Precio"),
                    Categoria:item.get("Categoria"),
                    Imagen:item.get("Imagen")
        
                })
            }else{
                toast.error("producto seleccionado no existe")
            }
            setLoad(true)
        }).catch((error)=>{
            toast.error("error: " + error)
        })


    },[id])

   return (
    <div className="d-flex flex-wrap justify-content-center align-items-center">
        {!load ? "Cargando item.." :
    <div className="card">
        <img className="imagenProducto" src={item.Imagen} alt={item.Nombre}/>
        <h1 className="nombreDetalle">{item.Nombre}</h1>
        <h2 className="precioDetalle">Precio: ${item.Precio}</h2>
        <h3 className="categoriaDetalle">Categoria: {item.Categoria}</h3> 
        <ItemQuantityCart item={item} /> 
    </div>
}

    </div>
   )


}

export default ItemDetailContainer