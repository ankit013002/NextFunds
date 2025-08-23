import React from "react";
import CreditCard from "./CreditCard";
import CreditCardCarousel from "./CreditCardCarousel";
import { FaPlus } from "react-icons/fa";

const WalletDashboard = () => {
  return (
    <div className="grid grid-rows-[auto_1fr] w-full">
      <div className="grid grid-cols-[auto_1fr] p-2 gap-x-2">
        <div className="flex flex-col justify-center items-center gap-y-5 p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full">
          <div className="flex items-center justify-between w-full">
            <h1 className="font-bold text-2xl">Your Cards</h1>
            <button className="btn btn-circle bg-[#27b481] border-none hover:bg-white  hover:text-[#27b481]  flex items-center justify-center">
              <FaPlus />
            </button>
          </div>
          <CreditCardCarousel />
        </div>
        <div className="bg-blue-500"></div>
      </div>
      <div className="bg-red-500"></div>
    </div>
  );
};

export default WalletDashboard;
