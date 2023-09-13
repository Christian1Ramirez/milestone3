import React from 'react';
import supabase from '../services/supabaseClient';

function Logout() {
  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Logout Error:", error);
    } else {
        window.alert("You have successfully logged out!");
        window.location.href = "/";
       }
    };

  return (
    <div>               
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout Now</button>
    </div>
  );
}

export default Logout;
