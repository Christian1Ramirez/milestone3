import React from 'react';
import '../styles/home.css';

export default function Home() {
    return (
        <div className="home">
            <div className="home-banner">
                <h1>Welcome to Fabulous Las Vegas</h1>
            </div>
            <div className="home-content">
                <div className="home-section">
                    <h2>Parking</h2>
                    <p>Experience the dazzling performances that Las Vegas has to offer.</p>
                </div>
                <div className="home-section">
                    <h2>Outdoor Activities</h2>
                    <p>Explore the natural wonders around Vegas, from Red Rock Canyon to Lake Mead.</p>
                </div>
                <div className="home-section">
                    <h2>Sin City Secrets</h2>
                    <p>Test your luck in the world-famous casinos that line the Las Vegas Strip.</p>
                </div>
                <div className="home-section">
                    <h2>And More!</h2>
                    <p>Discover fine dining, shopping, and other attractions that make Vegas unique.</p>
                </div>
            </div>
        </div>
    );
}
