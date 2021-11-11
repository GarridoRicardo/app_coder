import ItemCount from "./ItemCount";
import { useState, useContext } from "react";
import { contexto } from "./cartContext";
import { useHistory } from "react-router-dom";

const ItemDetail = ({ item }) => {

  const {push} = useHistory();  
  const { addToCart } = useContext(contexto); 

  const [mostrar, setMostrar] = useState(false);

  const onAdd = (dataCount) => {
  addToCart(item, dataCount); 
    setMostrar(true);    
  };

const redireccionar = () => {
push("/cart");
}

return (
      <div>
        <img src="https://via.placeholder.com/250" alt="item" />
        <p>Producto N°: {item.id}</p>
        <p>Nombre: {item.producto}</p>
        <p>Stock disponible: {item.cantidad}</p>
        <ItemCount stock={item.cantidad} initial={1} onAdd={onAdd} />
        { mostrar && <button onClick={redireccionar}>Ver en Carrito</button> }
      </div>
    );
  }

export default ItemDetail;
