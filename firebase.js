/* ============================================================
   MyVault BD — Firebase (Storage ছাড়া)
   ▸ ছবি যাবে Cloudinary-তে
   ============================================================ */

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  getFirestore, doc, setDoc, getDoc, updateDoc,
  collection, addDoc, query, where, orderBy,
  getDocs, serverTimestamp, onSnapshot, deleteDoc, increment
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAkaa2vXfw1R_2dO9y9makyb1ejHNWCaVM",
  authDomain: "my-vault-bd.firebaseapp.com",
  projectId: "my-vault-bd",
  storageBucket: "my-vault-bd.firebasestorage.app",
  messagingSenderId: "1050177279067",
  appId: "1:1050177279067:web:b7139b58127888b7195b7e",
  measurementId: "G-CB5FVP9YGD"
};

const app  = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db   = getFirestore(app);

export {
  app, auth, db,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile,
  doc, setDoc, getDoc, updateDoc, collection, addDoc,
  query, where, orderBy, getDocs, serverTimestamp,
  onSnapshot, deleteDoc, increment
};
