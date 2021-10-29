const Item = ({ elemento }) => {
    return (
        <div className="item">
            <div className="card-item">
                    <img src="" width="240" height="250" alt="" />
                    <p>{elemento.id}</p>
                    <p>{elemento.producto}</p>
                    <p>{elemento.cantidad}</p>
                    <button>Ver detalle del producto</button>
            </div>
        </div>
    )
}

export default Item