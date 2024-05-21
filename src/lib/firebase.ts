// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDpXvbL_k3e25dVWo4ZH_bSuvYPoFTTHns",
  authDomain: "apollo-246aa.firebaseapp.com",
  projectId: "apollo-246aa",
  storageBucket: "apollo-246aa.appspot.com",
  messagingSenderId: "689264893756",
  appId: "1:689264893756:web:bccab0fc580b8594954839",
  measurementId: "G-7PVS38NSKV",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, auth, analytics, db };
