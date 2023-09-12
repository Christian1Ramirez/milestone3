import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../services/supabaseClient';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    let { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) console.log("Login Error:", error);
    else console.log("Login Success:", data);
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
    </div>
  );
}

export default Login;
