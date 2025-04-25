// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHPNnHmoxz81EMEnb0dbFqiEMsPCvjXC0",
  authDomain: "panaderia-delicia-f550d.firebaseapp.com",
  projectId: "panaderia-delicia-f550d",
  storageBucket: "panaderia-delicia-f550d.firebasestorage.app",
  messagingSenderId: "724275186013",
  appId: "1:724275186013:web:e679db1ddf8b265760c0b4"
};

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);