// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyArUMZ5LTSly2YaW_CyzP3XZtf8OsWvKf8",
  authDomain: "cd-bd-newse-wala-w-1.firebaseapp.com",
  projectId: "cd-bd-newse-wala-w-1",
  storageBucket: "cd-bd-newse-wala-w-1.appspot.com",
  messagingSenderId: "783449723674",
  appId: "1:783449723674:web:09fb2f7faf99586dfd52a3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
