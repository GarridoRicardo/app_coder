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
