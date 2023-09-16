import React, { useState, useEffect } from 'react';
import supabase from '../services/supabaseClient'; 

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

  return (
    <div>
      <h1>Premium Gifts</h1>
      <table>
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
          {gifts.map((gift) => (
            <tr key={gift.gift_id}>
              <td>{gift.premium}</td>
              <td>
                <iframe 
                  width="560" 
                  height="315" 
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
