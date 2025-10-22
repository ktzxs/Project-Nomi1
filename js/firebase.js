import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAeZBjEdRv5mhwk-UuadpdZkzImKdBNdJs",
  authDomain: "project-nomi-5b550.firebaseapp.com",
  projectId: "project-nomi-5b550",
  storageBucket: "project-nomi-5b550.firebasestorage.app",
  messagingSenderId: "240244825647",
  appId: "1:240244825647:web:5ab6243b4d82b2a2d230da",
  measurementId: "G-4N7WC9YTQM",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

async function signInWithGooglePopup() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw error;
  }
}

async function logout() {
  await signOut(auth);
}

export { auth, googleProvider, signInWithGooglePopup, logout };
