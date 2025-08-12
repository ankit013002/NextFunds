import React from "react";
import { FaWallet } from "react-icons/fa";

const IncomeCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col justify-between">
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-green-100 text-green-600">
        <FaWallet size={16} />
      </div>

      <div className="mt-2 text-gray-600">Monthly income</div>

      <div className="text-2xl font-bold">
        $16,281
        <span className="text-gray-400 font-normal">.48</span>
      </div>

      <div className="text-sm">
        <span className="text-green-600 font-medium">+9.8%</span>{" "}
        <span className="text-gray-400">compared to last month</span>
      </div>
    </div>
  );
};

export default IncomeCard;
