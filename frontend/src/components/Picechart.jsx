import { Pie, PieChart, ResponsiveContainer, Tooltip, Legend } from "recharts";

const data = [
  { name: "Avg Sleep (hrs)", value: 7, fill: "#f35c5cff" },
  { name: "Water Intake (L)", value: 3, fill: "#4a9de1ff" },
  { name: "Avg Steps (k)", value: 8, fill: "#a47361ff" },
  { name: "Avg Calories", value: 2100, fill: "#89db52ff" },
];

const Piechart = ({ isAnimationActive = true }) => {
  return (
    <div style={{ width: "100%", height: "300px" }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            innerRadius="70%"
            outerRadius="100%"
            cornerRadius={5}
            paddingAngle={3}
            dataKey="value"
            nameKey="name"
            isAnimationActive={isAnimationActive}
          />
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechart;
