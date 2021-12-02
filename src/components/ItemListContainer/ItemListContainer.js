import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from "../ItemList/ItemList"
import {firestore} from "../../firebase"
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
                        setEstado(documento.docs.map(doc => ({...doc.data(), id: doc.id})))
                })
                .catch(() => {
                    console.log("No funciona List Container");
                }) 
        }else{
            const promesa = collection.get()
            promesa
                .then((documento) => {
                        setEstado(documento.docs.map(doc => ({...doc.data(), id: doc.id})))
                })
                .catch(() => {
                    console.log("No funciona List Container");
                })
        }
    }, [id]) 

    return (
    <>
        <div>
        <ItemList props={estado}/>
        </div>
    </>
    )}
export default ItemListContainer;
