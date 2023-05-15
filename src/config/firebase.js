import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";


const firebaseConfig = {
    apiKey: "AIzaSyCVYYnvuzpB37KKffwssPYETkQ9rnn4vMw",
    authDomain: "cloudsync-275b0.firebaseapp.com",
    projectId: "cloudsync-275b0",
    storageBucket: "cloudsync-275b0.appspot.com",
    messagingSenderId: "450092870263",
    appId: "1:450092870263:web:ad48f74b47e4fedb7f7472",
    measurementId: "G-1K6MXVF8M8"
  };

  const fire = firebase.initializeApp(firebaseConfig);
  export default fire;