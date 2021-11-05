import Item from './Item'
const ItemList = ({stock}) => {
    return(

        <div>
            {stock.map((e,i) => {
                return(<Item key={e.id} elemento={e}/>)})}
        </div>
    )}

export default ItemList
