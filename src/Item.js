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
                            <button>Ver detalle del producto</button>
                            <ItemCount stock={5} initial={0} onAdd={()=>{console.log("acabas de comprar")}}/>
        </div>
    </div>
</>
    )
}

export default Item