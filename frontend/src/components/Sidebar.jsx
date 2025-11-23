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

      <a>
        <FaUser />
        Profile
      </a>

      <a>
        <FaRobot />
        AI
      </a>

      <a>
        <FaInfoCircle />
        About
      </a>

      <a>
        <FaPhone />
        Contact
      </a>

      <a>
        <FaRegAddressCard />
        Account
      </a>
    </div>
  );
};

export default Sidebar;
