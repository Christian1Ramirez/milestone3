import React from 'react';
import { Link } from "react-router-dom"; 

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <form>
        <label>
          Username:
          <input type="text" name="username" />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" />
        </label>
        <br />
        <input type="submit" value="Login" />
        <p>
       Don't have an account? <Link to="/signup">Sign Up</Link>
      </p>
      </form>
    </div>
  );
}

export default Login;
