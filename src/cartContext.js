import {createContext , useState} from 'react';

export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto,cantidad) => {
        console.log("soy agregar producto");
        console.log(producto,cantidad);
        setCart([...cart, {producto,cantidad}]);
    }

    const removeFromCart = (producto) => {
        setCart([...cart.filter(item => item.producto.id !== producto.id)]);
    }

    const vaciar = () => {
        setCart([]);
    }

    const valorDelContexto = {
        cart : cart,
        addToCart : addToCart,
        removeFromCart : removeFromCart,
        vaciar : vaciar
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>)
}
export default CustomComponet

/*     
        const isInCart = (producto) => {
            const index = cart.findIndex(item => item.producto === producto);
            return index >= 0;
        }
    */