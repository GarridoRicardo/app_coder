import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    return (
        <div>
            <img src="https://via.placeholder.com/250" alt="item" />
            <p>{item.id}</p>
            <p>{item.producto}</p>
            <p>{item.cantidad}</p>
            <ItemCount stock={3} initial={1} onAdd={()=>{console.log("Has comprado")}}/>
        </div>
        
    )
}

export default ItemDetail