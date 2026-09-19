import { sendEmailVerification } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-auth.js";
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBCEGR-H-5GM8d8qaE6zTvY-HdiTktpJs0",
    authDomain: "mylogin-a1a7c.firebaseapp.com",
    projectId: "mylogin-a1a7c",
    storageBucket: "mylogin-a1a7c.firebasestorage.app",
    messagingSenderId: "354827995849",
    appId: "1:354827995849:web:5878937171d4a9a71e1b18"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };