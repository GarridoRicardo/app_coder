import { useContext } from "react";
import { contexto } from "./cartContext";

const Cart = () => {
    const resultado = useContext(contexto);
    console.log(resultado);
    return (
        <div>
            <p>Aca esta tu compra</p>
        </div>
    )
}

export default Cart
