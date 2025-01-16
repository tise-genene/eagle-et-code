// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdyNrHOGdAza-N_5a-coQwQ-gmwKD1YzE",
  authDomain: "eagletutorset.firebaseapp.com",
  projectId: "eagletutorset",
  storageBucket: "eagletutorset.firebasestorage.app",
  messagingSenderId: "224366834796",
  appId: "1:224366834796:web:7f0fea57660c8b47e55449",
  measurementId: "G-83KTMK8KVB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
