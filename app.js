// Import Firebase Auth methods
import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// DOM Elements
const authPage = document.getElementById("authPage");
const dashboardPage = document.getElementById("dashboardPage");
const signupForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const logoutBtn = document.getElementById("logoutBtn");

// Sign Up
if (signupForm) {
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
      authPage.classList.remove("active");
      dashboardPage.classList.add("active");
    } catch (error) {
      alert("Signup failed ❌ " + error.message);
    }
  });
}

// Login
if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      authPage.classList.remove("active");
      dashboardPage.classList.add("active");
    } catch (error) {
      alert("Login failed ❌ " + error.message);
    }
  });
}

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener("click", async () => {
    await signOut(auth);
    dashboardPage.classList.remove("active");
    authPage.classList.add("active");
  });
}

// Auto-check if user is logged in
onAuthStateChanged(auth, (user) => {
  if (user) {
    authPage.classList.remove("active");
    dashboardPage.classList.add("active");
  } else {
    dashboardPage.classList.remove("active");
    authPage.classList.add("active");
  }
});
          