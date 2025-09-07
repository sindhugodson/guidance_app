// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAScg1TObaM7wEiuXG0S5iaeM3oxvAQ040",

  authDomain: "guidance-app-17455.firebaseapp.com",

  projectId: "guidance-app-17455",

  storageBucket: "guidance-app-17455.firebasestorage.app",

  messagingSenderId: "826853372964",

  appId: "1:826853372964:web:a376351ce307ff73bb54b1"

};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
