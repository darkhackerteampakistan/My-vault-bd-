/* ============================================================
   MyVault BD — Firebase Configuration
   ▸ আপনার নিজের প্রজেক্ট কনফিগ সহ
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
import {
  getStorage, ref, uploadBytes, getDownloadURL, deleteObject
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-storage.js";

/* ⚠️ আপনার Firebase config */
const firebaseConfig = {
  apiKey: "AIzaSyAkaa2vXfw1R_2dO9y9makyb1ejHNWCaVM",
  authDomain: "my-vault-bd.firebaseapp.com",
  projectId: "my-vault-bd",
  storageBucket: "my-vault-bd.firebasestorage.app",
  messagingSenderId: "1050177279067",
  appId: "1:1050177279067:web:b7139b58127888b7195b7e",
  measurementId: "G-CB5FVP9YGD"
};

const app     = initializeApp(firebaseConfig);
const auth    = getAuth(app);
const db      = getFirestore(app);
const storage = getStorage(app);

export {
  app, auth, db, storage,
  createUserWithEmailAndPassword, signInWithEmailAndPassword,
  signOut, onAuthStateChanged, sendPasswordResetEmail, updateProfile,
  doc, setDoc, getDoc, updateDoc, collection, addDoc,
  query, where, orderBy, getDocs, serverTimestamp,
  onSnapshot, deleteDoc, increment,
  ref, uploadBytes, getDownloadURL, deleteObject
};
