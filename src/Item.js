import { Link } from "react-router-dom"
import ItemCount from "./ItemCount"
const Item = ({ elemento }) => {
    return (
<>
    
    <div className="card">
        <div className="card-item">
                            <img src="https://via.placeholder.com/150" alt="" />
                            <p>{elemento.id}</p>
                            <p>{elemento.producto}</p>
                            <p>{elemento.cantidad}</p>
                            <p>{elemento.precio}</p>
                            <Link to="/item">
                                Ver detalle del producto                           
                            </Link>
                            
                            <ItemCount stock={5} initial={0} onAdd={()=>{console.log("acabas de comprar")}}/>
        </div>
    </div>
</>
    )
}

export default Item