import React from "react";
import {
  FaUser,
  FaRobot,
  FaInfoCircle,
  FaPhone,
  FaRegAddressCard,
} from "react-icons/fa";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>LifeAI</h2>

      <a data-title="Profile">
        <FaUser />
        <span>Profile</span>
      </a>

      <a data-title="AI">
        <FaRobot />
        <span>AI</span>
      </a>

      <a data-title="About">
        <FaInfoCircle />
        <span>About</span>
      </a>

      <a data-title="Contact">
        <FaPhone />
        <span>Contact</span>
      </a>

      <a data-title="Account">
        <FaRegAddressCard />
        <span>Account</span>
      </a>
    </div>
  );
};

export default Sidebar;
