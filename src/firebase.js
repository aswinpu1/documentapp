// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUH1oMr7dwn0Cc5GZnpAuBye4XiiJMqMs",
  authDomain: "docapp-2c4ff.firebaseapp.com",
  projectId: "docapp-2c4ff",
  storageBucket: "docapp-2c4ff.appspot.com",
  messagingSenderId: "949900308903",
  appId: "1:949900308903:web:1aca2286bb3a79f17f4682",
  measurementId: "G-3F1YG0C9S1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Export db for Firestore usage
export { db, analytics };
