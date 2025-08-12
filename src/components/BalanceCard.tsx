import React from "react";

const BalanceCard = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200 h-full flex flex-col justify-around">
      <div>
        <div className="text-sm text-gray-500">My balance</div>
        <div className="flex items-end gap-2">
          <div className="text-3xl font-bold">$83,172.64</div>
          <div className="text-green-600 text-sm font-medium">+6.7%</div>
          <div className="text-gray-400 text-xs">compare to last month</div>
        </div>
      </div>

      <div className="mt-2 flex items-center gap-2">
        <div className="font-mono tracking-wider text-lg">
          6549 7329 9821 2472
        </div>
        <button className="btn-ghost text-[#27b481] btn hover:bg-[#27b481] hover:text-white btn-xs border-1 border-[#27b481]">
          Copy
        </button>
      </div>

      <div className="flex gap-3 items-end">
        <button className="btn btn-success flex-1 text-white bg-[#27b481] border-[#27b481]">
          Send money
        </button>
        <button className="btn flex-1 bg-neutral-100 border-1 border-neutral-100 text-[#27b481]">
          Request money
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
