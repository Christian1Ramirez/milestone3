import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../services/supabaseClient";
import Snackbar from "./Snackbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../styles/navbar.css";

// Navbar is a functional component for rendering the navigation bar of the application.
function Navbar() {
 const navigate = useNavigate();
 const [showSnackbar, setShowSnackbar] = useState(false);
 const [snackbarMessage, setSnackbarMessage] = useState("");

 const closeMenu = () => {
  const navElement = document.getElementById("navbarNav");
  if (navElement.classList.contains("show")) {
   navElement.classList.remove("show");
  }
 };

 const handleLogout = async () => {
  let { error } = await supabase.auth.signOut();
  if (error) {
   setSnackbarMessage("Logout failed. Please try again.");
  } else {
   setSnackbarMessage("You have successfully logged out!");
   setTimeout(() => {
    navigate("/");
   }, 1500);
  }
  setShowSnackbar(true);
 };

 const handleClick = (route) => {
  if (route === "/logout") {
   handleLogout();
   return;
  }
  navigate(route);
  closeMenu();
 };

 return (
  <div className="Navbar supabase-nav">
   <Snackbar
    message={snackbarMessage}
    show={showSnackbar}
    setShow={setShowSnackbar}
   />
   <nav className="navbar navbar-expand-lg">
    <a className="navbar-brand compressible" href="/">
     TourHub
    </a>
    <button
     className="navbar-toggler custom-toggler compressible"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarNav"
     aria-controls="navbarNav"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
     <div className="centered-nav-items">
      <ul className="navbar-nav">
       <li className="nav-item active">
        <button
         className="nav-link compressible"
         onClick={() => handleClick("/")}
        >
         Home
        </button>
       </li>
       <li className="nav-item">
        <button
         className="nav-link compressible"
         onClick={() => handleClick("/premiums")}
        >
         Premiums
        </button>
       </li>
       <li className="nav-item">
        <button
         className="nav-link compressible"
         onClick={() => handleClick("/tours")}
        >
         Tours
        </button>
       </li>
       <li className="nav-item">
        <button
         className="nav-link compressible"
         onClick={() => handleClick("/login")}
        >
         Login
        </button>
       </li>
       <li className="nav-item">
        <button
         className="nav-link compressible"
         onClick={() => handleClick("/logout")}
        >
         Logout
        </button>
       </li>
      </ul>
     </div>
    </div>
   </nav>
  </div>
 );
}

export default Navbar;
