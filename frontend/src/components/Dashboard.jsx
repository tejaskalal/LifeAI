import DonutChart from "../dashboardUtils/DonutChart";
import ProfileCard from "../dashboardUtils/ProfileCard";
import LineChartBar from "../dashboardUtils/LineChartBar";
import { BiTachometer } from "react-icons/bi";
import { FaBed } from "react-icons/fa";
import { FaWalking } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaGlassWater } from "react-icons/fa6";
import { FaPersonWalking } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";

import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="container">
      <h1 className="text-dark text-center head-h">Dashboard</h1>
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

      <div className="graph-card d-flex justify-content-around mt-5 gap-3">
        <div className="graph mt-5">
          <h3 className="text-white text-center mb-3">Graph</h3>
          <LineChartBar />
        </div>

        <div className="insight">
          <h3 className="text-white text-center">Insights</h3>
          <div className="insight-content">
            <p className="text-white">
              • Your sleep quality has improved by 15% compared to last week.
            </p>
            <p className="text-white">
              • You have maintained a consistent hydration level for the past 5
              days.
            </p>
            <p className="text-white">
              • Your average daily step count has increased by 10% this month.
            </p>
            <p className="text-white">
              • Your BMI is within the normal range. Keep up the good work!
            </p>
            <p className="text-white">
              • Consider incorporating more variety into your physical
              activities to target different muscle groups.
            </p>
          </div>
        </div>
      </div>

      <div className="habit-card d-flex justify-content-around mt-5 gap-3 container">
        <div className="card habit-item text-center p-3 shadow-sm">
          <div className="icon-container mb-2">
            <FaGlassWater className="icon" />
          </div>
          <h4 className="text-white fw-bold">Water</h4>
          <p className="days">5 Days</p>
          <p className="info-text">
            Staying hydrated boosts energy and helps you stay active. Great
            streak!
          </p>
        </div>
        <div className="card habit-item text-center p-3 shadow-sm">
          <div className="icon-container mb-2">
            <FaPersonWalking className="icon" />
          </div>
          <h4 className="text-white fw-bold">Steps</h4>
          <p className="days">3 Days</p>
          <p className="info-text">
            Walking daily improves heart health. Keep moving forward!
          </p>
        </div>
        <div className="card habit-item text-center p-3 shadow-sm">
          <div className="icon-container mb-2">
            <CiFaceSmile className="icon" />
          </div>
          <h4 className="text-white fw-bold">Mood</h4>
          <p className="days">7 Days</p>
          <p className="info-text">
            A consistent good mood shows emotional balance. You're doing
            amazing!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
