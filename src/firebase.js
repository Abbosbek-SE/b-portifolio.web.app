import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyCyUcZy6WRMhz9jJ8zpZN6nKT4F5fq7uhU",
        authDomain: "b-portifolio.firebaseapp.com",
        projectId: "b-portifolio",
        storageBucket: "b-portifolio.appspot.com",
        messagingSenderId: "693296558925",
        appId: "1:693296558925:web:cefe25643f2f99514b3d04",
        measurementId: "G-PE9BVSBH9P"
      })

      const db = firebaseApp.firestore();
      const auth = firebase.auth();
      const storage = firebase.storage();
      
      
      export {db, auth, storage}
