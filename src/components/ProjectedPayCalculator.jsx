import { useEffect, useState } from "react";
import supabase from "../services/supabaseClient";

// ProjectedPayCalculator to calculate projected pay
export default function ProjectedPayCalculator(payPerTour, selectedGift) {
 const [premiumPrice, setPremiumPrice] = useState(0);
 const [projectedPay, setProjectedPay] = useState(null);

 useEffect(() => {
  const fetchPremiumPrice = async () => {
   try {
    const { data, error } = await supabase
     .from("Gifts")
     .select("price")
     .eq("premium", selectedGift);
    if (error) throw error;

    if (data && data.length > 0) {
     setPremiumPrice(data[0].price);
    }
   } catch (error) {
    console.error(`Fetching premium price failed: ${error.message}`);
   }
  };

  fetchPremiumPrice();
 }, [selectedGift]);

 useEffect(() => {
  if (premiumPrice !== null && payPerTour !== null) {
   const calcProjectedPay = payPerTour - premiumPrice;
   setProjectedPay(calcProjectedPay);
  }
 }, [premiumPrice, payPerTour]);

 return projectedPay;
}
