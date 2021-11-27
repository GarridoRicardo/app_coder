import {createContext , useState} from 'react';
export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {
    const [cart, setCart] = useState([]);
    const addToCart = (producto,cantidad) => {
        if(isInCart(producto.idCategoria)){
            setCart([...cart.map(item => {
                if(item.producto.idCategoria === producto.idCategoria){
                    item.cantidad += cantidad;
                }
                return item;
            })])
        }else{
        setCart([...cart, {producto,cantidad}]);
    }}
    const isInCart = (idCategoria) => {
        const productoCarrito = cart.find(item => item.producto.idCategoria === idCategoria);
        return productoCarrito;
    }
    const removeFromCart = (producto) => {
        setCart([...cart.filter(item => item.producto.idCategoria !== producto.idCategoria)]);
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