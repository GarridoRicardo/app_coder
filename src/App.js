import { BrowserRouter , Switch , Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CartWidget from "./CartWidget";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route exact path="/productos" component={ItemListContainer}/>
            <Route exact path="/categoria/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
            <Route path="/cart" component={CartWidget}/>
      </Switch>
      
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
