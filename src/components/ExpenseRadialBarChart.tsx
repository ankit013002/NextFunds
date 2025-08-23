import React from "react";
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
} from "recharts";

const data = [
  { name: "Food & Health", uv: 35.0, pv: 1200, fill: "#83a6ed" },
  { name: "Entertainment", uv: 15.0, pv: 500, fill: "#8884d8" },
  { name: "Travel", uv: 10.0, pv: 350, fill: "#8dd1e1" },
  { name: "Shopping", uv: 20.0, pv: 700, fill: "#ffc658" },
  { name: "Bills & Utilities", uv: 15.0, pv: 500, fill: "#82ca9d" },
  { name: "Savings", uv: 5.0, pv: 150, fill: "#a4de6c" },
];

const CustomTooltip: React.FC<TooltipProps<number, string>> = ({
  active,
  payload,
}) => {
  if (active && payload && payload.length) {
    const p = payload[0]?.payload as (typeof data)[number] | undefined;
    if (!p) return null;
    return (
      <div
        style={{
          background: "#fff",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 4,
        }}
      >
        <p style={{ margin: 0, fontWeight: 700 }}>{p.name}</p>
        <p style={{ margin: 0 }}>Expense: ${p.pv}</p>
      </div>
    );
  }
  return null;
};

const ExpenseRadialBarChart: React.FC = () => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius="10%"
        outerRadius="80%"
        barSize={10}
        data={data}
      >
        <RadialBar background dataKey="uv" />
        <Tooltip content={<CustomTooltip />} />
        <Legend iconSize={10} layout="horizontal" verticalAlign="bottom" />
      </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default ExpenseRadialBarChart;
