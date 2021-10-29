import { useState, useEffect } from 'react';
import productos from "./productos.json"
import ItemList from "./ItemList"

const ItemListContainer = ()  =>{
    
    
    const[estado, setEstado] = useState([]);
    
    useEffect(() => {
        const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                setEstado(productos);
                },2000);
            }, []);
            
            promesa
            .then(() => {console.log("Se ha solicitado tu pedido")}
            )
            .catch(() => {console.log("Intente nuevamente")})
        }, []);
    
    if(estado.length === 0){
        return <div>Cargando Productos, por favor espere...</div>
    }else{
    return (
    <>
        <div>
        <ItemList stock={productos}/>
        </div>
    </>
    )}
}

export default ItemListContainer;

/* estado /efecto /promesa va aca

El estado va al itemlist que recibe props envia a itemlist y ahi se mapea

se envia a uitem que recibe data y asi muestra mediante props

--------------------------------------------------------------------
import usuarios from './usuarios.json';

const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        setUsuarios(usuarios);
    },2000);
    });
    
    promesa.then(() => {console.log("Se ha solicitado tu pedido")}
    );
    promesa.catch(() => {console.log("Intente nuevamente")})

-----------------------------------------------------------------------

 const App = () => {
const[usuarios, setUsuarios] = useState([]);

useEffect(() => {
    setTimeout(() => {
        setUsuarios(usuarios);
    },2000);

    if(usuarios.length == 0){
        return <p>loading...</p>
    }else{    
        return()

        <div className="">
            h1>Hola Mundo</h1>
            {usuarios.map((e,i) => {
            return( <p key={e.id}>{e.nombre}</p>)}}
        </div>

}
export default App;


*/
