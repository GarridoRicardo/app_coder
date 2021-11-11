import {createContext , useState} from 'react';

export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {
   
    const [cart, setCart] = useState([]);
    const addToCart = (producto,cantidad) => {
        console.log("soy el contexto en cart");
        console.log(producto,cantidad);
    }    
    const valorDelContexto = {
        cart: cart,
        addToCart: addToCart
    }
    return (
        <Provider value={valorDelContexto}>
            {children}
         </Provider>)
}

export default CustomComponet
