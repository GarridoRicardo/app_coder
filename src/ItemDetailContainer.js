import { useState, useEffect } from "react"
import ItemDetail from "./ItemDetail"
import productos from "./productos.json"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const { id } = useParams()

    const [producto, setProducto] = useState([])
    useEffect(() => {
        if(id){
        promesa
            .then(data => {
                setTimeout(() => {
                    getItem(data.filter(item => item.id === id))
                }, 2000)
            })}
            else{
                promesa
                .catch(()=>{
                    console.log("Error")
                })
            }
            
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