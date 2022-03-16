// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHBCCFdXQadBoRuzUQo3IK-bMNayRA5LE",
  authDomain: "virtual-diary-b6417.firebaseapp.com",
  databaseURL: "https://virtual-diary-b6417.firebaseio.com",
  projectId: "virtual-diary-b6417",
  storageBucket: "virtual-diary-b6417.appspot.com",
  messagingSenderId: "752025326811",
  appId: "1:752025326811:web:4c94c6bfaab1282aa9a8fe",
  measurementId: "G-L9NYEGEBXK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export default database;
