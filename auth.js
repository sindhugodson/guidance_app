// auth.js
import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";


// ---------- LOGIN ----------
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        // Redirect to main page after successful login
        window.location.href = "main.html";
      })
      .catch((error) => alert(error.message));
  });
}


// ---------- SIGNUP ----------
const signupForm = document.getElementById("signupForm");
if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("signupName").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Save the display name in Firebase profile
        return updateProfile(userCredential.user, { displayName: name });
      })
      .then(() => {
        alert("Signup successful! Please login.");
        // Redirect user to login page
        window.location.href = "login.html";
      })
      .catch((error) => alert(error.message));
  });
}
