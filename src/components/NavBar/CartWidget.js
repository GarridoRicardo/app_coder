import { useContext } from "react";
import { contexto } from "../Context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
  const { cart } = useContext(contexto);
  console.log(cart);
  return (
    <div id="carrito" >
      <Link to="/Cart" className="nav-link active" aria-current="page">
      <span> Carrito </span>
      <span className="material-icons">shopping_cart</span>
      {cart.length == 0 ? (
      <span className="count">0</span>
      ) : (
        <span className="count">{cart.length}</span>
      )}
      </Link>
    </div>
  );
};
export default CartWidget;
