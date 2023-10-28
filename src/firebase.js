// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1z7k4ALu0QrmGl0JiFEf5tBIbtgbwvmQ",
    authDomain: "relu-consultancy-98a26.firebaseapp.com",
    projectId: "relu-consultancy-98a26",
    storageBucket: "relu-consultancy-98a26.appspot.com",
    messagingSenderId: "343824709213",
    appId: "1:343824709213:web:88fea1562374d3a95d3fb4",
    measurementId: "G-52WKLXWV97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
// const analytics = getAnalytics(app);
export { app, auth }