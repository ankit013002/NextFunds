import React from "react";
import StatisticsLineChart from "./charts/StatisticsLineChart";

const Statistics = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col">
      <div className="font-bold px-8">Statistics</div>
      <div className="h-full">
        <StatisticsLineChart />
      </div>
    </div>
  );
};

export default Statistics;
