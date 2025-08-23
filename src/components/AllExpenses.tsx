import React from "react";
import ExpenseRadialBarChart from "./ExpenseRadialBarChart";

const AllExpenses = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col justify-between">
      <div className="font-bold">All expenses</div>
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col justify-center items-center">
          <div>Daily</div>
          <div>$682.20</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Weekly</div>
          <div>$2183.26</div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div>Monthly</div>
          <div>$6638.72</div>
        </div>
      </div>
      <ExpenseRadialBarChart />
    </div>
  );
};

export default AllExpenses;
