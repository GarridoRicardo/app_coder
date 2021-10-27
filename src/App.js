import Header from "./Header"
import Main from "./Main"
import Footer from  "./Footer"

const App = () => {
  
  return(
    <>
        <Header 
              nombre="Ricardo" 
              apellido="Garrido"
              edad={33}
              callback={()=>{console.log(("soy un callback de app"));}}
              />
        <Main/>
        <Footer/>
    </>
  )
};
export default App