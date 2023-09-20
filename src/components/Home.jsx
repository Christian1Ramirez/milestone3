import React from 'react';
import '../styles/home.css';

export default function Home() {
  return (
    <div className="home container">
      <div className="home-content row">
        <div className="home-section col-md-6 col-lg-3">
          <h2><a href="#Parking">Parking</a></h2>
          <p>Experience the dazzling performances that Las Vegas has to offer.</p>
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2><a href="#OutdoorActivities">Outdoor Activities</a></h2>
          <p>Discover the breathtaking natural wonders surrounding Vegas, from the winter snow-capped peaks of Mt. Charleston to the unparalleled beauty of Lake Mead's best damn dam.</p>
          <img src={process.env.PUBLIC_URL + '/images/vegas13.jpeg'} alt="Vegas13" />
          <img src={process.env.PUBLIC_URL + '/images/vegas3.jpeg'} alt="Vegas3" />
          <img src={process.env.PUBLIC_URL + '/images/vegas7.jpeg'} alt="Vegas7" />
          <img src={process.env.PUBLIC_URL + '/images/vegas12.jpeg'} alt="Vegas12" />
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2><a href="#SinCitySecrets">Sin City Secrets</a></h2>
          <p>Test your luck in the world-famous casinos that line the Las Vegas Strip.</p>
        </div>
        <div className="home-section col-md-6 col-lg-3">
          <h2><a href="#AndMore">And More!</a></h2>
          <p>Discover fine dining, shopping, and other attractions that make Vegas unique.</p>
        </div>
      </div>
    </div>
  );
}
