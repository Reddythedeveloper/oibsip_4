// Initialize Firebase
firebase.initializeApp({
  apiKey: "AIzaSyDYuLhnzqiQF4eQjY1BHw2SxWnK_V9IwjU",
  authDomain: "engireads-fe374.firebaseapp.com",
  projectId: "engireads-fe374",
});

// Reference to Firebase Authentication and Firestore
const auth = firebase.auth();
const firestore = firebase.firestore();

document.addEventListener("DOMContentLoaded", function () {
  const auth = firebase.auth();

  // Signup Form
  const signupForm = document.getElementById("signup-form");
  signupForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      showSuccessPopup("User signed up successfully!");
      console.log("User signed up:", userCredential.user);
    } catch (error) {
      showErrorPopup("Signup error: " + error.message);
      console.error("Signup error:", error);
    }
  });

  // Login Form
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      showSuccessPopup("User logged in successfully!");
      console.log("User logged in:", userCredential.user);

      // Redirect to index.html after successful login
      window.location.href = "index.html";
    } catch (error) {
      showErrorPopup("Login error: " + error.message);
      console.error("Login error:", error);
    }
  });

  // Sign Out
  const signoutBtn = document.getElementById("signout-btn");
  signoutBtn.addEventListener("click", async () => {
    try {
      await auth.signOut();
      showSuccessPopup("User signed out successfully!");
      console.log("User signed out");
    } catch (error) {
      showErrorPopup("Sign out error: " + error.message);
      console.error("Sign out error:", error);
    }
  });

  function showSuccessPopup(message) {
    Swal.fire({
      icon: "success",
      title: "Success",
      text: message,
      confirmButtonColor: "#007bff"
    });
  }

  function showErrorPopup(message) {
    Swal.fire({
      icon: "error",
      title: "Error",
      text: message,
      confirmButtonColor: "#dc3545"
    });
  }
});