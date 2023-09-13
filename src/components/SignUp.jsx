import React, { useState } from 'react';
import supabase from '../services/supabaseClient';

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    let { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) console.log("Signup Error:", error);
    else console.log("Signup Success:", data);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
}

export default SignUp;