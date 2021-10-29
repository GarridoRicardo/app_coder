import ItemListContainer from "./ItemListContainer"
import ItemCount from "./ItemCount"

const Main = () => {
    return(
    <>
            <ItemListContainer 
                producto ={"mates"} 
                cantidad= {50}
            />
            <ItemCount/>
    </>
    )
}

export default Main