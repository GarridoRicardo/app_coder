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
        }, 2000)
    });
    
    promesa.then(producto => setProducto(producto))
        }, [id])

    return (
        <div>
            <ItemDetail item={productos}/>
        </div>
        

    )
}

export default ItemDetailContainer