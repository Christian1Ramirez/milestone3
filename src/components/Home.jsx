import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home container">
      <div className="home-content row">
        <div className="home-section col-md-6 col-lg-3">
          <h2>Parking</h2>
          <p>Experience the dazzling performances that Las Vegas has to offer.</p>
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2>Outdoor Activities</h2>
          <p>Explore the natural wonders around Vegas, from Red Rock Canyon to Lake Mead.</p>
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2>Sin City Secrets</h2>
          <p>Test your luck in the world-famous casinos that line the Las Vegas Strip.</p>
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2>And More!</h2>
          <p>Discover fine dining, shopping, and other attractions that make Vegas unique.</p>
        </div>
      </div>
    </div>
  );
}
