import { useState } from "react";

const ItemCount = ({initial,stock}) => {

    const [contador, setContador] = useState(initial)
    const sumarContador = () =>{
        if(contador < stock){
            setContador(contador + 1)
    }}

    const restarContador = () =>{
        if(contador > 0){
            setContador(contador - 1)
    }
    }
    
    return (
        <>
            <button onClick={sumarContador}>incrementar</button>
            <button onClick={restarContador}>decrementar</button>
            <p>El contador va : {contador}</p>
        </>
    )
}

export default ItemCount;
