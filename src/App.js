import { BrowserRouter , Switch , Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Switch>
            <Route exact path="/" component={Main}/>
            <Route path="/categoria/:id" component={ItemListContainer}/>
            <Route path="/item/:id" component={ItemDetailContainer}/>
      </Switch>
      
      <Footer/>
    </BrowserRouter>
  );
};
export default App;
