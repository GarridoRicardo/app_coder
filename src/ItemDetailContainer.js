import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
/* import productos from "./productos.json" */
import {firestore} from "./firebase"

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const { id } = useParams()

/*     const promesa = new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(productos.find(p => p.id == id))
        }, 1000)}) */
/* promesa.then(producto => setProducto(producto)) */

    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")
        const query = collection.doc(id)     
        const promesa = query.get() 
        
        promesa
            .then((documento) => {
                const data = documento.data()
                setProducto(data)}
            )
            .catch(() => {
                console.log("No anda");
            })            
            
        }, [id])

 
    if(producto.length === 0){
            return <div>Cargando Detalle de Producto, por favor espere...</div>
    }else{
    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}
}

export default ItemDetailContainer