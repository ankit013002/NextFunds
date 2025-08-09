"use client";

import React, { Dispatch, SetStateAction, useState } from "react";
import { Separator } from "./ui/separator";

interface DashBoardHeaderProps {
  menuIndexSelect: number;
  handleTabClick: (i: number) => void;
}

const DashboardHeader = ({
  menuIndexSelect,
  handleTabClick,
}: DashBoardHeaderProps) => {
  const tabs = [
    "Overview",
    "Wallet",
    "Analytics",
    "Transaction",
    "Help",
    "Settings",
    "Report",
  ];

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-y-2">
        <h1 className="text-4xl font-semibold">
          <div>Good morning, Jaylon</div>
        </h1>
        <p className="text-neutral-700">This is your finance report</p>
      </div>
      <div>
        <div className="flex w-full justify-centerpy-2">
          {tabs.map((label, i) => (
            <div key={label}>
              <div className="p-5">
                <a
                  href={`#item${i + 1}`}
                  onClick={() => handleTabClick(i)}
                  aria-current={menuIndexSelect === i ? "page" : undefined}
                  className={`text-sm transition-colors ${
                    menuIndexSelect === i
                      ? "text-[#27b481] font-medium"
                      : "text-black hover:text-[#27b481]"
                  }`}
                >
                  {label}
                </a>
              </div>
              <Separator
                className={`text-sm transition-colors ${
                  menuIndexSelect === i
                    ? "bg-[#27b481] font-medium"
                    : "bg-neutral-200 hover:bg-[#27b481]"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
