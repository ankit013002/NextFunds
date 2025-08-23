import React from "react";

const Advertisement = () => {
  return (
    <div className="card image-full shadow-md rounded-2xl h-full overflow-hidden">
      <figure>
        <img
          className="w-full h-full object-bottom"
          src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop"
          alt="Retirement background"
        />
      </figure>

      <div className="card-body justify-between">
        <h2 className="text-white text-3xl md:text-3xl font-bold leading-tight max-w-xl">
          Secure Your Future with Our
          <br /> Comprehensive Retirement Plans!
        </h2>

        <div className="card-actions">
          <button className="btn bg-white text-[#27b481] border-0 rounded-xl px-5 hover:bg-[#27b481] hover:text-white">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
