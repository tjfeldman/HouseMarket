import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBRxGff3Ejc9u_w5aXUb5WseXUyWjs6ZYs",
  authDomain: "house-marketplace-app-7dd09.firebaseapp.com",
  projectId: "house-marketplace-app-7dd09",
  storageBucket: "house-marketplace-app-7dd09.appspot.com",
  messagingSenderId: "297685143207",
  appId: "1:297685143207:web:c661fdeff837b965ba1582",
  measurementId: "G-19JY3RZ3PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line
const analytics = getAnalytics(app);
export const db = getFirestore();