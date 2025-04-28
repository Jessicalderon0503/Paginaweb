import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// Importa firebaseConfig.js
import { firebaseConfig } from './firebase-config';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

