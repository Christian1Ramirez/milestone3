import React, { useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../services/supabaseClient";
import "../styles/signUp.css";

// SignUp is the main component for the sign-up page
function SignUp() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");

 // This function handles the user sign-up process
 const handleSignUp = async () => {
  let { error } = await supabase.auth.signUp({
   email,
   password,
  });
  if (error) {
  } else {
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
  </div>
 );
}

export default SignUp;
