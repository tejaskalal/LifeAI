import "./Profile.css";
import { FaHeartPulse } from "react-icons/fa6";
import { BsSpeedometer } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Linebar from "./Linebar";
import Piechart from "./Picechart";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="card-container">
        <div className="card">
          <h2>
            <FaHeartPulse />
            Health Score
          </h2>
          <p>Your health score</p>
          <h1>87%</h1>
        </div>

        <div className="card">
          <h2>
            <BsSpeedometer />
            BMI
          </h2>
          <p>Your Body mass index</p>
          <h1>23.5 kg/m3</h1>
        </div>

        <div className="card">
          <h2>
            <FaUserCircle />
            Hello, Tejas
          </h2>
          <p>Your account</p>
        </div>
      </div>

      <div className="graph-container">
        <div className="graph-flex">
          <div className="graph-item line card">
            <Linebar />
          </div>

          <div className="graph-item pie card">
            <Piechart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
