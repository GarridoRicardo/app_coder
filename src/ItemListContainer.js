import { useState, useEffect } from 'react';
import productos from "./productos.json"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom';


const ItemListContainer = ()  =>{
    
    const {id} = useParams();
    
    const[estado, setEstado] = useState([]);
    
    useEffect(() => {

        if(id){
            const promesa = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(productos.filter(prod => prod.categoria == id));}, 1000);
            },[]);

                promesa
                .then((data) => {setEstado(data)}
                )
                .catch(() => {console.log("Intente nuevamente")})

        }else{
            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    resolve(productos);
                    },2000);
                }, []);
                promesa
                .then((data) => {setEstado(data)}
                )
                .catch(() => {console.log("Intente nuevamente")})
                
        }


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
