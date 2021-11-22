import {createContext , useState} from 'react';
export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {

    const [cart, setCart] = useState([]);

    const addToCart = (producto,cantidad) => {
        if(isInCart(producto.idCategoria)){
            //Ejecuto un map para recorrer el la copia de cart. 
            //Si el producto ya existe en el carrito es decir que su id es igual, entonces "pusheo" la cantidad al item, sino solo dejo el item
            setCart([...cart.map(item => {
                if(item.producto.idCategoria === producto.idCategoria){
                    item.cantidad += cantidad;
                }
                return item;
            })])
        }else{
        setCart([...cart, {producto,cantidad}]);
    }}
    //Funcion que me valida si el producto ya esta en el carrito
    const isInCart = (idCategoria) => {
        const productoCarrito = cart.find(item => item.producto.idCategoria === idCategoria);
        return productoCarrito;
    }
    
    //Restando Productos del carrito
    const removeFromCart = (producto) => {
        setCart([...cart.filter(item => item.producto.idCategoria !== producto.idCategoria)]);
    }

     //Vaciar carrito
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