import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const DonutChart = ({ score = 72 }) => {
  const data = [
    { name: "Score", value: score },
    { name: "Remaining", value: 100 - score },
  ];
  const COLORS = ["#000000ff", "#969090ff"];

  return (
    <div style={{ width: "100%", height: 260, position: "relative" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius={70}
            outerRadius={100}
            startAngle={90}
            endAngle={-270}
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <h2 style={{ margin: 0, color: "black" }}>{score}</h2>
        <p style={{ margin: 0, color: "#221e1eff" }}>Health Score</p>
      </div>
    </div>
  );
};

export default DonutChart;
