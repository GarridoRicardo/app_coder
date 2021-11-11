import {useState} from "react";
const ItemCount = ({stock,initial,onAdd}) => {

    const [contador, setContador] = useState(initial)
    
    const sumar = (e) =>{
        e.preventDefault()
        if(contador < stock){
            setContador(contador + 1)
        }
    }
    const restar = (e) =>{
        e.preventDefault()
        if(contador > 0){
            setContador(contador - 1)
        }
    }
    
    return (
        <>
            <p>El contador va : {contador}</p>
            <button onClick={sumar} className="material-icons">add</button>
            <button onClick={restar} className="material-icons">remove</button>
            <button onClick={() => onAdd(contador)}>Agregar Producto</button>
        </>
    )
}

export default ItemCount;