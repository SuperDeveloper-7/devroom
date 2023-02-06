// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2u7NPBXI2KXQHf3INCO4S44FQuL7jGDA",
  authDomain: "devroom-6729d.firebaseapp.com",
  projectId: "devroom-6729d",
  storageBucket: "devroom-6729d.appspot.com",
  messagingSenderId: "632037921476",
  appId: "1:632037921476:web:30faf673815b3bebc0ef91",
  measurementId: "G-TRZX9V7LHD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;