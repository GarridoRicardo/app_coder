import {createContext , useState} from 'react';
export const contexto = createContext();

const {Provider} = contexto;
const CustomComponet = ({children}) => {

    const [cart, setCart] = useState([]);

    //Agregando Productos al carrito
    const addToCart = (producto,cantidad) => {
        //Aplico condicional para verificar si el producto ya existe en el carrito
        if(isInCart(producto.id)){
            //Ejecuto un map para recorrer el la copia de cart. 
            //Si el producto ya existe en el carrito es decir que su id es igual, entonces "pusheo" la cantidad al item, sino solo dejo el item
            setCart([...cart.map(item => {
                if(item.producto.id === producto.id){
                    item.cantidad += cantidad;
                }
                return item;
            })])

        //Si es distinto entonces pusheo el producto al carrito
        }else{
        setCart([...cart, {producto,cantidad}]);
    }}

    //Funcion que me valida si el producto ya esta en el carrito
    const isInCart = (id) => {
        const productoCarrito = cart.find(item => item.producto.id === id);
        return productoCarrito;
    }

    //Restando Productos del carrito
    const removeFromCart = (producto) => {
        setCart([...cart.filter(item => item.producto.id !== producto.id)]);
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