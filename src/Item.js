import { Link } from "react-router-dom";
/* import ItemCount from "./ItemCount" */
const Item = ({ elemento }) => {
  return (
    <>
      <div className="card">
        <div className="card-item">
          <img src="https://via.placeholder.com/150" alt="" />
          <p>Categoria: {elemento.categoria}</p>
          <p>Nombre: {elemento.producto}</p>
          <p>Cantidad: {elemento.cantidad}</p>
          <p>Precio:AR$ {elemento.precio}</p>
          <button className="btn btn-ligh">
            <Link to={`/item/${elemento.id}`}>Ver detalle del producto</Link>
          </button>
          
          {/* <ItemCount stock={elemento.cantidad} initial={0} onAdd={()=>{console.log("acabas de comprar")}}/> */}
        </div>
      </div>
    </>
  );
};

export default Item;
