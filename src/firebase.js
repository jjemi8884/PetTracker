// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnp4S4URRn7Z5ixXQXjqqeNIat2b6DM7s",
  authDomain: "pettracker-1de8b.firebaseapp.com",
  projectId: "pettracker-1de8b",
  storageBucket: "pettracker-1de8b.firebasestorage.app",
  messagingSenderId: "616347466492",
  appId: "1:616347466492:web:d71ded32846453cc913579",
  measurementId: "G-KFTC85S52C"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const database = getDatabase(fbApp);

export { fbApp , database}