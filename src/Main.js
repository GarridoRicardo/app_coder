import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount"

const Main = () => {
    return(
    <>
            <ItemListContainer 
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