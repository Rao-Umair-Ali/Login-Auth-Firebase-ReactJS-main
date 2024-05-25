// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9V43G2Vsr-PAYwPAVVr1rOdqKgf1wgKk",
  authDomain: "user-auth-49981.firebaseapp.com",
  projectId: "user-auth-49981",
  storageBucket: "user-auth-49981.appspot.com",
  messagingSenderId: "778070284076",
  appId: "1:778070284076:web:7712d9f230a1ec73183e89",
  measurementId: "G-F3QDX6R9JC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db=getFirestore(app);
export default app;