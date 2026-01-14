import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import DonutChart from "../dashboardUtils/DonutChart";
import ProfileCard from "../dashboardUtils/ProfileCard";
import LineChartBar from "../dashboardUtils/LineChartBar";

import { BiTachometer } from "react-icons/bi";
import { FaBed, FaWalking } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { FaGlassWater, FaPersonWalking } from "react-icons/fa6";
import { CiFaceSmile } from "react-icons/ci";
import { BsCheck2Circle } from "react-icons/bs";
import { CgDanger } from "react-icons/cg";
import { TbTargetArrow } from "react-icons/tb";

import "./Dashboard.css";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [aiInsights, setAiInsights] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDashboard = async () => {
      const token = localStorage.getItem("token");
      try {
        // dashboard data
        const res = await axios.get("http://localhost:3000/api/dashboard", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setData(res.data);

        // ai insights
        try {
          const aiRes = await axios.post(
            "http://localhost:3000/api/ai/predict",
            {},
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setAiInsights(aiRes.data.aiInsights);
        } catch {
          setAiInsights(null);
        }
      } catch (err) {
        if (err.response?.status === 401) navigate("/login");
      }
    };

    fetchDashboard();
  }, [navigate]);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="container">
      <h1 className="text-dark text-center head-h">Dashboard</h1>
      <p className="text-dark text-center">
        Welcome, <strong>{data.name}</strong>
      </p>

      {/* profile + donut chart */}
      <div style={{ padding: "25px", display: "flex", gap: "25px" }}>
        <div
          style={{
            flex: 1,
            background: "white",
            borderRadius: "10px",
            padding: "20px",
            minHeight: "280px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ flex: 1, textAlign: "center" }}>
            <DonutChart score={data.healthValue ?? 0} />
            <h5 className="text-muted mt-2">Here is your today's score</h5>
          </div>

          <ProfileCard
            name={data.name}
            weight={data.weight ?? "--"}
            height={data.height ?? "--"}
          />
        </div>
      </div>

      {/* activity cards */}
      <div className="activity-card">
        <div className="a-card">
          <div className="a-icon bmi">
            <BiTachometer />
          </div>
          <h3 className="text-white">BMI</h3>
          <h4 className="text-white">{data.bmi ?? "--"}</h4>
          {data.bmi >= 18.5 && data.bmi <= 24.9 ? (
            <h5 className="a-status good">Normal</h5>
          ) : data.bmi < 18.5 ? (
            <h5 className="a-status low">Underweight</h5>
          ) : (
            <h5 className="a-status high">Overweight</h5>
          )}
        </div>

        <div className="a-card">
          <div className="a-icon sleep">
            <FaBed />
          </div>
          <h3 className="text-white">Sleep</h3>
          <h4 className="text-white">{data.sleep ?? "--"} hrs</h4>
          {data.sleep >= 7 ? (
            <h5 className="a-status good">Good</h5>
          ) : (
            <h5 className="a-status low">Low</h5>
          )}
        </div>

        <div className="a-card">
          <div className="a-icon activity">
            <FaWalking />
          </div>
          <h3 className="text-white">Activity</h3>
          <h4 className="text-white">{data.steps ?? "--"}</h4>
          {data.steps >= 8000 ? (
            <h5 className="a-status good">Good</h5>
          ) : (
            <h5 className="a-status neutral">Average</h5>
          )}
        </div>

        <div className="a-card">
          <div className="a-icon hydration">
            <MdOutlineWaterDrop />
          </div>
          <h3 className="text-white">Hydration</h3>
          <h4 className="text-white">{data.waterIntake ?? "--"} L</h4>
          {data.waterIntake >= 2 ? (
            <h5 className="a-status good">Good</h5>
          ) : (
            <h5 className="a-status low">Low</h5>
          )}
        </div>
      </div>

      {/* graph + ai */}
      <div className="graph-card d-flex justify-content-around mt-5 gap-3">
        <div className="graph mt-5">
          {data.healthTrend && data.healthTrend.length > 0 ? (
            <LineChartBar data={data.healthTrend} />
          ) : (
            <p className="text-white text-center">No health history yet</p>
          )}
        </div>

        <div className="insight">
          <h3 className="insight-title">Insights</h3>

          <div className="insight-content">
            {aiInsights ? (
              <>
                {aiInsights.strengths?.map((i, idx) => (
                  <p key={idx} className="insight-item success">
                    <BsCheck2Circle className="me-2" />
                    {i}
                  </p>
                ))}

                {aiInsights.concerns?.map((i, idx) => (
                  <p key={idx} className="insight-item danger">
                    <CgDanger className="me-2" />
                    {i}
                  </p>
                ))}

                {aiInsights.suggestions &&
                  Object.values(aiInsights.suggestions).map((i, idx) => (
                    <p key={idx} className="insight-item suggest">
                      <TbTargetArrow className="me-2" />
                      {i}
                    </p>
                  ))}
              </>
            ) : (
              <p className="insight-empty">
                AI insights will appear after health data submission
              </p>
            )}
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
          <p className="info-text text-light small">
            Staying hydrated boosts energy and keeps your body active.
          </p>
        </div>

        <div className="card habit-item text-center p-3 shadow-sm">
          <div className="icon-container mb-2">
            <FaPersonWalking className="icon" />
          </div>
          <h4 className="text-white fw-bold">Steps</h4>
          <p className="days">3 Days</p>
          <p className="info-text text-light small">
            Daily walking improves heart health and stamina.
          </p>
        </div>

        <div className="card habit-item text-center p-3 shadow-sm">
          <div className="icon-container mb-2">
            <CiFaceSmile className="icon" />
          </div>
          <h4 className="text-white fw-bold">Mood</h4>
          <p className="days">7 Days</p>
          <p className="info-text text-light small">
            A positive mood reflects good mental and emotional balance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
