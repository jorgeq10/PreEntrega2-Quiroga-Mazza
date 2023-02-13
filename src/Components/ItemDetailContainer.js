import { useParams } from "react-router-dom";
import { getDoc , doc } from "firebase/firestore"
import { db } from "../firebase";
import { useEffect, useState } from "react";

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
                console.log("producto seleccionado no existe")
            }
            setLoad(true)
        }).catch((error)=>{
            console.log(error)
        })


    },[id])

   return (
    <div>
        {!load ? "Cargando item.." :
    <div className="card">
        <img src={item.Imagen} alt={item.Nombre}/>
        <h1>{item.Nombre}</h1>
        <h2>{item.Precio}</h2>
        <h3>{item.Categoria}</h3>  
    </div>
}

    </div>
   )


}

export default ItemDetailContainer