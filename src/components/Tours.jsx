import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';

export default function Tours() {
  const [Guests, setGuests] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize authentication listener
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      const user = session?.user;

      if (user) {
        // Fetch the guests data
        try {
          const response = await fetch('http://localhost:4005/api/Guests');
          if (!response.ok) {
            console.error(`Server responded with ${response.status}: ${response.statusText}`);
            return;
          }
          const json = await response.json();
          setGuests(json);
        } catch (error) {
          console.error(`Fetch failed: ${error.message}`);
        }
      } else {
        // Redirect to login page if the user is not logged in
        navigate('/login');
      }
    });

    return () => {
      // Cleanup
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, [navigate]);

  return (
    <div>
      <h1>Tours</h1>
      <ul>
        { Guests.map ((guest, index) => (
          <li key={index}>
            <div>{guest.name}</div>
            <div>{guest.owner}</div>
            <div>{guest.non_owner}</div>
            <div>{guest.gift}</div>
            <div>{guest.pp}</div>
            <div>{guest.tour_date}</div>
            <div>{guest.notes}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
