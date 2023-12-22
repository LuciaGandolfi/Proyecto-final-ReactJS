// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWw5co7Wdn23ZFV-ddOy1_r4W6Wto0Vvc",
  authDomain: "lureact-a2c46.firebaseapp.com",
  projectId: "lureact-a2c46",
  storageBucket: "lureact-a2c46.appspot.com",
  appId: "1:618667884369:web:4a3b7aff250770237f5d70"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
