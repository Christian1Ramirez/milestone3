import React from 'react';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../styles/navbar.css';


function Navbar() {
  return (
    <div className="Navbar supabase-nav">
      <nav className="navbar navbar-expand-lg">
        <a className="navbar-brand compressible" href="/">TourHub</a>
        <button className="navbar-toggler custom-toggler compressible" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link compressible" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link compressible" to="/premiums">Premiums</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link compressible" to="/tours">Tours</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link compressible" to="/login">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link compressible" to="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
