// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3VU_DHcTCiK7uRsj5gmMaj62_Oou7bVU",
  authDomain: "thomasmates-b63e4.firebaseapp.com",
  projectId: "thomasmates-b63e4",
  storageBucket: "thomasmates-b63e4.appspot.com",
  messagingSenderId: "1093835310847",
  appId: "1:1093835310847:web:9a280b46aba99b230d2eca",
  measurementId: "G-WLHF3V4W9Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();