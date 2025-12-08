import DonutChart from "../dashboardUtils/DonutChart";
import ProfileCard from "../dashboardUtils/ProfileCard";
import { BiTachometer } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-dark text-center mt-5">Dashboard</h1>
      <p className="text-dark text-center">Welcome to the dashboard!</p>

      <div
        style={{
          padding: "25px",
          width: "100%",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "stretch",
          gap: "25px",
          marginTop: "25px",
        }}
      >
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            minHeight: "280px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            color: "black",
            gap: "20px",
          }}
        >
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <DonutChart score={78} />
            <h5 className="text-muted text-center mt-2">
              Here your today's score
            </h5>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfileCard />
          </div>
        </div>
      </div>
      <div className="activity-card">
        <div className="a-card">
          <div className="a-icon bmi">
            <BiTachometer />
          </div>
          <h3 className="text-white">BMI</h3>
          <h4 className="text-white">22.5kg/m3</h4>
          <h5 className="a-status normal">Normal</h5>
        </div>

        <div className="a-card">
          <div className="a-icon sleep">
            <FaBed />
          </div>
          <h3 className="text-white">Sleep</h3>
          <h4 className="text-white">7 hrs</h4>
          <h5 className="a-status good">Good</h5>
        </div>

        <div className="a-card">
          <div className="a-icon activity">
            <FaWalking />
          </div>
          <h3 className="text-white">Activity</h3>
          <h4 className="text-white">5,000</h4>
          <h5 className="a-status neutral">Steps</h5>
        </div>

        <div className="a-card">
          <div className="a-icon hydration">
            <MdOutlineWaterDrop />
          </div>
          <h3 className="text-white">Hydration</h3>
          <h4 className="text-white">2.5 L</h4>
          <h5 className="a-status good">Good</h5>
        </div>
      </div>

      <div className="graph-card">
        <div className="graph">
          <h2 className="text-dark text-center">Graph</h2>
        </div>

        <div className="insight">
          <h2 className="text-dark text-center">Insights</h2>
        </div>
      </div>

      <div className="habit-card d-flex justify-content-around mt-5 gap-3">
        <div className="card">
          <h4 className="text-dark">Water</h4>
        </div>

        <div className="card">
          <h4 className="text-dark">Steps</h4>
        </div>

        <div className="card">
          <h4 className="text-dark">Mood</h4>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
