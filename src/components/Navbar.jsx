import { Link } from "react-router-dom";

function Navbar() {
 return (
  <div className="Navbar">
    <header>
     <ul>
      <li>
       <Link to="/">Home</Link>
      </li>
      <li>
       <Link to="/premiums">Premiums</Link>
      </li>
      <li>
       <Link to="/tours">Tours</Link>
      </li>
      <li>
       <Link to="/login">Login</Link>
      </li>
      <li>
       <Link to="/logout">Logout</Link>
      </li>
     </ul>
    </header>
  </div>
 );
}

export default Navbar;
