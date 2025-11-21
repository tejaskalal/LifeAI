import React, { useState } from "react";
import "./Home.css";
import { BsPlusLg } from "react-icons/bs";
import { FiMic } from "react-icons/fi";

const Home = () => {
  return (
    <div className="glass-container">
      <h1 className="text-center mt-5 text-dark">Track. Improve. Thrive</h1>
      <p className="text-center mt-3 text-dark">
        LifeAI helps you stay healthy, fit, and mindful every day.
      </p>
      <form className="input-wrapper">
        <input
          type="text"
          placeholder="Ask LifeAi about your health..."
          className="input-box"
        />
        <BsPlusLg className="icon-plus" />
        <FiMic className="icon-mic" />
      </form>
    </div>
  );
};

export default Home;
