import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../services/supabaseClient';
import ProjectedPayCalculator from './ProjectedPayCalculator';
import "../styles/tours.css"

function CustomInput({ placeholder, type, value, onChange }) {
  return <input type={type} placeholder={placeholder} value={value || ''} onChange={onChange} />;
}

function CustomCheckbox({ label, checked, onChange }) {
  return (
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      {label}
    </label>
  );
}

function CustomSelect({ value, options, onChange }) {
  return (
    <select value={value} onChange={onChange}>
      <option value="" disabled>Premium</option>
      {options.map((option, index) => (
        <option key={index} value={option}>{option}</option>
      ))}
    </select>
  );
}

export default function Tours() {
  const [Guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState({
    name: '',
    owner: false,
    non_owner: false,
    gift: '',
    pay_per_tour: '',
    projected_pay: '',
    tour_date: '',
    notes: ''
  });
  const [premiums, setPremiums] = useState([]);
  const navigate = useNavigate();

  // New state for editing
  const [editGuestId, setEditGuestId] = useState(null);
  const [editedGuest, setEditedGuest] = useState({
    name: '',
    owner: false,
    non_owner: false,
    gift: '',
    pay_per_tour: '',
    projected_pay: '',
    tour_date: '',
    notes: ''
  });


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
          pay_per_tour: '',
          projected_pay: '',
          tour_date: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error(`Add new guest failed: ${error.message}`);
    }
  };
  const startEditingGuest = (guest) => {
    setEditGuestId(guest.guest_id);
    const editedGuestData = { ...guest };
    editedGuestData.owner = editedGuestData.owner === 'Yes' || editedGuestData.owner === true;
    editedGuestData.non_owner = editedGuestData.non_owner === 'Yes' || editedGuestData.non_owner === true;
    setEditedGuest(editedGuestData);
  };

  const updateGuest = async () => {
    try {
      const response = await fetch(`http://localhost:4005/api/Guests/${editGuestId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(editedGuest),
      });

      if (response.ok) {
        setGuests(Guests.map((guest) => (guest.guest_id === editGuestId ? editedGuest : guest)));
        setEditGuestId(null);
        setEditedGuest({
          name: '',
          owner: false,
          non_owner: false,
          gift: '',
          pay_per_tour: '',
          projected_pay: '',
          tour_date: '',
          notes: ''
        });
      }
    } catch (error) {
      console.error(`Update failed: ${error.message}`);
    }
  };

  const projectedPay = ProjectedPayCalculator(newGuest.pay_per_tour, newGuest.gift);
  
  useEffect(() => {
    setNewGuest(prevGuest => ({ ...prevGuest, projected_pay: projectedPay }));
  }, [projectedPay]);


  const renderGuestForm = (guest, setGuestFunction, submitFunction, buttonText) => (
    <form className="custom-form">
      <CustomInput placeholder="Name" type="text" value={guest.name} onChange={e => setGuestFunction({ ...guest, name: e.target.value })} />
      <CustomCheckbox label="Owner" checked={guest.owner} onChange={e => setGuestFunction({ ...guest, owner: e.target.checked, non_owner: !e.target.checked })} />
      <CustomCheckbox label="Non-Owner" checked={guest.non_owner} onChange={e => setGuestFunction({ ...guest, non_owner: e.target.checked, owner: !e.target.checked })} />
      <CustomSelect value={guest.gift} options={premiums.map(premiumObj => premiumObj.premium)} onChange={e => setGuestFunction({ ...guest, gift: e.target.value })} />
      <CustomInput placeholder="Pay Per Tour" type="smallint" value={guest.pay_per_tour} onChange={e => setGuestFunction({ ...guest, pay_per_tour: e.target.value })} />
      <CustomInput placeholder="Projected Pay" type="smallint" value={guest.projected_pay} onChange={e => setGuestFunction({ ...guest, projected_pay: e.target.value })} />
      <CustomInput placeholder="Tour Date" type="date" value={guest.tour_date} onChange={e => setGuestFunction({ ...guest, tour_date: e.target.value })} />
      <CustomInput placeholder="Notes" type="text" value={guest.notes} onChange={e => setGuestFunction({ ...guest, notes: e.target.value })} />
      {buttonText === "Save" ? (
      <button className="save-button" type="button" onClick={submitFunction}>
        {buttonText}
      </button>
    ) : (
      <button type="button" onClick={submitFunction}>{buttonText}</button>
    )}
    </form>
  );

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
    <div className="tours-container">
      <h1 className="tours-title">Tours</h1>
      <div className="add-new-guest">
        <h2>Add New Guest</h2>
        {renderGuestForm(newGuest, setNewGuest, addNewGuest, "Add Guest")}
      </div>
      <ul className="guest-list">
        {Guests.map((guest, index) => (
          <li key={index} className="guest-item">
      <div>{guest.name}</div>
      <div>Owner: {guest.owner}</div>
      <div>Non-Owner: {guest.non_owner}</div>
      <div>{guest.gift}</div>
      <div>{guest.pay_per_tour}</div>
      <div>{guest.projected_pay}</div>
      <div>{guest.tour_date}</div>
      <div>{guest.notes}</div>
      <div className="guest-actions">
        {editGuestId === guest.guest_id ? (
          renderGuestForm(editedGuest, setEditedGuest, updateGuest, "Save")
        ) : (
          <button className="edit-button" onClick={() => startEditingGuest(guest)}>Edit</button>
        )}
              <button className="delete-button" onClick={() => deleteGuest(guest.guest_id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}