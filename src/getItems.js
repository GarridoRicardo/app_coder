/* import {firestore} from "./firebase"
export const getItems = () => {

    const db = firestore
    const collection = db.collection("productos")  
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
    }
 */