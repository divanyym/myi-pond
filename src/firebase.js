import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig2 = {
    apiKey: "AIzaSyC72Vzo8eRjmSRNPWqfXwgAuK7sset4ha0",
    authDomain: "myipondv2.firebaseapp.com",
    databaseURL: "https://myipondv2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myipondv2",
    storageBucket: "myipondv2.appspot.com",
    messagingSenderId: "1072085564345",
    appId: "1:1072085564345:web:c927c22e532a3b145f1468"
};

// Inisialisasi Firebase untuk alat
const app2 = initializeApp(firebaseConfig2, "app2");

// Inisialisasi Database untuk masing-masing alat
const db1 = getDatabase(app2); 
export { db1 };

//cek