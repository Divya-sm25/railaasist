// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD96NLHrVDT08T0o1ovt8TzHZdMI0inDxw",
  authDomain: "login-15216.firebaseapp.com",
  projectId: "login-15216",
  storageBucket: "login-15216.appspot.com",
  messagingSenderId: "872023439069",
  appId: "1:872023439069:web:7617aed905bd1ec153cd34"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth=getAuth(app)
 export {auth}
