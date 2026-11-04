import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3n-Hv9NCGSxKmr8bDf7Ogb0mA8iJiPT4",
  authDomain: "recr-bd.firebaseapp.com",
  projectId: "recr-bd",
  storageBucket: "recr-bd.firebasestorage.app",
  messagingSenderId: "446111390032",
  appId: "1:446111390032:web:f8ab0424be0d9e50cbb455",
  measurementId: "G-3MQGWTBB0M"
};

// Initialize Firebase safely for SSR/Edge
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });

export { app, auth, db, googleProvider };
