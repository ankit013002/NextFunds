import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";

const CreditCard = () => {
  return (
    <div className="relative w-96 h-56 rounded-xl shadow-xl bg-gradient-to-r from-[#27b481] to-[#1d8d65] text-white p-6 flex flex-col justify-between">
      <div className="flex justify-between items-start">
        <div className="w-12 h-9 bg-yellow-400 rounded-md"></div>
        <FaCcVisa className="text-5xl opacity-90" />
      </div>

      <div className="font-mono tracking-widest text-xl">
        **** **** **** 2472
      </div>

      <div className="flex justify-between text-sm">
        <div>
          <div className="uppercase text-xs opacity-70">Card Holder</div>
          <div className="font-semibold">Jaylon Bautista</div>
        </div>
        <div>
          <div className="uppercase text-xs opacity-70">Expires</div>
          <div className="font-semibold">06/28</div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
