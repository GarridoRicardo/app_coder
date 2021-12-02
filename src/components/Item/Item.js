import { Link } from "react-router-dom";
const Item = ({ elemento }) => {
  return (
      <div className="card container-fluid mr-auto">
        <div className="card-item">
          <img src="https://via.placeholder.com/150" alt="imagen del producto" />
          <p>Categoria: {elemento.idCategoria}</p>
          <p>Nombre: {elemento.nombre}</p>
          <p>Cantidad: {elemento.stock}</p>
          <p>Precio:AR$ {elemento.precio}</p>
          <button className="btn btn-ligh">
            <Link to={`/item/${elemento.id}`}>Ver Detalle</Link>
          </button>
        </div>
      </div>
  );
};
export default Item;
