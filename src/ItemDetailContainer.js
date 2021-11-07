import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import productos from "./productos.json"
const ItemDetailContainer = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState([])

    useEffect(() => {
    const promesa = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(p => p.id == id))
        }, 1000)
    });
    
    promesa.then(producto => setProducto(producto))
        }, [id])

    if(producto.length === 0){
            return <div>Cargando Productos, por favor espere...</div>
    }else{
    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
    )
}
}

export default ItemDetailContainer