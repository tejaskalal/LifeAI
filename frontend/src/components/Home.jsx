import React, { useState } from "react";
import "./Home.css";
import { BsPlusLg } from "react-icons/bs";
import { FiMic } from "react-icons/fi";

const Home = () => {
  const [input, setInput] = useState("");
  const [showCards, setShowCards] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.trim()) return;
    setShowCards(false);

    setInput("");
  };

  return (
    <div className="main-content">
      <div className="page-container">
        <div className="glass-container">
          <h1 className="text-center text-dark">Track. Improve. Thrive</h1>
          <p className="text-center mt-3 text-dark">
            LifeAI helps you stay healthy, fit, and mindful every day.
          </p>

          <form className="input-wrapper" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask LifeAi about your health..."
              className="input-box"
            />
            <BsPlusLg className="icon-plus" />
            <FiMic className="icon-mic" />
          </form>
        </div>

        {showCards && (
          <div className="cards-container">
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

            <div className="card">
              <h3>Special for Today</h3>
              <p className="day-text">
                🌿 “Take a 15-minute walk today, your mind & body will thank
                you.”
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
