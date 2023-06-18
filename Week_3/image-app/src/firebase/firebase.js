// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGyVflcDgXHIajkovsRBfxrQ7v7bjyejI",
  authDomain: "image-storage-a7458.firebaseapp.com",
  projectId: "image-storage-a7458",
  storageBucket: "image-storage-a7458.appspot.com",
  messagingSenderId: "323683106505",
  appId: "1:323683106505:web:0f14b156477a2ebe471718",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };
