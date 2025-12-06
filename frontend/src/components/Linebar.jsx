import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Linebar = () => {
  const data = [
    { date: "Mon", score: 65 },
    { date: "Tue", score: 72 },
    { date: "Wed", score: 58 },
    { date: "Thu", score: 81 },
    { date: "Fri", score: 76 },
    { date: "Sat", score: 90 },
    { date: "Sun", score: 84 },
  ];

  return (
    <div className="graph-card">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="score"
            stroke="#4A90E2"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Linebar;
