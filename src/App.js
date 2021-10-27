import Header from "./Header"
import Main from "./Main"
import Footer from  "./Footer"
import ItemCount from "./ItemCount";
const App = () => {
return(
    <>
        <Header 
            nombre="Ricardo" 
            apellido="Garrido"
            edad={33}
            callback={()=>{console.log(("soy un callback de app"));}}
            />
        <ItemCount/>
        <Main/>
        <Footer/>
    </>
)
};
export default App