"use client";

import DashboardHeader from "@/components/DashboardHeader";
import { Separator } from "@radix-ui/react-select";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuIndexSelect, setMenuIndexSelected] = useState(0);

  const handleTabClick = (i: number) => {
    console.log(i);
    setMenuIndexSelected(i);
    const target = document.getElementById(`item${i + 1}`);
    if (target) target.scrollIntoView({ behavior: "smooth", inline: "center" });
  };

  return (
    <div className="flex flex-col p-10">
      <DashboardHeader
        menuIndexSelect={menuIndexSelect}
        handleTabClick={handleTabClick}
      />
      <div className="carousel">
        <div id="item1" className="carousel-item w-full">
          a
        </div>
        <div id="item2" className="carousel-item w-full">
          b
        </div>
        <div id="item3" className="carousel-item w-full">
          c
        </div>
        <div id="item4" className="carousel-item w-full">
          d
        </div>
      </div>
    </div>
  );
}
