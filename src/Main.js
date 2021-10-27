import Item from "./ItemListContainer"
import ItemCount from "./ItemCount"

const Main = () => {
    return(
    <>
            <Item 
                producto ={"mates"} 
                cantidad= {50}
            />
            <ItemCount
                inicial = {0}
                stock = {100}
            />
    </>
    )
}

export default Main