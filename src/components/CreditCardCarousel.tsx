import React from "react";
import CreditCard from "./CreditCard";

const CreditCardCarousel = () => {
  return (
    <div className="carousel w-120">
      <div id="slide1" className="carousel-item w-full flex">
        <div className="flex w-full justify-between items-center gap-x-1">
          <a
            href="#slide4"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❮
          </a>
          <CreditCard />
          <a
            href="#slide2"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item w-full flex">
        <div className="flex w-full justify-between items-center gap-x-1">
          <a
            href="#slide1"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❮
          </a>
          <CreditCard />
          <a
            href="#slide3"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item w-full flex">
        <div className="flex w-full justify-between items-center gap-x-1">
          <a
            href="#slide2"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❮
          </a>
          <CreditCard />
          <a
            href="#slide4"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item w-full flex">
        <div className="flex w-full justify-between items-center gap-x-1">
          <a
            href="#slide3"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❮
          </a>
          <CreditCard />
          <a
            href="#slide1"
            className="btn bg-transparent border-none shadow-none text-[#27b481] hover:text-[#1d8d65]"
          >
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default CreditCardCarousel;
