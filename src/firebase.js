import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
    // Masukkan konfigurasi Firebase Anda di sini
    apiKey: "AIzaSyBjBiwUYskgTzdpPSLJGPPNpGiEtxIJt-4",
    authDomain: "my-ipond-test.firebaseapp.com",
    databaseURL: "https://my-ipond-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-ipond-test",
    storageBucket: "my-ipond-test.appspot.com",
    messagingSenderId: "371529979841",
    appId: "1:371529979841:web:5e220117f36b14d3214140"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize and export the Firebase database
export const db = getDatabase(app);