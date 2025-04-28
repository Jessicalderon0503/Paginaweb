import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// Importa firebaseConfig.js
import { firebaseConfig } from './firebase-config';

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

createUserWithEmailAndPassword ;
async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Registro exitoso
    const user = userCredential.user;
    console.log("Usuario registrado:", user);
    // Redirige al usuario a la página principal o muestra un mensaje de éxito
  } catch (error) {
    // Maneja los errores (por ejemplo, muestra un mensaje al usuario)
    console.error("Error al registrar usuario:", error);
  }
}
signInWithEmailAndPassword;
async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Inicio de sesión exitoso
    const user = userCredential.user;
    console.log("Usuario autenticado:", user);
    // Redirige al usuario a la página principal o muestra un mensaje de éxito
  } catch (error) {
    // Maneja los errores (por ejemplo, muestra un mensaje al usuario)
    console.error("Error al iniciar sesión:", error);
  }
}
async function logoutUser() {
  try {
    await signOut(auth);
    // Cierre de sesión exitoso
    console.log("Usuario cerró sesión");
    // Redirige al usuario a la página de inicio de sesión
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
}
