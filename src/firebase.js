import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Konfigurasi Firebase untuk Proyek 1
const firebaseConfig1 = {
    apiKey: "AIzaSyBjBiwUYskgTzdpPSLJGPPNpGiEtxIJt-4",
    authDomain: "my-ipond-test.firebaseapp.com",
    databaseURL: "https://my-ipond-test-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "my-ipond-test",
    storageBucket: "my-ipond-test.appspot.com",
    messagingSenderId: "371529979841",
    appId: "1:371529979841:web:5e220117f36b14d3214140"
};

// Konfigurasi Firebase untuk Proyek 2
const firebaseConfig2 = {
    apiKey: "AIzaSyC72Vzo8eRjmSRNPWqfXwgAuK7sset4ha0",
    authDomain: "myipondv2.firebaseapp.com",
    databaseURL: "https://myipondv2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "myipondv2",
    storageBucket: "myipondv2.appspot.com",
    messagingSenderId: "1072085564345",
    appId: "1:1072085564345:web:c927c22e532a3b145f1468"
};

// Inisialisasi Firebase untuk masing-masing proyek
const app1 = initializeApp(firebaseConfig1, "app1");
const app2 = initializeApp(firebaseConfig2, "app2");

// Inisialisasi Database untuk masing-masing aplikasi
const db1 = getDatabase(app1); // Database untuk Proyek 1
const db2 = getDatabase(app2); // Database untuk Proyek 2

export { db1, db2 };
