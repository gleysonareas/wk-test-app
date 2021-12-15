// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyB8QF4D8q2E2CUlX0M7xu4HiYBYS6l-JNI",
  authDomain: "wk-test-app-f2172.firebaseapp.com",
  projectId: "wk-test-app-f2172",
  storageBucket: "wk-test-app-f2172.appspot.com",
  messagingSenderId: "270241222175",
  appId: "1:270241222175:web:a1e360261bce615fce4f2a",
  measurementId: "G-ERVZ3XV79W"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);