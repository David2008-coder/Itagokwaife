// firebase.js
// Firebase configuration and initialization

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBlE8ajtSqTv4FqIcQ_NUcU4o1L4CkyDmQ",
  authDomain: "itagokwife.firebaseapp.com",
  projectId: "itagokwife",
  storageBucket: "itagokwife.firebasestorage.app",
  messagingSenderId: "205703663422",
  appId: "1:205703663422:web:e0efc5549d8dba66bea66f",
  measurementId: "G-S2WVMFLD2K"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);