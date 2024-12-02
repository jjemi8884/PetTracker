// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOfKoFwFJphdpy3xHXNJ3S2ScMoFkYOrg",
  authDomain: "cp4pets-31ca1.firebaseapp.com",
  databaseURL: "https://cp4pets-31ca1-default-rtdb.firebaseio.com",
  projectId: "cp4pets-31ca1",
  storageBucket: "cp4pets-31ca1.firebasestorage.app",
  messagingSenderId: "834051379121",
  appId: "1:834051379121:web:c8fc0e1b3f536c198f7790",
  measurementId: "G-XB1C055TFG"
};

// Initialize Firebase
const fbApp = initializeApp(firebaseConfig);
const database = getDatabase(fbApp);

export { fbApp , database}