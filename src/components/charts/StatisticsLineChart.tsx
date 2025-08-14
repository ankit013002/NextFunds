"use client";

import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { value: 12, date: "2025-06-10" },
  { value: 10, date: "2025-06-9" },
  { value: 6, date: "2025-06-8" },
];

const StatisticsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" minHeight={300}>
      <LineChart data={data} width={500} height={200}>
        <CartesianGrid />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line dataKey="value" type="monotone" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatisticsLineChart;
