import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const LineChartBar = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-white text-center">No health trend data available</p>
    );
  }

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "900px",
        margin: "auto",
        background: "linear-gradient(145deg, #0f0f0f, #1a1a1a)",
        padding: "24px",
        borderRadius: "16px",
        boxShadow: "0 0 25px rgba(155, 92, 255, 0.25)",
      }}
    >
      <h3
        style={{
          color: "#fff",
          textAlign: "center",
          marginBottom: "16px",
          fontWeight: "600",
          letterSpacing: "0.5px",
        }}
      >
        Health Trend Overview
      </h3>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="healthGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#9b5cff" stopOpacity={0.9} />
              <stop offset="100%" stopColor="#9b5cff" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid stroke="#2b2b2b" strokeDasharray="3 6" />

          <XAxis
            dataKey="date"
            tick={{ fill: "#ccc", fontSize: 12 }}
            stroke="#444"
          />

          <YAxis
            tick={{ fill: "#ccc", fontSize: 12 }}
            stroke="#444"
            allowDecimals={false}
          />

          <Tooltip
            contentStyle={{
              background: "rgba(20, 20, 20, 0.95)",
              border: "1px solid #9b5cff",
              borderRadius: "10px",
              boxShadow: "0 0 15px rgba(155, 92, 255, 0.4)",
              color: "#fff",
            }}
            labelStyle={{ color: "#9b5cff", fontWeight: "bold" }}
            cursor={{ stroke: "#9b5cff", strokeWidth: 1 }}
          />

          <Legend
            verticalAlign="top"
            height={36}
            wrapperStyle={{ color: "#fff" }}
          />

          <Line
            type="monotone"
            dataKey="value"
            stroke="url(#healthGradient)"
            strokeWidth={3}
            dot={{
              r: 4,
              fill: "#9b5cff",
              stroke: "#fff",
              strokeWidth: 1,
            }}
            activeDot={{
              r: 7,
              fill: "#fff",
              stroke: "#9b5cff",
              strokeWidth: 3,
            }}
            animationDuration={1200}
            animationEasing="ease-out"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default LineChartBar;
