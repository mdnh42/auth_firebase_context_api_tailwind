// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXssn2DodkkAKgQtU2GcjJzpPivoha7bk",
  authDomain: "auth-firebase-tailwind-a5d44.firebaseapp.com",
  projectId: "auth-firebase-tailwind-a5d44",
  storageBucket: "auth-firebase-tailwind-a5d44.appspot.com",
  messagingSenderId: "578772224501",
  appId: "1:578772224501:web:75585ed72f3c42ce46f8bc",
  measurementId: "G-KKN7F9Z25W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app; 
