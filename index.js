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
<form id="register-form">
  <input type="email" id="register-email" placeholder="Email">
  <input type="password" id="register-password" placeholder="Contraseña">
  <button type="submit">Registrarse</button>
</form>

<form id="login-form">
  <input type="email" id="login-email" placeholder="Email">
  <input type="password" id="login-password" placeholder="Contraseña">
  <button type="submit">Iniciar sesión</button>
</form>

<script>
  // Obtén referencias a los formularios
  const registerForm = document.querySelector('#register-form');
  const loginForm = document.querySelector('#login-form');

  // Añade un event listener al formulario de registro
  registerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Obtén los valores de los campos del formulario de registro
    const email = document.querySelector('#register-email').value;
    const password = document.querySelector('#register-password').value;
    // Llama a la función de registro (aquí deberías llamar a tu función registerUser)
    console.log("Registrando usuario con email:", email, "y contraseña:", password);
  });

  // Añade un event listener al formulario de inicio de sesión
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // Obtén los valores de los campos del formulario de inicio de sesión
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    // Llama a la función de inicio de sesión (aquí deberías llamar a tu función loginUser)
    console.log("Iniciando sesión con email:", email, "y contraseña:", password);
  });
</script>

