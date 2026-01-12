import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../pages/AuthContext";
import { FaRobot, FaInfoCircle } from "react-icons/fa";
import { FaFileWaveform } from "react-icons/fa6";
import { FaShieldAlt } from "react-icons/fa";
import { FiLogIn, FiLogOut } from "react-icons/fi";
import { MdDashboard } from "react-icons/md";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">LifeAI</div>

      <div className="navbar-links">
        <Link to="/dashboard">
          <MdDashboard />
          <span>Dashboard</span>
        </Link>

        <Link to="/ai">
          <FaRobot />
          <span>AI</span>
        </Link>

        <Link to="/healthvitals">
          <FaFileWaveform />
          <span>Health Form</span>
        </Link>

        <Link to="/about">
          <FaInfoCircle />
          <span>About</span>
        </Link>

        <Link to="/terms">
          <FaShieldAlt />
          <span>Terms</span>
        </Link>

        {isLoggedIn ? (
          <Link
            to="/login"
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
            data-title="Logout"
          >
            <FiLogOut />
            <span>Logout</span>
          </Link>
        ) : (
          <Link to="/login" data-title="Login">
            <FiLogIn />
            <span>Login</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
