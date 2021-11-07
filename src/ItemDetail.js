import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {

    const stateUpliftingDesdeCounter = (dataCount) =>{

       console.log(dataCount);
    }

    return (
        <div>
            <img src="https://via.placeholder.com/250" alt="item" />
            <p>Producto N°: {item.id}</p>
            <p>Nombre: {item.producto}</p>
            <p>Stcok disponible: {item.cantidad}</p>
            <ItemCount stock={item.cantidad} initial={1} onAdd={stateUpliftingDesdeCounter}/>
        </div>
        
    )
}

export default ItemDetail