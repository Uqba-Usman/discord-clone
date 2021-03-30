import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAGhu1zcxJcjxRBvmX9Ra6OwlSVDfh83ns",
    authDomain: "discord-clone-545c5.firebaseapp.com",
    projectId: "discord-clone-545c5",
    storageBucket: "discord-clone-545c5.appspot.com",
    messagingSenderId: "551644515268",
    appId: "1:551644515268:web:46111f0d08e5274d893291",
    measurementId: "G-QY23NJHQRP"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider}; 
export default db;