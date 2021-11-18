import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "./ItemList"
import {firestore} from "./firebase"
/* import productos_JSON from "./productos.json" */
const ItemListContainer = ()  =>{
    const[estado, setEstado] = useState([]);
    const {id} = useParams();
    useEffect(() => {

        const db = firestore
        const collection = db.collection("productos")  

        if(id){
        const query = collection.where("idCategoria", "==", id)
        const promesa = query.get() 
            promesa 
                .then((documento) => {
                    const estado = []
                    documento.docs.forEach(doc => {
                        const producto = {...doc.data(), id: doc.id}
                        estado.push(producto)})
                        setEstado(estado)
                })
                .catch(() => {
                    console.log("No anda");
                }) 
        }else{
            const promesa = collection.get()
            promesa
                .then((documento) => {
                    const estado = []
                    documento.docs.forEach(doc => {
                        const producto = {...doc.data(), id: doc.id}
                        estado.push(producto)})
                        setEstado(estado)
                })
                .catch(() => {
                    console.log("No anda");
                })
            
        }
    }, [id]) 

    return (
    <>
        <div>
        <ItemList stock={estado}/>
        </div>
    </>
    )}

export default ItemListContainer;
