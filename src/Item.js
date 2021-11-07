import { Link } from "react-router-dom"
/* import ItemCount from "./ItemCount" */
const Item = ({ elemento }) => {
    return (
<>
    
    <div className="card">
        <div className="card-item">
                            <img src="https://via.placeholder.com/150" alt="" />
                            <p>Categoria: {elemento.categoria}</p>
                            <p>{elemento.producto}</p>
                            <p>{elemento.cantidad}</p>
                            <p>{elemento.precio}</p>
                            <Link to={`/item/${elemento.id}`}>Ver detalle del producto                      
                            </Link>
                            {/* <ItemCount stock={elemento.cantidad} initial={0} onAdd={()=>{console.log("acabas de comprar")}}/> */}
        </div>
    </div>
</>
    )
}

export default Item