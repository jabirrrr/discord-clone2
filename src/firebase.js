import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {

    apiKey: "AIzaSyBIBufU1xmJEslSrECRAl9RErGsHm36aBU",
    authDomain: "discord-app-17051218.firebaseapp.com",
    projectId: "discord-app-17051218",
    storageBucket: "discord-app-17051218.appspot.com",
    messagingSenderId: "32476006490",
    appId: "1:32476006490:web:33eea43041b8ae69e47063",
    measurementId: "G-FBQVH78WCX"
  
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
