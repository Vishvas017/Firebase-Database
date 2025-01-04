
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWnWf7l4hMgfJd-YcJNkb_GVAb-Ka-xeg",
  authDomain: "gens-15a37.firebaseapp.com",
  projectId: "gens-15a37",
  storageBucket: "gens-15a37.firebasestorage.app",
  messagingSenderId: "177340314923",
  appId: "1:177340314923:web:e49d496b9938e7fbccc16e",
  measurementId: "G-WCSKJ7JFLJ"
};

// // Initialize Firebase
 const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
 export const db = getFirestore(app);

