import React, { useEffect } from 'react';
import '../styles/snackbar.css';

export default function Snackbar({ message, show, setShow }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        setShow(false);
      }, 3500);  

      return () => clearTimeout(timer);
    }
  }, [show, setShow]);

  return (
    <div className={`snackbar ${show ? 'show' : ''}`}>
      {message}
    </div>
  );
}
