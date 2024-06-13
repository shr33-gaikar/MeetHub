import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCqQUU3vOYtDGQkElU_Fldq0OlEfLiDCOA",
    authDomain: "meethub-3093.firebaseapp.com",
    projectId: "meethub-3093",
    storageBucket: "meethub-3093.appspot.com",
    messagingSenderId: "323033242363",
    appId: "1:323033242363:web:5a47d151d063e1a60bee5e",
    measurementId: "G-Z2QPV5GV8J"
  };

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");