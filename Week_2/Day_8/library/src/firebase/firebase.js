// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdzdCZQW2olkMjc8J51eyabptQSx3ZlDI",
  authDomain: "library-77820.firebaseapp.com",
  projectId: "library-77820",
  storageBucket: "library-77820.appspot.com",
  messagingSenderId: "412126265005",
  appId: "1:412126265005:web:3424d82ff7f242d4f75024",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };