import React, { useEffect, useState } from "react";
import "../styles/snackbar.css";

export default function Snackbar({ message, show, setShow }) {
 const [shouldDissolve, setShouldDissolve] = useState(false);

 useEffect(() => {
  let timer;
  if (show) {
   setShouldDissolve(false);
   timer = setTimeout(() => {
    setShouldDissolve(true);
   }, 2500);
  }

  return () => clearTimeout(timer);
 }, [show]);

 useEffect(() => {
  let dissolveTimer;
  if (shouldDissolve) {
   dissolveTimer = setTimeout(() => {
    setShow(false);
    setShouldDissolve(false);
   }, 500);
  }

  return () => clearTimeout(dissolveTimer);
 }, [shouldDissolve, setShow]);

 return (
  <div
   className={`snackbar ${show ? "show" : ""} ${
    shouldDissolve ? "dissolve" : ""
   }`}
  >
   {message}
  </div>
 );
}
