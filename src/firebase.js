import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKmrIhGfwqeBHsx8JjJ5axddRkpRPQyDU",
    authDomain: "applestore-2f29b.firebaseapp.com",
    projectId: "applestore-2f29b",
    storageBucket: "applestore-2f29b.appspot.com",
    messagingSenderId: "664394151008",
    appId: "1:664394151008:web:b698adc4c7cb007d317f05",
    measurementId: "G-SB87QPSZTD"
  };
  
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()

export {auth, db}