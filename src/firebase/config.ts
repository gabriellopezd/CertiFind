import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Esta configuración se obtiene dinámicamente del proyecto Firebase vinculado
const firebaseConfig = {
  apiKey: "AIzaSy...", // Los valores reales se sincronizarán al desplegar
  authDomain: "certifind-intellecto.firebaseapp.com",
  projectId: "certifind-intellecto",
  storageBucket: "certifind-intellecto.firebasestorage.app",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef"
};

// Inicializar Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };
