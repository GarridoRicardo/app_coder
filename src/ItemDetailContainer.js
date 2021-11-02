import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import productos from "./productos.json"

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState([])
    useEffect(() => {
        promesa
            .then(data => {
                setTimeout(() => {
                    getItem(data)
                }, 2000)})
            .catch(() => {
                console.log("error")
            })
    }, [])

    const getItem = (data) => {
        setProducto(data)
    }
    const promesa = new Promise((resolve) => {
        resolve(productos)
    })

    return (
        <div>
            <ItemDetail item={producto}/>
        </div>
        

    )
}

export default ItemDetailContainer

/**

const resultado = fetch("https://fakestoreapi.com/products?limit=5")
resultado
.then((data)  => {
        const productos_json = data.json()
        return productos_json
}
.then((array_productos) => {
    console.log(array_productos)))
 * 
 */