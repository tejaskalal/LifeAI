import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const LineChartBar = () => {
  const data = [
    { day: "Day 1", value: 78 },
    { day: "Day 2", value: 89 },
    { day: "Day 3", value: 77 },
    { day: "Day 4", value: 72 },
    { day: "Day 5", value: 91 },
    { day: "Day 6", value: 84 },
    { day: "Day 7", value: 71 },
    { day: "Day 8", value: 79 },
    { day: "Day 9", value: 90 },
    { day: "Day 10", value: 55 },
  ];

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
        <XAxis dataKey="day" tick={{ fill: "#fff" }} stroke="#555" />
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
