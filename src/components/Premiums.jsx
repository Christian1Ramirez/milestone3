// React component code (No changes)
import React, { useState, useEffect } from 'react';
import supabase from '../services/supabaseClient';
import '../styles/premiums.css'; // Import the new CSS file

export default function Premiums() {
  const [gifts, setGifts] = useState([]);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const { data, error } = await supabase.from('Gifts').select('*');
        if (error) throw error;
        setGifts(data);
      } catch (err) {
        console.error(`Error fetching gifts: ${err.message}`);
      }
    };

    fetchGifts();
  }, []);

  const sortedGifts = gifts.sort((a, b) => a.premium.localeCompare(b.premium));

  return (
    <div className="premium-container">
      <h1 className="premium-header">Premium Gifts</h1>
      <table className="table table-dark table-hover">
        <thead>
          <tr>
            <th>Premium</th>
            <th>Preview</th>
            <th>Price</th>
            <th>Retail</th>
            <th>Time</th>
            <th>Availability</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {sortedGifts.map((gift) => (
            <tr key={gift.gift_id}>
              <td>{gift.premium}</td>
              <td>
                <iframe
                  className="premium-video"
                  src={gift.premium_preview}
                  title="YouTube video player"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </td>
              <td>{gift.price}</td>
              <td>{gift.retail}</td>
              <td>{gift.time}</td>
              <td>{gift.availability}</td>
              <td>{gift.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
