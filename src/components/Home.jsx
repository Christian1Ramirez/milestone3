import React, { useState } from "react";
import "../styles/home.css";

// The Home component is the main component for the homepage and contains several expandable sections.
export default function Home() {
 const [showParking, setShowParking] = useState(false);
 const [showOutdoorActivities, setShowOutdoorActivities] = useState(false);
 const [showSinCitySecrets, setShowSinCitySecrets] = useState(false);
 const [showAndMore, setShowAndMore] = useState(false);

 return (
  <div className="home container">
   <div className="home-content row">
    <div className="home-section col-md-6 col-lg-3">
     <h2>
      <a href="#Parking" onClick={() => setShowParking(!showParking)}>
       Parking
      </a>
     </h2>
     <button
      className="btn-primary"
      onClick={() => setShowParking(!showParking)}
     >
      Show more!
     </button>
     {showParking && (
      <div className="content-container">
       <p>
        Discover the best parking spots just like a local. Skip the crowded lots
        and head to hidden gems where you can park stress-free and still be
        close to all the action.
       </p>
       <img
        src={process.env.PUBLIC_URL + "/images/vegas13.jpeg"}
        alt="Vegas13"
       />
       <img src={process.env.PUBLIC_URL + "/images/vegas3.jpeg"} alt="Vegas3" />
       <img src={process.env.PUBLIC_URL + "/images/vegas7.jpeg"} alt="Vegas7" />
       <img
        src={process.env.PUBLIC_URL + "/images/vegas12.jpeg"}
        alt="Vegas12"
       />
      </div>
     )}
    </div>
    <div className="home-section col-md-6 col-lg-3">
     <h2>
      <a
       href="#OutdoorActivities"
       onClick={() => setShowOutdoorActivities(!showOutdoorActivities)}
      >
       Outdoor Activities
      </a>
     </h2>
     <button
      className="btn-primary"
      onClick={() => setShowOutdoorActivities(!showOutdoorActivities)}
     >
      Show more!
     </button>
     {showOutdoorActivities && (
      <div className="content-container">
       <p>
        Discover the breathtaking natural wonders surrounding Vegas, from the
        winter snow-capped peaks of Mt. Charleston to the unparalleled beauty of
        Lake Mead's best damn dam.
       </p>
       <img
        src={process.env.PUBLIC_URL + "/images/vegas13.jpeg"}
        alt="Vegas13"
       />
       <img src={process.env.PUBLIC_URL + "/images/vegas3.jpeg"} alt="Vegas3" />
       <img src={process.env.PUBLIC_URL + "/images/vegas7.jpeg"} alt="Vegas7" />
       <img
        src={process.env.PUBLIC_URL + "/images/vegas12.jpeg"}
        alt="Vegas12"
       />
      </div>
     )}
    </div>
    <div className="home-section col-md-6 col-lg-3">
     <h2>
      <a
       href="#SinCitySecrets"
       onClick={() => setShowSinCitySecrets(!showSinCitySecrets)}
      >
       Sin City Secrets
      </a>
     </h2>
     <button
      className="btn-primary"
      onClick={() => setShowSinCitySecrets(!showSinCitySecrets)}
     >
      Show more!
     </button>
     {showSinCitySecrets && (
      <div className="content-container">
       <p>
        Test your luck in the world-famous casinos that line the Las Vegas
        Strip.
       </p>
       <img
        src={process.env.PUBLIC_URL + "/images/vegas13.jpeg"}
        alt="Vegas13"
       />
       <img src={process.env.PUBLIC_URL + "/images/vegas3.jpeg"} alt="Vegas3" />
       <img src={process.env.PUBLIC_URL + "/images/vegas7.jpeg"} alt="Vegas7" />
       <img
        src={process.env.PUBLIC_URL + "/images/vegas12.jpeg"}
        alt="Vegas12"
       />
      </div>
     )}
    </div>
    <div className="home-section col-md-6 col-lg-3">
     <h2>
      <a href="#AndMore" onClick={() => setShowAndMore(!showAndMore)}>
       And More!
      </a>
     </h2>
     <button
      className="btn-primary"
      onClick={() => setShowAndMore(!showAndMore)}
     >
      Show more!
     </button>
     {showAndMore && (
      <div className="content-container">
       <p>
        Test your luck in the world-famous casinos that line the Las Vegas
        Strip.
       </p>
       <img
        src={process.env.PUBLIC_URL + "/images/vegas13.jpeg"}
        alt="Vegas13"
       />
       <img src={process.env.PUBLIC_URL + "/images/vegas3.jpeg"} alt="Vegas3" />
       <img src={process.env.PUBLIC_URL + "/images/vegas7.jpeg"} alt="Vegas7" />
       <img
        src={process.env.PUBLIC_URL + "/images/vegas12.jpeg"}
        alt="Vegas12"
       />
      </div>
     )}
    </div>
   </div>
  </div>
 );
}
