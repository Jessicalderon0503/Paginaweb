import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const registerForm = document.querySelector('#register-form');
const loginForm = document.querySelector('#login-form');
const logoutButton = document.querySelector('#logout-button');

registerForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#register-email').value;
  const password = document.querySelector('#register-password').value;
  await registerUser(email, password);
});

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.querySelector('#login-email').value;
  const password = document.querySelector('#login-password').value;
  await loginUser(email, password);
});

logoutButton.addEventListener('click', async () => {
  await logoutUser();
});


async function registerUser(email, password) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario registrado:", user);
  } catch (error) {
    console.error("Error al registrar usuario:", error);
  }
}

async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log("Usuario autenticado:", user);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
}

async function logoutUser() {
  try {
    await signOut(auth);
    console.log("Usuario cerró sesión");
  } catch (error) {
    console.error("Error al cerrar sesión:", error);
  }
}

