import { useContext } from "react";
import { contexto } from "./cartContext";
const CartWidget = () => {
  const { cart } = useContext(contexto);
  console.log(cart);

  return (
    <div>
      <span className="material-icons">shopping_cart</span>
      {cart.length == 0 ? (
        <span className="count">0</span>
      ) : (
        <span className="count">{cart.length}</span>
      )}
    </div>
  );
};

export default CartWidget;
