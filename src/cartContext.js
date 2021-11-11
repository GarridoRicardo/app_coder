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

    const isInCart = () => {
    }

    const removeFromCart = (producto) => {
         setCart(cart.filter(item => item.producto !== producto));
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


/*     const agregarProducto = (producto) => {
            const nuevoProducto = {cantidad,producto};
            const copia = [...cart];
            copia.push(nuevoProducto);
            setCart(copia);
    }

    const eliminarProducto = (producto) => {
        const copia = [...cart];
        const index = copia.findIndex(item => item.producto === producto);
        copia.splice(index,1);
        setCart(copia);}
    
        const isInCart = (producto) => {
            const index = cart.findIndex(item => item.producto === producto);
            return index >= 0;
        }
            const vaciar = () => {
        setCart([]);} */