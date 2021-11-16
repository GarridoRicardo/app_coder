import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD9-bCYS4_8MN7B7Kdt-_mfdN7P2TShUwU",
    authDomain: "app-reactjs-garrido.firebaseapp.com",
    projectId: "app-reactjs-garrido",
    storageBucket: "app-reactjs-garrido.appspot.com",
    messagingSenderId: "776098522434",
    appId: "1:776098522434:web:c358faec9d008a883bd4db"
  };

    // Inicio Firebase
    const app = firebase.initializeApp(firebaseConfig);

    //Me traigo firestore
export const firestore = firebase.firestore(app);
