import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {


    const stateUpliftingDesdeCounter = (dataCount) =>{

       console.log(dataCount);
    }

    return (
        <div>
            <img src="https://via.placeholder.com/250" alt="item" />
            <p>{item.id}</p>
            <p>{item.producto}</p>
            <p>{item.cantidad}</p>
            <ItemCount stock={3} initial={1} onAdd={stateUpliftingDesdeCounter}/>
        </div>
        
    )
}

export default ItemDetail