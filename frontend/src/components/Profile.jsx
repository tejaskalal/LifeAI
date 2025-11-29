import HealthTimeline from "./HealthTimeline";
import "./Profile.css";
import {
  FaUserCircle,
  FaHeartbeat,
  FaRunning,
  FaAppleAlt,
} from "react-icons/fa";

const Profile = () => {
  return (
    <div className="container-user">
      <div className="user">
        <div className="user-greet">
          <h1>Hello, User</h1>
          <p>See your stats and take a step toward better health.</p>
        </div>
        <div className="user-info">
          <FaUserCircle className="profile-icon" />
          <h5>Tejas Kalal</h5>
        </div>
      </div>

      <div className="card-container">
        <div className="card">
          <FaRunning className="card-icon" />
          <h3>BMI</h3>
          <p>Your BMI indicator</p>
        </div>

        <div className="card">
          <FaHeartbeat className="card-icon" />
          <h3>Health Score</h3>
          <p>Improve health</p>
        </div>

        <div className="card">
          <FaAppleAlt className="card-icon" />
          <h3>Diet</h3>
          <p>Check your nutrition score</p>
        </div>
      </div>
      <HealthTimeline />
    </div>
  );
};

export default Profile;
