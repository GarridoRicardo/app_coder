import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"
import {firestore} from "./firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({})
    const { id } = useParams();

    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")
        const query = collection.doc(id)     
        const promesa = query.get() 
        
        promesa
            .then((documento) => {
                console.log("Consulta exitosa")
                const data = documento.data()
                setProducto(data)
            }
            )
            .catch(() => {
                console.log("No anda");
            })            
            
        }, [id])

    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )

}

export default ItemDetailContainer