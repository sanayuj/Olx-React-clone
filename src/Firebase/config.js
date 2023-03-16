import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyC8N9jKr19GYDyHQCH8kjR_DVP0J5sKl2c",
    authDomain: "react-olx-clone-cbd3c.firebaseapp.com",
    projectId: "react-olx-clone-cbd3c",
    storageBucket: "react-olx-clone-cbd3c.appspot.com",
    messagingSenderId: "932645999594",
    appId: "1:932645999594:web:c9d15f74e9899bfc209893",
    measurementId: "G-CKE8L67YVC"
  };


const app = firebase.initializeApp(firebaseConfig);
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();




export {auth,db,storage};