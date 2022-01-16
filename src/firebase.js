// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQ226APv38kHb-iwUYBd6Pn2iNLKTkLsc",
  authDomain: "e-commerce-c090c.firebaseapp.com",
  projectId: "e-commerce-c090c",
  storageBucket: "e-commerce-c090c.appspot.com",
  messagingSenderId: "832497781480",
  appId: "1:832497781480:web:a385e36ab2673eb175d75d",
  measurementId: "G-9ZBR10Q3NE",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
