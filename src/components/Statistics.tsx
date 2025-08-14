import React from "react";
import StatisticsLineChart from "./charts/StatisticsLineChart";

const Statistics = () => {
  return (
    <div>
      <div className="card bg-base-100/0 image-full shadow-sm h-[50vh]">
        <StatisticsLineChart />
        <div className="card-body">
          <h2 className="card-title">Card Title</h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
      Card with no im
    </div>
  );
};

export default Statistics;
