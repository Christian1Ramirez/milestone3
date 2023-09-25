import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import supabase from "../services/supabaseClient";
import Snackbar from "./Snackbar";
import "../styles/login.css";

// The Login component handles the user login functionality with supabase .auth
function Login() {
 const [email, setEmail] = useState("");
 const [password, setPassword] = useState("");
 const [showSnackbar, setShowSnackbar] = useState(false);
 const [snackbarMessage, setSnackbarMessage] = useState("");

 const navigate = useNavigate();

 const handleLogin = async () => {
  let { error } = await supabase.auth.signInWithPassword({
   email,
   password,
  });
  if (error) {
   setSnackbarMessage("Invalid login. Please try again."); 
   setShowSnackbar(true);
  } else {
   setSnackbarMessage("Login successful!"); 
   setShowSnackbar(true);
   setTimeout(() => {
    navigate("/");
   }, 1500); 
  }
 };

 return (
  <div className="login-container">
   <h1>Login</h1>
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
    <button type="button" className="btn btn-primary" onClick={handleLogin}>
     Login
    </button>
    <Link to="/signup" className="btn btn-link">
     Don't have an account? Sign Up
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

export default Login;
