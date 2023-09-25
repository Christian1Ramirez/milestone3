import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../services/supabaseClient";
import Snackbar from "./Snackbar";
import "../styles/signUp.css";

// SignUp is the main component for the sign-up page
function SignUp() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [showSnackbar, setShowSnackbar] = useState(false);
 const [snackbarMessage, setSnackbarMessage] = useState("");

 const handleSignUp = async () => {
  if (password.length < 6) {
   setSnackbarMessage("Your password needs to be at least 6 characters long.");
   setShowSnackbar(true);
   return;
  }

  let { error } = await supabase.auth.signUp({
   email,
   password,
  });
  if (error) {
   if (error.message.includes("already in use")) {
    setSnackbarMessage(
     "The email you entered is already in use. Please use a different email or login."
    );
   }
  } else {
   setSnackbarMessage("Sign-up successful! Check email for verification link.");
   setShowSnackbar(true);
  }
 };

 return (
  <div className="signup-container">
   <h1>Sign Up</h1>
   <form>
    <div className="mb-3">
     <label htmlFor="email" className="form-label">
      Email
     </label>
     <input
      type="email"
      className="form-control"
      id="email"
      placeholder="Email"
      onChange={(e) => setEmail(e.target.value)}
     />
    </div>
    <div className="mb-3">
     <label htmlFor="password" className="form-label">
      Password
     </label>
     <input
      type="password"
      className="form-control"
      id="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
     />
    </div>
    <button type="button" className="btn btn-primary" onClick={handleSignUp}>
     Sign Up
    </button>
    <Link to="/login" className="btn btn-link">
     Already have an account? Login
    </Link>
   </form>
   <Snackbar
    message={snackbarMessage}
    show={showSnackbar}
    setShow={setShowSnackbar}
   />
  </div>
 );
}

export default SignUp;
