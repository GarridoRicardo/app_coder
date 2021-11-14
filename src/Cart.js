import { useContext } from "react";
import { contexto } from "./cartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, vaciar, removeFromCart } = useContext(contexto);

  if (cart.length === 0) {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-10 mx-auto text-center text-title">
            <h1>Tu carrito esta vacio</h1>
            <Link to="/">
              <button className="btn btn-warning my-3">
                Volver a la tienda
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title">
              {cart.map((e, i) => {
                return (
                  <div className="card" key={e}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Nombre: {e.producto.producto}
                      </h5>
                      <p className="card-text">
                        Categoria: {e.producto.categoria}
                      </p>
                      <p className="card-text">Cantidad: {e.cantidad}</p>
                      <p className="card-text">
                        Precio AR$: {e.producto.precio * e.cantidad}
                      </p>
                      <button
                        className="btn btn-info"
                        onClick={() => removeFromCart(e.producto)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                );
              })}
              <Link to={`/productos`} className="btn btn-primary">
                Seguir Comprando
              </Link>
              <Link to={`/checkout`} className="btn btn-success">
                Terminar mi compra
              </Link>
              <button className="btn btn-danger" onClick={vaciar}>
                Vaciar
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
};

export default Cart;
