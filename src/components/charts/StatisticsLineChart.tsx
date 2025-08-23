"use client";

import React from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { income: 6, expense: 5, date: "Jan" },
  { income: 7, expense: 4, date: "Feb" },
  { income: 8, expense: 6, date: "Mar" },
  { income: 5, expense: 3, date: "Apr" },
  { income: 9, expense: 7, date: "May" },
  { income: 10, expense: 8, date: "Jun" },
  { income: 6, expense: 4, date: "Jul" },
  { income: 7, expense: 5, date: "Aug" },
  { income: 6, expense: 5, date: "Sep" },
  { income: 6, expense: 5, date: "Oct" },
  { income: 8, expense: 6, date: "Nov" },
  { income: 9, expense: 7, date: "Dec" },
];

const StatisticsLineChart = () => {
  return (
    <ResponsiveContainer width="100%" minHeight={300}>
      <LineChart data={data} width={500} height={200}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          dataKey="income"
          stroke="#008100"
          type="monotone"
          strokeWidth="3"
        />
        <Line
          dataKey="expense"
          stroke="#ec7c2a"
          type="monotone"
          strokeWidth="3"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default StatisticsLineChart;
