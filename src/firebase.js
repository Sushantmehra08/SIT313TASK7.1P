// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsaqnmurfyt5WNPEPvco_nCoObaxcW-jM",
    authDomain: "task7-1-477d7.firebaseapp.com",
    projectId: "task7-1-477d7",
    storageBucket: "task7-1-477d7.appspot.com",
    messagingSenderId: "818871281264",
    appId: "1:818871281264:web:22e0f35d9c61b0f4d276b5",
    measurementId: "G-X0FW5F0BPE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { app, auth };