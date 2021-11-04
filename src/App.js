import { BrowserRouter , Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      
      <Main/>
      
            <Routes exact path='/' component={ItemListContainer}/>
            <Routes path='/categoria/:id' component={ItemListContainer}/>
            <Routes path='/item/:id' component={ItemDetailContainer}/>
      
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
