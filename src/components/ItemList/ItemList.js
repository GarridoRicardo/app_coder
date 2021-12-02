import Item from '../Item/Item'
const ItemList = ({props}) => {
    return(
        <div>
            {props.map((producto => 
                <Item key={producto.id} elemento={producto}/>
            ))}
        </div>
    )}
    
export default ItemList
