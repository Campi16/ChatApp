import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBqYLnjsfAl3Fq_bQQIo3WqwdIvSAE5hCU",
  authDomain: "algebra-fac4a.firebaseapp.com",
  projectId: "algebra-fac4a",
  storageBucket: "algebra-fac4a.appspot.com",
  messagingSenderId: "1091868174203",
  appId: "1:1091868174203:web:062de9fae956d89bcabfde",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app);
