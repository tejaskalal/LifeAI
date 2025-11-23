import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="cards-container">
      {/* Card 1 - Weather + AQI */}
      <div className="card">
        <h3>Current Status</h3>

        <div className="card-row">
          <p>
            <strong>Temperature:</strong> 27°C
          </p>
          <p>
            <strong>AQI:</strong> 78 (Moderate)
          </p>
        </div>
      </div>

      {/* Card 2 - Special of the Day */}
      <div className="card">
        <h3>Special for Today</h3>
        <p className="day-text">
          🌿 “Take a 15-minute walk today — your mind & body will thank you.”
        </p>
      </div>
    </div>
  );
};

export default Card;
