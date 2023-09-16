import { useState, useEffect } from 'react';
import supabase from '../services/supabaseClient';

export default function ProjectedPayCalculator({ selectedGift, onUpdatePP }) {
  const [payPerTour, setPayPerTour] = useState(0);
  const [premiumPrice, setPremiumPrice] = useState(0);

  useEffect(() => {
    const fetchPremiumPrice = async () => {
      const { data, error } = await supabase
        .from('Gifts')
        .select('price')
        .eq('premium', selectedGift)
        .single();
      
      if (error) {
        console.error(`Fetching premium price failed: ${error.message}`);
      } else {
        setPremiumPrice(data.price);
      }
    };

    fetchPremiumPrice();
  }, [selectedGift]);

  const calculatePP = () => {
    const pp = payPerTour - premiumPrice;
    onUpdatePP(pp); 
  };

  return (
    <div>
      <input 
        type="number" 
        placeholder="Pay per Tour" 
        value={payPerTour} 
        onChange={e => setPayPerTour(e.target.value)} 
      />
      <button onClick={calculatePP}>Calculate PP</button>
    </div>
  );
}
