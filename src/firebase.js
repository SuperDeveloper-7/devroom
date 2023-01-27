// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAAx_knJ_qqxPkJQ_xoIZnxt_c6gb6Wdys",
//   authDomain: "todoapp-eeeb7.firebaseapp.com",
//   projectId: "todoapp-eeeb7",
//   storageBucket: "todoapp-eeeb7.appspot.com",
//   messagingSenderId: "1072574112522",
//   appId: "1:1072574112522:web:65fc4e184aed9894dc90f3"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDtRgOZ4Gij0o-8qu6VfaGggSMeFEGGLm8",
  authDomain: "devroomtrial-24c3b.firebaseapp.com",
  projectId: "devroomtrial-24c3b",
  storageBucket: "devroomtrial-24c3b.appspot.com",
  messagingSenderId: "256598162834",
  appId: "1:256598162834:web:c05a344833e226d337154b",
  measurementId: "G-CCZ1HDE6YJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export { db };
export const auth = getAuth(app);
export default app;
