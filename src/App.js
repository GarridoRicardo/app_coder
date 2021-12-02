import { BrowserRouter , Switch , Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import CustomComponet from "./components/Context/CartContext";
import Cart from "./components/Cart/Cart";

const App = () => {
  return (
      <BrowserRouter>
          <CustomComponet>
            <Header/>
            <Switch>
                  <Route exact path="/" component={ItemListContainer}/>
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
