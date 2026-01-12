import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
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
        display: "flex",
        justifyContent: "center",
        backgroundColor: "black",
        padding: "20px",
        borderRadius: "12px",
      }}
    >
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid stroke="#333" strokeDasharray="4 4" />
        <XAxis dataKey="date" tick={{ fill: "#fff" }} stroke="#555" />
        <YAxis tick={{ fill: "#fff" }} stroke="#555" />
        <Tooltip
          contentStyle={{
            backgroundColor: "#111",
            border: "1px solid #444",
            color: "#fff",
          }}
          labelStyle={{ color: "#fff" }}
        />
        <Legend wrapperStyle={{ color: "#fff" }} />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#9b5cff"
          strokeWidth={3}
          dot={{ r: 5, fill: "#9b5cff" }}
          activeDot={{ r: 7 }}
        />
      </LineChart>
    </div>
  );
};

export default LineChartBar;
