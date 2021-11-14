import { useContext } from "react";
import { contexto } from "./cartContext";

const Cart = () => {

    const resultado = useContext(contexto);
    return (
        <main>
            {resultado.length == 0?<p>Tu carrito esta vacio</p>:
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Nombre del producto</th>
                            <th>Cantidad</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    
                </table>
            }
        </main>
    )

}

export default Cart
