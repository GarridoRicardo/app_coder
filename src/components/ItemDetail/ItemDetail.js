import ItemCount from "../ItemCount/ItemCount";
import { useState, useContext } from "react";
import { contexto } from "../Context/CartContext";
import { useHistory } from "react-router-dom";
const ItemDetail = ({ item }) => {
  const {push} = useHistory();  
  const { addToCart } = useContext(contexto); 
  const [mostrar, setMostrar] = useState(false);
  const onAdd = (cantidad) => {
    addToCart(item,cantidad); 
    setMostrar(true);    
  };
const redireccionar = () => {
push("/Cart");
}
return (
      <div>
        <img src="https://via.placeholder.com/250" alt="item" />
        <p>Producto N°: {item.idCategoria}</p>
        <p>Nombre: {item.nombre}</p>
        <p>Precio por Unidad:AR$ {item.precio}</p>
        <p>Stock disponible: {item.stock}</p>
        <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
        { mostrar && <button onClick={redireccionar}>Ver en Carrito</button> }
      </div>
    );
  }
export default ItemDetail;
