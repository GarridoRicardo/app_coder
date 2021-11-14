import { BrowserRouter , Switch , Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import CustomComponet from "./cartContext";
import Cart from "./Cart";
import Checkout from "./Checkout";

const App = () => {
  return (

      <BrowserRouter>
          <CustomComponet>
            <Header/>
            <Switch>
                  <Route exact path="/" component={Main}/>
                  <Route path="/checkout" component={Checkout}/>
                  <Route exact path="/productos" component={ItemListContainer}/>
                  <Route exact path="/categoria/:id" component={ItemListContainer}/>
                  <Route path="/item/:id" component={ItemDetailContainer}/>
                  <Route path="/cart" component={Cart}/>
            </Switch>
            <Footer/>
        </CustomComponet>
      </BrowserRouter>

  );
};
export default App;
