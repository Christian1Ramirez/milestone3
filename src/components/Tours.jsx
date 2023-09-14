import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';

export default function Tours() {
  const [Guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    owner: false,
    non_owner: false,
    gift: '',
    pp: '',
    tour_date: '',
    notes: ''
  });
  const [premiums, setPremiums] = useState([]);
  const navigate = useNavigate();

  const fetchPremiums = async () => {
    try {
      const { data, error } = await supabase.from('Gifts').select('premium');
      if (error) throw error;
      setPremiums(data);
    } catch (error) {
      console.error(`Fetching premiums failed: ${error.message}`);
    }
  };

  useEffect(() => {
    fetchPremiums();
  }, []);

  const deleteGuest = async (id) => {
    try {
      const response = await fetch(`http://localhost:4005/api/Guests/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        setGuests(Guests.filter((guest) => guest.guest_id !== id));
      }
    } catch (error) {
      console.error(`Delete failed: ${error.message}`);
    }
  };

  const addNewGuest = async () => {
    const updatedGuest = { ...newGuest };

    updatedGuest.owner = updatedGuest.owner ? 'Yes' : 'No';
    updatedGuest.non_owner = updatedGuest.non_owner ? 'Yes' : 'No';

    if (updatedGuest.owner === updatedGuest.non_owner) {
      alert("Either 'Owner' or 'Non-Owner' must be checked, but not both or neither.");
      return;
    }

    try {
      const response = await fetch('http://localhost:4005/api/Guests', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedGuest),
      });

      const json = await response.json();
      if (response.ok) {
        setGuests([...Guests, json]);
        setNewGuest({
          name: '',
          owner: false,
          non_owner: false,
          gift: '',
          pp: '',
          tour_date: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error(`Add new guest failed: ${error.message}`);
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(async (_, session) => {
      const user = session?.user;

      if (user) {
        try {
          const response = await fetch('http://localhost:4005/api/Guests');
          const json = await response.json();
          setGuests(json);
        } catch (error) {
          console.error(`Fetch failed: ${error.message}`);
        }
      } else {
        navigate('/login');
      }
    });

    return () => {
      if (authListener && typeof authListener.unsubscribe === 'function') {
        authListener.unsubscribe();
      }
    };
  }, [navigate]);

  return (
    <div>
      <h1>Tours</h1>
      <div>
        <h2>Add New Guest</h2>
        <input type="text" placeholder="Name" value={newGuest.name} onChange={e => setNewGuest({ ...newGuest, name: e.target.value })} />
        <label>
          <input type="checkbox" checked={newGuest.owner} onChange={e => setNewGuest({ ...newGuest, owner: e.target.checked, non_owner: !e.target.checked })} />
          Owner
        </label>
        <label>
          <input type="checkbox" checked={newGuest.non_owner} onChange={e => setNewGuest({ ...newGuest, non_owner: e.target.checked, owner: !e.target.checked })} />
          Non-Owner
        </label>
        <select value={newGuest.gift} onChange={e => setNewGuest({ ...newGuest, gift: e.target.value })}>
          <option value="" disabled>Select gift</option>
          {premiums.map((premiumObj, index) => (
            <option key={index} value={premiumObj.premium}>{premiumObj.premium}</option>
          ))}
        </select>
        <input type="text" placeholder="PP" value={newGuest.pp} onChange={e => setNewGuest({ ...newGuest, pp: e.target.value })} />
        <input type="date" placeholder="Tour Date" value={newGuest.tour_date} onChange={e => setNewGuest({ ...newGuest, tour_date: e.target.value })} />
        <input type="text" placeholder="Notes" value={newGuest.notes} onChange={e => setNewGuest({ ...newGuest, notes: e.target.value })} />
        <button onClick={addNewGuest}>Add Guest</button>
      </div>
      <ul>
        {Guests.map((guest, index) => (
          <li key={index}>
            <div>{guest.name}</div>
            <div>Owner: {guest.owner}</div>
            <div>Non-Owner: {guest.non_owner}</div>
            <div>{guest.gift}</div>
            <div>{guest.pp}</div>
            <div>{guest.tour_date}</div>
            <div>{guest.notes}</div>
            <button onClick={() => deleteGuest(guest.guest_id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}