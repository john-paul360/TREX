import React from "react";

const Rent = () => {
  return (
    <div
      className="rent h-screen max-h-[359px] flex flex-col items-center 
                   justify-center rounded-[16px] bg-no-repeat bg-cover layout my-5 text-center"
    >
      <div className="w-[691px] top-[89px] left-[276px] h-[181px] gap-[25px]">
        <h1 className="font-bold text-[42px] line-height-[100%] text-white">
          Rent a vehicle that gives you the
          <br />
          confidence as you ride.
        </h1>
        <button className="w-[169px] h-[42px] text-[16px] text-bold rounded-[44px] bg-[#dfdfdf] text-black cursor-pointer">
          rent a car now
        </button>
      </div>
    </div>
  );
};

export default Rent;
