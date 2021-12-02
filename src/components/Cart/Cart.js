import { useContext, useState } from "react";
import { contexto } from "../Context/CartContext";
import { Link } from "react-router-dom";
import firebase from "firebase/app";
import { firestore } from "../../firebase";

const Cart = () => {
  const { cart, vaciar, removeFromCart } = useContext(contexto);

  const [id, setId] = useState("");

  const finalizar = () => {
    const usuario = {
      nombre: "Juan",
      apellido: "Perez",
      email: "juanperez@hotmail.com",
      telefono: "123456789",
    };

    const orden = {
      buyer: usuario,
      items: cart,
      total: "",
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    const db = firestore;
    const collection = db.collection("ordenes");
    const query = collection.add(orden);

    query.then((resultado) => {
      setId(resultado.id);
      vaciar();
    });
  };

  if (id) {
    return (
      <div>
        <p>Tu orden se proceso con exito!</p>
        <p>Numero de Compra : #<strong>{id}</strong>
        </p>
      </div>
    );
  } else {
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
        <div className="container mt-5">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title">
              {cart.map((e, i) => {
                return (
                  <div className="card" key={e}>
                    <div className="card-body">
                      <h5 className="card-title">
                        Nombre: {e.producto.nombre}
                      </h5>
                      <p className="card-text">
                        Categoria: {e.producto.idCategoria}
                      </p>
                      <p className="card-text">Descripcion: {e.producto.descripcion}</p>
                      <p className="card-text">
                        Total AR$: {e.producto.precio * e.cantidad} (cantidad : {e.cantidad})
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
              <Link to={`/`} className="btn btn-primary">
                Seguir Comprando
              </Link>
              <button className="btn btn-success" onClick={finalizar}>
                Finalizar Compra
              </button>
              <button className="btn btn-danger" onClick={vaciar}>
                Vaciar
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
};
export default Cart;
