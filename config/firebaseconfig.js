// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyBbqyAUxjo3s-N2luqX7z6X3n4F1mH_qng",
  authDomain: "billez-a41c6.firebaseapp.com",
  projectId: "billez-a41c6",
  storageBucket: "billez-a41c6.appspot.com",
  messagingSenderId: "880141069755",
  appId: "1:880141069755:web:4720003cfd4565bf4f689e",
  measurementId: "G-LEDK15Q79Y"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

