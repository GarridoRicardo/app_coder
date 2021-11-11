import {createContext , useState} from 'react';

export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {
   
    const [cart, setCart] = useState([]);

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
