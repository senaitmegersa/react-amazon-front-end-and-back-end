// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvx8WlH7iDT10-uctPyWlEiZUAdRMBDMw",
  authDomain: "project-cb65f.firebaseapp.com",
  projectId: "project-cb65f",
  storageBucket: "project-cb65f.appspot.com",
  messagingSenderId: "27229205088",
  appId: "1:27229205088:web:680ad6bc87f47db4a6c905",
  measurementId: "G-2M0HYYFTQD"
};

 const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };



