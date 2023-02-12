
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore" ;




const firebaseConfig = {

  apiKey: "AIzaSyCZe_dnMfXRIYQVGOcDG_klsyHAVSXVHzg",

  authDomain: "leframboise-ecommerce-d13fd.firebaseapp.com",

  projectId: "leframboise-ecommerce-d13fd",

  storageBucket: "leframboise-ecommerce-d13fd.appspot.com",

  messagingSenderId: "656529044493",

  appId: "1:656529044493:web:d841d3c6897821ca235144"

};



const app = initializeApp(firebaseConfig);

export const db =getFirestore(app);
