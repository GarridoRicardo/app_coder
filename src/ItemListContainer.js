import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import productos_JSON from "./productos.json"


const ItemListContainer = ()  =>{
    
    const[estado, setEstado] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
            const promesa = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos_JSON.filter(prod => prod.categoria == id));}, 2000);
                
            },);

                promesa
                .then((data) => {setEstado(data)},[id]
                )
                .catch(() => {console.log("Intente nuevamente")})
        }, []);

    if(estado.length === 0){
        return <div>Cargando Productos, por favor espere...</div>
    }else{
    return (
    <>
        <div>
        <ItemList stock={estado}/>
        </div>
    </>
    )}
}

export default ItemListContainer;
