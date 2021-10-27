import {useState} from "react";

const ItemCount = () => {

    const [contador, setContador] = useState(0)
    
    const sumar = () =>{
            setContador(contador + 1)
    }

    const restar = () =>{
            setContador(contador - 1)
    }
    
    return (
        <>
            <p>El contador va : {contador}</p>
            <button onClick={sumar} className="material-icons">add</button>
            <button onClick={restar} className="material-icons">remove</button>
        </>
    )
}

export default ItemCount;
