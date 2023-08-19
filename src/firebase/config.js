// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBknHpsTBkaV2khSuXMFmKxyNoc0FK82Ek",
  authDomain: "spashop-35db9.firebaseapp.com",
  projectId: "spashop-35db9",
  storageBucket: "spashop-35db9.appspot.com",
  messagingSenderId: "1012963749724",
  appId: "1:1012963749724:web:5115530d49e21383e55b99",
  measurementId: "G-8MTRR8TME2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);