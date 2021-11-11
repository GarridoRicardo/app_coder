import { useContext } from "react";
import { contexto } from "./cartContext";

const Cart = () => {
    useContext(contexto);
    console.log(contexto);
    return (
        <div>
            <p>Aca esta tu compra</p>
        </div>
    )
}

export default Cart
