// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_wpRwMBn14aXPooEamgENi3AX7ef3kLY",
  authDomain: "fdreferral.firebaseapp.com",
  projectId: "fdreferral",
  storageBucket: "fdreferral.firebasestorage.app",
  messagingSenderId: "810717456919",
  appId: "1:810717456919:web:d3c8e381b83f9c11904a52",
  measurementId: "G-FVEH6DYYK0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db, analytics };
