import { Link } from "react-router-dom";
import { FaUser, FaRobot, FaInfoCircle } from "react-icons/fa";
import "./Sidebar.css";
import { FaFileWaveform } from "react-icons/fa6";
import { MdContactSupport } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>LifeAI</h2>

      <Link to="/profile" data-title="Profile">
        <FaUser />
        <span>Profile</span>
      </Link>

      <Link to="/ai" data-title="AI">
        <FaRobot />
        <span>AI</span>
      </Link>

      <Link to="/healthvitals" data-title="Health Vitals">
        <FaFileWaveform />
        <span>Health form</span>
      </Link>

      <Link to="/about" data-title="About">
        <FaInfoCircle />
        <span>About</span>
      </Link>

      <Link to="/support" data-title="Contact">
        <MdContactSupport />
        <span>Support</span>
      </Link>
    </div>
  );
};

export default Sidebar;
