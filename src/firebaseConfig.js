// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDQKs3AwXQka2NU2wPI9USY4W83XaFMnMg",
  authDomain: "startupdf-1dcfb.firebaseapp.com",
  projectId: "startupdf-1dcfb",
  storageBucket: "startupdf-1dcfb.appspot.com",
  messagingSenderId: "145636352048",
  appId: "1:145636352048:web:0e66d0f75244f4b96acdf5",
  measurementId: "G-1CZHBSYWBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
