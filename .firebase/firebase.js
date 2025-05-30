import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//GET Below Settings from Firebase > Project Overview > Settings > General > Your apps > Firebase SDK snippet > Config
const firebaseConfig = {
  apiKey: "AIzaSyDrd1zPTjVmwroU-hEo-8kQMnHUqZrjOaw",
  authDomain: "discord-clone-74e94.firebaseapp.com",
  projectId: "discord-clone-74e94",
  storageBucket: "discord-clone-74e94.firebasestorage.app",
  messagingSenderId: "997593465379",
  appId: "1:997593465379:web:8113483a677fd548df2796"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
