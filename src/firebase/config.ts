
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuración oficial del proyecto CertiFind de Intellecto
const firebaseConfig = {
  apiKey: "AIzaSy...", 
  authDomain: "studio-3335172372-76abd.firebaseapp.com",
  projectId: "studio-3335172372-76abd",
  storageBucket: "studio-3335172372-76abd.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};

const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
