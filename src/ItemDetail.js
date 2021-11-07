import ItemCount from "./ItemCount"
import { useState } from "react"
const ItemDetail = ({item}) => {

    const [agregar, setAgregar] = useState(false)
    const onAdd = (dataCount) =>{
       setAgregar(true)
       console.log(dataCount);

    }

    if (agregar) {
        <div>
        <img src="https://via.placeholder.com/250" alt="item" />
        <p>Producto N°: {item.id}</p>
        <p>Nombre: {item.producto}</p>
        <p>Stcok disponible: {item.cantidad}</p> 
    </div>
        
    }
    else{
    return (
        <div>
            <img src="https://via.placeholder.com/250" alt="item" />
            <p>Producto N°: {item.id}</p>
            <p>Nombre: {item.producto}</p>
            <p>Stcok disponible: {item.cantidad}</p>
            <ItemCount stock={item.cantidad} initial={1} onAdd={onAdd}/> 
        </div>
        
    )
}
}
export default ItemDetail